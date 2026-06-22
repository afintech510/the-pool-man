import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";

function WrenchIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  );
}

function SquaresIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function BeakerIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-pool-900 via-pool-800 to-pool-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
              Eastern Suffolk&apos;s Trusted Pool Professional
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Your pool deserves{" "}
              <span className="text-water-300">expert care</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-pool-200 leading-relaxed max-w-2xl">
              Weekly service, vinyl liner installation, pool heater sales &amp;
              repair. Owner-operated quality from Kevin &ldquo;The Pool
              Man&rdquo; Cherwinski &mdash; serving Center Moriches and Eastern
              Suffolk County.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/booking" size="lg">
                Book a Free Consultation
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="outline"
                size="lg"
                className="border-pool-400 text-pool-100 hover:bg-pool-800"
              >
                View Our Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <Container className="py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: "20+", label: "Years experience" },
              { stat: "95+", label: "Weekly clients" },
              { stat: "Owner", label: "Operated" },
              { stat: "100%", label: "Licensed & insured" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-pool-700">{item.stat}</p>
                <p className="text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services grid */}
      <Section>
        <SectionHeader
          eyebrow="Our Services"
          title="Everything your pool needs"
          description="From weekly maintenance to major installations, we handle it all. Every service starts with an honest assessment at your pool."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Weekly Maintenance"
            description="Keep your pool crystal clear all season. Chemical balancing, skimming, vacuuming, and equipment checks on a reliable weekly schedule."
            href="/services/weekly-maintenance"
            icon={<CalendarIcon />}
          />
          <ServiceCard
            title="Openings & Closings"
            description="Seasonal opening and winterization done right. We protect your investment so your pool is ready when you are."
            href="/services/openings-closings"
            icon={<ShieldIcon />}
          />
          <ServiceCard
            title="Vinyl Liners"
            description="Precision-measured, laser-cut vinyl liner installation. Zero-wrinkle craftsmanship with your choice of 20 or 28-mil thickness."
            href="/vinyl-liners"
            icon={<SquaresIcon />}
          />
          <ServiceCard
            title="Pool Heaters"
            description="Extend your swim season with heat pumps and gas heaters. Expert installation, repair, and replacement."
            href="/pool-heaters"
            icon={<FireIcon />}
          />
          <ServiceCard
            title="Pool Repairs"
            description="Pump issues, filter problems, leaks, plumbing — we diagnose and fix it. Fast response for Eastern Suffolk."
            href="/services/pool-repairs"
            icon={<WrenchIcon />}
          />
          <ServiceCard
            title="Water Testing"
            description="Professional LaMotte water analysis at our counter. Get an accurate reading and the right chemicals for your pool."
            href="/shop"
            icon={<BeakerIcon />}
          />
        </div>
      </Section>

      {/* Liner + Heater feature sections */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold text-pool-600 uppercase tracking-wide">
                Vinyl Liner Specialist
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Laser-measured, zero-wrinkle installation
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Every liner is precision-measured with laser technology and
                custom-cut for your pool&apos;s exact dimensions. Choose from 20-mil
                standard or 28-mil heavy-duty thickness. No shortcuts, no
                wrinkles, no callbacks.
              </p>
              <div className="mt-6">
                <ButtonLink href="/vinyl-liners" variant="outline">
                  Explore Vinyl Liners
                </ButtonLink>
              </div>
            </div>
            <div className="bg-pool-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
              <p className="text-pool-400 text-sm">Liner installation photo</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="bg-sun-100 rounded-2xl aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
              <p className="text-sun-400 text-sm">Pool heater photo</p>
            </div>
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <p className="text-sm font-semibold text-sun-600 uppercase tracking-wide">
                Pool Heaters
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Swim longer, swim warmer
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Don&apos;t let cold water cut your season short. We sell, install, and
                service heat pumps and gas heaters from trusted brands. From a
                new heat pump to repairing your existing unit, we&apos;ve got you
                covered.
              </p>
              <div className="mt-6">
                <ButtonLink href="/pool-heaters" variant="outline">
                  Explore Pool Heaters
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <Section>
        <SectionHeader
          eyebrow="How It Works"
          title="From inquiry to crystal-clear water"
          description="Getting started is simple. We come to you."
          className="text-center mx-auto"
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Book a consultation",
              description:
                "Schedule a free on-site visit online or by phone. We'll come out, look at your pool, and discuss what you need.",
            },
            {
              step: "2",
              title: "Get your assessment",
              description:
                "Kevin will evaluate your pool, equipment, and water. You'll get an honest recommendation — not a sales pitch.",
            },
            {
              step: "3",
              title: "Enjoy your pool",
              description:
                "Whether it's weekly service, a new liner, or a heater install, we handle it. You just swim.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-pool-600 text-white flex items-center justify-center text-lg font-bold">
                {item.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
