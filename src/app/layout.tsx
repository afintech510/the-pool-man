import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <JsonLd data={localBusinessJsonLd} />
        {children}
      </body>
    </html>
  );
}
