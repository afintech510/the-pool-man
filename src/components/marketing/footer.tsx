import Link from "next/link";
import { Container } from "../ui/container";

const footerLinks = {
  services: [
    { label: "Weekly Maintenance", href: "/services/weekly-maintenance" },
    { label: "Openings & Closings", href: "/services/openings-closings" },
    { label: "Pool Covers", href: "/services/pool-covers" },
    { label: "Pool Repairs", href: "/services/pool-repairs" },
  ],
  specialties: [
    { label: "Vinyl Liners", href: "/vinyl-liners" },
    { label: "Heat Pumps", href: "/pool-heaters/heat-pumps" },
    { label: "Gas Heaters", href: "/pool-heaters/gas-heaters" },
    { label: "Heater Repair", href: "/pool-heaters/heater-repair" },
  ],
  company: [
    { label: "Service Area", href: "/locations" },
    { label: "Shop", href: "/shop" },
    { label: "Book a Consultation", href: "/booking" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-pool-950 text-white mt-auto">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-pool-500 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-lg font-bold">The Pool Man</span>
            </div>
            <address className="not-italic text-sm text-pool-200 space-y-1">
              <p>Center Moriches, NY 11934</p>
              <p>
                <a href="tel:+16315551234" className="hover:text-white transition-colors">
                  (631) 555-1234
                </a>
              </p>
              <p>
                <a href="mailto:info@thepoolman.com" className="hover:text-white transition-colors">
                  info@thepoolman.com
                </a>
              </p>
            </address>
            <p className="mt-4 text-sm text-pool-300">
              Serving Eastern Suffolk County
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-pool-300 mb-3">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pool-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-pool-300 mb-3">
              Specialties
            </h3>
            <ul className="space-y-2">
              {footerLinks.specialties.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pool-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-pool-300 mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pool-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pool-800 text-sm text-pool-400">
          <p>&copy; {new Date().getFullYear()} The Pool Man. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
