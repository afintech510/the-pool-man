import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { FinancingBanner } from "@/components/marketing/financing-banner";

export const metadata: Metadata = {
  title: "Pool Construction Suffolk County | Gunite & Vinyl Inground Pools",
  description:
    "Custom inground pool construction in Suffolk County, Long Island. Gunite and vinyl swimming pools, spas, and renovations. CBP certified builder. Free estimates. Financing available.",
  keywords:
    "pool construction Suffolk County, inground pool builder Long Island, gunite pool builder, vinyl pool construction, custom pool design, pool contractor Center Moriches, swimming pool installation Suffolk County NY",
};

export default function ConstructionPage() {
  return (
    <>
      {/* Hero with conversion focus */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/pool-construction.jpg"
          alt="Custom pool construction in Suffolk County"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pool-950/90 via-pool-950/70 to-pool-950/50" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-sun-600 uppercase tracking-wide">
              APSP Certified Building Professional
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Custom inground pool construction in Suffolk County
            </h1>
            <p className="mt-5 text-lg text-pool-100 leading-relaxed">
              Your backyard deserves more than a generic pool. Kevin
              Cherwinski designs and builds custom gunite and vinyl inground
              pools tailored to your property, your lifestyle, and your
              budget. Over 15 years of hands-on experience. LIPSA Gold Award
              winner.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/booking" size="lg">
                Get Your Free Estimate
              </ButtonLink>
              <a
                href="tel:+16318787796"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-900 border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
              >
                Call (631) 878-7796
              </a>
            </div>
            <p className="mt-4 text-sm text-pool-700">
              Free on-site consultation &middot; Financing available &middot;
              No obligation
            </p>
          </div>
        </Container>
      </section>

      {/* Trust signals */}
      <section className="bg-pool-600 py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-slate-900 font-medium">
            <span>APSP Certified Building Professional</span>
            <span className="hidden sm:inline text-pool-700">&middot;</span>
            <span>NPC Certified</span>
            <span className="hidden sm:inline text-pool-700">&middot;</span>
            <span>LIPSA Gold Award 2016</span>
            <span className="hidden sm:inline text-pool-700">&middot;</span>
            <span>BBB A+ Rated</span>
            <span className="hidden sm:inline text-pool-700">&middot;</span>
            <span>HomeAdvisor 10+ Years</span>
          </div>
        </Container>
      </section>

      {/* Pool types */}
      <Section>
        <SectionHeader
          eyebrow="What We Build"
          title="Custom designs for every backyard"
          description="Each pool is designed specifically for your property. We don't use cookie-cutter templates — Kevin works with you one-on-one from concept to completion."
        />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Gunite Swimming Pools
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The gold standard in inground pool construction. Gunite
              (shotcrete) pools are built with a steel-reinforced concrete
              shell that can be shaped into any size, depth, or design.
              Finished with plaster, pebble, or tile for a custom look that
              lasts decades.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Unlimited shape and size flexibility</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Built-in benches, tanning ledges, and custom steps</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Plaster, pebble, or tile finish options</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> 50+ year structural lifespan</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Increases property value</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Vinyl Inground Pools
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              A cost-effective inground option with a smooth, non-abrasive
              vinyl liner surface. Steel or polymer wall construction with
              a concrete bottom. Wide variety of liner patterns and colors.
              Faster installation timeline than gunite.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Lower upfront cost than gunite</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Smooth, comfortable surface</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Custom shapes and sizes available</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Faster build timeline (4–6 weeks typical)</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Easy liner replacement when needed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Pool Spas &amp; Hot Tubs
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed max-w-3xl">
            Add a built-in spa or hot tub to your new pool, or as a
            standalone addition to your backyard. Gunite spas with custom
            jets, lighting, and spillover features that complement your pool
            design.
          </p>
        </div>
      </Section>

      {/* The construction process */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="From your vision to your backyard"
            description="Kevin guides you through every step. You'll always know what's happening and what comes next."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Free on-site consultation",
                description:
                  "Kevin visits your property to discuss your vision, assess the site conditions, take measurements, and talk through options, timeline, and budget. No cost, no obligation.",
              },
              {
                step: "2",
                title: "Custom design",
                description:
                  "Kevin creates a design tailored to your yard — shape, size, depth, features, decking, and landscaping integration. You'll see the plan before anything starts.",
              },
              {
                step: "3",
                title: "Permits & approvals",
                description:
                  "We handle the permit process with your local township. Surveys, applications, and compliance — we manage the paperwork so you don't have to.",
              },
              {
                step: "4",
                title: "Excavation & construction",
                description:
                  "Ground breaks. Steel, plumbing, electrical, shell construction, equipment pad, decking — the pool takes shape. Kevin is on-site overseeing every phase.",
              },
              {
                step: "5",
                title: "Finishing & equipment",
                description:
                  "Interior finish, tile, coping, equipment installation (pump, filter, heater, salt system, lighting), deck and landscape completion.",
              },
              {
                step: "6",
                title: "Fill, start up & swim",
                description:
                  "Pool is filled, water balanced, systems tested and commissioned. Kevin walks you through everything. Then you swim.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="h-10 w-10 rounded-full bg-pool-600 text-slate-900 flex items-center justify-center font-bold text-sm">
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

      {/* Renovation section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-pool-600 uppercase tracking-wide">
              Pool Renovation
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Transform your existing pool
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Don&apos;t tear it out — renovate it. We modernize aging pools
              with new liners, updated equipment, resurfacing, new tile and
              coping, LED lighting, and water features. Make your old pool
              feel brand new.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Complete pool resurfacing</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> New tile, coping, and decking</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Equipment upgrades (pumps, heaters, salt systems)</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> LED lighting and water features</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Vinyl liner replacement</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Safety cover installation</li>
            </ul>
            <div className="mt-6">
              <ButtonLink href="/booking">
                Schedule a Renovation Consultation
              </ButtonLink>
            </div>
          </div>
          <div className="bg-pool-50 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <Image
              src="/images/pool-installation.jpg"
              alt="Pool renovation and installation"
              width={640}
              height={427}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Why Kevin */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why The Pool Man"
            title="Not a franchise. Not a sales team. Just Kevin."
            description="When you hire The Pool Man, you work directly with the owner — from the first consultation through the final walkthrough."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Owner on every job",
                description: "Kevin is personally on-site for every phase of construction. No project managers, no middlemen. You deal with the decision-maker directly.",
              },
              {
                title: "Certified & awarded",
                description: "APSP Certified Building Professional, NPC Certified, NESPA member, BBB A+ rated, HomeAdvisor Screened & Approved for 10+ years, LIPSA 2016 Gold Award winner.",
              },
              {
                title: "Honest pricing",
                description: "Competitive, straightforward pricing with no hidden fees. We'll tell you what it costs upfront and stick to it. Financing available through HFS.",
              },
              {
                title: "Local expertise",
                description: "We build exclusively on the South Shore of Eastern Suffolk County. We know the soil, the codes, the townships, and the seasons.",
              },
              {
                title: "Full-service builder",
                description: "We don't just build your pool and leave. We offer weekly maintenance, equipment service, liner replacement, and heater repair for the life of your pool.",
              },
              {
                title: "Responsive communication",
                description: "Kevin answers calls and texts — mornings, evenings, weekends. Our customers say it's the #1 thing that sets us apart. Read our reviews.",
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
        </div>
      </section>

      {/* FAQ snippet */}
      <Section>
        <SectionHeader
          title="Common construction questions"
        />
        <div className="mt-8 max-w-3xl space-y-6">
          {[
            { q: "How long does it take to build a pool?", a: "The average time is 4–6 weeks from breaking ground, depending on size, design, and weather. Permits typically take an additional 2–4 weeks before construction starts." },
            { q: "How much does a pool cost?", a: "Prices vary by size, materials, and features. We provide free on-site estimates. Financing is available through HFS with rates as low as 2.99% and terms up to 20 years." },
            { q: "Do you handle permits?", a: "Yes. We manage the permit process with your local township — surveys, applications, and inspections." },
            { q: "Do I need a fence?", a: "Yes, a barrier (fence or property perimeter) is required by code in Suffolk County for safety." },
            { q: "Gunite or vinyl — which is better?", a: "Both are great. Gunite offers unlimited design flexibility and lasts 50+ years. Vinyl is more cost-effective and faster to install. Kevin will help you decide during the consultation." },
          ].map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-1 text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
          <ButtonLink href="/faq" variant="ghost" size="sm">
            See all FAQs &rarr;
          </ButtonLink>
        </div>
      </Section>

      {/* Financing */}
      <FinancingBanner />

      {/* Final CTA */}
      <CtaBanner
        title="Let's build your dream pool"
        description="Book a free on-site consultation. Kevin will visit your property, discuss your vision, and give you a straightforward estimate — no obligation, no pressure."
        buttonText="Get Your Free Estimate"
      />
    </>
  );
}
