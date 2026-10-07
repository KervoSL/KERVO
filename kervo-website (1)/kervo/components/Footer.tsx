import Link from "next/link";
import LogoMark from "./Logo";
import { PRODUCTS } from "@/lib/products";
import { CONTACT_EMAIL, EXTERNAL_LINKS } from "@/lib/site";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Products",
    links: [
      ...PRODUCTS.filter((p) => p.href).map((p) => ({ label: p.name, href: p.href as string, external: true })),
      { label: "All products", href: "/#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/#contact" },
      { label: "GitHub", href: EXTERNAL_LINKS.github, external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

const linkClass = "text-sm text-neutral-400 hover:text-white transition-colors duration-300";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Kervo home">
              <LogoMark size={20} />
              <span className="text-sm font-semibold tracking-wordmark uppercase text-white">Kervo</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-500">
              A technology company creating its own digital products.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block text-sm text-neutral-300 hover:text-white transition-colors duration-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="col-span-1 md:col-span-2">
              <h2 className="text-[12px] uppercase tracking-wide text-neutral-500">{col.title}</h2>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Kervo SL. All rights reserved.</p>
          <p className="text-xs text-neutral-600">Designed and built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
