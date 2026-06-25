import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Pool Services",
  description:
    "Comprehensive pool services in Eastern Suffolk County. Weekly maintenance, seasonal openings & closings, pool covers, repairs, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete pool care, done right"
        description="From weekly chemical balancing to equipment repair, we handle every aspect of pool maintenance. Owner-operated quality for Eastern Suffolk County homeowners."
        secondaryCtaText="Call (631) 555-1234"
        secondaryCtaHref="tel:+16315551234"
      />

      <Section>
        <SectionHeader
          title="Pool maintenance & repair"
          description="Keep your pool running smooth all season long."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ServiceCard
            title="Weekly Maintenance"
            description="Consistent, reliable weekly service. Chemical testing and balancing, skimming, vacuuming, brushing, and full equipment checks. Your pool stays swim-ready without you lifting a finger."
            href="/services/weekly-maintenance"
            icon={<span className="text-lg">📅</span>}
          />
          <ServiceCard
            title="Openings & Closings"
            description="Proper seasonal care protects your pool and equipment. Spring opening gets you swimming faster; winterization prevents freeze damage and costly repairs."
            href="/services/openings-closings"
            icon={<span className="text-lg">🔄</span>}
          />
          <ServiceCard
            title="Pool Covers"
            description="Safety covers and winter covers fitted to your pool. We measure, install, and service covers to protect your pool and your family year-round."
            href="/services/pool-covers"
            icon={<span className="text-lg">🛡️</span>}
          />
          <ServiceCard
            title="Pool Repairs"
            description="Pump failures, filter issues, leaks, plumbing, electrical — we diagnose and fix pool equipment problems. Fast, honest service with no unnecessary upsells."
            href="/services/pool-repairs"
            icon={<span className="text-lg">🔧</span>}
          />
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Specialty installations"
            description="High-quality installations backed by hands-on expertise."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceCard
              title="Vinyl Liner Installation"
              description="Precision-measured, custom-cut vinyl liners with zero-wrinkle installation. 20-mil and 28-mil options. The craftsmanship your pool deserves."
              href="/vinyl-liners"
              icon={<span className="text-lg">🎯</span>}
            />
            <ServiceCard
              title="Pool Heaters"
              description="Heat pump and gas heater sales, installation, repair, and replacement. Extend your swim season from spring through fall."
              href="/pool-heaters"
              icon={<span className="text-lg">🔥</span>}
            />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
