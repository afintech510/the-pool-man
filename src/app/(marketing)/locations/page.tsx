import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Service Area — Eastern Suffolk County",
  description:
    "The Pool Man serves Center Moriches, Moriches, East Moriches, Eastport, Remsenburg, Westhampton, and surrounding Eastern Suffolk County towns.",
};

const towns = [
  { name: "Center Moriches", slug: "center-moriches", primary: true },
  { name: "Moriches", slug: "moriches" },
  { name: "East Moriches", slug: "east-moriches" },
  { name: "Eastport", slug: "eastport" },
  { name: "Remsenburg", slug: "remsenburg" },
  { name: "Westhampton", slug: "westhampton" },
  { name: "Westhampton Beach", slug: "westhampton-beach" },
  { name: "Quogue", slug: "quogue" },
  { name: "Hampton Bays", slug: "hampton-bays" },
  { name: "Shirley", slug: "shirley" },
  { name: "Mastic", slug: "mastic" },
  { name: "Mastic Beach", slug: "mastic-beach" },
  { name: "Manorville", slug: "manorville" },
  { name: "Brookhaven", slug: "brookhaven" },
  { name: "Bellport", slug: "bellport" },
  { name: "Patchogue", slug: "patchogue" },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Proudly serving Eastern Suffolk County"
        description="Based in Center Moriches, we serve homeowners across Eastern Suffolk — from Patchogue to the Hamptons. If you're in our area, we'll come to you."
      />

      <Section>
        <SectionHeader
          title="Towns we serve"
          description="Weekly maintenance, liner installation, heater service, and all pool services available in these communities."
        />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {towns.map((town) => (
            <div
              key={town.slug}
              className={`rounded-lg border p-4 ${
                town.primary
                  ? "border-pool-300 bg-pool-50"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p
                className={`font-medium ${
                  town.primary ? "text-pool-700" : "text-slate-900"
                }`}
              >
                {town.name}
              </p>
              {town.primary && (
                <p className="text-xs text-pool-600 mt-0.5">Home base</p>
              )}
              <div className="mt-2 flex flex-wrap gap-1">
                <Link
                  href="/services"
                  className="text-xs text-slate-500 hover:text-pool-600"
                >
                  Service
                </Link>
                <span className="text-xs text-slate-700">|</span>
                <Link
                  href="/vinyl-liners"
                  className="text-xs text-slate-500 hover:text-pool-600"
                >
                  Liners
                </Link>
                <span className="text-xs text-slate-700">|</span>
                <Link
                  href="/pool-heaters"
                  className="text-xs text-slate-500 hover:text-pool-600"
                >
                  Heaters
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader
            title="Not sure if you're in our area?"
            description="We primarily serve Eastern Suffolk County from Center Moriches. If you're nearby, there's a good chance we can help."
          />
          <p className="mt-6 text-slate-600 leading-relaxed">
            During booking, we check your zip code against our service area. If
            you&apos;re on the edge of our range, reach out anyway — we may be able to
            accommodate you, especially for larger projects like liner
            installations and heater installs.
          </p>
        </div>
      </section>

      <CtaBanner
        title="We come to you"
        description="Free on-site consultations for homeowners in our service area. Book online or call us."
      />
    </>
  );
}
