import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Repairs",
  description:
    "Pool equipment repair services in Eastern Suffolk County. Pumps, filters, heaters, plumbing, leaks, and electrical.",
  path: "/services/pool-repairs",
});

export default function PoolRepairsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Services"
        title="Pool repairs"
        description="When something breaks, we fix it. Fast, honest pool equipment repair for Eastern Suffolk County — no unnecessary upsells."
      />

      <Section>
        <SectionHeader
          title="What we repair"
          description="We diagnose and fix the most common pool equipment issues."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Pumps & motors",
              description: "Noisy bearings, loss of prime, seal leaks, capacitor failures. We repair or replace as needed.",
            },
            {
              title: "Filters",
              description: "Sand, cartridge, and DE filter repairs. Broken laterals, cracked tanks, damaged grids, and media replacement.",
            },
            {
              title: "Heaters",
              description: "Gas and heat pump diagnostics and repair. Ignition failures, sensor issues, flow problems, and refrigerant leaks.",
            },
            {
              title: "Plumbing & leaks",
              description: "Underground plumbing repairs, return and skimmer line leaks, union replacements, and valve repairs.",
            },
            {
              title: "Salt systems & chlorinators",
              description: "Cell cleaning, flow sensor issues, board replacements, and system troubleshooting.",
            },
            {
              title: "Electrical",
              description: "Timer replacements, GFCI issues, bonding and grounding, and control panel diagnostics.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Pool equipment acting up?"
        description="Book a service call. We'll diagnose the problem and give you a straight answer on what it takes to fix it."
        buttonText="Schedule a Repair"
      />
    </>
  );
}
