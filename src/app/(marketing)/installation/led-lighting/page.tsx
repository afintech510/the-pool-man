import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool LED Lighting Installation",
  description:
    "LED pool and spa lighting installation in Suffolk County. Color-changing lights, energy-efficient upgrades, and new construction lighting packages.",
  path: "/installation/led-lighting",
});

export default function LedLightingPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Servicing"
        title="LED pool &amp; spa lighting"
        description="Transform your pool at night with modern, color-changing LED lights. Energy-efficient, long-lasting, and available for new construction or retrofit into existing pools."
      />

      <Section>
        <SectionHeader title="Lighting options" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Color-changing LED", description: "Cycle through colors or lock in a single hue. Set the mood for parties, holidays, or a relaxing evening swim. Controlled by remote or automation." },
            { title: "White LED upgrades", description: "Replace old incandescent pool lights with bright, efficient white LEDs. Up to 85% energy savings and 50,000+ hour lifespan." },
            { title: "Spa & water feature lights", description: "Illuminate your spa, waterfall, bubblers, or deck jets with dedicated LED fixtures for a complete nighttime ambiance." },
            { title: "Deck & landscape lighting", description: "Extend the lighting around your pool deck, steps, and landscaping for safety and aesthetics." },
            { title: "Automation integration", description: "Connect your pool lights to your automation system (Hayward OmniLogic, Pentair IntelliCenter) for app and schedule control." },
            { title: "Retrofit installation", description: "We can retrofit LED lights into most existing pools without draining. New niches, conduit, and transformer included when needed." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Light up your pool"
        description="Book a consultation and we'll recommend the right lighting package for your pool — new build or retrofit."
      />
    </>
  );
}
