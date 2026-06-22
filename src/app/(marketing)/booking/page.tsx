import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a free on-site pool consultation with The Pool Man. We'll assess your pool and give you an honest recommendation.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-pool-900 to-pool-950 py-12 sm:py-16">
        <Container>
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
          <div className="lg:col-span-2">
            {/* Cal.com embed goes here once provisioned */}
            <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
              <p className="text-slate-500 text-lg font-medium">
                Booking calendar
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Cal.com embed will be integrated here (F-006)
              </p>
              <p className="mt-6 text-slate-600">
                In the meantime, call us directly:
              </p>
              <a
                href="tel:+16315551234"
                className="mt-2 text-2xl font-bold text-pool-600 hover:text-pool-700"
              >
                (631) 555-1234
              </a>
            </div>
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
