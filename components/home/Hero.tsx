import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/Frames";
import Parallax from "@/components/ui/Parallax";
import { PRODUCTS } from "@/lib/products";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 md:pb-24 md:pt-24 lg:pt-28">
      <div className="container-x relative">
        <h1 className="t-display rise max-w-[12.5em]" style={step(0)}>
          Products for the way people live, work and manage their world.
        </h1>
        <p className="t-lead rise mt-7 max-w-[34rem] md:mt-9" style={step(2)}>
          Kervo is a technology company. We design, build and operate our own digital products,
          starting with MoneyNest.
        </p>
        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row md:mt-11" style={step(3)}>
          <ButtonLink href="/products/moneynest">See MoneyNest</ButtonLink>
          <ButtonLink href="/about" variant="secondary">
            Discover Kervo
          </ButtonLink>
        </div>

        {/* The real product, front and centre: the one visual the page leads with. */}
        <div
          className="stage rise relative mt-14 overflow-hidden rounded-[1.75rem] md:mt-20 md:rounded-[2.25rem]"
          style={step(4)}
        >
          <ul
            className="relative z-10 flex flex-wrap gap-x-8 gap-y-3 px-6 pt-6 md:px-12 md:pt-9"
            aria-label="Kervo products"
          >
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="group flex items-center gap-3">
                  <Image src={p.logo.src} alt="" width={32} height={32} className="rounded-[22%] ring-1 ring-white/10" />
                  <span>
                    <span className="link-draw block text-[15px] font-semibold leading-tight text-stage-text">
                      {p.name}
                    </span>
                    <span className="block text-[13px] leading-tight text-stage-muted">{p.statusLabel}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Tablet and desktop: dashboard with the phone layered over it, cropped at the base. */}
          <div className="relative hidden h-[clamp(300px,40vw,600px)] overflow-hidden px-12 pt-10 md:block lg:px-20">
            <Parallax speed={0.03}>
              <BrowserFrame
                src="/moneynest/desktop-dashboard.webp"
                alt="MoneyNest dashboard showing net worth, accounts, assets, debts and financial health"
                sizes="(min-width: 1280px) 1000px, 90vw"
                priority
              />
            </Parallax>
            <div className="absolute bottom-0 right-[7%] w-[19%] max-w-[230px] translate-y-[22%] lg:right-[9%]">
              <PhoneFrame
                src="/moneynest/mobile-dashboard.webp"
                alt="MoneyNest dashboard on a phone"
                sizes="230px"
                priority
              />
            </div>
          </div>

          {/* Mobile: its own composition, the phone large and cropped at the base. */}
          <div className="relative mx-auto mt-8 h-[400px] w-[62%] max-w-[270px] overflow-hidden md:hidden">
            <PhoneFrame
              src="/moneynest/mobile-dashboard.webp"
              alt="MoneyNest dashboard on a phone"
              sizes="270px"
              priority
            />
          </div>
        </div>
        <p className="mt-4 text-[13px] text-muted">Screens show the real app with its built-in sample data.</p>
      </div>
    </section>
  );
}
