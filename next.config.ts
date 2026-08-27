import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },

  async redirects() {
    return [
      // Wix used /customer-reviews for its testimonials page. This site's
      // equivalent lives at /reviews... which we serve at /testimonials, so we
      // fold both legacy/aliased paths into the canonical /testimonials route.
      { source: "/customer-reviews", destination: "/testimonials", permanent: true },
      { source: "/reviews", destination: "/testimonials", permanent: true },

      // Wix's post-contact-form confirmation page. This site shows an inline
      // success state on /contact instead of a separate route.
      { source: "/thank-you", destination: "/contact", permanent: true },

      // Retired paths from the old Wix site go here as we confirm them from the
      // 301 map. Add as { source, destination, permanent: true }.
      // e.g. { source: "/old-path", destination: "/new-path", permanent: true },
    ];
  },

  // NOTE: apex->www and http->https normalization are intentionally NOT handled
  // here. Those redirects are enforced at Cloudflare in front of the origin.
};

export default nextConfig;
