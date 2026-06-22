"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "../ui/container";
import { ButtonLink } from "../ui/button";

const navigation = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Weekly Maintenance", href: "/services/weekly-maintenance" },
      { label: "Openings & Closings", href: "/services/openings-closings" },
      { label: "Pool Covers", href: "/services/pool-covers" },
      { label: "Pool Repairs", href: "/services/pool-repairs" },
    ],
  },
  { label: "Vinyl Liners", href: "/vinyl-liners" },
  {
    label: "Pool Heaters",
    href: "/pool-heaters",
    children: [
      { label: "Heat Pumps", href: "/pool-heaters/heat-pumps" },
      { label: "Gas Heaters", href: "/pool-heaters/gas-heaters" },
      { label: "Heater Repair", href: "/pool-heaters/heater-repair" },
      { label: "Heater Replacement", href: "/pool-heaters/heater-replacement" },
    ],
  },
  { label: "Shop", href: "/shop" },
  { label: "Service Area", href: "/locations" },
];

function DropdownItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-slate-700 hover:bg-pool-50 hover:text-pool-700 transition-colors"
    >
      {label}
    </Link>
  );
}

function NavItem({
  item,
}: {
  item: (typeof navigation)[number];
}) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="text-sm font-medium text-slate-700 hover:text-pool-600 transition-colors py-2"
      >
        {item.label}
        {item.children && (
          <svg className="ml-1 inline-block h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        )}
      </Link>
      {item.children && (
        <div className="absolute left-0 top-full mt-1 w-56 rounded-lg bg-white shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
          <div className="py-1">
            {item.children.map((child) => (
              <DropdownItem key={child.href} {...child} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-pool-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="leading-tight">
              <span className="block text-lg font-bold text-pool-900">
                The Pool Man
              </span>
              <span className="block text-xs text-slate-500 -mt-0.5">
                Center Moriches, NY
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+16315551234"
              className="text-sm font-medium text-slate-700 hover:text-pool-600"
            >
              (631) 555-1234
            </a>
            <ButtonLink href="/booking" size="sm">
              Book a Consultation
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-slate-700"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <Container className="py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-base font-medium text-slate-900"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1.5 pl-4 text-sm text-slate-600"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+16315551234"
                className="text-center py-2 text-sm font-semibold text-pool-700"
              >
                Call (631) 555-1234
              </a>
              <ButtonLink href="/booking" className="w-full text-center">
                Book a Consultation
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
