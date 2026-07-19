/**
 * Per-town service-area content for the /locations/[town] pages.
 *
 * These are the "batch 1" towns with a genuine local relationship to our
 * Center Moriches home base — intentionally kept to real, verifiable geographic
 * facts. Do NOT add fabricated project counts or named-customer claims here; if
 * Kevin confirms real local proof for a town, add it to `localProof`.
 */
export type ServiceArea = {
  name: string;
  slug: string;
  /** Short geo + relationship intro. Rendered under the H1. */
  intro: string;
  /** One line on proximity to home base — reinforces "we're local, we come to you". */
  proximity: string;
  /** Optional confirmed local proof. Leave undefined rather than inventing it. */
  localProof?: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    name: "Center Moriches",
    slug: "center-moriches",
    intro:
      "Center Moriches is our home base — our shop sits at 110 Frowein Rd, right in town. When you call The Pool Man, you're calling a neighbor, not a franchise routing your job through a call center two counties away.",
    proximity:
      "We're based here in Center Moriches, so response times for weekly service, repairs, and emergencies are as fast as it gets.",
  },
  {
    name: "Moriches",
    slug: "moriches",
    intro:
      "Moriches sits right next to our Center Moriches home base, so it's one of the closest towns we serve. From weekly maintenance to a full inground build, we're a short drive from your backyard.",
    proximity:
      "Minutes from our Center Moriches shop — easy for us to fit into weekly routes and quick to reach for repairs.",
  },
  {
    name: "East Moriches",
    slug: "east-moriches",
    intro:
      "East Moriches borders our Center Moriches home base to the east, putting it squarely in our core service area. Whether you need a liner replaced, a heater installed, or a season opening, we're close by.",
    proximity:
      "Right next door to our home base, so scheduling and emergency response are quick and reliable.",
  },
  {
    name: "Eastport",
    slug: "eastport",
    intro:
      "Eastport marks the eastern edge of the Moriches area on the way toward the Hamptons, and it's well within the South Shore territory we serve every week. Pool construction, maintenance, liners, and heaters — we cover all of it here.",
    proximity:
      "A short drive east from our Center Moriches shop and firmly inside our regular service area.",
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}

/** The core services we link out to from each town page (no duplicated copy). */
export const townServices = [
  {
    label: "Weekly Maintenance",
    href: "/services/weekly-maintenance",
    blurb: "Reliable weekly cleaning, water balancing, and equipment checks.",
  },
  {
    label: "Pool Construction",
    href: "/construction",
    blurb: "Custom gunite and vinyl inground pools, spas, and renovations.",
  },
  {
    label: "Vinyl Liner Installation",
    href: "/vinyl-liners",
    blurb: "Precision-measured, zero-wrinkle liner replacement.",
  },
  {
    label: "Pool Heaters",
    href: "/pool-heaters/heater-installation",
    blurb: "Heat pump and gas heater installation to extend your season.",
  },
  {
    label: "Openings & Closings",
    href: "/services/openings-closings",
    blurb: "Seasonal openings and full winterization done right.",
  },
  {
    label: "Emergency Service",
    href: "/emergency",
    blurb: "Green pools, leaks, and equipment failures — fast response.",
  },
] as const;
