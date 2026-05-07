import { createHmac } from "crypto";

interface RateEntry {
  count: number;
  resetAt: number;
}

const store = new Map<string, RateEntry>();
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

function hashIp(ip: string): string {
  const salt = process.env["RATE_LIMIT_SALT"] ?? "dev-salt";
  return createHmac("sha256", salt).update(ip).digest("hex");
}

export function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const key = hashIp(ip);

  // Purge expired entries
  store.forEach((entry, k) => {
    if (entry.resetAt < now) store.delete(k);
  });

  const entry = store.get(key);
  if (!entry) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true };
}
