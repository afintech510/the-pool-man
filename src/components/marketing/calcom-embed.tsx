"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useRef } from "react";

export function CalcomEmbed({
  calLink,
  onBookingSuccessful,
}: {
  calLink: string;
  /**
   * Fired when Cal.com confirms a booking inside the iframe. Cal.com posts a
   * `bookingSuccessful` message out of the frame via postMessage — the ONE
   * in-frame signal the parent can observe (the form submit itself is hidden
   * behind the cross-origin boundary). Use this for a real booking conversion.
   */
  onBookingSuccessful?: () => void;
}) {
  // Keep the latest callback in a ref so the subscription effect can run once
  // (empty deps) without re-subscribing when the parent passes a new closure.
  const onBookingSuccessfulRef = useRef(onBookingSuccessful);
  useEffect(() => {
    onBookingSuccessfulRef.current = onBookingSuccessful;
  }, [onBookingSuccessful]);

  useEffect(() => {
    let cancelled = false;
    let cal: Awaited<ReturnType<typeof getCalApi>> | undefined;
    const handleBookingSuccessful = () => onBookingSuccessfulRef.current?.();

    (async function () {
      cal = await getCalApi();
      if (cancelled) return;
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: handleBookingSuccessful,
      });
    })();

    return () => {
      cancelled = true;
      cal?.("off", {
        action: "bookingSuccessful",
        callback: handleBookingSuccessful,
      });
    };
  }, []);

  return (
    <Cal
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
