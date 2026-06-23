import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Gas Pool Heaters",
  description:
    "Natural gas and propane pool heater installation in Eastern Suffolk County. Fast, powerful heating for pools and spas.",
};

export default function GasHeatersPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Heaters"
        title="Gas pool heaters"
        description="When you need fast, powerful heat regardless of air temperature, gas is the answer. Natural gas and propane heaters bring your pool to temperature in under an hour."
      />

      <Section>
        <SectionHeader title="When gas makes sense" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { title: "Quick heat-up", description: "Gas heaters can raise pool temperature 1–2°F per hour. Swim on demand — even on a cool day with short notice." },
            { title: "Spas and hot tubs", description: "Gas is the standard for spas. Fast heat-up to 104°F and the ability to maintain high temps in any weather." },
            { title: "Cold-weather use", description: "Gas heaters work at full capacity regardless of air temperature, unlike heat pumps which lose efficiency below 50°F." },
            { title: "Weekend/occasional use", description: "If you only heat your pool for weekends or events, gas heaters are cost-effective because they heat quickly and shut off." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader title="Installation considerations" />
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-pool-400 font-bold flex-shrink-0">1.</span>
              <span><strong>Gas supply</strong> — natural gas line or propane tank must be sized for the heater&apos;s BTU demand. We coordinate with your gas provider if needed.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pool-400 font-bold flex-shrink-0">2.</span>
              <span><strong>Ventilation</strong> — proper clearance and exhaust venting per manufacturer specs and local code.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pool-400 font-bold flex-shrink-0">3.</span>
              <span><strong>Plumbing integration</strong> — the heater is plumbed into your existing equipment pad, downstream of the filter and upstream of any salt cell.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-pool-400 font-bold flex-shrink-0">4.</span>
              <span><strong>Permits</strong> — gas appliance installations may require local permits. We handle the paperwork.</span>
            </li>
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Need a gas heater?"
        description="We'll check your gas supply, size the right unit, and handle the full installation. Book a free consultation."
      />
    </>
  );
}
