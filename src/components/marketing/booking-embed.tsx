"use client";

import { CalcomEmbed } from "@/components/marketing/calcom-embed";
import { reportConversionByLabel } from "@/lib/gtag";

/**
 * The Cal.com embed plus its real booking-conversion wiring.
 *
 * Exists as a client boundary so the server-rendered booking page can pass a
 * (non-serializable) callback into <CalcomEmbed>. When Cal.com confirms a
 * booking, we fire the CONFIRMED-booking conversion — distinct from the softer
 * "reached booking page" proxy fired on mount in <BookingConversion>.
 *
 * No-op unless NEXT_PUBLIC_ADS_LABEL_BOOKING_CONFIRMED is set at build time.
 */
export function BookingEmbed({ calLink }: { calLink: string }) {
  return (
    <CalcomEmbed
      calLink={calLink}
      onBookingSuccessful={() =>
        reportConversionByLabel(process.env.NEXT_PUBLIC_ADS_LABEL_BOOKING_CONFIRMED)
      }
    />
  );
}
