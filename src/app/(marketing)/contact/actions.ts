"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { sendContactNotification } from "@/lib/services/brevo";

export type ContactState = {
  ok: boolean;
  error?: string;
  values?: { name: string; email: string; phone: string; message: string };
  // Honeypot success: we return ok:true to fool the bot, but this flag tells the
  // client NOT to fire a conversion (no real lead was saved).
  bot?: boolean;
  // Enhanced-conversion user data for a genuine lead — the client passes this to
  // gtag so Google can match the conversion to the ad click.
  ec?: { email: string; phone?: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: "", email: "", phone: "", message: "" };

export async function submitContactForm(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";
  // Honeypot — real users leave this empty; bots fill it.
  const trap = (formData.get("company") as string | null)?.trim() ?? "";

  const values = { name, email, phone, message };

  if (trap) return { ok: true, values: EMPTY, bot: true };
  if (!name || !email || !message)
    return { ok: false, error: "Please fill in your name, email, and a message.", values };
  if (!EMAIL_RE.test(email))
    return { ok: false, error: "Please enter a valid email address.", values };

  let captured = false;

  // 1. Persist the lead to Supabase (reliable capture — always configured).
  try {
    const supabase = createAdminClient();
    const [firstName, ...rest] = name.split(" ");
    const { data: contactId, error: rErr } = await supabase.rpc("resolve_contact", {
      p_email: email,
      // Pass null (→ SQL NULL), not "". An empty string is not null, so it slips
      // past the `phone_e164 is not null` partial unique index and collapses every
      // phone-less lead onto one shared contact. p_phone has no SQL default, so it
      // must be sent explicitly — undefined would be omitted by supabase-js, not
      // sent as NULL. The generated type marks it non-null string; cast to keep it.
      p_phone: (phone || null) as string,
      p_first: firstName || undefined,
      p_last: rest.join(" ") || undefined,
    });
    if (rErr) throw rErr;

    const { error: lErr } = await supabase.from("leads").insert({
      contact_id: contactId,
      channel: "web",
      status: "new",
      source: "contact_form",
      metadata: { message, name, phone, page: "/contact" },
    });
    if (lErr) throw lErr;
    captured = true;
  } catch (err) {
    console.error("[contact] Supabase persist failed", err);
  }

  // 2. Email the office — best effort, only if Brevo is configured.
  if (process.env.BREVO_API_KEY) {
    try {
      await sendContactNotification({ name, email, phone, message });
      captured = true;
    } catch (err) {
      console.error("[contact] Brevo send failed", err);
    }
  }

  if (!captured) {
    return {
      ok: false,
      error:
        "Sorry — something went wrong sending your message. Please call (631) 878-7796 or email info@kevinthepoolman.com.",
      values,
    };
  }

  return { ok: true, values: EMPTY, ec: { email, phone: phone || undefined } };
}
