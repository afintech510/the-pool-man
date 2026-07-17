/**
 * Single source of truth for the "Our Work" portfolio. Consumed by the gallery
 * (`/our-work`), the homepage "Recent Builds" strip, the construction-page
 * projects band, and the ImageGallery JSON-LD. Construction items are ordered
 * first so every consumer leads with new builds.
 *
 * All images live in /public/images/portfolio and were web-optimized from
 * Kevin's real jobs (see .tmp-imgproc, not shipped). `orientation` lets the
 * gallery lay out portrait vs landscape tiles without measuring at runtime.
 *
 * `title` / `summary` / `specs` power the project-detail view. They describe
 * what's visible in each photo (materials, features, setting) — no invented
 * dimensions, towns, or client names.
 */
export const categories = [
  "New Construction",
  "Water Features",
  "Renovations & Vinyl",
  "The Build Process",
] as const;

export type PortfolioCategory = (typeof categories)[number];

export type PortfolioSpec = { label: string; value: string };

export type PortfolioItem = {
  src: string;
  alt: string;
  category: PortfolioCategory;
  orientation: "portrait" | "landscape";
  title: string;
  summary: string;
  specs: PortfolioSpec[];
};

export const portfolioItems: PortfolioItem[] = [
  // ── New Construction ──────────────────────────────────────────────
  {
    src: "/images/portfolio/construction-shingle-house.jpg",
    alt: "Custom gunite inground pool with sheer descent water feature behind a shingle-style Suffolk County home",
    category: "New Construction",
    orientation: "portrait",
    title: "Backyard gunite pool & water feature",
    summary:
      "A clean rectangular gunite pool set into a manicured lawn behind a classic shingle-style home, finished with a sheer-descent water feature and paver surround.",
    specs: [
      { label: "Type", value: "Gunite, in-ground" },
      { label: "Water feature", value: "Sheer descent" },
      { label: "Deck", value: "Paver patio" },
      { label: "Setting", value: "Residential backyard" },
    ],
  },
  {
    src: "/images/portfolio/construction-travertine-rect.jpg",
    alt: "Modern rectangular gunite pool with travertine deck and clean coping",
    category: "New Construction",
    orientation: "portrait",
    title: "Rectangular pool with travertine deck",
    summary:
      "A modern rectangular pool wrapped in a travertine deck with crisp coping — a timeless, low-glare surround that stays cool underfoot.",
    specs: [
      { label: "Type", value: "In-ground" },
      { label: "Deck", value: "Travertine" },
      { label: "Coping", value: "Clean-edge" },
      { label: "Style", value: "Modern rectangular" },
    ],
  },
  {
    src: "/images/portfolio/construction-bluestone-modern.jpg",
    alt: "Contemporary rectangular pool with bluestone coping and a wide sun deck",
    category: "New Construction",
    orientation: "landscape",
    title: "Modern pool with bluestone deck",
    summary:
      "A contemporary rectangular build with a bluestone deck and a raised spillway water feature, framed by lush privacy plantings and lounge seating.",
    specs: [
      { label: "Type", value: "Gunite, in-ground" },
      { label: "Deck", value: "Bluestone" },
      { label: "Water feature", value: "Raised spillway" },
      { label: "Setting", value: "Private, wooded" },
    ],
  },
  {
    src: "/images/portfolio/construction-tanning-ledge.jpg",
    alt: "New gunite pool with in-water lounge chairs on a sun-shelf tanning ledge",
    category: "New Construction",
    orientation: "landscape",
    title: "Gunite pool with tanning ledge",
    summary:
      "A new gunite pool featuring a sun-shelf tanning ledge with in-water loungers, bordered by ornamental grasses and a natural wood privacy fence.",
    specs: [
      { label: "Type", value: "Gunite, in-ground" },
      { label: "Feature", value: "Tanning ledge / sun shelf" },
      { label: "Deck", value: "Stone" },
      { label: "Extras", value: "In-water loungers" },
    ],
  },
  {
    src: "/images/portfolio/construction-wood-deck.jpg",
    alt: "Inground pool framed by a natural wood deck and lush landscaping",
    category: "New Construction",
    orientation: "portrait",
    title: "Pool with natural wood deck",
    summary:
      "An inground pool framed by a warm natural-wood deck and layered plantings — a resort feel in a residential backyard.",
    specs: [
      { label: "Type", value: "In-ground" },
      { label: "Deck", value: "Natural wood" },
      { label: "Setting", value: "Landscaped backyard" },
    ],
  },
  {
    src: "/images/portfolio/construction-ipe-deck.jpg",
    alt: "Custom pool surrounded by an ipe hardwood deck and manicured plantings",
    category: "New Construction",
    orientation: "portrait",
    title: "Pool with ipe hardwood deck",
    summary:
      "A custom pool surrounded by a rich ipe hardwood deck and manicured beds, blending contemporary lines with natural materials.",
    specs: [
      { label: "Type", value: "In-ground" },
      { label: "Deck", value: "Ipe hardwood" },
      { label: "Style", value: "Contemporary" },
    ],
  },
  {
    src: "/images/portfolio/construction-paver-patio.jpg",
    alt: "Inground pool with a paver patio surround and integrated landscaping",
    category: "New Construction",
    orientation: "portrait",
    title: "Pool with paver patio surround",
    summary:
      "An inground pool set into a full paver patio with integrated landscaping — durable, slip-resistant, and easy to expand over time.",
    specs: [
      { label: "Type", value: "In-ground" },
      { label: "Deck", value: "Paver patio" },
      { label: "Setting", value: "Landscaped" },
    ],
  },
  // ── Water Features ────────────────────────────────────────────────
  {
    src: "/images/portfolio/feature-inpool-loungers.jpg",
    alt: "Tanning ledge with built-in loungers and a deck-jet water feature",
    category: "Water Features",
    orientation: "landscape",
    title: "Tanning ledge with deck jets",
    summary:
      "A sun-shelf tanning ledge with built-in loungers and arcing deck-jet water features — a shallow lounge zone that doubles as a focal point.",
    specs: [
      { label: "Feature", value: "Tanning ledge" },
      { label: "Water feature", value: "Deck jets" },
      { label: "Extras", value: "In-water loungers" },
    ],
  },
  {
    src: "/images/portfolio/feature-bubblers-closeup.jpg",
    alt: "Close-up of bubbler jets on a sun-shelf tanning ledge",
    category: "Water Features",
    orientation: "landscape",
    title: "Bubbler jets on a sun shelf",
    summary:
      "A close-up of bubbler jets on a sun-shelf tanning ledge — gentle water movement that's kid-friendly and visually striking.",
    specs: [
      { label: "Feature", value: "Bubblers" },
      { label: "Location", value: "Sun shelf / tanning ledge" },
    ],
  },
  {
    src: "/images/portfolio/feature-spa-deckjets.jpg",
    alt: "Raised spa spilling into the pool with arcing deck-jet water features",
    category: "Water Features",
    orientation: "landscape",
    title: "Raised spa with deck jets",
    summary:
      "A raised spa spills into the pool below while arcing deck jets frame the water — spa, water feature, and lighting working together.",
    specs: [
      { label: "Feature", value: "Raised spa spillover" },
      { label: "Water feature", value: "Deck jets" },
      { label: "Type", value: "Gunite" },
    ],
  },
  {
    src: "/images/portfolio/feature-stone-waterfall.jpg",
    alt: "Natural stone waterfall feature cascading into an inground pool",
    category: "Water Features",
    orientation: "portrait",
    title: "Natural stone waterfall",
    summary:
      "A natural stone waterfall cascades into the pool, softening modern lines with texture and the sound of moving water.",
    specs: [
      { label: "Feature", value: "Stone waterfall" },
      { label: "Material", value: "Natural stone" },
    ],
  },
  // ── Renovations & Vinyl ───────────────────────────────────────────
  {
    src: "/images/portfolio/vinyl-blue-liner.jpg",
    alt: "Fresh vinyl liner replacement with a crisp blue pattern and clean waterline tile",
    category: "Renovations & Vinyl",
    orientation: "portrait",
    title: "Fresh vinyl liner replacement",
    summary:
      "A crisp blue patterned vinyl liner with clean waterline tile — a renovation that makes an older pool look brand new.",
    specs: [
      { label: "Scope", value: "Liner replacement" },
      { label: "Liner", value: "Patterned vinyl" },
      { label: "Detail", value: "New waterline tile" },
    ],
  },
  {
    src: "/images/portfolio/vinyl-freeform-kidney.jpg",
    alt: "Freeform kidney-shaped vinyl pool with a new liner and surrounding patio",
    category: "Renovations & Vinyl",
    orientation: "portrait",
    title: "Freeform vinyl pool",
    summary:
      "A freeform kidney-shaped vinyl pool with a new liner and surrounding patio — classic curves refreshed for another season.",
    specs: [
      { label: "Shape", value: "Freeform / kidney" },
      { label: "Type", value: "Vinyl" },
      { label: "Scope", value: "New liner" },
    ],
  },
  {
    src: "/images/portfolio/reno-shed-loungers.jpg",
    alt: "Renovated backyard pool with poolside loungers and a garden shed",
    category: "Renovations & Vinyl",
    orientation: "portrait",
    title: "Renovated backyard pool",
    summary:
      "A renovated backyard pool with a new liner, poolside loungers, and a tidy garden shed — a full refresh of a family yard.",
    specs: [
      { label: "Scope", value: "Renovation" },
      { label: "Type", value: "Vinyl" },
      { label: "Setting", value: "Family backyard" },
    ],
  },
  {
    src: "/images/portfolio/reno-lap-garden.jpg",
    alt: "Renovated lap pool set into a landscaped garden",
    category: "Renovations & Vinyl",
    orientation: "portrait",
    title: "Renovated lap pool",
    summary:
      "A renovated lap pool set into a landscaped garden — a slim footprint built for swimming laps with clean, simple lines.",
    specs: [
      { label: "Scope", value: "Renovation" },
      { label: "Style", value: "Lap pool" },
      { label: "Setting", value: "Garden" },
    ],
  },
  // ── The Build Process ─────────────────────────────────────────────
  {
    src: "/images/portfolio/process-concrete-work.jpg",
    alt: "The Pool Man crew troweling concrete decking during a pool build",
    category: "The Build Process",
    orientation: "portrait",
    title: "Concrete deck work in progress",
    summary:
      "A Pool Man crew member hand-troweling a concrete deck during a build — the on-site craftsmanship that goes into every project.",
    specs: [
      { label: "Stage", value: "Deck / concrete work" },
      { label: "Detail", value: "Hand-finished" },
      { label: "Crew", value: "The Pool Man" },
    ],
  },
  {
    src: "/images/portfolio/lifestyle-splash.jpg",
    alt: "Kids leaping into a finished backyard pool on a summer day",
    category: "The Build Process",
    orientation: "portrait",
    title: "Finished pool, summer day",
    summary:
      "Kids leaping into a finished backyard pool — the payoff at the end of a build: a place the whole family actually uses.",
    specs: [
      { label: "Stage", value: "Completed build" },
      { label: "Setting", value: "Residential backyard" },
    ],
  },
  {
    src: "/images/portfolio/lifestyle-splash-vintage.jpg",
    alt: "A family enjoying a cannonball splash in their pool",
    category: "The Build Process",
    orientation: "portrait",
    title: "Family fun in the pool",
    summary:
      "A cannonball splash in a finished pool — three decades of building backyards that families enjoy for years.",
    specs: [
      { label: "Stage", value: "Completed build" },
      { label: "Feeling", value: "Family fun" },
    ],
  },
];

/** Construction-led subset for compact strips (homepage / construction page). */
export const featuredItems: PortfolioItem[] = portfolioItems
  .filter(
    (i) => i.category === "New Construction" || i.category === "Water Features",
  )
  .slice(0, 6);
