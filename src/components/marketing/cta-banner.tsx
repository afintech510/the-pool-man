import { ButtonLink } from "../ui/button";
import { Container } from "../ui/container";

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
    <section className="bg-gradient-to-r from-pool-900 via-pool-800 to-water-900 py-16 border-t border-slate-800">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
          <p className="mt-3 text-lg text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href={buttonHref} size="lg">
              {buttonText}
            </ButtonLink>
            <a
              href="tel:+16318787796"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Or call (631) 878-7796
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
