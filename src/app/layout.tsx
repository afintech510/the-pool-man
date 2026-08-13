import type { Metadata } from "next";
import Script from "next/script";
import { Geist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { GoogleTags } from "@/components/analytics/google-tags";
import { CallConversion } from "@/components/analytics/call-conversion";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The Pool Man | Pool Service, Vinyl Liners & Heaters — Center Moriches, NY",
    template: "%s | The Pool Man",
  },
  description:
    "Eastern Suffolk's trusted pool service company. Weekly maintenance, vinyl liner installation, pool heater sales & repair. Serving Center Moriches and surrounding towns.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  // Google Search Console verification. Set GOOGLE_SITE_VERIFICATION to the
  // token from the "HTML tag" verification method to render the meta tag.
  // (DNS verification at Cloudflare is an alternative and needs no code.)
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "The Pool Man | Pool Service, Vinyl Liners & Heaters — Center Moriches, NY",
    description:
      "Eastern Suffolk's trusted pool service company. Weekly maintenance, vinyl liner installation, pool heater sales & repair. Serving Center Moriches and surrounding towns.",
  },
};

// Sitewide LocalBusiness structured data.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  legalName: "Kevin the Pool Man",
  description:
    "Owner-operated pool construction, renovation, weekly maintenance, vinyl liner, and heater service on the South Shore of Eastern Suffolk County, NY.",
  url: SITE_URL,
  telephone: "+1-631-878-7796",
  email: "info@kevinthepoolman.com",
  priceRange: "$$",
  image: `${SITE_URL}/images/logo-new.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "110 Frowein Rd",
    addressLocality: "Center Moriches",
    addressRegion: "NY",
    postalCode: "11934",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7998,
    longitude: -72.7918,
  },
  areaServed: "South Shore, Eastern Suffolk County, NY",
  sameAs: [
    "https://www.facebook.com/kevinthepoolmanconstruction",
    "https://www.instagram.com/kevincherwinski",
    "https://www.bbb.org/us/ny/center-moriches/profile/pool-supplies/the-pool-man-0121-79455",
    "https://moricheschamber.org/member/the-pool-man/",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Moriches Chamber of Commerce",
    url: "https://moricheschamber.org/member/the-pool-man/",
  },
};

// Sitewide Organization structured data (brand-level, complements LocalBusiness).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-new.png`,
  description:
    "Family-owned pool construction and service company serving Center Moriches and Eastern Suffolk County, NY for over 30 years.",
  sameAs: [
    "https://www.facebook.com/kevinthepoolmanconstruction",
    "https://www.instagram.com/kevincherwinski",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-631-878-7796",
    contactType: "customer service",
    areaServed: "US-NY",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <GoogleTags />
        <CallConversion />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Pd9OEpMnB8XRVbi9oteP6A"
          strategy="afterInteractive"
        />
        <JsonLd data={[localBusinessJsonLd, organizationJsonLd]} />
        {children}
      </body>
    </html>
  );
}
