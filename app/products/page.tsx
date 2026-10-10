import type { Metadata } from "next";
import { breadcrumbs, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = pageMeta({
  title: 'Products',
  description:
    'Everything Kervo builds and runs: MoneyNest for personal finance, TradeVault for trading accounts, and what comes next.',
  path: '/products',
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={breadcrumbs([{ name: "Products", path: "/products" }])} />
      <section className="container-x pb-14 pt-14 md:pb-20 md:pt-24">
        <h1 className="t-display max-w-[11em]">Our products.</h1>
        <p className="t-lead mt-7 max-w-[36rem]">
          Everything Kervo builds and runs. Each product is designed, built and improved in-house.
        </p>
      </section>
      <div className="container-x pb-24 md:pb-32">
        <h2 className="sr-only">All products</h2>
        <ProductsShowcase />
      </div>
      <ClosingCta />
    </>
  );
}
