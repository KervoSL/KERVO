import Hero from "@/components/home/Hero";
import Statement from "@/components/home/Statement";
import Ecosystem from "@/components/home/Ecosystem";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Statement />
      <Ecosystem />
      <section className="section border-t border-line" aria-labelledby="products">
        <div className="container-x">
          <h2 id="products" className="t-h2 mb-12 max-w-[16em] md:mb-16">
            Our products.
          </h2>
          <ProductsShowcase />
        </div>
      </section>
      <Process />
      <ClosingCta />
    </>
  );
}
