import Link from "next/link";
import { pageSeo, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { blogPosts } from "@/lib/blog";

export const metadata = pageSeo({
  title: "Pool Care Blog — Tips for Long Island Pool Owners",
  description:
    "Practical pool advice from The Pool Man: opening and closing costs, gunite vs. vinyl, heater repair signs, and more — written for Eastern Suffolk County homeowners.",
  path: "/blog",
});

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

const blogIndexJsonLd = breadcrumbJsonLd("/blog");

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={blogIndexJsonLd} />
      <PageHero
        eyebrow="Pool Care Blog"
        title="Straight talk on pool care"
        description="No fluff — just practical advice from 30+ years of building and servicing pools on the South Shore of Eastern Suffolk County."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 hover:border-pool-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-pool-50 px-2.5 py-0.5 font-medium text-pool-700">
                  {post.category}
                </span>
                <span>{post.readMinutes} min read</span>
              </div>
              <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-pool-700 leading-snug">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <time
                  dateTime={post.datePublished}
                  className="text-xs text-slate-400"
                >
                  {formatDate(post.datePublished)}
                </time>
                <span className="text-sm font-medium text-pool-600 group-hover:text-pool-700">
                  Read &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Questions about your pool?"
        description="Skip the guesswork. Book a free consultation and get answers straight from Kevin."
      />
    </>
  );
}
