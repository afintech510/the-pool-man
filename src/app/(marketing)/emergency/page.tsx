import { pageSeo, breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export const metadata = {
  ...pageSeo({
    title: "Emergency Pool Services | Same-Day Pool Repair Suffolk County",
    description:
      "Emergency pool repair, pool cleaning, filter cleaning, heater repair, and pool doctor services in Suffolk County. Call (631) 878-7796 for fast response.",
    path: "/emergency",
  }),
  keywords:
    "emergency pool repair, pool doctor service, same day pool cleaning, filter cleaning near me, pool heater repair emergency, green pool cleanup Suffolk County",
};

const emergencyServices = [
  {
    name: "Pool Doctor Service",
    description:
      "Your pool is green, cloudy, or has a problem you can't diagnose? Our pool doctor service is a full diagnostic visit. We test the water, inspect the equipment, identify the issue, and get your pool back on track.",
    includes: [
      "Complete water chemistry analysis",
      "Equipment inspection (pump, filter, heater, salt cell)",
      "Problem diagnosis and treatment plan",
      "Chemical shock treatment if needed",
    ],
    urgency: "Same-week",
  },
  {
    name: "Emergency Pool Cleaning",
    description:
      "Pool turned green overnight? Algae bloom after a storm? We come out fast, shock the pool, vacuum, brush, and get your water clear again. One visit or a multi-day recovery depending on severity.",
    includes: [
      "Debris removal and vacuuming",
      "Heavy shock treatment",
      "Algaecide application",
      "Filter cleaning / backwash",
      "Follow-up water test",
    ],
    urgency: "Fast response",
  },
  {
    name: "Filter Cleaning & Repair",
    description:
      "Low flow, high pressure, cloudy water — your filter is struggling. We clean, repair, or replace sand, cartridge, and DE filters. Includes media replacement if needed.",
    includes: [
      "Filter disassembly and inspection",
      "Cartridge cleaning or replacement",
      "Sand / DE media change",
      "Lateral and grid inspection",
      "Pressure and flow verification",
    ],
    urgency: "Same-week",
  },
  {
    name: "Heater Repair",
    description:
      "Heater won't fire? Not reaching temperature? Error codes? We diagnose and repair heat pumps and gas heaters from all major brands. Get your pool warm again fast.",
    includes: [
      "Error code diagnosis",
      "Ignition and flame sensor repair",
      "Flow switch and pressure switch testing",
      "Thermostat and control board repair",
      "Gas connection and ventilation check",
    ],
    urgency: "Fast response",
  },
  {
    name: "Pump Failure / Leak Repair",
    description:
      "Pump won't prime? Motor is dead? Active leak? We respond quickly to pump failures and plumbing leaks to prevent equipment damage and water loss.",
    includes: [
      "Motor replacement",
      "Seal and gasket repair",
      "Plumbing leak detection and repair",
      "Priming and air leak troubleshooting",
    ],
    urgency: "Fast response",
  },
  {
    name: "Storm Damage Cleanup",
    description:
      "After a major storm, your pool can be filled with debris, your cover can be damaged, and your equipment can be compromised. We handle the full cleanup and get you back to normal.",
    includes: [
      "Heavy debris removal",
      "Equipment inspection and restart",
      "Water chemistry restoration",
      "Cover repair or replacement",
    ],
    urgency: "Post-storm",
  },
];

// Source of truth for the on-page FAQ — reused by the FAQPage schema. Written
// to capture "emergency pool repair near me" and town-level urgent searches.
const emergencyFaqs = [
  {
    q: "Do you offer emergency pool repair near me in Suffolk County?",
    a: "Yes. We're based in Center Moriches and respond fast to emergency pool calls across Eastern Suffolk County's South Shore — including Moriches, East Moriches, Eastport, and the surrounding towns. Call (631) 878-7796 and we'll get to you as quickly as we can.",
  },
  {
    q: "My pool turned green overnight — how fast can you help?",
    a: "Green pools are one of our most common emergency calls. We respond fast, shock and treat the water, vacuum and brush, and clean the filter. Depending on how severe the algae bloom is, it's either a single visit or a short multi-day recovery.",
  },
  {
    q: "I have a pool leak — what should I do?",
    a: "If you're losing water fast, call us right away at (631) 878-7796. We do leak detection and repair on plumbing and equipment. The sooner we catch it, the less risk of equipment damage and wasted water.",
  },
  {
    q: "When should I call for emergency service instead of waiting?",
    a: "Call immediately for an active leak, a smoking or sparking pump, a gas smell near the heater, or any electrical hazard. Call the same day for a green pool, a pump that won't start, a dead heater, or post-storm damage. The longer these sit, the more they cost to fix.",
  },
];

const emergencyJsonLd = [
  serviceJsonLd({
    serviceType: "Emergency Pool Service",
    description:
      "Fast-response emergency pool service — green pool recovery, filter and heater repair, pump failures, leaks, and storm cleanup — across Center Moriches and Eastern Suffolk County, NY.",
  }),
  breadcrumbJsonLd("/emergency"),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: emergencyFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  },
];

export default function EmergencyPage() {
  return (
    <>
      <JsonLd data={emergencyJsonLd} />
      {/* Urgent hero */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-pool-900 py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-sun-300 uppercase tracking-wide">
              Emergency Pool Services
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Pool emergency?{" "}
              <span className="text-sun-400">We&apos;re on it.</span>
            </h1>
            <p className="mt-5 text-lg text-red-100 leading-relaxed">
              Green pool, equipment failure, active leak, heater down — don&apos;t
              wait for your regular service day. Call Kevin directly for fast
              response emergency pool repair near you in Suffolk County.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+16318787796"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-lg"
              >
                Call Now: (631) 878-7796
              </a>
              <ButtonLink
                href="/booking"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Book Online
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <Section>
        <SectionHeader
          title="Emergency & urgent services"
          description="We handle pool emergencies that can't wait for your next scheduled visit."
        />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {emergencyServices.map((service) => (
            <div
              key={service.name}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-pool-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-bold text-slate-900">
                  {service.name}
                </h3>
                <span className="flex-shrink-0 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                  {service.urgency}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Includes
                </p>
                <ul className="space-y-1">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm text-slate-700"
                    >
                      <span className="text-pool-600 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <a
                  href="tel:+16318787796"
                  className="text-sm font-semibold text-pool-600 hover:text-pool-700"
                >
                  Call (631) 878-7796 to schedule &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* When to call */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="When to call for emergency service"
          />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
            <div>
              <h3 className="font-semibold text-red-700">Call immediately</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>&#x26A0; Active water leak (losing water fast)</li>
                <li>&#x26A0; Pump motor smoking or sparking</li>
                <li>&#x26A0; Gas smell near the heater</li>
                <li>&#x26A0; Electrical hazard around pool equipment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-sun-600">Call same day</h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                <li>&#9888; Pool turned green overnight</li>
                <li>&#9888; Pump won&apos;t start or lost prime</li>
                <li>&#9888; Heater stopped working</li>
                <li>&#9888; Filter pressure spiked or dropped to zero</li>
                <li>&#9888; Post-storm damage or debris</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local intent FAQ — captures "near me" and town-level emergency searches */}
      <Section>
        <SectionHeader title="Emergency pool repair — quick answers" />
        <div className="mt-8 max-w-3xl space-y-6">
          {emergencyFaqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-pool-600 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Don&apos;t wait — call Kevin now
            </h2>
            <p className="mt-3 text-lg text-pool-100 max-w-2xl mx-auto">
              The longer a pool problem sits, the worse (and more expensive)
              it gets. We respond fast to keep your pool safe and your
              equipment running.
            </p>
            <div className="mt-8">
              <a
                href="tel:+16318787796"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-pool-700 bg-white hover:bg-pool-50 rounded-lg transition-colors shadow-lg"
              >
                (631) 878-7796
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
