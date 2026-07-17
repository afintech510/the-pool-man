import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /thank-you is a post-submission confirmation page — keep it out of the
      // index. (There is intentionally NO global "Disallow: /".)
      disallow: ["/thank-you"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
