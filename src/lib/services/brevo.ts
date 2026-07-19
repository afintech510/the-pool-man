import { BrevoClient } from "@getbrevo/brevo";

function getClient() {
  return new BrevoClient({ apiKey: process.env.BREVO_API_KEY! });
}

/**
 * The From address for website-originated mail. Sent from a DEDICATED sending
 * subdomain (sender.kevinthepoolman.com) authenticated in Brevo, kept separate
 * from the Microsoft 365 corporate mail on the root domain so sending reputation
 * is isolated. Overridable via env without a redeploy. replyTo is always set to
 * the visitor, so this mailbox never needs to receive mail.
 */
const SENDER = {
  email: process.env.BREVO_SENDER_EMAIL || "noreply@sender.kevinthepoolman.com",
  name: process.env.BREVO_SENDER_NAME || "The Pool Man Website",
};

export async function sendTransactionalEmail(params: {
  to: { email: string; name?: string };
  templateId: number;
  templateParams?: Record<string, string>;
}) {
  const client = getClient();
  return client.transactionalEmails.sendTransacEmail({
    to: [{ email: params.to.email, name: params.to.name }],
    templateId: params.templateId,
    params: params.templateParams,
  });
}

/**
 * Sends a website contact-form note to the office inboxes. Uses raw HTML (no
 * template) and sets replyTo to the visitor so Kevin can reply directly.
 */
export async function sendContactNotification(params: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const client = getClient();
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const rows = [
    ["Name", params.name],
    ["Email", params.email],
    ["Phone", params.phone || "—"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${k}</td><td style="padding:4px 0;font-weight:600">${esc(v)}</td></tr>`,
    )
    .join("");
  const html = `<div style="font-family:system-ui,sans-serif;color:#0f172a">
    <h2 style="margin:0 0 12px">New message from the website</h2>
    <table style="border-collapse:collapse;margin-bottom:16px">${rows}</table>
    <p style="white-space:pre-wrap;line-height:1.5">${esc(params.message)}</p>
  </div>`;

  return client.transactionalEmails.sendTransacEmail({
    sender: SENDER,
    to: [
      { email: "info@kevinthepoolman.com" },
      { email: "office@kevinthepoolman.com" },
    ],
    replyTo: { email: params.email, name: params.name },
    subject: `New website inquiry from ${params.name}`,
    htmlContent: html,
  });
}

export async function upsertContact(params: {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  listIds?: number[];
}) {
  const client = getClient();
  return client.contacts.createContact({
    email: params.email,
    attributes: {
      FIRSTNAME: params.firstName ?? "",
      LASTNAME: params.lastName ?? "",
      SMS: params.phone ?? "",
    },
    listIds: params.listIds,
    updateEnabled: true,
  });
}

export async function removeContactFromList(
  email: string,
  listId: number,
) {
  const client = getClient();
  return client.contacts.removeContactFromList({
    listId,
    body: { emails: [email] },
  });
}
