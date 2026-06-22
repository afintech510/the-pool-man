import { Container } from "../ui/container";
import { ButtonLink } from "../ui/button";

export function PageHero({
  eyebrow,
  title,
  description,
  ctaText = "Book a Free Consultation",
  ctaHref = "/booking",
  secondaryCtaText,
  secondaryCtaHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-pool-900 to-pool-950 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-pool-200 leading-relaxed max-w-2xl">
            {description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <ButtonLink href={ctaHref} size="lg">
              {ctaText}
            </ButtonLink>
            {secondaryCtaText && secondaryCtaHref && (
              <ButtonLink
                href={secondaryCtaHref}
                variant="outline"
                size="lg"
                className="border-pool-400 text-pool-100 hover:bg-pool-800"
              >
                {secondaryCtaText}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
