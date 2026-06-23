import Image from "next/image";
import {
  Calendar,
  ShieldCheck,
  HardHat,
  Sparkles,
  Target,
  Flame,
  Droplets,
  Cog,
  Zap,
  Lightbulb,
  Wrench,
  FlaskConical,
  ArrowRight,
  ClipboardCheck,
  Search,
  Waves,
  Phone,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { ServiceCard } from "@/components/marketing/service-card";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Testimonials } from "@/components/marketing/testimonials";
import { Certifications } from "@/components/marketing/certifications";
import { FinancingBanner } from "@/components/marketing/financing-banner";
import { WaveBackground } from "@/components/ui/wave-bg";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Beautiful swimming pool"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-pool-950/80" />
        <WaveBackground />
        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
              Suffolk County&apos;s Trusted Pool Professional
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
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
                className="border-white/40 text-white hover:bg-white/10"
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

      <Certifications />

      {/* Three pillars — card layout with image below text */}
      <Section>
        <SectionHeader
          eyebrow="What We Do"
          title="Build it. Maintain it. Fix it."
          description="From new construction to weekly cleaning, The Pool Man handles every stage of your pool's life."
        />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Calendar className="h-6 w-6" />,
              title: "Cleaning & Maintenance",
              description:
                "Weekly service, seasonal openings & closings, water testing, and equipment checks to keep your pool crystal clear all season.",
              image: "/images/pool-cleaning.jpg",
              href: "/services",
            },
            {
              icon: <HardHat className="h-6 w-6" />,
              title: "New Construction",
              description:
                "Custom gunite and vinyl inground pools designed specifically for your backyard. Spas, water features, and complete landscape integration.",
              image: "/images/pool-construction.jpg",
              href: "/construction",
            },
            {
              icon: <Wrench className="h-6 w-6" />,
              title: "Installation & Servicing",
              description:
                "Heaters, salt water systems, variable speed pumps, LED lighting, and chlorine generators. Expert installation and repair.",
              image: "/images/pool-installation.jpg",
              href: "/installation",
            },
          ].map((pillar) => (
            <a
              key={pillar.title}
              href={pillar.href}
              className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl hover:border-pool-300 transition-all duration-300"
            >
              <div className="p-6">
                <div className="h-12 w-12 rounded-xl bg-pool-50 text-pool-600 flex items-center justify-center group-hover:bg-pool-100 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-pool-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-pool-600 group-hover:text-pool-700">
                  Learn more
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
              <Image
                src={pillar.image}
                alt={pillar.title}
                width={640}
                height={360}
                className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </a>
          ))}
        </div>
      </Section>

      {/* Services grid */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Everything your pool needs"
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ServiceCard title="Weekly Maintenance" description="Chemical balancing, skimming, vacuuming, equipment checks." href="/services/weekly-maintenance" icon={<Calendar className="h-5 w-5" />} />
            <ServiceCard title="Openings & Closings" description="Seasonal prep and winterization done right." href="/services/openings-closings" icon={<ShieldCheck className="h-5 w-5" />} />
            <ServiceCard title="Pool Construction" description="Custom gunite and vinyl pool design and build." href="/construction" icon={<HardHat className="h-5 w-5" />} />
            <ServiceCard title="Pool Renovation" description="Transform your existing pool with modern upgrades." href="/construction" icon={<Sparkles className="h-5 w-5" />} />
            <ServiceCard title="Vinyl Liners" description="Laser-measured, zero-wrinkle liner installation." href="/vinyl-liners" icon={<Target className="h-5 w-5" />} />
            <ServiceCard title="Pool Heaters" description="Heat pump and gas heater sales, install, repair." href="/pool-heaters" icon={<Flame className="h-5 w-5" />} />
            <ServiceCard title="Salt Water Systems" description="Salt chlorine generator installation and service." href="/installation/salt-water-systems" icon={<Droplets className="h-5 w-5" />} />
            <ServiceCard title="Pump Installation" description="Variable speed and single speed pump upgrades." href="/installation/pumps" icon={<Cog className="h-5 w-5" />} />
            <ServiceCard title="Chlorine Generators" description="Automated chlorination for cleaner, easier care." href="/installation/salt-water-systems" icon={<Zap className="h-5 w-5" />} />
            <ServiceCard title="LED Lighting" description="Color-changing LED pool and spa lighting." href="/installation/led-lighting" icon={<Lightbulb className="h-5 w-5" />} />
            <ServiceCard title="Pool Repairs" description="Pumps, filters, plumbing, electrical — we fix it." href="/services/pool-repairs" icon={<Wrench className="h-5 w-5" />} />
            <ServiceCard title="Water Testing" description="Professional LaMotte analysis at our counter." href="/shop" icon={<FlaskConical className="h-5 w-5" />} />
          </div>
        </div>
      </section>

      {/* About Kevin */}
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
              He&apos;ll guide you step-by-step through every decision &mdash; from
              design to construction to ongoing care.
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
              icon: <Phone className="h-6 w-6" />,
              step: "1",
              title: "Book a consultation",
              description:
                "Schedule a free on-site visit online or call (631) 878-7796. We'll come out, look at your pool, and discuss what you need.",
            },
            {
              icon: <Search className="h-6 w-6" />,
              step: "2",
              title: "Get your assessment",
              description:
                "Kevin will evaluate your pool, equipment, and water. You'll get an honest recommendation — not a sales pitch.",
            },
            {
              icon: <Waves className="h-6 w-6" />,
              step: "3",
              title: "Enjoy your pool",
              description:
                "Whether it's weekly service, a new build, a liner, or a heater — we handle it. You just swim.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto h-14 w-14 rounded-2xl bg-pool-50 text-pool-600 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="mt-2 text-xs font-bold text-pool-400 uppercase tracking-widest">
                Step {item.step}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <FinancingBanner />
      <CtaBanner />
    </>
  );
}
