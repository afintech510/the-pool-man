import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Blog content lives here as typed data with JSX bodies, so posts can carry
 * inline internal links (to service pages and the booking CTA) while the route
 * files stay generic. Add a post by appending to `blogPosts`.
 *
 * Pricing rule: no hard dollar figures unless Kevin/Toni confirm real numbers.
 * These posts give cost-factor guidance instead.
 */
export type BlogPost = {
  slug: string;
  /** SEO <title>. */
  title: string;
  /** On-page H1. */
  heading: string;
  /** Meta description + OG description. */
  description: string;
  /** Card summary on the blog index. */
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readMinutes: number;
  Body: () => ReactNode;
};

// Shared inline-link helper so post bodies read cleanly.
function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="text-pool-600 font-medium hover:text-pool-700 underline underline-offset-2">
      {children}
    </Link>
  );
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cost-to-open-a-pool-suffolk-county",
    title: "How Much Does It Cost to Open a Pool in Suffolk County?",
    heading: "How Much Does It Cost to Open a Pool in Suffolk County?",
    description:
      "What goes into the cost of a spring pool opening on Long Island, what's included, and when to book. Straight talk from The Pool Man in Center Moriches.",
    excerpt:
      "What actually drives the price of a spring opening on Long Island, what a proper opening includes, and why booking early matters.",
    category: "Seasonal",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readMinutes: 4,
    Body: () => (
      <>
        <p>
          Every spring we get the same question: &ldquo;What&apos;s it going to
          cost to open my pool?&rdquo; It&apos;s a fair one — and the honest
          answer is that it depends on a handful of things about your specific
          pool. Let me walk you through what actually moves the number so you
          know what you&apos;re paying for.
        </p>
        <h2>What&apos;s included in a real opening</h2>
        <p>
          A proper opening is more than pulling the cover off and turning the
          pump on. When we open a pool, we remove and inspect the winter cover,
          reinstall ladders, rails, and fittings, prime and start the pump and
          filter, inspect the heater and salt cell, add the first round of
          chemicals, balance the water, and brush and vacuum the surfaces. Then
          we run a full system check to make sure everything is actually
          working before we leave. You can see the whole checklist on our{" "}
          <A href="/services/openings-closings">openings &amp; closings page</A>.
        </p>
        <h2>What drives the cost</h2>
        <p>Four things mostly determine what an opening runs:</p>
        <ul>
          <li>
            <strong>Pool size and type.</strong> A larger pool takes more
            chemicals and more time. Gunite, vinyl, and pools with attached spas
            each have their own quirks.
          </li>
          <li>
            <strong>Water condition.</strong> A pool that was closed properly in
            the fall opens clean and fast. A pool that turned into a swamp over
            the winter needs extra shock, extra filtering, and sometimes a
            multi-day recovery — that&apos;s more work than a routine opening.
          </li>
          <li>
            <strong>Equipment.</strong> Heaters, salt systems, and automation
            all need to be checked and started. If something didn&apos;t
            survive the winter, that&apos;s a separate repair.
          </li>
          <li>
            <strong>Cover type.</strong> A safety cover takes more time to
            remove and store than a basic winter cover.
          </li>
        </ul>
        <p>
          This is exactly why we don&apos;t quote openings sight-unseen. We&apos;d
          rather look at your pool and give you a real number than throw out a
          figure that changes the moment we arrive.
        </p>
        <h2>The best money-saver: close it right</h2>
        <p>
          The single biggest thing you can do to keep opening costs down is to
          have the pool <em>closed</em> correctly in the fall. A pool that was
          winterized properly — lines blown out, chemistry set, cover secured —
          opens cleaner, faster, and cheaper every single spring. Cutting
          corners in October always costs more in May.
        </p>
        <h2>When to book</h2>
        <p>
          Book early. Opening spots fill fast once the weather turns, and we ask
          for about two weeks&apos; notice to get your pool swim-ready on time.
          If you want to be in the water for Memorial Day weekend, don&apos;t
          wait until mid-May to call.
        </p>
        <p>
          Ready to get on the schedule?{" "}
          <A href="/booking">Book your spring opening</A> or give us a call at{" "}
          <a href="tel:+16318787796" className="text-pool-600 font-medium hover:text-pool-700 underline underline-offset-2">
            (631) 878-7796
          </a>
          . We&apos;ll get your pool open and running right.
        </p>
      </>
    ),
  },
  {
    slug: "gunite-vs-vinyl-pool-cost-long-island",
    title: "Gunite vs. Vinyl Pool Cost on Long Island: What You'll Actually Pay",
    heading: "Gunite vs. Vinyl Pool Cost on Long Island: What You'll Actually Pay",
    description:
      "A cost-focused breakdown of gunite vs. vinyl inground pools on Long Island — upfront price, long-term costs, and which makes sense for your budget.",
    excerpt:
      "Beyond the design debate: how gunite and vinyl inground pools really compare on upfront price and long-term cost.",
    category: "Construction",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readMinutes: 5,
    Body: () => (
      <>
        <p>
          When homeowners on Long Island start planning an inground pool, the
          first real fork in the road is gunite versus vinyl. Plenty of articles
          cover the design differences. This one is about the money — upfront and
          over time — because that&apos;s usually what tips the decision.
        </p>
        <h2>Upfront cost</h2>
        <p>
          As a rule, a <strong>vinyl</strong> inground pool costs less upfront
          than a comparable <strong>gunite</strong> (concrete/shotcrete) pool.
          You&apos;re getting a steel or polymer wall structure with a vinyl
          liner surface, and the build timeline is typically shorter, which
          keeps labor down. That lower entry point is the main reason vinyl is
          so popular here.
        </p>
        <p>
          Gunite costs more to build because it&apos;s a fully custom,
          steel-reinforced concrete shell that can be shaped into any size,
          depth, or form and finished with plaster, pebble, or tile. You&apos;re
          paying for permanence and unlimited design freedom. We break down both
          on our <A href="/construction">pool construction page</A>.
        </p>
        <h2>The long-term math is where it gets interesting</h2>
        <p>
          Upfront price is only half the story. Over the life of the pool, the
          two diverge:
        </p>
        <ul>
          <li>
            <strong>Vinyl liners get replaced.</strong> A liner has a finite
            lifespan — plan on replacing it every so often over the years.
            That&apos;s a recurring, predictable cost. The upside: a fresh liner
            makes the pool look brand new, and replacement is straightforward.
            See our <A href="/vinyl-liners">vinyl liner installation page</A>.
          </li>
          <li>
            <strong>Gunite is resurfaced, not relined.</strong> A gunite shell
            can last 50+ years structurally, but the interior finish is
            refreshed periodically. Those intervals are typically longer than a
            liner&apos;s, but each resurfacing is a bigger job.
          </li>
          <li>
            <strong>Everyday costs are similar.</strong> Chemicals, electricity,
            and weekly service don&apos;t differ dramatically between the two —
            they scale with pool size more than surface type.
          </li>
        </ul>
        <h2>So which is &ldquo;cheaper&rdquo;?</h2>
        <p>
          If your priority is the lowest upfront number and a faster build,
          vinyl usually wins. If you want a fully custom shape, maximum
          longevity, and you plan to stay in the home for decades, gunite can be
          the better lifetime value despite the higher starting price. Neither is
          &ldquo;the cheap option&rdquo; or &ldquo;the expensive option&rdquo; in
          every case — it depends on your yard, your plans, and how long you&apos;ll
          own the pool.
        </p>
        <p>
          We don&apos;t push one over the other. Kevin will look at your
          property and your budget and give you a straight recommendation.{" "}
          <A href="/booking">Book a free on-site consultation</A> and we&apos;ll
          give you real numbers for your specific project.
        </p>
      </>
    ),
  },
  {
    slug: "signs-your-pool-heater-needs-repair",
    title: "5 Signs Your Pool Heater Needs Repair (Before It Fails Completely)",
    heading: "5 Signs Your Pool Heater Needs Repair (Before It Fails Completely)",
    description:
      "Catch pool heater problems early. Five warning signs — short cycling, rising bills, uneven heating, ignition trouble, and odd noises — that mean it's time to call.",
    excerpt:
      "Five early warning signs that your pool heater is headed for a breakdown — and what each one usually means.",
    category: "Pool Heaters",
    datePublished: "2026-07-18",
    dateModified: "2026-07-18",
    readMinutes: 4,
    Body: () => (
      <>
        <p>
          A pool heater rarely dies without warning. It usually drops hints for
          weeks first — you just have to know what to listen for. Catch these
          early and you&apos;re looking at a small repair. Ignore them and
          you&apos;re looking at a dead heater on the first cool weekend of the
          fall. Here are the five signs we tell every customer to watch for.
        </p>
        <h2>1. Short cycling</h2>
        <p>
          If your heater fires up, runs for a minute or two, shuts off, then
          starts again in a loop, that&apos;s short cycling. It&apos;s often a
          flow problem, a sensor issue, or a heat-exchanger warning trying to
          protect the unit. Short cycling wears components out fast, so
          don&apos;t let it run like that.
        </p>
        <h2>2. Rising energy or gas bills</h2>
        <p>
          A heater that&apos;s losing efficiency has to work harder to hit the
          same temperature, and that shows up on your bill. If your heating
          costs are creeping up without a change in how you use the pool,
          something inside isn&apos;t performing the way it should.
        </p>
        <h2>3. Uneven or weak heating</h2>
        <p>
          The pool takes forever to warm up, or it just never quite reaches the
          temperature it used to. Weak heating can point to scaling in the heat
          exchanger, a failing component, or a unit that&apos;s simply near the
          end of its life. It only gets worse from here.
        </p>
        <h2>4. Ignition or pilot trouble</h2>
        <p>
          On a gas heater, trouble lighting, a pilot that won&apos;t stay lit, or
          repeated ignition-lockout error codes are classic early-failure signs.
          These are also the ones you don&apos;t want to guess at — anything
          involving gas and ignition should be handled by a pro.
        </p>
        <h2>5. Odd noises or smells</h2>
        <p>
          Banging, rumbling, or whistling from the heater often means scaling,
          restricted flow, or a combustion problem. Any burning or gas smell
          near the unit is a stop-everything-and-call situation. Healthy heaters
          run quietly and odor-free.
        </p>
        <h2>Don&apos;t wait for it to quit</h2>
        <p>
          The theme with all five is the same: these are the cheap-to-fix stage
          of a problem that gets expensive when you ignore it. If your heater is
          doing any of these, have it looked at now — not on the first cold
          weekend when everyone else&apos;s is failing too.
        </p>
        <p>
          We diagnose and repair heat pumps and gas heaters across all major
          brands. Learn more about our{" "}
          <A href="/pool-heaters">pool heater service</A>, and if you&apos;re
          weighing repair against a new unit, our{" "}
          <A href="/pool-heaters/heater-installation">heater installation page</A>{" "}
          covers that decision.{" "}
          <A href="/booking">Book a consultation</A> or call{" "}
          <a href="tel:+16318787796" className="text-pool-600 font-medium hover:text-pool-700 underline underline-offset-2">
            (631) 878-7796
          </a>
          .
        </p>
      </>
    ),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
