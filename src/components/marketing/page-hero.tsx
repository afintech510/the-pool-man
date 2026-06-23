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
    <section className="bg-slate-950 py-16 sm:py-20 border-b border-slate-800">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold text-pool-400 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed max-w-2xl">
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
