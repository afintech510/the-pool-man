import Image from "next/image";
import { pageSeo, SITE_NAME, SITE_URL } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { WaveBackground } from "@/components/ui/wave-bg";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { Gallery } from "@/components/marketing/gallery";
import { JsonLd } from "@/components/seo/json-ld";
import { portfolioItems } from "@/lib/portfolio";

export const metadata = {
  ...pageSeo({
    title: "Our Work — Pool Construction Portfolio | Suffolk County",
    description:
      "See custom inground pools, water features, tanning ledges, renovations, and vinyl liner projects built by The Pool Man across Suffolk County, Long Island.",
    path: "/our-work",
  }),
  keywords:
    "pool construction portfolio, custom inground pool gallery Suffolk County, gunite pool photos Long Island, pool renovation before after, tanning ledge water feature builder",
};

// ImageGallery structured data tied to the LocalBusiness node.
const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "The Pool Man — Our Work",
  url: `${SITE_URL}/our-work`,
  about: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#business`, name: SITE_NAME },
  image: portfolioItems.map((i) => ({
    "@type": "ImageObject",
    contentUrl: `${SITE_URL}${i.src}`,
    caption: i.alt,
  })),
};

export default function OurWorkPage() {
  return (
    <>
      <JsonLd data={galleryJsonLd} />

      {/* Construction-led image hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/portfolio/construction-tanning-ledge.jpg"
          alt="Custom gunite pool with tanning ledge built by The Pool Man in Suffolk County"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pool-950/90 via-pool-950/75 to-pool-950/45" />
        <WaveBackground />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-sun-600 uppercase tracking-wide">
              Our Work
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Custom pools we&apos;ve built across Suffolk County
            </h1>
            <p className="mt-5 text-lg text-pool-200 leading-relaxed">
              New gunite and vinyl inground pools, tanning ledges, water
              features, and renovations — every project designed and built
              hands-on by Kevin Cherwinski. Browse the gallery, then book a
              free consultation to start yours.
            </p>
            <div className="mt-8">
              <ButtonLink href="/booking" size="lg">
                Book a Free Consultation
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Gallery items={portfolioItems} showFilters />
      </Section>

      <CtaBanner
        title="Let's build yours next"
        description="Book a free on-site consultation. Kevin will visit your property, talk through your vision, and give you a straightforward estimate — no obligation."
        buttonText="Get Your Free Estimate"
      />
    </>
  );
}
