import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/ui/section";
import { AllTestimonials, reviews } from "@/components/marketing/testimonials";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { pageSeo, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata = pageSeo({
  title: "Customer Reviews",
  description:
    "Read what our customers say about The Pool Man. 4.4 stars on Google, BBB A+ rated. Pool construction, maintenance, and service reviews from Suffolk County homeowners.",
  path: "/testimonials",
});

// Review + AggregateRating structured data, built from the on-page testimonials.
const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: (
      reviews.reduce((sum, r) => sum + r.stars, 0) / reviews.length
    ).toFixed(1),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.stars,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.text,
  })),
};

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd} />
      <PageHero
        eyebrow="Customer Reviews"
        title="Don't take our word for it"
        description="Read what our customers have to say about their experience working with our team. Their feedback reflects the care, professionalism, and attention to detail we bring to every pool we service."
      />

      <Section>
        <AllTestimonials />
        <div className="mt-8 text-center">
          <a
            href="https://maps.app.goo.gl/6MUw51odqoaFr1Kz8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-pool-600 hover:text-pool-700"
          >
            See all reviews on Google &rarr;
          </a>
        </div>
      </Section>

      <CtaBanner
        title="Ready to join our happy customers?"
        description="Book a free on-site consultation and see why homeowners across Suffolk County trust The Pool Man."
      />
    </>
  );
}
