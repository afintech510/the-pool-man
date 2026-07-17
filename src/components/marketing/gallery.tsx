"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { categories, type PortfolioItem } from "@/lib/portfolio";

type GalleryProps = {
  items: PortfolioItem[];
  /** Show the category filter pills. Off for compact homepage/construction strips. */
  showFilters?: boolean;
};

/**
 * Dependency-free portfolio gallery. Renders a responsive masonry (CSS columns)
 * of `next/image` tiles, optional category filter pills, and a keyboard-driven
 * lightbox (Esc to close, ←/→ to navigate). All server data comes from
 * `@/lib/portfolio`.
 */
export function Gallery({ items, showFilters = false }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  const openAt = useCallback((index: number) => setLightboxIndex(index), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i + 1) % visible.length,
      ),
    [visible.length],
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + visible.length) % visible.length,
      ),
    [visible.length],
  );

  // Keyboard controls + body-scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightboxIndex === null) return;
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
  }, [lightboxIndex, close, next, prev]);

  const active = lightboxIndex === null ? null : visible[lightboxIndex];

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
                onClick={() => setActiveCategory(cat)}
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

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {visible.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openAt(index)}
            className="mb-4 block w-full overflow-hidden rounded-xl border border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pool-600 group"
            aria-label={`View larger: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.orientation === "landscape" ? 1600 : 1200}
              height={item.orientation === "landscape" ? 1067 : 1600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-pool-950/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
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
                aria-label="Previous image"
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
                aria-label="Next image"
                className="absolute right-2 sm:right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          <figure
            className="relative max-h-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={active.orientation === "landscape" ? 1600 : 1200}
              height={active.orientation === "landscape" ? 1067 : 1600}
              sizes="100vw"
              className="max-h-[85vh] w-auto rounded-lg object-contain"
              priority
            />
            <figcaption className="mt-3 text-center text-sm text-pool-200">
              {active.alt}
              <span className="mx-2 text-pool-400">&middot;</span>
              {active.category}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
