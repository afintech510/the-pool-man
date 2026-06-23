import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/ui/section";
import { AllTestimonials } from "@/components/marketing/testimonials";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read what our customers say about The Pool Man. 4.4 stars on Google, BBB A+ rated. Pool construction, maintenance, and service reviews from Suffolk County homeowners.",
};

export default function TestimonialsPage() {
  return (
    <>
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
            className="text-sm font-medium text-pool-400 hover:text-pool-300"
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
