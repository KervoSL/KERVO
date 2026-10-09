import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/Frames";
import Parallax from "@/components/ui/Parallax";
import { PRODUCTS, type Product } from "@/lib/products";
import { ArrowRight } from "@/components/ui/Icons";

function Feature({ product }: { product: Product }) {
  return (
    <article className="stage relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem]">
      <div className="grid gap-12 px-6 pt-10 md:px-12 md:pt-14 lg:grid-cols-12 lg:items-end lg:gap-6 lg:px-16 lg:pt-20">
        <div className="lg:col-span-5 lg:pb-24">
          <Image src={product.logo.src} alt={product.logo.alt} width={56} height={56} className="rounded-[22%] ring-1 ring-white/10" />
          <h3 className="mt-8 text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {product.name}
          </h3>
          <p className="mt-3 text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] text-stage-text">{product.tagline}</p>
          <p className="t-body mt-5 max-w-[30rem]">{product.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={product.href} variant="mint">
              Explore {product.name}
            </ButtonLink>
            {product.appUrl && (
              <ButtonLink href={product.appUrl} external variant="ghost-light">
                Try {product.name}
              </ButtonLink>
            )}
          </div>
          <p className="mt-8 text-[13px] text-stage-muted">Screens show the real app with its built-in sample data.</p>
        </div>

        {/* Desktop and tablet: the dashboard, with the phone layered over it. */}
        <div className="relative hidden md:block lg:col-span-7 lg:-mr-24 xl:-mr-32">
          <Parallax speed={0.035} className="translate-y-10 lg:translate-y-16">
            <BrowserFrame
              src="/moneynest/desktop-dashboard.webp"
              alt="MoneyNest dashboard showing net worth, accounts, assets, debts and financial health"
              sizes="(min-width: 1280px) 720px, (min-width: 768px) 90vw, 100vw"
            />
          </Parallax>
          <Parallax speed={0.09} className="absolute -bottom-16 left-[-3%] w-[22%] min-w-[130px] max-w-[200px]">
            <PhoneFrame
              src="/moneynest/mobile-dashboard.webp"
              alt="MoneyNest dashboard on a phone"
              sizes="190px"
            />
          </Parallax>
        </div>

        {/* Mobile: its own composition — the phone, large, anchored to the bottom edge. */}
        <div className="relative md:hidden">
          <Parallax speed={0.04} className="mx-auto -mb-24 w-[64%] max-w-[260px]">
            <PhoneFrame
              src="/moneynest/mobile-dashboard.webp"
              alt="MoneyNest dashboard on a phone"
              sizes="260px"
            />
          </Parallax>
        </div>
      </div>
    </article>
  );
}

function Secondary({ product }: { product: Product }) {
  return (
    <article className="flex flex-col rounded-[1.75rem] border border-line bg-surface p-7 md:p-10">
      <div className="flex items-start justify-between gap-4">
        <Image src={product.logo.src} alt={product.logo.alt} width={56} height={56} className="rounded-[22%]" />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[13px] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-[#a3abbb]" aria-hidden="true" />
          {product.statusLabel}
        </span>
      </div>
      <h3 className="t-h2 mt-10 !text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)]">{product.name}</h3>
      <p className="t-body mt-3 max-w-[26rem]">{product.summary}</p>
      <div className="mt-auto pt-8">
        <Link href={product.href} className="group inline-flex items-center gap-2 text-[15px] font-medium">
          <span className="link-draw">About {product.name}</span>
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}

function NextSlot() {
  return (
    <article className="flex flex-col justify-between rounded-[1.75rem] border border-dashed border-[#bfc5d1] p-7 md:p-10">
      <div className="flex h-14 w-14 items-center justify-center rounded-[22%] border border-dashed border-[#bfc5d1] text-[#8a93a6]">
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <path d="M9 3v12M3 9h12" />
        </svg>
      </div>
      <div className="mt-10">
        <h3 className="t-h2 !text-[clamp(1.75rem,1.3rem+1.6vw,2.5rem)]">The next product</h3>
        <p className="t-body mt-3 max-w-[26rem]">Not announced yet. When it is ready, it will appear here.</p>
      </div>
    </article>
  );
}

export default function ProductsShowcase() {
  const featured = PRODUCTS.find((p) => p.status === "live") ?? PRODUCTS[0];
  const others = PRODUCTS.filter((p) => p !== featured);

  return (
    <div className="space-y-5">
      <Feature product={featured} />
      <div className="grid gap-5 md:grid-cols-2">
        {others.map((p) => (
          <Secondary key={p.slug} product={p} />
        ))}
        <NextSlot />
      </div>
    </div>
  );
}
