import type { Metadata } from "next";
import { breadcrumbs, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import Link from "next/link";
import { CONTACT_EMAIL, GITHUB_URL } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = pageMeta({
  title: 'Contact',
  description:
    'Get in touch with Kervo about MoneyNest, TradeVault or the company. Write to us by email and we will reply.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Contact", path: "/contact" }])} />
    <section className="container-x pb-24 pt-14 md:pb-36 md:pt-24">
      <h1 className="t-display max-w-[10em]">Get in touch.</h1>
      <p className="t-lead mt-7 max-w-[34rem]">
        Questions about Kervo or its products? Write to us and we will reply.
      </p>

      <div className="mt-16 grid gap-12 md:mt-24 lg:grid-cols-12">
        <div className="border-t border-ink pt-6 lg:col-span-7">
          <p className="text-[15px] text-muted">Email</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="link-draw mt-3 inline-block break-all text-[clamp(1.5rem,1rem+2.6vw,2.75rem)] font-semibold tracking-[-0.03em]"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="border-t border-line pt-6 lg:col-span-4 lg:col-start-9">
          <p className="text-[15px] text-muted">Elsewhere</p>
          <ul className="mt-4 space-y-3 text-[17px]">
            <li>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link-draw">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="link-draw">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
