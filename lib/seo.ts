import type { Metadata } from "next";
import { abs, SITE_NAME } from "@/lib/site";

/** Per-page metadata with canonical, Open Graph and Twitter kept in sync. */
export function pageMeta({
  title,
  description,
  path,
  ogTitle,
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
}): Metadata {
  const shown = ogTitle ?? `${title} — ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: SITE_NAME, url: path, title: shown, description },
    twitter: { card: "summary_large_image", title: shown, description },
  };
}

/** BreadcrumbList structured data. `trail` excludes the home page. */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: SITE_NAME, path: "/" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}
