import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { LinerSelector } from "@/components/marketing/liner-selector";

export const metadata: Metadata = {
  title: "Vinyl Liner Installation",
  description:
    "Precision-measured, laser-cut vinyl liner installation in Eastern Suffolk County. Zero-wrinkle craftsmanship with 20-mil and 28-mil options.",
};

export default function VinylLinersPage() {
  return (
    <>
      <PageHero
        eyebrow="Vinyl Liner Specialist"
        title="Laser-measured, zero-wrinkle liner installation"
        description="Every liner is precision-measured with laser technology and custom-cut to your pool's exact dimensions. No shortcuts. No wrinkles. No callbacks."
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
                "We laser-measure your pool's exact dimensions — every radius, depth break, and step. No guessing, no standard templates.",
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
              <div className="h-10 w-10 rounded-full bg-slate-800 text-pool-300 flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <h3 className="mt-3 font-semibold text-white">
                {item.title}
              </h3>
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
            title="Choose your thickness"
            description="We offer two thickness options. Both are precision-cut from your laser measurements."
          />
          <div className="mt-8 max-w-2xl">
            <LinerSelector />
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
            <h3 className="font-semibold text-white">Laser measurement</h3>
            <p className="mt-2 text-sm text-slate-400">
              Standard liner replacements use tape measures and templates. We
              use laser measurement for sub-inch accuracy across every dimension
              of your pool.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">
              Vacuum-fit installation
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              We use a vacuum to draw the liner tight against the walls and
              floor before filling. This eliminates wrinkles and ensures a
              smooth, clean finish.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Floor preparation</h3>
            <p className="mt-2 text-sm text-slate-400">
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
