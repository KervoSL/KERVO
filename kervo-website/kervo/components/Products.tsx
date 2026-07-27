"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const PRODUCTS = [
  {
    name: "MoneyNest",
    description:
      "A local-first personal finance app that keeps your money story on your device — private, fast and yours.",
    status: "Live",
    statusTone: "live",
    href: "#",
    mark: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <rect x="6" y="26" width="7" height="14" rx="1.5" fill="currentColor" />
        <rect x="20.5" y="16" width="7" height="24" rx="1.5" fill="currentColor" />
        <rect x="35" y="8" width="7" height="32" rx="1.5" fill="currentColor" className="text-accent" />
      </svg>
    ),
  },
  {
    name: "TradeVault",
    description:
      "A disciplined home for your positions and thesis — built for investors who think in years, not minutes.",
    status: "In development",
    statusTone: "dev",
    href: "#",
    mark: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M15 27L21 20L26 24L33 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
      </svg>
    ),
  },
  {
    name: "Axiora",
    description:
      "An intelligence layer that turns scattered financial data into clear, actionable direction.",
    status: "In development",
    statusTone: "dev",
    href: "#",
    mark: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="4.5" fill="currentColor" className="text-accent" />
        <path d="M24 8V4M24 44v-4M40 24h4M4 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Future Products",
    description:
      "We're already sketching what comes next. New tools, same standard — announced when they're ready.",
    status: "Coming",
    statusTone: "future",
    href: null,
    mark: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-neutral-500" />
      </svg>
    ),
  },
];

const STATUS_STYLES: Record<string, string> = {
  live: "bg-accent/15 text-accent",
  dev: "bg-white/10 text-neutral-300",
  future: "bg-white/5 text-neutral-500",
};

export default function Products() {
  return (
    <section id="products" className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Products</span>
          <h2 className="mt-5 text-balance text-[36px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            Everything we build, in one place.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full rounded-2xl border border-white/10 bg-neutral-950 p-8 md:p-10 overflow-hidden transition-colors duration-500 hover:border-white/25"
              >
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(360px circle at var(--mx,50%) var(--my,0%), rgba(37,99,255,0.12), transparent 60%)",
                  }}
                  onMouseMove={(e) => {
                    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white">
                    {p.mark}
                  </div>
                  <span
                    className={`text-[11px] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full ${STATUS_STYLES[p.statusTone]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <h3 className="relative mt-8 text-2xl font-semibold text-white">{p.name}</h3>
                <p className="relative mt-3 text-neutral-400 leading-relaxed max-w-md">{p.description}</p>

                <div className="relative mt-8">
                  {p.href ? (
                    <a
                      href={p.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-white group-hover:text-accent transition-colors duration-300"
                    >
                      Visit Product
                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600">
                      Announced later
                    </span>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
