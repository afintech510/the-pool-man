import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Salt Water Pool Systems & Chlorine Generators",
  description:
    "Salt water pool system installation and chlorine generator service in Suffolk County. Convert your pool to salt water for softer water and easier maintenance.",
};

export default function SaltWaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Servicing"
        title="Salt water pool systems"
        description="Convert your pool to salt water for silky-smooth water, less chemical handling, and lower long-term maintenance costs. We install and service salt chlorine generators from all major brands."
      />

      <Section>
        <SectionHeader title="Why go salt water?" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Softer water", description: "Salt water feels silky and smooth on your skin. No red eyes, no bleached swimsuits, no harsh chlorine smell." },
            { title: "Less chemical handling", description: "The salt cell generates chlorine automatically. No more buying, storing, or adding liquid or tablet chlorine." },
            { title: "Lower long-term cost", description: "Salt is cheap. After the initial install, your ongoing chemical costs drop significantly compared to traditional chlorine." },
            { title: "Consistent chlorine levels", description: "The generator produces a steady, even level of chlorine. No spikes or valleys — just consistently clean water." },
            { title: "Less maintenance", description: "Fewer trips to the pool store, fewer chemicals to balance. Salt systems simplify your weekly routine." },
            { title: "Gentle on equipment", description: "Properly maintained salt systems are gentle on your pool surfaces, plumbing, and equipment." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeader title="What we install & service" />
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex gap-3"><span className="text-pool-600 font-bold">+</span> Salt chlorine generator installation (new pools and conversions)</li>
            <li className="flex gap-3"><span className="text-pool-600 font-bold">+</span> Salt cell cleaning and replacement</li>
            <li className="flex gap-3"><span className="text-pool-600 font-bold">+</span> Control board diagnostics and repair</li>
            <li className="flex gap-3"><span className="text-pool-600 font-bold">+</span> Flow sensor and salt sensor replacement</li>
            <li className="flex gap-3"><span className="text-pool-600 font-bold">+</span> System integration with existing equipment</li>
            <li className="flex gap-3"><span className="text-pool-600 font-bold">+</span> All major brands: Hayward, Pentair, Jandy, CircuPool</li>
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Interested in salt water?"
        description="Book a consultation and Kevin will assess your pool, recommend the right system, and give you a clear quote."
      />
    </>
  );
}
