/**
 * Kervo's product portfolio — the single source of truth.
 *
 * To add a product: append an entry here. The home page, products page,
 * ecosystem diagram, footer, sitemap and structured data all read this list.
 * A product with a dedicated page also gets its own route under /products/<slug>.
 */

export type ProductStatus = "live" | "soon";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  status: ProductStatus;
  statusLabel: string;
  /** Page on this site. */
  href: string;
  /** The live application, when there is one. */
  appUrl?: string;
  logo: { src: string; alt: string };
};

// Live deployment of MoneyNest. Override with NEXT_PUBLIC_MONEYNEST_URL when a
// custom domain is attached — this is the only place the link is defined.
export const MONEYNEST_URL =
  process.env.NEXT_PUBLIC_MONEYNEST_URL ?? "https://money-nest-nk2u.vercel.app";

export const PRODUCTS: Product[] = [
  {
    slug: "moneynest",
    name: "MoneyNest",
    tagline: "Personal finance, in one place.",
    summary:
      "A personal finance platform that brings accounts, spending, budgets, investments and debts into one private workspace.",
    status: "live",
    statusLabel: "Live",
    href: "/products/moneynest",
    appUrl: MONEYNEST_URL,
    logo: { src: "/products/moneynest.png", alt: "MoneyNest logo" },
  },
  {
    slug: "tradevault",
    name: "TradeVault",
    tagline: "Capital, operations and trading accounts.",
    summary:
      "A platform to manage capital, operations and trading accounts, built for funded traders.",
    status: "soon",
    statusLabel: "Coming soon",
    href: "/products/tradevault",
    logo: { src: "/products/tradevault.svg", alt: "TradeVault logo" },
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
