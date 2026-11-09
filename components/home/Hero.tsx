import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/Frames";
import Parallax from "@/components/ui/Parallax";
import { MONEYNEST_URL, PRODUCTS } from "@/lib/products";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * Split hero: message on the left, the real product on the right, over a soft light
 * backdrop. The screens are the real MoneyNest app with its built-in sample data.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <div className="hero-backdrop absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x grid items-center gap-14 pb-20 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-6 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-5">
          <h1 className="t-hero rise" style={step(0)}>
            Products for the way people live, work and manage their world.
          </h1>
          <p className="t-lead rise mt-6 max-w-[30rem] md:mt-7" style={step(2)}>
            Kervo is a technology company. We design, build and operate our own digital products,
            starting with MoneyNest.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row md:mt-10" style={step(3)}>
            <ButtonLink href={MONEYNEST_URL} external>
              Try MoneyNest
            </ButtonLink>
            <ButtonLink href="/products/moneynest" variant="secondary">
              See what is inside
            </ButtonLink>
          </div>
          <p className="rise mt-5 text-[13px] text-muted" style={step(4)}>
            Free to start: 100 movements, no card required.{" "}
            <Link href="/products/moneynest#pricing" className="link-draw text-ink">
              See plans
            </Link>
          </p>

          <ul
            className="rise mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6 md:mt-12"
            aria-label="Kervo products"
            style={step(5)}
          >
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={p.href} className="group flex items-center gap-3">
                  <Image
                    src={p.logo.src}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-[22%] ring-1 ring-black/10"
                  />
                  <span>
                    <span className="link-draw block text-[15px] font-semibold leading-tight">{p.name}</span>
                    <span className="block text-[13px] leading-tight text-muted">{p.statusLabel}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* The real product on a soft plate, tilted slightly on large screens. */}
        <div className="rise relative lg:col-span-7 lg:-mr-16 xl:-mr-28" style={step(3)}>
          <div className="hero-plate" aria-hidden="true" />
          <span className="hero-orb hero-orb-a" aria-hidden="true" />
          <span className="hero-orb hero-orb-b" aria-hidden="true" />
          <span className="hero-orb hero-orb-c" aria-hidden="true" />

          <div className="relative mx-auto max-w-[720px] pb-10 pr-[6%] lg:max-w-none lg:pb-14">
            <div className="hero-tilt">
              <Parallax speed={0.025}>
                <BrowserFrame
                  src="/moneynest/desktop-dashboard.webp"
                  alt="MoneyNest dashboard showing net worth, accounts, assets, debts and financial health"
                  sizes="(min-width: 1280px) 760px, (min-width: 1024px) 58vw, 92vw"
                  priority
                />
              </Parallax>
            </div>
            <div className="absolute -bottom-2 right-0 w-[24%] min-w-[96px] max-w-[210px] lg:bottom-0">
              <Parallax speed={0.06}>
                <PhoneFrame
                  src="/moneynest/mobile-dashboard.webp"
                  alt="MoneyNest dashboard on a phone"
                  sizes="210px"
                  priority
                />
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
