import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { pageSeo, breadcrumbJsonLd, SITE_URL, SITE_NAME } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { serviceAreas, getServiceArea, townServices } from "@/lib/service-areas";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ town: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const area = getServiceArea(town);
  if (!area) return {};
  return pageSeo({
    title: `Pool Service & Construction in ${area.name}, NY`,
    description: `The Pool Man provides pool construction, weekly maintenance, liner installation, and heater service in ${area.name}, NY. Based nearby in Center Moriches. Call (631) 878-7796.`,
    path: `/locations/${area.slug}`,
  });
}

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const area = getServiceArea(town);
  if (!area) notFound();

  const townFaqs = [
    {
      q: `Does The Pool Man service ${area.name}?`,
      a: `Yes. ${area.name} is part of our regular Eastern Suffolk County service area. ${area.proximity} We handle pool construction, weekly maintenance, vinyl liners, heater installation, seasonal openings and closings, and emergency service here.`,
    },
    {
      q: `How do I get a quote in ${area.name}?`,
      a: `Book a free on-site consultation online or call (631) 878-7796. Kevin comes to your ${area.name} property, assesses the job in person, and gives you a clear quote — no obligation.`,
    },
    {
      q: `Do you build inground pools in ${area.name}?`,
      a: `Yes — we design and build custom gunite and vinyl inground pools in ${area.name} and across the South Shore, and we handle the permit process with your township.`,
    },
  ];

  const townJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: `${SITE_URL}/locations/${area.slug}`,
      telephone: "+1-631-878-7796",
      areaServed: {
        "@type": "City",
        name: `${area.name}, NY`,
      },
    },
    breadcrumbJsonLd(`/locations/${area.slug}`),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: townFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={townJsonLd} />
      <PageHero
        eyebrow="Service Area"
        title={`Pool service & construction in ${area.name}, NY`}
        description={area.intro}
      />

      <Section>
        <SectionHeader
          title={`Serving ${area.name} homeowners`}
          description={area.proximity}
        />
        {area.localProof && (
          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
            {area.localProof}
          </p>
        )}
        <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
          The Pool Man is owner-operated by Kevin Cherwinski, with over 30 years
          building and servicing pools on the South Shore of Eastern Suffolk
          County. When you hire us for a job in {area.name}, you work directly
          with the owner from the first visit through the final walkthrough.
        </p>
      </Section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={`What we do in ${area.name}`}
            description="Every service we offer is available here. Explore the details on each service page."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {townServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-pool-300 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-pool-700">
                  {service.label}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                  {service.blurb}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-pool-600 group-hover:text-pool-700">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader title={`${area.name} pool service FAQs`} />
        <div className="mt-8 max-w-3xl space-y-6">
          {townFaqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-500">
          <Link href="/locations" className="text-pool-600 hover:text-pool-700">
            &larr; See all the towns we serve
          </Link>
        </p>
      </Section>

      <CtaBanner
        title={`Need a pool pro in ${area.name}?`}
        description={`Book a free on-site consultation. We come to you anywhere in ${area.name} and across Eastern Suffolk County.`}
      />
    </>
  );
}
