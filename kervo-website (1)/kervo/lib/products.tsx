import type { ReactNode } from "react";

export type ProductStatus = "live" | "development" | "future";

export type Product = {
  slug: string;
  name: string;
  /** One-line category shown under the name. */
  category: string;
  description: string;
  status: ProductStatus;
  /** External URL. Omit while a product has no public destination. */
  href?: string;
  ctaLabel?: string;
  /** Real brand asset (served from /public). Falls back to `mark`. */
  logo?: { src: string; alt: string };
  /** Inline fallback mark, used when no brand asset exists. */
  mark?: ReactNode;
  /** Featured products get the large layout. Only one should be featured. */
  featured?: boolean;
};

export const STATUS_LABEL: Record<ProductStatus, string> = {
  live: "Live",
  development: "In development",
  future: "Coming",
};

export const STATUS_STYLES: Record<ProductStatus, string> = {
  live: "bg-accent/15 text-accent",
  development: "bg-white/10 text-neutral-300",
  future: "bg-white/5 text-neutral-500",
};

/**
 * Single source of truth for Kervo's product portfolio.
 * To add a product, append an entry here — the Products section,
 * footer and structured data all read from this list.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "moneynest",
    name: "MoneyNest",
    category: "Personal finance platform",
    description:
      "A personal finance management platform, local-first by design — private, fast and yours.",
    status: "live",
    href: "https://money-nest-nk2u.vercel.app",
    ctaLabel: "Open MoneyNest",
    logo: { src: "/products/moneynest.png", alt: "MoneyNest logo" },
    featured: true,
  },
  {
    slug: "tradevault",
    name: "TradeVault",
    category: "Trading management platform",
    description:
      "A platform to manage capital, operations and trading accounts in one place.",
    status: "development",
    href: "https://tradevault-three.vercel.app",
    ctaLabel: "Visit TradeVault",
    logo: { src: "/products/tradevault.svg", alt: "TradeVault logo" },
  },
  {
    slug: "axiora",
    name: "Axiora",
    category: "Financial intelligence",
    description:
      "An intelligence layer that turns scattered financial data into clear, actionable direction.",
    status: "development",
    mark: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="24" cy="24" r="4.5" fill="currentColor" className="text-accent" />
        <path d="M24 8V4M24 44v-4M40 24h4M4 24h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    slug: "next",
    name: "What comes next",
    category: "Future products",
    description:
      "New products are already taking shape. Same standard, announced when they are ready.",
    status: "future",
    mark: (
      <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-neutral-500" />
      </svg>
    ),
  },
];
