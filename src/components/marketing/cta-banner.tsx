import { Phone } from "lucide-react";
import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";
import { WaveBackground } from "../ui/wave-bg";

export function CtaBanner({
  title = "Ready to get started?",
  description = "Book a free on-site consultation. We'll assess your pool and give you an honest recommendation.",
  buttonText = "Book Your Free Consultation",
  buttonHref = "/booking",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative bg-pool-950 py-16 sm:py-20 overflow-hidden">
      <WaveBackground />
      <Container className="relative">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-pool-200 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href={buttonHref} size="lg">
              {buttonText}
            </ButtonLink>
            <a
              href="tel:+16318787796"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-pool-200 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              Or call (631) 878-7796
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
