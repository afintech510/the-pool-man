import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Weekly Pool Maintenance",
  description:
    "Reliable weekly pool maintenance in Center Moriches and Eastern Suffolk County. Chemical balancing, skimming, vacuuming, and equipment checks.",
};

const included = [
  {
    title: "Chemical testing & balancing",
    description:
      "Professional water testing every visit. We balance chlorine, pH, alkalinity, calcium hardness, and cyanuric acid to keep your water safe and clear.",
  },
  {
    title: "Skimming & vacuuming",
    description:
      "Surface debris removal and thorough vacuuming to keep your pool clean and your filter running efficiently.",
  },
  {
    title: "Brushing walls & tile",
    description:
      "Weekly brushing prevents algae buildup on walls, steps, and the waterline tile. Keeps your pool looking its best.",
  },
  {
    title: "Equipment check",
    description:
      "Pump, filter, heater, and plumbing inspected every visit. We catch small problems before they become expensive repairs.",
  },
  {
    title: "Filter maintenance",
    description:
      "Filter pressure monitoring, backwashing, and cleaning on schedule to maintain proper flow and filtration.",
  },
  {
    title: "Digital service reports",
    description:
      "Every visit logged with readings, dosing, and photos via Skimmer. You always know what was done and how your pool is trending.",
  },
];

export default function WeeklyMaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Services"
        title="Weekly pool maintenance"
        description="Crystal-clear water, every week, without the hassle. Our reliable weekly service keeps your pool swim-ready so you can enjoy it — not work on it."
      />

      <Section>
        <SectionHeader
          title="What's included every week"
          description="Each visit covers the full checklist. No cutting corners, no skipped visits."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {included.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why homeowners switch to us"
            description="We hear the same reasons from new clients every season."
          />
          <div className="mt-8 space-y-4 max-w-2xl">
            {[
              "Consistent schedule — same day, same tech, every week",
              "Owner-operated — Kevin oversees every account",
              "Digital reports — see exactly what was done after each visit",
              "No contracts — month-to-month service, cancel anytime",
              "Local — we live and work in Eastern Suffolk",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <svg className="h-5 w-5 text-pool-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start weekly service"
        description="Book a free consultation and we'll assess your pool, discuss your needs, and set up a weekly schedule that works for you."
      />
    </>
  );
}
