import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Every indexable page on the site. The brief's original 4-URL list was written
 * against the old 5-page Wix brochure; this site has ~23 real pages, so we list
 * them all. /thank-you is intentionally excluded (noindex + robots disallow).
 */
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/weekly-maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/openings-closings", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/pool-covers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services/pool-repairs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/construction", priority: 0.9, changeFrequency: "monthly" },
  { path: "/vinyl-liners", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pool-heaters", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pool-heaters/gas-heaters", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pool-heaters/heat-pumps", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pool-heaters/heater-repair", priority: 0.7, changeFrequency: "monthly" },
  { path: "/pool-heaters/heater-replacement", priority: 0.7, changeFrequency: "monthly" },
  { path: "/installation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/installation/salt-water-systems", priority: 0.7, changeFrequency: "monthly" },
  { path: "/installation/pumps", priority: 0.7, changeFrequency: "monthly" },
  { path: "/installation/led-lighting", priority: 0.7, changeFrequency: "monthly" },
  { path: "/locations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/emergency", priority: 0.8, changeFrequency: "monthly" },
  { path: "/shop", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.7, changeFrequency: "monthly" },
  { path: "/booking", priority: 0.9, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
