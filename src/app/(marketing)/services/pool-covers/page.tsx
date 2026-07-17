import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Covers",
  description:
    "Safety covers and winter covers for your pool. Custom-fitted installation and service in Eastern Suffolk County.",
  path: "/services/pool-covers",
});

export default function PoolCoversPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Services"
        title="Pool covers"
        description="Protect your pool and your family. We measure, supply, and install safety covers and winter covers custom-fitted to your pool."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Safety covers</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Mesh and solid safety covers anchored into your deck to prevent
              accidental entry. These meet ASTM safety standards and support
              weight, giving you peace of mind whether you have kids, pets, or
              just want to keep your pool secure in the off-season.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Custom-measured to your pool shape</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> ASTM safety standard compliant</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Mesh (drainage) or solid (debris-free) options</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Spring and brass anchor installation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">Winter covers</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Standard winter covers provide debris protection during the
              off-season. We install them as part of our winterization service
              and remove them at opening. Affordable protection for pools that
              don&apos;t need a full safety cover.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Debris and leaf protection</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Water bag or clip secured</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Included with winterization service</li>
              <li className="flex gap-2"><span className="text-pool-600">&#10003;</span> Replacement covers available</li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Need a pool cover?"
        description="We'll measure your pool and recommend the right cover for your situation. Free on-site consultation."
      />
    </>
  );
}
