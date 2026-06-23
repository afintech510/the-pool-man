import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://thepoolman.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Pool Man",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-900 text-slate-100">
        {children}
      </body>
    </html>
  );
}
