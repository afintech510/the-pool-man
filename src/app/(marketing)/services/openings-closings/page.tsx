import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Openings & Closings",
  description:
    "Professional pool opening and winterization services in Eastern Suffolk County. Protect your investment with proper seasonal care.",
  path: "/services/openings-closings",
});

export default function OpeningsClosingsPage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal Services"
        title="Pool openings & winterization"
        description="Start the season right and end it protected. Our seasonal services ensure your pool is ready when you are — and safe through the winter."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader title="Spring opening" />
            <ul className="mt-6 space-y-3">
              {[
                "Remove and fold winter cover; inspect for damage",
                "Reinstall ladders, rails, skimmer baskets, and fittings",
                "Prime and start pump and filter system",
                "Inspect heater, salt cell, and all equipment",
                "Initial chemical treatment and water balancing",
                "Vacuum and brush pool surfaces",
                "System check — confirm everything is running properly",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <span className="text-pool-600 font-bold">+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-pool-50 border border-pool-100 px-4 py-3 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Plan ahead:</span>{" "}
              We ask for about two weeks&apos; notice to get your pool
              swim-ready on time. Book early in spring — opening spots fill
              fast during peak season.
            </p>
          </div>

          <div>
            <SectionHeader title="Fall winterization" />
            <ul className="mt-6 space-y-3">
              {[
                "Lower water level to below skimmer and return lines",
                "Blow out all plumbing lines with compressed air",
                "Add winterizing chemicals to prevent algae and staining",
                "Remove and store ladders, rails, and fittings",
                "Install winter plugs and Gizzmo skimmer guards",
                "Install and secure winter or safety cover",
                "Shut down and drain pump, filter, heater, and chlorinator",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-slate-700">
                  <span className="text-pool-600 font-bold">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader
            title="Why proper seasonal care matters"
            description="Cutting corners on openings and closings leads to freeze damage, algae blooms, equipment failures, and expensive repairs. We do it right so you don't pay for it later."
          />
          <p className="mt-6 text-slate-600 leading-relaxed">
            Every opening and closing follows our full checklist. We blow out
            every line, winterize every piece of equipment, and use
            quality chemicals. When spring comes, your pool opens faster and
            cleaner because it was closed properly.
          </p>
        </div>
      </section>

      <CtaBanner
        title="Schedule your opening or closing"
        description="Book early to lock in your preferred date. Opening and closing spots fill fast during peak season."
      />
    </>
  );
}
