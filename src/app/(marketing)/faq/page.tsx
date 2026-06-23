import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about pool construction, maintenance, permits, financing, and more from The Pool Man in Center Moriches, NY.",
};

const faqs = [
  {
    category: "Construction",
    questions: [
      {
        q: "Do I need to get a permit? If so, how?",
        a: "Towns may require surveys of the property before applying for a permit. Check your local township to see the timeline that applies. Prior to swimming pool construction, a permit must be obtained through your town. The Pool Man can assist with the process.",
      },
      {
        q: "How do I know what type and size pool would be suitable in my backyard?",
        a: "At The Pool Man, we will help design the pool that fits perfectly in your yard for the backyard of your dreams. Pools can be customized in all shapes and sizes for all yards.",
      },
      {
        q: "Does The Pool Man build in my area?",
        a: "The Pool Man focuses on building pools in the South Shores of Eastern Suffolk County, Long Island.",
      },
      {
        q: "How much time does it take to build a pool?",
        a: "The average time to build a pool is around 4–6 weeks. After designing, acquiring permits, excavating, and installation you can enjoy your new pool.",
      },
      {
        q: "What happens to my driveway or backyard during the construction process?",
        a: "The construction site needs to be accessible. The homeowner would need to provide access to your driveway if it leads into the backyard.",
      },
      {
        q: "Am I required to put signage out in front of my house when building a pool?",
        a: "Swimming pool permits need to be displayed, but it can differ from each town.",
      },
      {
        q: "How noisy is construction? What hours will the crew be at my house?",
        a: "The construction could become noisy at times during the process. The crew will normally arrive between the hours of 8 AM–5 PM. We recommend you let your neighbors know that the project will be going on.",
      },
      {
        q: "What obstacles can occur when excavating your pool?",
        a: "Several conditions can slow or impact pool construction. Some examples include tree roots, a high water table, buried utility lines that were not reported, septic systems, and other ground conditions.",
      },
      {
        q: "What are the first steps in building a pool?",
        a: "Signing an agreed contract, obtaining a permit, and then breaking ground.",
      },
      {
        q: "Is there an average/general price to build a pool?",
        a: "Swimming pool prices vary depending on size, materials, labor, etc. To get a more accurate estimate for your project, call our office at (631) 878-7796.",
      },
      {
        q: "Do I get to customize the pool in the design process?",
        a: "Yes, Kevin will work closely with you throughout the entire process.",
      },
      {
        q: "How long does it take to get a permit?",
        a: "It will vary depending on your jurisdiction.",
      },
      {
        q: "From start to finish, when will we be able to swim in the pool?",
        a: "As soon as the construction has been completed and the pool has been filled, you will be able to swim.",
      },
    ],
  },
  {
    category: "Safety & Requirements",
    questions: [
      {
        q: "Are ladders required?",
        a: "Not necessarily, but a deep end egress is required by the town for safely getting out of the pool or to rest.",
      },
      {
        q: "Is a fence required around my pool?",
        a: "A fence or barrier needs to be either around the property or swimming pool to provide a layer of protection.",
      },
      {
        q: "What are some additional safety requirements for families with children?",
        a: "Pool alarms, fences, and flotation devices.",
      },
      {
        q: "Will a pool increase the value of my home?",
        a: "Contact an appraiser to find out more details about your property.",
      },
    ],
  },
  {
    category: "Maintenance & Service",
    questions: [
      {
        q: "How often do I need to maintain my pool?",
        a: "Weekly maintenance is suggested. You can call (631) 878-7796 for more information to see if The Pool Man can assist with your pool’s maintenance.",
      },
      {
        q: "Does The Pool Man remodel older pools?",
        a: "Yes we do! Give us a call to discuss your renovation project.",
      },
      {
        q: "How long does it take to open or close a pool?",
        a: "Generally, it takes a week to open and get ready to swim. Closing your pool for the season can take a few hours.",
      },
      {
        q: "Does The Pool Man provide maintenance throughout the season?",
        a: "Yes, depending upon your location we can offer weekly maintenance. If you are out of our immediate area we can recommend a local service to you.",
      },
      {
        q: "Does The Pool Man open, close, build, and service above ground pools?",
        a: "No, The Pool Man does not service above ground pools.",
      },
    ],
  },
  {
    category: "Financing",
    questions: [
      {
        q: "Is financing available to build a pool?",
        a: "Yes, The Pool Man works with HFS (Home Finance Specialists) to provide financing. Rates as low as 2.99%, loans up to $250,000, terms up to 20 years. Inquiry does not affect your credit.",
      },
      {
        q: "Does The Pool Man offer free estimates for pool construction?",
        a: "Yes! Reach out at (631) 878-7796 or info@kevinthepoolman.com to set up a time.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to common questions about pool construction, maintenance, permits, financing, and more."
        ctaText="Call (631) 878-7796"
        ctaHref="tel:+16318787796"
      />

      <Section>
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                {section.category}
              </h2>
              <dl className="mt-4 space-y-6">
                {section.questions.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-semibold text-slate-900">{faq.q}</dt>
                    <dd className="mt-1 text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Still have questions?"
        description="Give us a call or book a free consultation. Kevin is happy to answer any questions about your pool project."
      />
    </>
  );
}
