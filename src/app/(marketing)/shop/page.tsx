import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Pool Shop",
  description:
    "Pool chemicals, supplies, and equipment. Shop online or visit our counter in Center Moriches. Free professional water testing.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Shop"
        title="Chemicals, supplies & water testing"
        description="Get the right products for your pool. Shop online with shared inventory from our retail counter, or stop in for a free professional water test."
        ctaText="Visit Our Counter"
        ctaHref="#water-testing"
        secondaryCtaText="Browse Products"
        secondaryCtaHref="#products"
      />

      <Section id="water-testing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Free Service"
              title="Professional water testing"
              description="Bring in a water sample and we'll run it through our LaMotte WaterLink Spin Touch — lab-grade accuracy in minutes. You'll get a full reading and a personalized product recommendation."
            />
            <div className="mt-6 space-y-3">
              {[
                "Free chlorine, pH, total alkalinity",
                "Calcium hardness, cyanuric acid",
                "Langelier Saturation Index (LSI)",
                "Personalized dosing recommendation",
                "Matched to products we carry in stock",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm text-slate-700">
                  <svg className="h-5 w-5 text-water-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-water-100 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-water-400 text-sm">Water testing photo</p>
          </div>
        </div>
      </Section>

      <section id="products" className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Shop pool products"
            description="Browse our catalog online. Same inventory, same prices as our retail counter."
          />

          {/* Shopify Storefront API product grid will be integrated here (F-016) */}
          <div className="mt-10 bg-white border-2 border-dashed border-slate-300 rounded-xl p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
            <p className="text-slate-500 text-lg font-medium">
              Product catalog
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Shopify Storefront API integration coming (F-016)
            </p>
            <p className="mt-6 text-slate-600">
              In the meantime, visit our counter in Center Moriches for all your pool chemical and supply needs.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure what your pool needs?"
        description="Bring in a water sample. We'll test it for free and tell you exactly what chemicals to use and how much."
        buttonText="Get Directions"
        buttonHref="#"
      />
    </>
  );
}
