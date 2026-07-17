import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { pageSeo, SITE_NAME, SITE_URL } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { WaveBackground } from "@/components/ui/wave-bg";
import { ContactForm } from "@/components/marketing/contact-form";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata = pageSeo({
  title: "Contact The Pool Man",
  description:
    "Get in touch with The Pool Man in Center Moriches, NY. Send us a quick note, call (631) 878-7796, or stop by our counter. Serving Eastern Suffolk County.",
  path: "/contact",
});

const ADDRESS = "110 Frowein Rd, Center Moriches, NY 11934";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_NAME}, ${ADDRESS}`)}`;

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  url: SITE_URL,
  telephone: "+1-631-878-7796",
  email: "info@kevinthepoolman.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "110 Frowein Rd",
    addressLocality: "Center Moriches",
    addressRegion: "NY",
    postalCode: "11934",
    addressCountry: "US",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />

      <section className="relative bg-pool-950 py-12 sm:py-16 overflow-hidden">
        <WaveBackground />
        <Container className="relative">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-water-300 uppercase tracking-wide">
              Contact Us
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s talk about your pool
            </h1>
            <p className="mt-3 text-lg text-pool-200 leading-relaxed">
              Send a quick note and we&apos;ll get right back to you. Prefer to
              talk? Call or stop by our counter in Center Moriches.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
            <p className="mt-2 text-slate-600">
              Tell us what you need — service, a new build, a liner, a heater, or
              just a question. We read every message.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* Details + map */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Reach us directly</h2>
            <div className="mt-6 space-y-5">
              <ContactRow icon={<Phone className="h-5 w-5" />} label="Phone">
                <a href="tel:+16318787796" className="text-pool-700 hover:text-pool-800 font-medium">
                  (631) 878-7796
                </a>
              </ContactRow>
              <ContactRow icon={<Mail className="h-5 w-5" />} label="Email">
                <a href="mailto:info@kevinthepoolman.com" className="text-pool-700 hover:text-pool-800 font-medium">
                  info@kevinthepoolman.com
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="h-5 w-5" />} label="Visit">
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-pool-700">
                  110 Frowein Rd
                  <br />
                  Center Moriches, NY 11934
                </a>
              </ContactRow>
              <ContactRow icon={<Clock className="h-5 w-5" />} label="Hours">
                <span className="text-slate-700">
                  Mon–Fri, 8am–5pm
                  <br />
                  Seasonal Saturday hours
                </span>
              </ContactRow>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title="The Pool Man location map"
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72"
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-pool-600 hover:text-pool-700"
            >
              Get directions &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-pool-50 text-pool-600">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <div className="mt-0.5 text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
