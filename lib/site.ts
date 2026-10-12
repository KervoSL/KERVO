/**
 * Site-wide constants. Everything that might change (domain, contact, links)
 * lives here or in an environment variable — never inline in components.
 */

// Canonical origin. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached.
// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is provided automatically.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "https://kervo.info")
).replace(/\/$/, "");

export const SITE_NAME = "Kervo";
export const TAGLINE =
  "Building products for the way people live, work and manage their world.";

export const DESCRIPTION =
  "Kervo is a technology company that designs, builds and operates its own digital products, starting with MoneyNest.";

export const CONTACT_EMAIL = "hello@kervo.info";

/** Official social profiles, shown in the footer and on the contact page, and listed in structured data. */
export const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/kervo.sl/" },
  { name: "TikTok", url: "https://www.tiktok.com/@kervo_sl" },
] as const;

export const NAV = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacidad" },
  { href: "/terms", label: "Términos" },
  { href: "/cookies", label: "Cookies" },
  { href: "/legal-notice", label: "Aviso legal" },
] as const;

/** Absolute URL for a site path. */
export const abs = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;
