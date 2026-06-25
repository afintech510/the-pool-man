import { Container } from "../ui/container";

const brands = [
  {
    name: "Hayward",
    url: "https://www.hayward.com",
    logo: "https://logo.clearbit.com/hayward.com",
  },
  {
    name: "Pentair",
    url: "https://www.pentair.com",
    logo: "https://logo.clearbit.com/pentair.com",
  },
  {
    name: "Jandy",
    url: "https://www.jandy.com",
    logo: "https://logo.clearbit.com/jandy.com",
  },
  {
    name: "Zodiac",
    url: "https://www.zodiacpoolsystems.com",
    logo: "https://logo.clearbit.com/zodiacpoolsystems.com",
  },
  {
    name: "Raypak",
    url: "https://www.raypak.com",
    logo: "https://logo.clearbit.com/raypak.com",
  },
  {
    name: "Polaris",
    url: "https://www.polarispool.com",
    logo: "https://logo.clearbit.com/polarispool.com",
  },
];

export function Brands() {
  return (
    <section className="py-10 border-y border-slate-200">
      <Container>
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
          Trusted Manufacturers We Install &amp; Service
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                width={48}
                height={48}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain grayscale group-hover:grayscale-0 transition-all"
              />
              <span className="text-xs font-medium text-slate-500 group-hover:text-slate-900 transition-colors">
                {brand.name}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
