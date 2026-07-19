import type { Metadata } from "next";

/**
 * Canonical production host. This is the www apex the site cuts over to when it
 * migrates off Wix. All canonical/OpenGraph URLs resolve against this via the
 * root layout's `metadataBase`. (apex->www and http->https normalization is
 * handled at Cloudflare, NOT here.)
 */
export const SITE_URL = "https://www.kevinthepoolman.com";
export const SITE_NAME = "The Pool Man";

type PageSeoInput = {
  /** Page <title> (the "%s" in the root layout title template). */
  title: string;
  /** Meta description — unique, keyword-relevant, non-empty. */
  description: string;
  /** Root-relative path, e.g. "/faq". Used for the self-referencing canonical. */
  path: string;
};

/**
 * Builds page-level Metadata with a self-referencing canonical (resolved against
 * `metadataBase`) and matching OpenGraph tags. Keeps every page consistent so we
 * never ship a page without a canonical or OG block again.
 */
export function pageSeo({ title, description, path }: PageSeoInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
  };
}

/**
 * Human-readable breadcrumb labels keyed by full root-relative path. Falls back
 * to a title-cased segment when a path isn't listed, so new routes still render.
 */
const BREADCRUMB_LABELS: Record<string, string> = {
  "/blog": "Blog",
  "/booking": "Book a Consultation",
  "/construction": "Construction",
  "/contact": "Contact",
  "/emergency": "Emergency",
  "/faq": "FAQ",
  "/installation": "Installation",
  "/installation/led-lighting": "LED Lighting",
  "/installation/pumps": "Pump Installations",
  "/installation/salt-water-systems": "Salt Water Systems",
  "/locations": "Service Areas",
  "/our-work": "Our Work",
  "/pool-heaters": "Pool Heaters",
  "/pool-heaters/heater-installation": "Heater Installation",
  "/pool-heaters/gas-heaters": "Gas Heaters",
  "/pool-heaters/heat-pumps": "Heat Pumps",
  "/pool-heaters/heater-repair": "Heater Repair",
  "/pool-heaters/heater-replacement": "Heater Replacement",
  "/services": "Services",
  "/services/openings-closings": "Openings & Closings",
  "/services/pool-covers": "Pool Covers",
  "/services/pool-repairs": "Pool Repairs",
  "/services/weekly-maintenance": "Weekly Maintenance",
  "/shop": "Shop",
  "/testimonials": "Customer Reviews",
  "/vinyl-liners": "Vinyl Liners",
};

function titleCaseSegment(segment: string): string {
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Builds BreadcrumbList JSON-LD for a page path. One crumb per path segment,
 * "Home" first, each resolving its cumulative sub-path to a human label. Every
 * intermediate segment on this site maps to a real page, so each crumb is a
 * valid link. Returns null for the homepage — a single-item breadcrumb is not
 * meaningful and Google discourages it.
 */
export function breadcrumbJsonLd(path: string) {
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const itemListElement: object[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
  ];

  let cumulative = "";
  segments.forEach((segment, index) => {
    cumulative += `/${segment}`;
    itemListElement.push({
      "@type": "ListItem",
      position: index + 2,
      name: BREADCRUMB_LABELS[cumulative] ?? titleCaseSegment(segment),
      item: `${SITE_URL}${cumulative}`,
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

/**
 * Builds Service JSON-LD for an individual service page, referencing the
 * sitewide LocalBusiness node by @id rather than redefining it.
 */
export function serviceJsonLd({
  serviceType,
  description,
}: {
  serviceType: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "State", name: "New York" },
    description,
  };
}
