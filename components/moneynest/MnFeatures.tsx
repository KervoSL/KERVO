"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MN_FEATURES } from "@/lib/moneynest";

/**
 * Interactive showcase of MoneyNest's real screens.
 * Tabs on the left (a scrollable row on mobile), the selected screen on the right.
 */
export default function MnFeatures() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = MN_FEATURES[active];

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const last = MN_FEATURES.length - 1;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-4">
        <div
          role="tablist"
          aria-label="MoneyNest features"
          aria-orientation="vertical"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {MN_FEATURES.map((f, i) => {
            const selected = i === active;
            return (
              <button
                key={f.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`mn-tab-${f.id}`}
                aria-selected={selected}
                aria-controls="mn-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-left text-[15px] transition-colors duration-300 lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-t lg:px-0 lg:py-4 lg:text-[18px] ${
                  selected
                    ? "border-mint bg-mint text-[#04120e] lg:bg-transparent lg:text-stage-text"
                    : "border-stage-line text-stage-muted hover:text-stage-text lg:border-stage-line"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`hidden h-1.5 w-1.5 shrink-0 rounded-full transition-colors lg:block ${
                      selected ? "bg-mint" : "bg-white/25"
                    }`}
                    aria-hidden="true"
                  />
                  {f.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="mn-panel"
        role="tabpanel"
        aria-labelledby={`mn-tab-${current.id}`}
        className="min-w-0 lg:col-span-8"
      >
        <div className="overflow-hidden rounded-xl border border-stage-line bg-stage-2 md:rounded-2xl">
          <div className="flex h-6 items-center gap-1.5 border-b border-stage-line px-3 md:h-8 md:px-4" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15 md:h-2 md:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15 md:h-2 md:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15 md:h-2 md:w-2" />
          </div>
          <Image
            key={current.id}
            src={current.image}
            alt={current.alt}
            width={1440}
            height={900}
            sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 92vw"
            className="fade-in block h-auto w-full"
          />
        </div>
        <div key={`${current.id}-text`} className="fade-in mt-7 max-w-[36rem]">
          <h3 className="t-h3">{current.title}</h3>
          <p className="t-body mt-3">{current.text}</p>
        </div>
      </div>
    </div>
  );
}
