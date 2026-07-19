"use client";

import { useEffect } from "react";
import { reportConversionByLabel } from "@/lib/gtag";

/**
 * Fires a Google Ads conversion when a visitor clicks any `tel:` link.
 *
 * Phone calls are a top conversion for a service business, and `tel:` links are
 * scattered across the site (header, footer, CTA banner, emergency page, and
 * more). Rather than wiring each link by hand, this mounts a SINGLE delegated
 * click listener on the document that detects clicks landing inside an
 * `a[href^="tel:"]` — so new phone links anywhere are covered automatically and
 * no link markup or visuals change.
 *
 * No-op unless NEXT_PUBLIC_ADS_LABEL_CALL is set at build time.
 */
export function CallConversion() {
  useEffect(() => {
    const label = process.env.NEXT_PUBLIC_ADS_LABEL_CALL;
    if (!label) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (!link) return;
      reportConversionByLabel(label);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
