/**
 * Site-wide constants. Everything that might change (domain, contact, links)
 * lives here or in an environment variable — never inline in components.
 */

// Canonical origin. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached.
// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is provided automatically.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "https://kervo.vercel.app")
).replace(/\/$/, "");

export const SITE_NAME = "Kervo";
export const LEGAL_NAME = "Kervo SL";

export const TAGLINE =
  "Building products for the way people live, work and manage their world.";

export const DESCRIPTION =
  "Kervo is a technology company that designs, builds and operates its own digital products, starting with MoneyNest.";

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@kervo.com";
export const GITHUB_URL = "https://github.com/KervoSL";

export const NAV = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/legal-notice", label: "Legal notice" },
] as const;

/** Absolute URL for a site path. */
export const abs = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

/**
 * Company details required for the legal notice. Left empty on purpose:
 * fill these in with the real registered data — nothing here is invented.
 */
export const LEGAL_DETAILS: { label: string; value: string | null }[] = [
  { label: "Company name", value: LEGAL_NAME },
  { label: "Registered office", value: null },
  { label: "Tax ID (NIF/CIF)", value: null },
  { label: "Commercial registry", value: null },
  { label: "Contact email", value: CONTACT_EMAIL },
];
