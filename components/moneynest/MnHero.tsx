import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/Frames";
import Parallax from "@/components/ui/Parallax";
import { PRODUCTS, MONEYNEST_URL } from "@/lib/products";
import { MN_FACTS } from "@/lib/moneynest";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function MnHero() {
  const product = PRODUCTS[0];
  return (
    <section className="stage relative overflow-hidden">
      <div className="container-x pt-14 md:pt-24 lg:pt-28">
        <div className="rise flex items-center gap-4" style={step(0)}>
          <Image
            src={product.logo.src}
            alt={product.logo.alt}
            width={48}
            height={48}
            className="rounded-[22%] ring-1 ring-white/10"
          />
          <span className="text-[18px] font-semibold tracking-[-0.02em]">MoneyNest</span>
        </div>

        <h1 className="t-display rise mt-8 max-w-[13em]" style={step(1)}>
          Your personal finances, in one place.
        </h1>
        <p className="t-lead rise mt-7 max-w-[38rem]" style={step(2)}>
          MoneyNest brings your accounts, spending, budgets, investments and debts into one private
          workspace, so you can see where you stand and decide what to do next.
        </p>

        <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={step(3)}>
          <ButtonLink href={MONEYNEST_URL} external variant="mint">
            Try MoneyNest
          </ButtonLink>
          <ButtonLink href="/products/moneynest#features" variant="ghost-light">
            See what is inside
          </ButtonLink>
        </div>

        <ul className="rise mt-10 flex flex-col gap-2 text-[15px] text-stage-muted sm:flex-row sm:gap-x-8" style={step(4)}>
          {MN_FACTS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="container-x relative mt-16 md:mt-24">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="hidden md:block">
            <Parallax speed={0.03}>
              <BrowserFrame
                src="/moneynest/desktop-dashboard.webp"
                alt="MoneyNest dashboard with net worth, financial health, accounts, assets and debts"
                sizes="(min-width: 1280px) 1100px, 92vw"
                priority
              />
            </Parallax>
            <Parallax speed={0.08} className="absolute -right-4 bottom-[-4rem] w-[20%] min-w-[150px] max-w-[230px] lg:-right-10">
              <PhoneFrame
                src="/moneynest/mobile-dashboard.webp"
                alt="MoneyNest dashboard on a phone"
                sizes="230px"
              />
            </Parallax>
          </div>
          <div className="mx-auto w-[70%] max-w-[300px] md:hidden">
            <PhoneFrame
              src="/moneynest/mobile-dashboard.webp"
              alt="MoneyNest dashboard on a phone"
              sizes="300px"
              priority
            />
          </div>
        </div>
        <p className="mt-6 pb-16 text-center text-[13px] text-stage-muted md:pb-20">
          The real app, shown with its built-in sample data.
        </p>
      </div>
    </section>
  );
}
