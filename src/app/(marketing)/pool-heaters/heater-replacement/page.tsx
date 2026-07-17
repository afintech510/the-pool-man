import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Heater Replacement",
  description:
    "Pool heater replacement in Eastern Suffolk County. We remove your old unit, recommend the right replacement, and handle the full installation.",
  path: "/pool-heaters/heater-replacement",
});

export default function HeaterReplacementPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Heaters"
        title="Pool heater replacement"
        description="When repair isn't worth it, we make the replacement straightforward. We'll recommend the right unit, remove the old one, and install the new heater — plumbing, gas, electrical, and all."
      />

      <Section>
        <SectionHeader title="When to replace vs. repair" />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-semibold text-red-900">Signs it&apos;s time to replace</h3>
            <ul className="mt-4 space-y-2 text-sm text-red-800">
              {[
                "Repair cost exceeds 50% of a new unit",
                "Heat exchanger is cracked or leaking",
                "Unit is 10+ years old with recurring issues",
                "Parts are discontinued or hard to source",
                "Efficiency has dropped noticeably",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span>&#10005;</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-semibold text-green-900">When repair makes sense</h3>
            <ul className="mt-4 space-y-2 text-sm text-green-800">
              {[
                "Unit is under 7 years old",
                "Issue is a single component (sensor, ignitor, board)",
                "Repair cost is well under 50% of replacement",
                "No history of recurring problems",
                "Heat exchanger is still in good condition",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span>&#10003;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-slate-600 text-sm">
          We&apos;ll always give you an honest assessment. If a repair makes sense,
          we&apos;ll say so. We don&apos;t push replacements when they&apos;re not needed.
        </p>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What's included in a replacement" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Assessment", description: "Evaluate your current setup, pool size, and heating needs. Recommend the right replacement." },
              { step: "2", title: "Removal", description: "Disconnect and remove the old heater. Dispose of it properly." },
              { step: "3", title: "Installation", description: "Mount the new unit, connect plumbing, gas (if applicable), and electrical. Commission and test." },
              { step: "4", title: "Verification", description: "Run the heater, verify temperature rise, check for leaks, and walk you through the controls." },
            ].map((item) => (
              <div key={item.step}>
                <div className="h-8 w-8 rounded-full bg-pool-50 text-pool-700 flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a heater replacement?"
        description="Book a consultation. We'll assess your setup, recommend the right unit, and give you a clear, all-in quote."
      />
    </>
  );
}
