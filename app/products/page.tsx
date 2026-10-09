import type { Metadata } from "next";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import ClosingCta from "@/components/home/ClosingCta";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Everything Kervo builds and runs: MoneyNest for personal finance, TradeVault for trading accounts, and what comes next.",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", title: "Kervo products" },
};

export default function ProductsPage() {
  return (
    <>
      <section className="container-x pb-14 pt-14 md:pb-20 md:pt-24">
        <h1 className="t-display max-w-[11em]">Our products.</h1>
        <p className="t-lead mt-7 max-w-[36rem]">
          Everything Kervo builds and runs. Each product is designed, built and improved in-house.
        </p>
      </section>
      <div className="container-x pb-24 md:pb-32">
        <ProductsShowcase />
      </div>
      <ClosingCta />
    </>
  );
}
