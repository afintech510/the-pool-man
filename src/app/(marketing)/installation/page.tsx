import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Equipment Installation & Service",
  description:
    "Pool heater, salt water system, pump, chlorine generator, and LED lighting installation and service in Suffolk County. Expert installation by The Pool Man.",
  path: "/installation",
});

export default function InstallationPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Servicing"
        title="Expert pool equipment installation"
        description="From heaters and salt systems to pumps and LED lighting — we install, service, and repair pool equipment the right way. All major brands."
      />

      <Section>
        <SectionHeader
          title="Equipment we install & service"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Pool Heaters" description="Heat pump and gas heater sales, installation, repair, and replacement. Extend your season from April through October." href="/pool-heaters" icon={<span className="text-lg">🔥</span>} />
          <ServiceCard title="Salt Water Systems" description="Salt chlorine generator installation and conversion. Softer water, less chemical handling, lower long-term cost." href="/installation/salt-water-systems" icon={<span className="text-lg">🧂</span>} />
          <ServiceCard title="Pump Installation" description="Variable speed and single speed pump upgrades. Energy-efficient replacements that pay for themselves." href="/installation/pumps" icon={<span className="text-lg">⚙️</span>} />
          <ServiceCard title="Chlorine Generators" description="Automated chlorination for cleaner, easier pool care. We install and service all major brands." href="/installation/salt-water-systems" icon={<span className="text-lg">⚡</span>} />
          <ServiceCard title="LED Lighting" description="Color-changing LED pool and spa lighting. Transform your pool at night with modern, energy-efficient lights." href="/installation/led-lighting" icon={<span className="text-lg">💡</span>} />
          <ServiceCard title="Water Features" description="Spillovers, bubblers, deck jets, and waterfalls. Add movement and sound to your pool." href="/booking" icon={<span className="text-lg">💦</span>} />
        </div>
      </Section>

      <CtaBanner
        title="Need equipment installed or replaced?"
        description="Book a consultation. Kevin will assess your current setup and recommend the right equipment for your pool."
      />
    </>
  );
}
