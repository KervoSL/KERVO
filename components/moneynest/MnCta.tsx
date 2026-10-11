import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Newsletter from "@/components/ui/Newsletter";
import { MONEYNEST_URL, PRODUCTS } from "@/lib/products";

export default function MnCta() {
  const product = PRODUCTS[0];
  return (
    <section className="stage section" aria-labelledby="mn-cta">
      <div className="container-x">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Image
              src={product.logo.src}
              alt=""
              width={56}
              height={56}
              className="rounded-[22%] ring-1 ring-white/10"
            />
            <h2 id="mn-cta" className="t-display mt-8 max-w-[11em] !text-[clamp(2.25rem,1.2rem+4.4vw,4.5rem)]">
              Start managing your money.
            </h2>
            <p className="t-lead mt-6 max-w-[34rem]">
              Free to start, no card required. MoneyNest is built, run and improved by{" "}
              <Link href="/about" className="link-draw text-stage-text">
                Kervo
              </Link>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <ButtonLink href={MONEYNEST_URL} external variant="mint">
              Try MoneyNest
            </ButtonLink>
            <ButtonLink href="/products" variant="ghost-light">
              All products
            </ButtonLink>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-stage-line pt-10 md:mt-24 md:grid-cols-12 md:gap-12 md:pt-12">
          <div className="md:col-span-6">
            <h3 className="t-h3">Follow what changes in MoneyNest.</h3>
            <p className="t-body mt-3 max-w-[28rem]">Get an email when we ship something new.</p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Newsletter list="moneynest" idPrefix="mn" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
