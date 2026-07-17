"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { categories, type PortfolioItem } from "@/lib/portfolio";

type GalleryProps = {
  items: PortfolioItem[];
  /** Show the category filter pills. Off for compact homepage/construction strips. */
  showFilters?: boolean;
};

/**
 * Dependency-free portfolio gallery. Renders a uniform card grid and, on click,
 * an elegant project-detail modal — large image on one side, title / summary /
 * specs / CTAs on the other — with keyboard nav (Esc, ←/→) and body-scroll lock.
 */
export function Gallery({ items, showFilters = false }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visible =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const open = useCallback((index: number) => setSelectedIndex(index), []);
  const close = useCallback(() => setSelectedIndex(null), []);
  const next = useCallback(
    () => setSelectedIndex((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length],
  );
  const prev = useCallback(
    () =>
      setSelectedIndex((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );

  // Keyboard controls + body-scroll lock while the detail modal is open.
  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedIndex, close, next, prev]);

  const active = selectedIndex === null ? null : visible[selectedIndex];

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", ...categories].map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-pool-600 text-white"
                    : "bg-pool-50 text-pool-700 hover:bg-pool-100"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => open(index)}
            className="group relative block overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pool-600"
            aria-label={`View project details: ${item.title}`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pool-950/80 via-pool-950/10 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-water-300">
                {item.category}
              </p>
              <h3 className="mt-0.5 text-base font-bold text-white leading-snug">
                {item.title}
              </h3>
            </div>
            <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-pool-700 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-pool-950/90 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {visible.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous project"
                className="absolute left-2 sm:left-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next project"
                className="absolute right-2 sm:right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <div
            className="grid w-full max-w-5xl max-h-[88vh] grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl lg:grid-cols-[1.4fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-pool-950 min-h-64 lg:min-h-full">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col overflow-y-auto p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-pool-600">
                {active.category}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {active.title}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {active.summary}
              </p>

              <dl className="mt-6 divide-y divide-slate-100 border-t border-slate-100">
                {active.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-sm font-medium text-slate-500">
                      {spec.label}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900 text-right">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto">
                <Link
                  href="/booking"
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-pool-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pool-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pool-600"
                >
                  Start a project like this
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex flex-1 items-center justify-center rounded-lg border-2 border-pool-600 px-5 py-2.5 text-sm font-semibold text-pool-700 transition-colors hover:bg-pool-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pool-600"
                >
                  Ask about it
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
