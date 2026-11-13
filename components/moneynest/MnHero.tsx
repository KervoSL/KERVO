import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/Frames";
import Parallax from "@/components/ui/Parallax";
import { ArrowRight, Check } from "@/components/ui/Icons";
import { PRODUCTS, MONEYNEST_URL } from "@/lib/products";
import { MN_FACTS } from "@/lib/moneynest";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * Split hero on a light backdrop: the message on the left, the real app on the right.
 * Screens are MoneyNest with its built-in sample data.
 */
export default function MnHero() {
  const product = PRODUCTS[0];
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <div className="hero-backdrop absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x grid items-center gap-14 pb-16 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="lg:col-span-5">
          <div className="rise flex items-center gap-3" style={step(0)}>
            <Image
              src={product.logo.src}
              alt={product.logo.alt}
              width={44}
              height={44}
              className="rounded-[22%] shadow-[0_8px_20px_-10px_rgba(10,15,30,0.5)] ring-1 ring-black/10"
              priority
            />
            <span className="text-[20px] font-semibold tracking-[-0.02em]">MoneyNest</span>
            <span className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[12px] font-medium text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00b894]" aria-hidden="true" />
              {product.statusLabel}
            </span>
          </div>

          <h1 className="t-hero rise mt-7 max-w-[11em]" style={step(1)}>
            Your personal finances, in one place.
          </h1>
          <p className="t-lead rise mt-6 max-w-[30rem]" style={step(2)}>
            MoneyNest brings your accounts, spending, budgets, investments and debts into one private
            workspace, so you can see where you stand and decide what to do next.
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row md:mt-9" style={step(3)}>
            <ButtonLink href={MONEYNEST_URL} external track="try-moneynest:mn-hero">
              Try MoneyNest
            </ButtonLink>
            <ButtonLink href="/products/moneynest#features" variant="secondary">
              See what is inside
            </ButtonLink>
          </div>

          <ul className="rise mt-9 space-y-2.5 text-[15px] text-ink" style={step(4)}>
            {MN_FACTS.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00d4aa]/15 text-[#007a63]">
                  <Check size={12} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <p className="rise mt-6 text-[14px] text-muted" style={step(5)}>
            <Link href="/products/moneynest#pricing" className="group inline-flex items-center gap-2 font-medium text-ink">
              <span className="link-draw">Plans and prices</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </p>
        </div>

        <div className="rise relative lg:col-span-7 lg:-mr-16 xl:-mr-28" style={step(3)}>
          <div className="hero-plate" aria-hidden="true" />
          <div className="relative mx-auto max-w-[760px] pb-12 pr-[7%] lg:max-w-none lg:pb-16">
            <Parallax speed={0.02}>
              <BrowserFrame
                src="/moneynest/desktop-dashboard.webp"
                alt="MoneyNest dashboard with net worth, financial health, accounts, assets and debts"
                sizes="(min-width: 1280px) 780px, (min-width: 1024px) 58vw, 92vw"
                priority
                className="!shadow-[0_30px_70px_-30px_rgba(10,20,60,0.5)]"
              />
            </Parallax>
            <div className="absolute bottom-0 right-0 w-[24%] min-w-[96px] max-w-[210px] lg:bottom-2">
              <Parallax speed={0.05}>
                <PhoneFrame
                  src="/moneynest/mobile-dashboard.webp"
                  alt="MoneyNest dashboard on a phone"
                  sizes="210px"
                  priority
                  className="!shadow-[0_30px_60px_-24px_rgba(10,20,60,0.6)]"
                />
              </Parallax>
            </div>
          </div>
          <p className="relative -mt-4 text-[13px] text-muted lg:-mt-6">
            The real app, shown with its built-in sample data.
          </p>
        </div>
      </div>
    </section>
  );
}
