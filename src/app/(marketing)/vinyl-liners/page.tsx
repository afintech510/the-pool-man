import Image from "next/image";
import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { LinerSelector } from "@/components/marketing/liner-selector";

export const metadata = pageSeo({
  title: "Vinyl Liner Installation",
  description:
    "Precision-measured, precision-cut vinyl liner installation in Eastern Suffolk County. Zero-wrinkle craftsmanship with 20-mil and 28-mil options.",
  path: "/vinyl-liners",
});

export default function VinylLinersPage() {
  return (
    <>
      <PageHero
        eyebrow="Vinyl Liner Specialist"
        title="Precision-measured, zero-wrinkle liner installation"
        description="Every liner is precision-measured and custom-cut to your pool's exact dimensions. No shortcuts. No wrinkles. No callbacks."
      />

      <Section>
        <SectionHeader
          title="Our process"
          description="Vinyl liner replacement done the right way, from measurement to final fill."
        />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "On-site measurement",
              description:
                "We precisely measure your pool's exact dimensions — every radius, depth break, and step. No guessing, no standard templates.",
            },
            {
              step: "2",
              title: "Pattern selection",
              description:
                "Choose from a wide range of patterns, colors, and thicknesses. We'll help you pick the right liner for your pool and budget.",
            },
            {
              step: "3",
              title: "Custom fabrication",
              description:
                "Your liner is custom-cut from your exact measurements. This is why our liners fit perfectly — they're made for your pool.",
            },
            {
              step: "4",
              title: "Expert installation",
              description:
                "We drain, prep the floor and walls, set the liner, vacuum-fit it, and fill. The result: a flawless, wrinkle-free finish.",
            },
          ].map((item) => (
            <div key={item.step}>
              <div className="h-10 w-10 rounded-full bg-pool-50 text-pool-700 flex items-center justify-center font-bold text-sm">
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
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Choose your thickness"
            description="We offer two thickness options. Both are precision-cut from your exact measurements."
          />
          <div className="mt-8 max-w-2xl">
            <LinerSelector />
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Browse liner patterns"
          description="Explore pattern and color options from the manufacturers we install, then bring your favorites to your on-site measurement. We'll help you choose the right fit for your pool and budget."
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              name: "Loop-Loc",
              blurb: "Premium liners engineered to pair with Loop-Loc safety covers.",
              href: "https://www.looploc.com/pool-liners/",
            },
            {
              name: "Merlin Industries",
              blurb: "A wide range of SmartLINE and designer liner patterns.",
              href: "https://merlinindustries.com/collection/pool-liners/",
            },
            {
              name: "Latham",
              blurb: "Latham's full library of inground vinyl liner designs.",
              href: "https://www.lathampool.com/vinyl-liner-patterns/",
            },
          ].map((brand) => (
            <a
              key={brand.name}
              href={brand.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-slate-200 bg-white p-6 hover:border-pool-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-slate-900 group-hover:text-pool-700 transition-colors">
                {brand.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {brand.blurb}
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-pool-600">
                View patterns &rarr;
              </span>
            </a>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Design your dream pool"
            description="Loop-Loc's MIRAGE® visualizer lets you try designer liner patterns and safety covers on a pool right in your browser. Build the look you love, take a screenshot, and email it to Kevin — he'll use it as the starting point for your quote."
          />

          <div className="mt-8 overflow-hidden rounded-2xl border border-pool-100 bg-gradient-to-br from-pool-950 to-pool-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
                  Free pool visualizer
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Launch the MIRAGE&reg; pool designer
                </h3>
                <ol className="mt-6 space-y-4">
                  {[
                    "Open the designer and build your pool — try different liner patterns, coping, and safety covers.",
                    "Take a screenshot once you land on a look you love.",
                    "Email it to Kevin and he'll turn your design into a real quote.",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-pool-100">
                      <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-white/10 text-sm font-bold text-water-300">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.looploc.com/mirage/?reload=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water-300 bg-water-600 text-white hover:bg-water-700 shadow-sm px-6 py-3 text-base"
                  >
                    Launch the designer &rarr;
                  </a>
                  <a
                    href="mailto:info@kevinthepoolman.com?subject=My%20MIRAGE%20pool%20design&body=Hi%20Kevin%2C%20here%27s%20the%20pool%20design%20I%20put%20together%20in%20the%20MIRAGE%20designer.%20(Please%20attach%20your%20screenshot.)"
                    className="inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water-300 border-2 border-white/40 text-white hover:bg-white/10 px-6 py-3 text-base"
                  >
                    Email your design to Kevin
                  </a>
                </div>
                <p className="mt-6 text-xs text-pool-300">
                  Opens in a new tab. Capture your screen with{" "}
                  <kbd className="rounded bg-white/10 px-1">Print Screen</kbd> (Windows) or{" "}
                  <kbd className="rounded bg-white/10 px-1">Cmd</kbd>+
                  <kbd className="rounded bg-white/10 px-1">Shift</kbd>+
                  <kbd className="rounded bg-white/10 px-1">4</kbd> (Mac). The MIRAGE&reg;
                  designer is provided by Loop-Loc.
                </p>
              </div>
              <div className="relative min-h-56 lg:min-h-full">
                <Image
                  src="/images/portfolio/vinyl-blue-liner.jpg"
                  alt="Vinyl liner pattern preview"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader
          title="Why our liners are different"
          description="It comes down to measurement precision and installation technique."
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-slate-900">Precision measurement</h3>
            <p className="mt-2 text-sm text-slate-600">
              Standard liner replacements use tape measures and templates. We
              use precision measurement for sub-inch accuracy across every dimension
              of your pool.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              Vacuum-fit installation
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              We use a vacuum to draw the liner tight against the walls and
              floor before filling. This eliminates wrinkles and ensures a
              smooth, clean finish.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Floor preparation</h3>
            <p className="mt-2 text-sm text-slate-600">
              Before the liner goes in, we smooth and prep the pool floor.
              Rocks, debris, and imperfections under the liner cause premature
              wear — we remove them.
            </p>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Ready for a new liner?"
        description="Book a free on-site measurement. We'll assess your pool, help you choose a pattern and thickness, and give you a straightforward quote."
        buttonText="Schedule Your Measurement"
      />
    </>
  );
}
