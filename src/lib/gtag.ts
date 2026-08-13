/**
 * Google tag (gtag.js) configuration + helpers for GA4 and Google Ads.
 *
 * Both GA4 and Google Ads run on the same gtag.js library, so we load it once
 * and configure both. Everything is gated behind env vars — if an ID isn't set,
 * that product is simply not configured and nothing tracks. Set these at BUILD
 * time on the VPS (NEXT_PUBLIC_* vars are inlined at build, not runtime):
 *
 *   NEXT_PUBLIC_GA_ID          = G-XXXXXXXXXX      (GA4 Measurement ID)
 *   NEXT_PUBLIC_GOOGLE_ADS_ID  = AW-XXXXXXXXXX     (Google Ads Conversion ID)
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/** True when at least one Google tag is configured — used to gate the loader. */
export const gtagEnabled = Boolean(GA_ID || GOOGLE_ADS_ID);

type GtagArgs =
  | ["js", Date]
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["set", Record<string, unknown>]
  | ["set", string, Record<string, unknown>];

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: GtagArgs) => void;
  }
}

/** Send a GA4 page_view for SPA route changes (initial load is auto-tracked). */
export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("event", "page_view", { page_path: url, send_to: GA_ID });
}

/**
 * User-provided data for Google Ads enhanced conversions. Passing the email/
 * phone a visitor just entered lets Google match the conversion to an ad click
 * more reliably (cookieless). Values go in unhashed — gtag normalizes and
 * SHA-256-hashes them client-side before they leave the browser, provided
 * enhanced conversions are turned ON for the account/action in the Ads UI.
 */
export type EnhancedUserData = { email?: string; phone?: string };

/** Normalize + stage user data for enhanced conversions (gtag hashes it). */
function setUserData(user?: EnhancedUserData) {
  if (!user || typeof window === "undefined" || !window.gtag) return;
  const payload: Record<string, string> = {};
  if (user.email) payload.email = user.email.trim().toLowerCase();
  if (user.phone) {
    // Enhanced conversions want E.164. Best-effort: keep an existing "+" prefix,
    // else assume a US 10-digit number; anything else passes through for gtag.
    const digits = user.phone.replace(/[^\d+]/g, "");
    payload.phone_number = digits.startsWith("+")
      ? digits
      : digits.length === 10
        ? `+1${digits}`
        : digits;
  }
  if (Object.keys(payload).length === 0) return;
  window.gtag("set", "user_data", payload);
}

/**
 * Fire a Google Ads conversion. Call from a success handler (e.g. after a
 * booking or contact-form submit). `conversionLabel` comes from the specific
 * conversion action you create in Google Ads (format: "AbC-D_efG-h12_3-Xyz").
 * Pass `user` to attach enhanced-conversion data (email/phone the user entered).
 */
export function reportConversion(
  conversionLabel: string,
  params?: Record<string, unknown>,
  user?: EnhancedUserData,
) {
  if (typeof window === "undefined" || !window.gtag || !GOOGLE_ADS_ID) return;
  setUserData(user);
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    ...params,
  });
}

/**
 * Same as `reportConversion`, but tolerant of an unset label. Conversion labels
 * live in their own `NEXT_PUBLIC_ADS_LABEL_*` env vars (inlined at build time),
 * so a build without them configured passes `undefined` here — in which case we
 * simply do nothing. Keeps call sites free of `if (label)` boilerplate.
 */
export function reportConversionByLabel(
  label: string | undefined,
  params?: Record<string, unknown>,
  user?: EnhancedUserData,
) {
  if (!label) return;
  reportConversion(label, params, user);
}
