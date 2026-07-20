"use client";

import Image from "next/image";
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
  { label: "Construction", href: "/construction" },
  { label: "Our Work", href: "/our-work" },
  {
    label: "Installation",
    href: "/installation",
    children: [
      { label: "Pool Heaters", href: "/pool-heaters" },
      { label: "Heater Installation", href: "/pool-heaters/heater-installation" },
      { label: "Salt Water Systems", href: "/installation/salt-water-systems" },
      { label: "Pump Installations", href: "/installation/pumps" },
      { label: "LED Lighting", href: "/installation/led-lighting" },
      { label: "Vinyl Liners", href: "/vinyl-liners" },
    ],
  },
  { label: "Emergency", href: "/emergency" },
  { label: "Shop", href: "/shop" },
  { label: "Contact", href: "/contact" },
];

function DropdownItem({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-sm text-slate-700 hover:bg-pool-50 hover:text-slate-900 transition-colors"
    >
      {label}
    </Link>
  );
}

function NavItem({ item }: { item: (typeof navigation)[number] }) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors py-2"
      >
        {item.label}
        {item.children && (
          <svg className="ml-1 inline-block h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        )}
      </Link>
      {item.children && (
        <div className="absolute left-0 top-full mt-1 w-56 rounded-lg bg-slate-50 shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
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
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-18 lg:h-20">
          <Link href="/" className="col-start-1 flex items-center relative z-10 justify-self-start">
            <Image
              src="/images/logo-new.png"
              alt="The Pool Man"
              width={160}
              height={80}
              className="h-20 w-auto lg:h-28 shrink-0"
              priority
            />
          </Link>

          <nav className="col-start-2 hidden lg:flex items-center gap-6 justify-self-center">
            {navigation.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>

          <div className="col-start-3 hidden lg:flex items-center gap-3 justify-self-end">
            <a
              href="tel:+16318787796"
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              (631) 878-7796
            </a>
            <ButtonLink href="/booking" size="sm">
              Book a Consultation
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="col-start-3 justify-self-end lg:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900"
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
                  className="block py-2 text-base font-semibold text-slate-900"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-1.5 pl-4 text-sm text-slate-600 hover:text-slate-900"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+16318787796"
                className="text-center py-2 text-sm font-semibold text-pool-600"
              >
                Call (631) 878-7796
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
