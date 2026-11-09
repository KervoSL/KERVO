"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { MONEYNEST_URL } from "@/lib/products";

/** Sections of the MoneyNest page. Each id is on the section element itself. */
const ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
  { id: "privacy", label: "Privacy" },
  { id: "pricing", label: "Pricing" },
] as const;

/**
 * Sticky product menu under the site header: the product name on the left, a link to
 * each section of the page (the one in view is marked) and a way into the app.
 * The links scroll sideways on small screens.
 */
export default function MnNav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = ITEMS.map((i) => document.getElementById(i.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
        if (entering[0]) setActive(entering[0].target.id);
      },
      // A thin band just under the two sticky bars: the section that reaches it is "current".
      { rootMargin: "-150px 0px -65% 0px", threshold: 0 },
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sticky top-[var(--header-h)] z-40 border-b border-line bg-[rgba(255,255,255,0.9)] backdrop-blur-xl">
      <div className="container-x flex h-[54px] items-center gap-4 md:gap-8">
        <div className="hidden shrink-0 items-center gap-2.5 md:flex">
          <Image src="/products/moneynest.png" alt="" width={24} height={24} className="rounded-[22%]" />
          <span className="text-[15px] font-semibold tracking-[-0.01em]">MoneyNest</span>
          <span className="ml-3 h-5 w-px bg-line" aria-hidden="true" />
        </div>

        <nav aria-label="On this page" className="-mx-1 min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex items-center gap-0.5 whitespace-nowrap">
            {ITEMS.map((item) => {
              const on = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={on ? "location" : undefined}
                    className={`relative block px-3 py-4 text-[14px] transition-colors duration-300 hover:text-ink ${
                      on ? "font-medium text-ink" : "text-muted"
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
          <ButtonLink href={MONEYNEST_URL} external variant="secondary" size="sm">
            Open the app
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
