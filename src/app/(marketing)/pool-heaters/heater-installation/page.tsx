import { pageSeo, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { WaveBackground } from "@/components/ui/wave-bg";

export const metadata = {
  ...pageSeo({
    title:
      "Pool Heater Installation in Suffolk County, NY | Heat Pumps & Gas Heaters",
    description:
      "Extend your Long Island pool season with The Pool Man. Heat pump and gas pool heater installation, replacement, and repair across Center Moriches and Eastern Suffolk County. Book a free on-site consultation.",
    path: "/pool-heaters/heater-installation",
  }),
  keywords:
    "pool heater installation, heat pump pool heater, gas pool heater, pool heater installation Suffolk County, pool heater cost Long Island, season extension, Center Moriches",
};

// Source of truth for the on-page FAQ — reused by the FAQPage schema so the
// marked-up questions always match the visible copy.
const heaterFaqs = [
  {
    q: "Gas heater vs. heat pump — which should I get?",
    a: "It depends on how you use your pool. A heat pump is the efficient anchor for extending the season — it pulls heat from the air and costs less to run over a long season, but heats gradually. A gas heater heats fast and is ideal for spas or 'heat it now' use, but costs more per hour to run and needs a gas supply. During the on-site visit, Kevin will recommend the right fit for how you actually swim.",
  },
  {
    q: "How much does a pool heater cost on Long Island?",
    a: "The total depends on the heater type, your pool's size and volume, any gas line or electrical work needed, placement on the equipment pad, and the brand. Because those factors vary from yard to yard, we give you an exact, written quote after the on-site assessment rather than a guess over the phone.",
  },
  {
    q: "How many extra weeks of swimming will a heater add?",
    a: "A heater comfortably adds several weeks on both ends of the season — swimming earlier in spring and later into fall — turning a short Long Island summer into a much longer usable season. The exact gain depends on the heater, your target temperature, and how much wind and shade your pool gets.",
  },
  {
    q: "How long does a heater installation take?",
    a: "Most straightforward installations are completed in a day once the unit is on hand and any gas or electrical work is prepared. Jobs that need a new gas line, an electrical upgrade for a heat pump, or equipment-pad changes can take longer — we scope that during the assessment so there are no surprises.",
  },
  {
    q: "Do I need a permit for a pool heater in Suffolk County?",
    a: "Permit and inspection requirements vary by township, especially for gas and electrical work. We handle permits and code-compliant connections where they're required so the install is done right and passes inspection.",
  },
  {
    q: "Can you replace or repair my existing heater?",
    a: "Yes. We replace failed or inefficient units and repair heat pumps and gas heaters across all major brands. If a repair is the smart call, we'll tell you — we don't push a replacement when a fix makes sense.",
  },
  {
    q: "Will a heat pump work in spring and fall here?",
    a: "Yes — the spring and fall shoulder seasons are exactly where a heat pump shines on Eastern Long Island. It's most efficient in the milder air temperatures of those months, which is when most homeowners want those extra swimming weeks.",
  },
];

const heaterInstallationJsonLd = [
  serviceJsonLd({
    serviceType: "Pool Heater Installation",
    description:
      "Heat pump and gas pool heater installation, sizing, replacement, and repair across Center Moriches and Eastern Suffolk County, NY.",
  }),
  breadcrumbJsonLd("/pool-heaters/heater-installation"),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: heaterFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

export default function HeaterInstallationPage() {
  return (
    <>
      <JsonLd data={heaterInstallationJsonLd} />

      {/* Hero — season-extension hook */}
      <section className="relative bg-pool-950 py-16 sm:py-20 overflow-hidden">
        <WaveBackground />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
              Pool Heater Installation
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Pool heater installation in Suffolk County, NY — heat pumps &amp;
              gas heaters
            </h1>
            <p className="mt-4 text-lg text-pool-200 leading-relaxed max-w-2xl">
              Get more out of your pool season — and your spa. Swim from spring
              through fall with comfortable water on demand instead of a short
              summer window. We install, replace, and repair heat pump and gas
              pool heaters across Center Moriches and Eastern Suffolk County.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/booking" size="lg">
                Book a Free On-Site Consultation
              </ButtonLink>
              <a
                href="tel:+16318787796"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Call (631) 878-7796
              </a>
            </div>
            <p className="mt-4 text-sm text-pool-300">
              Owner-led on-site assessment &middot; Exact written quote &middot;
              All major brands
            </p>
          </div>
        </Container>
      </section>

      {/* The 17-week problem */}
      <Section>
        <SectionHeader
          title="Stop settling for a 17-week pool season"
          description="An unheated Long Island pool is only truly comfortable for part of the summer. A heater changes that."
        />
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600 leading-relaxed">
          <p>
            Here on the South Shore, the water is warm enough to enjoy for a
            surprisingly narrow window. You wait all spring for it to warm up,
            get a few good months, then watch it cool off before Labor Day is
            even behind you.
          </p>
          <p>
            A properly sized heater adds weeks on both ends — swim earlier in
            the spring and later into the fall. And on cool evenings or a chilly
            spa night, you get warm water on demand instead of waiting on the
            weather. The right heater depends on how you want to use your pool,
            which is exactly what we sort out next.
          </p>
        </div>
      </Section>

      {/* Which heater is right for you */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Choose Your Heater"
            title="Which pool heater is right for you?"
            description="Two great options for two different priorities. Here's the honest breakdown."
          />
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <p className="text-xs font-semibold text-pool-600 uppercase tracking-wide">
                Lead option — season extension
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                Heat Pump
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A heat pump pulls warmth from the air to heat your pool, which
                makes it most efficient in the spring and fall shoulder
                temperatures — exactly when you want those extra weeks.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-pool-600">&#10003;</span> Best for
                  extending the season efficiently
                </li>
                <li className="flex gap-2">
                  <span className="text-pool-600">&#10003;</span> Lower running
                  cost over a long season
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">&#8211;</span> Heats
                  gradually and needs adequate electrical service
                </li>
              </ul>
              <Link
                href="/pool-heaters/heat-pumps"
                className="mt-4 inline-block text-sm font-medium text-pool-600 hover:text-pool-700"
              >
                More on heat pumps &rarr;
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <p className="text-xs font-semibold text-sun-600 uppercase tracking-wide">
                Fast heat / spa / on-demand
              </p>
              <h3 className="mt-1 text-2xl font-bold text-slate-900">
                Gas Heater
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">
                A gas heater heats fast regardless of the air temperature —
                ideal for spas and for homeowners who want to heat it now
                rather than run a heater constantly.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-pool-600">&#10003;</span> Fastest
                  heat-up, great for spas and quick sessions
                </li>
                <li className="flex gap-2">
                  <span className="text-pool-600">&#10003;</span> Works in any
                  temperature
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-400">&#8211;</span> Higher run
                  cost; needs a gas supply (natural gas or propane)
                </li>
              </ul>
              <Link
                href="/pool-heaters/gas-heaters"
                className="mt-4 inline-block text-sm font-medium text-pool-600 hover:text-pool-700"
              >
                More on gas heaters &rarr;
              </Link>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900">
              Our honest recommendation:
            </span>{" "}
            for most Long Island homeowners who want a longer season, a heat
            pump is the smart anchor. If fast spa heat or on-demand warmth is
            your priority, gas is the answer. We&apos;ll confirm the right fit
            during your on-site visit.
          </p>
        </div>
      </section>

      {/* Services */}
      <Section>
        <SectionHeader
          eyebrow="Pool Heater Services"
          title="Install, replace, repair, and size"
          description="Everything for your pool heater, from the first BTU calculation to the final walkthrough."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ServiceCard
            title="Heater Installation"
            description="A new heater sized to your pool and how you use it. Plumbing, gas or electrical, and commissioning — done to code."
            href="/booking"
            icon={<span className="text-lg">🔥</span>}
          />
          <ServiceCard
            title="Heater Replacement"
            description="Swap a failed or inefficient unit. We remove the old heater, recommend the right replacement, and install it."
            href="/pool-heaters/heater-replacement"
            icon={<span className="text-lg">🔄</span>}
          />
          <ServiceCard
            title="Heater Repair"
            description="Diagnostics and repair across all major brands — ignition failures, sensor issues, flow problems, and error codes."
            href="/pool-heaters/heater-repair"
            icon={<span className="text-lg">🔧</span>}
          />
          <ServiceCard
            title="Sizing & Assessment"
            description="BTU sizing, electrical and gas checks, and equipment-pad fit — so the heater you buy is the right one."
            href="/booking"
            icon={<span className="text-lg">📐</span>}
          />
        </div>
      </Section>

      {/* Process */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="How we size &amp; install your heater"
            description="A short, transparent process that starts with getting the sizing right — because an undersized heater never keeps up, and an oversized one wastes money."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "On-site assessment",
                description:
                  "We look at pool size and volume, how you want to use it, gas availability or electrical capacity, and equipment-pad space and placement.",
              },
              {
                step: "2",
                title: "Recommendation & quote",
                description:
                  "The right type and size for your goal and budget, in a clear written quote. No pressure, no guesswork.",
              },
              {
                step: "3",
                title: "Permits & install",
                description:
                  "We handle permits and inspections where required, then install professionally — gas and electrical done to code.",
              },
              {
                step: "4",
                title: "Startup & walkthrough",
                description:
                  "We start the unit, verify it's heating correctly, and show you how to run it before we leave.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="h-10 w-10 rounded-full bg-pool-600 text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Eastern Long Island */}
      <Section>
        <SectionHeader
          eyebrow="Local Expertise"
          title="Built for Eastern Long Island conditions"
        />
        <div className="mt-6 max-w-3xl space-y-4 text-slate-600 leading-relaxed">
          <p>
            Our climate is the whole reason heaters pay off here. The
            spring-and-fall shoulder window is when a heat pump does its best
            work, turning cool-but-close weather into real swimming days.
          </p>
          <p>
            Gas availability varies across the South Shore — some properties
            have natural gas, others run on propane — and heat pumps depend on
            your home&apos;s electrical service. Equipment-pad layouts on
            typical Eastern Suffolk properties also affect placement. Knowing
            all of this locally is what lets us size and site the heater right
            the first time.
          </p>
        </div>
      </Section>

      {/* Cost */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader title="How much does a pool heater cost?" />
          <p className="mt-6 text-slate-600 leading-relaxed">
            Rather than quote a number that turns out to be wrong, here&apos;s
            what actually drives the price:
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex gap-3">
              <span className="text-pool-600 font-bold">+</span> Heater type
              (heat pump vs. gas)
            </li>
            <li className="flex gap-3">
              <span className="text-pool-600 font-bold">+</span> Pool size and
              water volume
            </li>
            <li className="flex gap-3">
              <span className="text-pool-600 font-bold">+</span> Any new gas
              line or electrical work required
            </li>
            <li className="flex gap-3">
              <span className="text-pool-600 font-bold">+</span> Placement on
              the equipment pad
            </li>
            <li className="flex gap-3">
              <span className="text-pool-600 font-bold">+</span> Brand and unit
              capacity
            </li>
          </ul>
          <p className="mt-6 text-slate-600 leading-relaxed">
            The on-site visit produces your exact number — and it&apos;s worth
            weighing against what you get back: more usable weeks in the water
            every single year.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <Section>
        <SectionHeader
          eyebrow="Why The Pool Man"
          title="Owner-led, local, and done to code"
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Local install experience",
              description:
                "Years of heater installs across Suffolk County. We know the properties, the townships, and the shoulder-season math.",
            },
            {
              title: "Code-compliant work",
              description:
                "Permits, inspections, and gas/electrical connections handled correctly so your install passes and stays safe.",
            },
            {
              title: "All major brands",
              description:
                "We install and service heaters from all the leading manufacturers and match the unit to your pool — not to a sales quota.",
            },
            {
              title: "You deal with Kevin",
              description:
                "The owner does the on-site assessment himself. No middlemen between you and the person accountable for the work.",
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

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Pool heater FAQs" />
          <div className="mt-8 max-w-3xl space-y-6">
            {heaterFaqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we serve */}
      <Section>
        <SectionHeader
          title="Heater installation across Eastern Suffolk County"
          description="Based in Center Moriches and serving the surrounding South Shore towns."
        />
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { name: "Center Moriches", href: "/locations/center-moriches" },
            { name: "Moriches", href: "/locations/moriches" },
            { name: "East Moriches", href: "/locations/east-moriches" },
            { name: "Eastport", href: "/locations/eastport" },
          ].map((town) => (
            <Link
              key={town.href}
              href={town.href}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-700 hover:border-pool-300 hover:text-pool-700 transition-colors"
            >
              {town.name}
            </Link>
          ))}
          <Link
            href="/locations"
            className="rounded-full border border-pool-200 bg-pool-50 px-4 py-1.5 text-sm font-medium text-pool-700 hover:bg-pool-100 transition-colors"
          >
            See all service areas &rarr;
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Book a free on-site heater consultation"
        description="Let Kevin size your heater correctly and give you an exact quote. Book an on-site visit and we'll confirm the right unit for how you actually use your pool."
      />
    </>
  );
}
