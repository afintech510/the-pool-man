import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/container";

const footerLinks = {
  services: [
    { label: "Weekly Maintenance", href: "/services/weekly-maintenance" },
    { label: "Openings & Closings", href: "/services/openings-closings" },
    { label: "Pool Covers", href: "/services/pool-covers" },
    { label: "Pool Repairs", href: "/services/pool-repairs" },
  ],
  construction: [
    { label: "New Construction", href: "/construction" },
    { label: "Our Work", href: "/our-work" },
    { label: "Pool Renovation", href: "/construction" },
    { label: "Vinyl Liners", href: "/vinyl-liners" },
  ],
  installation: [
    { label: "Pool Heaters", href: "/pool-heaters" },
    { label: "Heater Installation", href: "/pool-heaters/heater-installation" },
    { label: "Salt Water Systems", href: "/installation/salt-water-systems" },
    { label: "Pump Installation", href: "/installation/pumps" },
    { label: "LED Lighting", href: "/installation/led-lighting" },
  ],
  company: [
    { label: "Service Area", href: "/locations" },
    { label: "Blog", href: "/blog" },
    { label: "Emergency", href: "/emergency" },
    { label: "Shop", href: "/shop" },
    { label: "FAQ", href: "/faq" },
    { label: "Reviews", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
    { label: "Book a Consultation", href: "/booking" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-new.png"
              alt="The Pool Man"
              width={160}
              height={80}
              className="h-14 w-auto"
            />
            <address className="not-italic text-sm text-slate-600 space-y-1 mt-4">
              <p>110 Frowein Rd</p>
              <p>Center Moriches, NY 11934</p>
              <p className="pt-1">
                <a href="tel:+16318787796" className="text-pool-600 hover:text-pool-700 transition-colors font-medium">
                  (631) 878-7796
                </a>
              </p>
              <p>
                <a href="mailto:info@kevinthepoolman.com" className="hover:text-slate-200 transition-colors">
                  info@kevinthepoolman.com
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Construction</h3>
            <ul className="space-y-2">
              {footerLinks.construction.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Installation</h3>
            <ul className="space-y-2">
              {footerLinks.installation.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} The Pool Man. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/kevinthepoolmanconstruction" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Facebook</a>
            <a href="https://www.instagram.com/kevincherwinski" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">Instagram</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
