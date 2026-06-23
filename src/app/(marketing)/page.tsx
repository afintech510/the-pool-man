import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Testimonials } from "@/components/marketing/testimonials";
import { Certifications } from "@/components/marketing/certifications";
import { FinancingBanner } from "@/components/marketing/financing-banner";

export default function HomePage() {
  return (
    <>
      {/* Hero with real background */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Beautiful swimming pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-pool-950/70" />
        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
              Suffolk County&apos;s Trusted Pool Professional
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Your pool deserves{" "}
              <span className="text-water-300">expert care</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-pool-100 leading-relaxed max-w-2xl">
              Construction, renovation, weekly maintenance, vinyl liners,
              heaters &amp; more. Owner-operated quality from Kevin
              Cherwinski &mdash; serving Center Moriches and Suffolk County
              for over 15 years.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/booking" size="lg">
                Book a Free Consultation
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/40 text-slate-900 hover:bg-white/10"
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
              { stat: "15+", label: "Years experience" },
              { stat: "4.4★", label: "Google rating" },
              { stat: "Owner", label: "Operated" },
              { stat: "CBP", label: "Certified Builder" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-pool-700">{item.stat}</p>
                <p className="text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Three pillars: Maintenance, Construction, Installation */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="Build it. Maintain it. Fix it."
          description="From new construction to weekly cleaning, The Pool Man handles every stage of your pool's life."
        />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/images/pool-cleaning.jpg"
              alt="Pool cleaning and maintenance"
              width={640}
              height={427}
              className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Cleaning &amp; Maintenance
              </h3>
              <p className="mt-1 text-sm text-slate-900/80">
                Weekly service, openings &amp; closings, water testing
              </p>
              <ButtonLink
                href="/services"
                variant="outline"
                size="sm"
                className="mt-3 border-white/50 text-slate-900 hover:bg-white/10"
              >
                Learn More
              </ButtonLink>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/images/pool-construction.jpg"
              alt="New pool construction"
              width={640}
              height={427}
              className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                New Construction
              </h3>
              <p className="mt-1 text-sm text-slate-900/80">
                Gunite &amp; vinyl pools, spas, custom designs
              </p>
              <ButtonLink
                href="/construction"
                variant="outline"
                size="sm"
                className="mt-3 border-white/50 text-slate-900 hover:bg-white/10"
              >
                Learn More
              </ButtonLink>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <Image
              src="/images/pool-installation.jpg"
              alt="Pool equipment installation"
              width={640}
              height={427}
              className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Installation &amp; Servicing
              </h3>
              <p className="mt-1 text-sm text-slate-900/80">
                Heaters, salt systems, pumps, LED lighting
              </p>
              <ButtonLink
                href="/installation"
                variant="outline"
                size="sm"
                className="mt-3 border-white/50 text-slate-900 hover:bg-white/10"
              >
                Learn More
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* All services grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Everything your pool needs"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard title="Weekly Maintenance" description="Chemical balancing, skimming, vacuuming, equipment checks." href="/services/weekly-maintenance" icon={<span className="text-lg">📅</span>} />
            <ServiceCard title="Openings & Closings" description="Seasonal prep and winterization done right." href="/services/openings-closings" icon={<span className="text-lg">🔄</span>} />
            <ServiceCard title="Pool Construction" description="Custom gunite and vinyl pool design and build." href="/construction" icon={<span className="text-lg">🏗️</span>} />
            <ServiceCard title="Pool Renovation" description="Transform your existing pool with modern upgrades." href="/construction" icon={<span className="text-lg">✨</span>} />
            <ServiceCard title="Vinyl Liners" description="Laser-measured, zero-wrinkle liner installation." href="/vinyl-liners" icon={<span className="text-lg">🎯</span>} />
            <ServiceCard title="Pool Heaters" description="Heat pump and gas heater sales, install, repair." href="/pool-heaters" icon={<span className="text-lg">🔥</span>} />
            <ServiceCard title="Salt Water Systems" description="Salt chlorine generator installation and service." href="/installation/salt-water-systems" icon={<span className="text-lg">🧂</span>} />
            <ServiceCard title="Pump Installation" description="Variable speed and single speed pump upgrades." href="/installation/pumps" icon={<span className="text-lg">⚙️</span>} />
            <ServiceCard title="Chlorine Generators" description="Automated chlorination for cleaner, easier pool care." href="/installation/salt-water-systems" icon={<span className="text-lg">⚡</span>} />
            <ServiceCard title="LED Lighting" description="Color-changing LED pool and spa lighting." href="/installation/led-lighting" icon={<span className="text-lg">💡</span>} />
            <ServiceCard title="Pool Repairs" description="Pumps, filters, plumbing, electrical — we fix it." href="/services/pool-repairs" icon={<span className="text-lg">🔧</span>} />
            <ServiceCard title="Water Testing" description="Professional LaMotte analysis at our counter." href="/shop" icon={<span className="text-lg">🧪</span>} />
          </div>
        </div>
      </section>

      {/* About Kevin section with portrait */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-pool-600 uppercase tracking-wide">
              About The Pool Man
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              One-on-one with the owner
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The Pool Man is a trusted name in Suffolk County pool
              construction and service. With over 15 years of experience,
              owner Kevin Cherwinski has invested in customer service,
              building, designing, and repairing pools across Suffolk County.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              When you work with The Pool Man, you work directly with Kevin.
              He&apos;ll guide you step-by-step through every decision — from
              design to construction to ongoing care. Your project will be
              done to your complete satisfaction, finished on time, and built
              with the highest standards and warranties available.
            </p>
            <div className="mt-6">
              <ButtonLink href="/booking" variant="outline">
                Meet Kevin &mdash; Book a Consultation
              </ButtonLink>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/kevin-portrait.jpg"
              alt="Kevin Cherwinski — The Pool Man"
              width={360}
              height={510}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Testimonials />

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
                "Schedule a free on-site visit online or call (631) 878-7796. We'll come out, look at your pool, and discuss what you need.",
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
                "Whether it's weekly service, a new build, a liner, or a heater — we handle it. You just swim.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-pool-600 text-slate-900 flex items-center justify-center text-lg font-bold">
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

      {/* Financing */}
      <FinancingBanner />

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
