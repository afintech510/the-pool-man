import type { Metadata } from "next";

/**
 * Canonical production host. This is the www apex the site cuts over to when it
 * migrates off Wix. All canonical/OpenGraph URLs resolve against this via the
 * root layout's `metadataBase`. (apex->www and http->https normalization is
 * handled at Cloudflare, NOT here.)
 */
export const SITE_URL = "https://www.kevinthepoolman.com";
export const SITE_NAME = "The Pool Man";

type PageSeoInput = {
  /** Page <title> (the "%s" in the root layout title template). */
  title: string;
  /** Meta description — unique, keyword-relevant, non-empty. */
  description: string;
  /** Root-relative path, e.g. "/faq". Used for the self-referencing canonical. */
  path: string;
};

/**
 * Builds page-level Metadata with a self-referencing canonical (resolved against
 * `metadataBase`) and matching OpenGraph tags. Keeps every page consistent so we
 * never ship a page without a canonical or OG block again.
 */
export function pageSeo({ title, description, path }: PageSeoInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
  };
}
