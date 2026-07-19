import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  pageSeo,
  breadcrumbJsonLd,
  SITE_URL,
  SITE_NAME,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { CtaBanner } from "@/components/marketing/cta-banner";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const base = pageSeo({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  const postJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.heading,
      description: post.description,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${post.slug}`,
      },
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo-new.png`,
        },
      },
    },
    breadcrumbJsonLd(`/blog/${post.slug}`),
  ];

  return (
    <>
      <JsonLd data={postJsonLd} />

      <article>
        {/* Header */}
        <div className="bg-pool-950 py-14 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              <Link
                href="/blog"
                className="text-sm font-medium text-water-300 hover:text-white"
              >
                &larr; Pool Care Blog
              </Link>
              <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                {post.heading}
              </h1>
              <div className="mt-4 flex items-center gap-3 text-sm text-pool-300">
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-medium text-pool-100">
                  {post.category}
                </span>
                <time dateTime={post.datePublished}>
                  {formatDate(post.datePublished)}
                </time>
                <span>&middot;</span>
                <span>{post.readMinutes} min read</span>
              </div>
            </div>
          </Container>
        </div>

        {/* Body */}
        <Container className="py-14 sm:py-16">
          <div className="blog-content max-w-3xl">
            <post.Body />
          </div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <div className="mt-16 max-w-3xl border-t border-slate-200 pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Keep reading
              </h2>
              <ul className="mt-4 space-y-3">
                {otherPosts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-pool-600 font-medium hover:text-pool-700"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </article>

      <CtaBanner
        title="Ready to talk to a real pool pro?"
        description="Book a free on-site consultation with Kevin — no pressure, no obligation, just honest advice."
      />
    </>
  );
}
