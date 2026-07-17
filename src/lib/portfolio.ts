/**
 * Single source of truth for the "Our Work" portfolio. Consumed by the gallery
 * (`/our-work`), the homepage "Recent Builds" strip, the construction-page
 * projects band, and the ImageGallery JSON-LD. Construction items are ordered
 * first so every consumer leads with new builds.
 *
 * All images live in /public/images/portfolio and were web-optimized from
 * Kevin's real jobs (see .tmp-imgproc, not shipped). `orientation` lets the
 * gallery lay out portrait vs landscape tiles without measuring at runtime.
 */
export const categories = [
  "New Construction",
  "Water Features",
  "Renovations & Vinyl",
  "The Build Process",
] as const;

export type PortfolioCategory = (typeof categories)[number];

export type PortfolioItem = {
  src: string;
  alt: string;
  category: PortfolioCategory;
  orientation: "portrait" | "landscape";
};

export const portfolioItems: PortfolioItem[] = [
  // ── New Construction ──────────────────────────────────────────────
  {
    src: "/images/portfolio/construction-shingle-house.jpg",
    alt: "Custom gunite inground pool with sheer descent water feature behind a shingle-style Suffolk County home",
    category: "New Construction",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/construction-travertine-rect.jpg",
    alt: "Modern rectangular gunite pool with travertine deck and clean coping",
    category: "New Construction",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/construction-bluestone-modern.jpg",
    alt: "Contemporary rectangular pool with bluestone coping and a wide sun deck",
    category: "New Construction",
    orientation: "landscape",
  },
  {
    src: "/images/portfolio/construction-tanning-ledge.jpg",
    alt: "New gunite pool with in-water lounge chairs on a sun-shelf tanning ledge",
    category: "New Construction",
    orientation: "landscape",
  },
  {
    src: "/images/portfolio/construction-wood-deck.jpg",
    alt: "Inground pool framed by a natural wood deck and lush landscaping",
    category: "New Construction",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/construction-ipe-deck.jpg",
    alt: "Custom pool surrounded by an ipe hardwood deck and manicured plantings",
    category: "New Construction",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/construction-paver-patio.jpg",
    alt: "Inground pool with a paver patio surround and integrated landscaping",
    category: "New Construction",
    orientation: "portrait",
  },
  // ── Water Features ────────────────────────────────────────────────
  {
    src: "/images/portfolio/feature-inpool-loungers.jpg",
    alt: "Tanning ledge with built-in loungers and a deck-jet water feature",
    category: "Water Features",
    orientation: "landscape",
  },
  {
    src: "/images/portfolio/feature-bubblers-closeup.jpg",
    alt: "Close-up of bubbler jets on a sun-shelf tanning ledge",
    category: "Water Features",
    orientation: "landscape",
  },
  {
    src: "/images/portfolio/feature-spa-deckjets.jpg",
    alt: "Raised spa spilling into the pool with arcing deck-jet water features",
    category: "Water Features",
    orientation: "landscape",
  },
  {
    src: "/images/portfolio/feature-stone-waterfall.jpg",
    alt: "Natural stone waterfall feature cascading into an inground pool",
    category: "Water Features",
    orientation: "portrait",
  },
  // ── Renovations & Vinyl ───────────────────────────────────────────
  {
    src: "/images/portfolio/vinyl-blue-liner.jpg",
    alt: "Fresh vinyl liner replacement with a crisp blue pattern and clean waterline tile",
    category: "Renovations & Vinyl",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/vinyl-freeform-kidney.jpg",
    alt: "Freeform kidney-shaped vinyl pool with a new liner and surrounding patio",
    category: "Renovations & Vinyl",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/reno-shed-loungers.jpg",
    alt: "Renovated backyard pool with poolside loungers and a garden shed",
    category: "Renovations & Vinyl",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/reno-lap-garden.jpg",
    alt: "Renovated lap pool set into a landscaped garden",
    category: "Renovations & Vinyl",
    orientation: "portrait",
  },
  // ── The Build Process ─────────────────────────────────────────────
  {
    src: "/images/portfolio/process-concrete-work.jpg",
    alt: "The Pool Man crew troweling concrete decking during a pool build",
    category: "The Build Process",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/lifestyle-splash.jpg",
    alt: "Kids leaping into a finished backyard pool on a summer day",
    category: "The Build Process",
    orientation: "portrait",
  },
  {
    src: "/images/portfolio/lifestyle-splash-vintage.jpg",
    alt: "A family enjoying a cannonball splash in their pool",
    category: "The Build Process",
    orientation: "portrait",
  },
];

/** Construction-led subset for compact strips (homepage / construction page). */
export const featuredItems: PortfolioItem[] = portfolioItems
  .filter(
    (i) => i.category === "New Construction" || i.category === "Water Features",
  )
  .slice(0, 6);
