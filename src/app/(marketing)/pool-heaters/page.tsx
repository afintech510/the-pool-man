import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Pool Heaters",
  description:
    "Pool heater sales, installation, repair, and replacement in Eastern Suffolk County. Heat pumps and gas heaters to extend your swim season.",
};

export default function PoolHeatersPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Heaters"
        title="Swim longer, swim warmer"
        description="Don't let cold water cut your season short. We sell, install, and service pool heaters — from efficient heat pumps to powerful gas units. Extend your season from April through October."
      />

      <Section>
        <SectionHeader
          title="Heater options"
          description="We work with the leading brands to find the right heater for your pool size, budget, and usage."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ServiceCard
            title="Heat Pumps"
            description="Energy-efficient electric heat pumps that pull warmth from the air to heat your pool. Lower operating costs, quieter operation, and ideal for extending the season spring through fall."
            href="/pool-heaters/heat-pumps"
            icon={<span className="text-lg">⚡</span>}
          />
          <ServiceCard
            title="Gas Heaters"
            description="Natural gas and propane pool heaters for fast, powerful heating. Best for quick heat-up, spa use, or pools that need to reach temperature fast regardless of air temperature."
            href="/pool-heaters/gas-heaters"
            icon={<span className="text-lg">🔥</span>}
          />
          <ServiceCard
            title="Heater Repair"
            description="Diagnostics and repair for all major heater brands. Ignition failures, sensor issues, flow problems, error codes — we troubleshoot and fix it."
            href="/pool-heaters/heater-repair"
            icon={<span className="text-lg">🔧</span>}
          />
          <ServiceCard
            title="Heater Replacement"
            description="When repair isn't worth it, we'll recommend and install the right replacement. We handle removal, installation, gas/electrical connections, and commissioning."
            href="/pool-heaters/heater-replacement"
            icon={<span className="text-lg">🔄</span>}
          />
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Heat pump vs. gas: which is right for you?"
          />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="py-3 pr-6 font-semibold text-slate-900"></th>
                  <th className="py-3 px-6 font-semibold text-pool-700">Heat Pump</th>
                  <th className="py-3 px-6 font-semibold text-sun-700">Gas Heater</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["Energy source", "Electric (ambient air)", "Natural gas / propane"],
                  ["Operating cost", "Lower ($$)", "Higher ($$$)"],
                  ["Heat-up speed", "Gradual (hours)", "Fast (30–60 min)"],
                  ["Best for", "Season extension", "Quick heat / spas"],
                  ["Works below 50°F?", "Less efficient", "Yes, any temp"],
                  ["Lifespan", "10–15 years", "5–10 years"],
                  ["Noise", "Quiet fan", "Virtually silent"],
                ].map(([label, pump, gas]) => (
                  <tr key={label}>
                    <td className="py-3 pr-6 font-medium text-slate-900">{label}</td>
                    <td className="py-3 px-6 text-slate-600">{pump}</td>
                    <td className="py-3 px-6 text-slate-600">{gas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Not sure which type is right for your pool? We&apos;ll assess your setup and
            recommend the best option during a free consultation.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Ready to extend your swim season?"
        description="Book a free consultation. We'll evaluate your pool, discuss your heating needs, and recommend the right solution."
      />
    </>
  );
}
