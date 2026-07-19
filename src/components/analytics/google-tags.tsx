"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GA_ID, GOOGLE_ADS_ID, gtagEnabled, pageview } from "@/lib/gtag";

// The gtag.js library only takes one id in its src, but a single load can
// configure multiple products. Prefer the GA4 id; fall back to the Ads id.
const primaryId = GA_ID || GOOGLE_ADS_ID;

/** Fires a GA4 page_view on client-side (SPA) navigations. */
function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID) return;
    const query = searchParams.toString();
    pageview(query ? `${pathname}?${query}` : pathname);
  }, [pathname, searchParams]);

  return null;
}

/**
 * Loads gtag.js once and configures GA4 and/or Google Ads. Renders nothing
 * unless at least one ID is set, so it's a safe no-op in dev and until the
 * production env vars are provided.
 */
export function GoogleTags() {
  if (!gtagEnabled || !primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}', { send_page_view: true });` : ""}
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
        `}
      </Script>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
    </>
  );
}
