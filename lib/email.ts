import { esc } from "./sanitize";

interface MailPayload {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

const interestLabels: Record<string, string> = {
  "guided-tour":   "Guided Wildlife Eco Tour",
  "kayak-rental":  "Kayak Rental",
  "canoe-rental":  "Canoe Rental",
  "group-event":   "Group / Private Event",
  "other":         "Other / General Inquiry",
};

function buildHtml(data: MailPayload): string {
  const interest = interestLabels[data.interest] ?? data.interest;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #050f0c; color: #f0ece0; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 2rem auto; background: #0a2e28; border: 1px solid #2ab5a0; border-radius: 12px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0d4a40, #1a7a6e); padding: 2rem; text-align: center; }
    .header h1 { margin: 0; font-size: 1.4rem; color: #f0b429; letter-spacing: 0.08em; }
    .header p { margin: 0.4rem 0 0; color: #5dd8c8; font-size: 0.9rem; }
    .body { padding: 2rem; }
    .field { margin-bottom: 1.2rem; }
    .label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: #5dd8c8; margin-bottom: 0.25rem; }
    .value { color: #f0ece0; font-size: 1rem; }
    .message-box { background: rgba(5,15,12,0.6); border: 1px solid rgba(42,181,160,0.3); border-radius: 8px; padding: 1rem; white-space: pre-wrap; }
    .footer { border-top: 1px solid rgba(42,181,160,0.2); padding: 1rem 2rem; text-align: center; font-size: 0.8rem; color: #8a8070; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Inquiry — Roaming with Roman</h1>
      <p>A visitor has reached out through your website</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${esc(data.name)}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${esc(data.email)}" style="color:#2ab5a0">${esc(data.email)}</a></div>
      </div>
      ${data.phone ? `<div class="field"><div class="label">Phone</div><div class="value">${esc(data.phone)}</div></div>` : ""}
      <div class="field">
        <div class="label">Interested In</div>
        <div class="value">${esc(interest)}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${esc(data.message)}</div>
      </div>
    </div>
    <div class="footer">Roaming with Roman · Florida Springs Eco Tours</div>
  </div>
</body>
</html>`;
}

export async function sendMail(data: MailPayload): Promise<void> {
  const from = process.env["CONTACT_FROM_EMAIL"];
  const to   = process.env["CONTACT_TO_EMAIL"];
  const html = buildHtml(data);
  const subject = `New Inquiry: ${interestLabels[data.interest] ?? data.interest} from ${data.name}`;
  const text = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone ?? "—"}\nInterest: ${interestLabels[data.interest] ?? data.interest}\n\nMessage:\n${data.message}`;

  // 1. Try Resend
  if (process.env["RESEND_API_KEY"] && from && to) {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env["RESEND_API_KEY"]);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject,
      html,
      text,
    });
    if (!error) return;
    console.error("Resend error:", error);
  }

  // 2. Fallback: SMTP / Nodemailer
  if (process.env["SMTP_HOST"] && from && to) {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host:   process.env["SMTP_HOST"],
      port:   Number(process.env["SMTP_PORT"] ?? 587),
      secure: process.env["SMTP_SECURE"] === "true",
      auth:   process.env["SMTP_USER"]
        ? { user: process.env["SMTP_USER"], pass: process.env["SMTP_PASS"] }
        : undefined,
    });
    await transporter.sendMail({ from, to, replyTo: data.email, subject, html, text });
    return;
  }

  // 3. Dev stub
  console.info("[DEV] Email stub — configure RESEND_API_KEY or SMTP_HOST to send:");
  console.info({ subject, to, from, text });
}
