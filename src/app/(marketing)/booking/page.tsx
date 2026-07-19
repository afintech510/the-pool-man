import { pageSeo, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CalcomEmbed } from "@/components/marketing/calcom-embed";
import { BookingConversion } from "@/components/analytics/booking-conversion";
import { WaveBackground } from "@/components/ui/wave-bg";

export const metadata = pageSeo({
  title: "Book a Free Consultation",
  description:
    "Schedule a free on-site pool consultation with The Pool Man. We'll assess your pool and give you an honest recommendation.",
  path: "/booking",
});

const bookingJsonLd = breadcrumbJsonLd("/booking");

export default function BookingPage() {
  return (
    <>
      <JsonLd data={bookingJsonLd} />
      <BookingConversion />
      <section className="relative bg-pool-950 py-12 sm:py-16 overflow-hidden">
        <WaveBackground />
        <Container className="relative">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Book a free consultation
            </h1>
            <p className="mt-3 text-lg text-pool-200">
              Schedule a time and we&apos;ll come out, assess your pool, and give you
              an honest recommendation. No pressure, no obligation.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 min-h-[600px]">
            <CalcomEmbed calLink="kevin-the-pool-man/pool-consultation" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              What to expect
            </h2>
            <div className="mt-4 space-y-6">
              {[
                {
                  title: "Free on-site visit",
                  description:
                    "Kevin will come to your home, look at your pool and equipment, and discuss what you're looking for.",
                },
                {
                  title: "Honest assessment",
                  description:
                    "You'll get a straight answer — what needs attention, what doesn't, and your options. No upselling.",
                },
                {
                  title: "Clear next steps",
                  description:
                    "If you want to move forward, you'll know exactly what we'll do, when, and how much it costs.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-medium text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-pool-50 rounded-lg">
              <h3 className="text-sm font-semibold text-pool-800">
                Service area
              </h3>
              <p className="mt-1 text-sm text-pool-700">
                We serve Center Moriches and surrounding Eastern Suffolk County
                towns. Your zip code will be checked during booking.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
