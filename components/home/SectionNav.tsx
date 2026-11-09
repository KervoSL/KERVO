"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

/** Anchors on the home page. Each id belongs to the section's h2. */
const ITEMS = [
  { id: "statement", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "process", label: "How we build" },
] as const;

/**
 * Sticky section menu under the main header: jumps to each section of the home page and
 * marks the one in view. Scrolls sideways on small screens.
 */
export default function SectionNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A band just under the two sticky bars: the heading that crosses it is "current".
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 },
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-[var(--header-h)] z-40 border-b border-line bg-[rgba(255,255,255,0.88)] backdrop-blur-xl">
      <div className="container-x flex h-[52px] items-center justify-between gap-6">
        <nav aria-label="On this page" className="-mx-1 min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-1 whitespace-nowrap">
            {ITEMS.map((item) => {
              const on = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={on ? "location" : undefined}
                    className={`relative block px-3 py-3.5 text-[14px] transition-colors duration-300 hover:text-ink ${
                      on ? "text-ink" : "text-muted"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 bottom-0 h-[2px] origin-left bg-ink transition-transform duration-300 ease-out ${
                        on ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden shrink-0 sm:block">
          <ButtonLink href="/products/moneynest#pricing" variant="secondary" size="sm">
            See plans
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
