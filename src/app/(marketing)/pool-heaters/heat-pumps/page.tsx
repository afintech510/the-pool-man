import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Heat Pumps",
  description:
    "Energy-efficient pool heat pump installation in Eastern Suffolk County. Extend your swim season from April through October with lower operating costs.",
  path: "/pool-heaters/heat-pumps",
});

export default function HeatPumpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Heaters"
        title="Pool heat pumps"
        description="The most energy-efficient way to heat your pool. Heat pumps use electricity to capture warmth from the air — delivering comfortable water temperatures at a fraction of the cost of gas."
      />

      <Section>
        <SectionHeader title="Why heat pumps are the smart choice" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Lower operating costs", description: "Heat pumps use 1 unit of electricity to move 5–6 units of heat. Monthly costs are typically 50–75% lower than gas heaters." },
            { title: "Longer lifespan", description: "Well-maintained heat pumps last 10–15 years — significantly longer than gas heaters. Fewer moving parts means less to go wrong." },
            { title: "Season extension", description: "Start swimming in April, keep going through October. A properly sized heat pump maintains 80–85°F whenever air temps are above 50°F." },
            { title: "Quiet operation", description: "Modern inverter heat pumps are whisper-quiet. No rumbling gas combustion — just a low-speed fan running efficiently." },
            { title: "Environmentally friendly", description: "No combustion, no emissions at the pool. Heat pumps transfer existing heat rather than creating it by burning fuel." },
            { title: "Low maintenance", description: "Annual inspection and cleaning is all that's needed. No gas line concerns, no heat exchanger corrosion from combustion byproducts." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader
            title="Sizing matters"
            description="An undersized heat pump can't keep up. An oversized one wastes money upfront. We size it right."
          />
          <p className="mt-6 text-slate-600 leading-relaxed">
            Heat pump sizing depends on your pool&apos;s surface area, volume, sun
            exposure, wind exposure, and your desired temperature. We calculate
            the right BTU output for your specific pool — not a rough estimate
            based on gallons alone. That&apos;s why the on-site consultation matters.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Interested in a heat pump?"
        description="We'll assess your pool, recommend the right size and model, and give you a clear quote. Free on-site consultation."
      />
    </>
  );
}
