"use client";

import { useEffect } from "react";
import { reportConversionByLabel } from "@/lib/gtag";

/**
 * Fires a "reached booking page" Google Ads conversion once on mount.
 *
 * The booking flow runs inside a Cal.com iframe (see calcom-embed.tsx), so the
 * parent page cannot observe the in-iframe booking submit — cross-origin frames
 * don't expose their DOM or form events. This is therefore a page-view PROXY,
 * not a confirmed-booking conversion: it counts visitors who reached the
 * booking page, which is the closest signal we can capture from the parent.
 *
 * No-op unless NEXT_PUBLIC_ADS_LABEL_BOOKING is set at build time.
 */
export function BookingConversion() {
  useEffect(() => {
    reportConversionByLabel(process.env.NEXT_PUBLIC_ADS_LABEL_BOOKING);
  }, []);

  return null;
}
