import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Pump Installation & Replacement",
  description:
    "Pool pump installation and replacement in Suffolk County. Variable speed and single speed pumps. Energy-efficient upgrades that save money.",
  path: "/installation/pumps",
});

export default function PumpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation & Servicing"
        title="Pool pump installation"
        description="Your pump is the heart of your pool system. We install, replace, and repair pool pumps — from energy-efficient variable speed upgrades to straightforward single speed replacements."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Variable speed pumps</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Variable speed pumps run at lower speeds most of the time, using up to 80% less energy than single speed pumps. They&apos;re quieter, last longer, and pay for themselves in energy savings — often within 1–2 years.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Up to 80% energy savings</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Whisper-quiet operation</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Programmable speeds for different tasks</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Longer lifespan than single speed</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Required by DOE energy standards on new installs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Single speed replacement</h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              If your existing single speed pump fails and budget is a concern, we can replace it with a reliable new unit. We&apos;ll also give you the numbers on upgrading to variable speed so you can make an informed decision.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Same-day replacement available</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Proper sizing for your pool and plumbing</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> All major brands: Hayward, Pentair, Jandy</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Motor-only replacement when the housing is fine</li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Pump failing or running loud?"
        description="Call us or book online. We'll diagnose the issue and get your circulation back — fast."
        buttonText="Schedule a Service Call"
      />
    </>
  );
}
