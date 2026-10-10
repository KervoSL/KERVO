import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import ClosingCta from "@/components/home/ClosingCta";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbs, pageMeta } from "@/lib/seo";
import { getProduct } from "@/lib/products";

const product = getProduct("tradevault")!;

export const metadata: Metadata = pageMeta({
  title: "TradeVault",
  description:
    "TradeVault is a platform to manage capital, operations and trading accounts, built for funded traders. Coming soon from Kervo.",
  path: "/products/tradevault",
  ogTitle: "TradeVault, coming soon — Kervo",
});

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function TradeVaultPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Products", path: "/products" }, { name: "TradeVault", path: "/products/tradevault" }])} />
      <section className="stage relative overflow-hidden">
        <svg
          viewBox="12 16 43 32"
          fill="currentColor"
          aria-hidden="true"
          className="pointer-events-none absolute -right-[12%] top-1/2 w-[min(90vw,620px)] -translate-y-1/2 text-white/[0.045] lg:right-[3%]"
        >
          <path d="M12 16h22v7h-7.5v25h-7V23H12v-7zm14.5 0h8l6 20.5L47 16h8L45.5 48h-8.5L26.5 16z" />
        </svg>
        <div className="container-x relative pb-20 pt-14 md:pb-32 md:pt-24 lg:pt-28">
          <div className="rise flex items-center gap-4" style={step(0)}>
            <Image
              src={product.logo.src}
              alt={product.logo.alt}
              width={64}
              height={64}
              className="rounded-[22%] ring-1 ring-white/15"
              priority
            />
            <span className="rounded-full border border-white/20 px-3 py-1 text-[13px] text-stage-muted">
              {product.statusLabel}
            </span>
          </div>
          <h1 className="t-display rise mt-8 max-w-[10em]" style={step(1)}>
            TradeVault
          </h1>
          <p className="t-lead rise mt-6 max-w-[34rem]" style={step(2)}>
            {product.summary}
          </p>
          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={step(3)}>
            <ButtonLink href="/contact" variant="mint">
              Ask about TradeVault
            </ButtonLink>
            <ButtonLink href="/products" variant="ghost-light">
              All products
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="tv-status">
        <div className="container-x">
          <h2 id="tv-status" className="t-h2 max-w-[16em]">
            Part of Kervo, built to the same standard.
          </h2>
          <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-12">
            <div className="border-t border-ink pt-6">
              <h3 className="t-h3">What it is</h3>
              <p className="t-body mt-3">{product.summary}</p>
            </div>
            <div className="border-t border-ink pt-6">
              <h3 className="t-h3">Where it stands</h3>
              <p className="t-body mt-3">
                TradeVault is in development. We will share details and screens once it is ready, rather
                than before.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClosingCta title="Want to hear when TradeVault is ready?" />
    </>
  );
}
