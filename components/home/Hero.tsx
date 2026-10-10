import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { KMark } from "@/components/ui/Icons";
import Parallax from "@/components/ui/Parallax";
import { PRODUCTS } from "@/lib/products";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-24 lg:pt-32">
      {/* Brand mark, oversized and cropped — the one quiet gesture on the page. */}
      <Parallax
        speed={-0.05}
        className="pointer-events-none absolute -right-[22%] top-[4%] w-[min(80vw,420px)] sm:-right-[8%] lg:right-[2%] lg:top-[12%] lg:w-[min(26vw,380px)]"
      >
        <KMark size={430} className="h-auto w-full text-[#e9ebf1]" />
      </Parallax>

      <div className="container-x relative">
        <h1 className="t-display rise max-w-[11.5em]" style={step(0)}>
          Products for the way people live, work and manage their world.
        </h1>
        <p className="t-lead rise mt-7 max-w-[34rem] md:mt-9" style={step(2)}>
          Kervo is a technology company. We design, build and operate our own digital products,
          starting with MoneyNest.
        </p>
        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row md:mt-11" style={step(3)}>
          <ButtonLink href="/products">Explore our products</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Discover Kervo
          </ButtonLink>
        </div>

        <ul
          className="rise mt-16 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:gap-10 md:mt-24"
          style={step(4)}
          aria-label="Kervo products"
        >
          {PRODUCTS.map((p) => (
            <li key={p.slug}>
              <Link href={p.href} className="group flex items-center gap-3">
                <Image
                  src={p.logo.src}
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-[22%]"
                />
                <span>
                  <span className="link-draw block text-[16px] font-semibold leading-tight">{p.name}</span>
                  <span className="block text-[14px] leading-tight text-muted">{p.statusLabel}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
