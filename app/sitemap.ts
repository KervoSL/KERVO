import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { abs } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/products", priority: 0.9 },
    ...PRODUCTS.map((p) => ({ path: p.href, priority: p.status === "live" ? 0.9 : 0.6 })),
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/cookies", priority: 0.3 },
    { path: "/legal-notice", priority: 0.3 },
  ];
  return pages.map(({ path, priority }) => ({
    url: abs(path),
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
