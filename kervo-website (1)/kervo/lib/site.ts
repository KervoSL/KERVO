export const SITE_URL = "https://kervo.com";

export const SITE_NAME = "Kervo";

export const TAGLINE =
  "Building products for the way people live, work and manage their world.";

export const SITE_DESCRIPTION =
  "Kervo is a technology company that creates and develops its own digital products — MoneyNest, TradeVault and more — focused on solving real problems through software, automation and technology.";

/** Primary navigation. Absolute paths so links work from every page. */
export const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;

export const CONTACT_EMAIL = "hello@kervo.com";

export const EXTERNAL_LINKS = {
  github: "https://github.com/KervoSL",
} as const;
