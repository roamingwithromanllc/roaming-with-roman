export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sanitize } from "@/lib/sanitize";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendMail } from "@/lib/email";

function json(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(req: NextRequest) {
  // 1. Content-Type check
  const ct = req.headers.get("content-type") ?? "";
  if (!ct.includes("application/json")) {
    return json({ error: "Invalid content type" }, 415);
  }

  // 2. CSRF — check Origin header
  const origin = req.headers.get("origin") ?? "";
  const allowed = process.env["ALLOWED_ORIGIN"] ?? "";
  if (allowed && origin !== allowed) {
    return json({ error: "Forbidden" }, 403);
  }

  // 3. Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const { allowed: ok, retryAfter } = checkRateLimit(ip);
  if (!ok) {
    const res = json({ error: "Too many requests. Please wait and try again." }, 429);
    res.headers.set("Retry-After", String(retryAfter));
    return res;
  }

  // 4. Parse JSON
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  // 5. Validate with Zod
  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    const first = result.error.issues[0];
    return json({ error: first?.message ?? "Validation error" }, 422);
  }

  const data = result.data;

  // 6. Honeypot
  if (data.website && data.website.length > 0) {
    return json({ success: true }, 200); // silent reject
  }

  // 7. Sanitize
  const payload = {
    name:     sanitize(data.name),
    email:    sanitize(data.email),
    phone:    data.phone ? sanitize(data.phone) : undefined,
    interest: data.interest,
    message:  sanitize(data.message),
  };

  // 8. Send email
  try {
    await sendMail(payload);
  } catch (err) {
    console.error("sendMail failed:", err);
    return json({ error: "Failed to send message. Please try again." }, 500);
  }

  return json({ success: true }, 200);
}
