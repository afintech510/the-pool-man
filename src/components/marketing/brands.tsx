import Image from "next/image";
import { Container } from "../ui/container";

const brands = [
  {
    name: "Hayward",
    url: "https://www.hayward.com",
    logo: "/images/brand-hayward.svg",
  },
  {
    name: "Pentair",
    url: "https://www.pentair.com",
    logo: "/images/brand-pentair.svg",
  },
  {
    name: "Jandy",
    url: "https://www.jandy.com",
    logo: "/images/brand-jandy.svg",
  },
  {
    name: "Zodiac",
    url: "https://www.zodiacpoolsystems.com",
    logo: "/images/brand-zodiac.svg",
  },
  {
    name: "Raypak",
    url: "https://www.raypak.com",
    logo: "/images/brand-raypak.svg",
  },
  {
    name: "Polaris",
    url: "https://www.polarispool.com",
    logo: "/images/brand-polaris.svg",
  },
];

export function Brands() {
  return (
    <section className="py-10 border-y border-slate-200">
      <Container>
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted Manufacturers We Install &amp; Service
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-2 py-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={80}
                className="w-full max-h-14 sm:max-h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
