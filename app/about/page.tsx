import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Process from "@/components/home/Process";
import ClosingCta from "@/components/home/ClosingCta";
import { PRODUCTS } from "@/lib/products";
import { LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kervo is the technology company behind MoneyNest and TradeVault. How we think about software, how we build, and where we are going.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Kervo" },
};

const PRINCIPLES = [
  {
    title: "Own the whole product",
    text: "Design, code, infrastructure, billing and support stay in-house, so nothing falls between teams.",
  },
  {
    title: "Local-first when it fits",
    text: "Where a product can work on the user's own device, it should. Cloud features are an addition, never a requirement. MoneyNest is built this way.",
  },
  {
    title: "Fast and simple",
    text: "Everyday actions should take seconds. We remove steps until only what matters remains.",
  },
  {
    title: "Built to last",
    text: "Proven technology, careful details and steady releases over novelty.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="container-x pb-20 pt-14 md:pb-28 md:pt-24">
        <h1 className="t-display max-w-[13em]">A technology company that builds its own products.</h1>
        <p className="t-lead mt-8 max-w-[38rem]">
          Kervo designs, builds and operates digital products of its own. We are not an agency and we do
          not build for clients. Everything we make, we keep improving.
        </p>
      </section>

      <section className="section border-t border-line" aria-labelledby="who">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <h2 id="who" className="t-h2 lg:col-span-5">
              Who we are.
            </h2>
            <div className="space-y-6 lg:col-span-6 lg:col-start-7">
              <p className="t-lead !text-ink">
                {LEGAL_NAME} is the company behind MoneyNest and TradeVault. It exists to build digital
                products that solve real, everyday problems with software, automation and technology.
              </p>
              <p className="t-body">
                We start from a problem, not from a technology. When a problem is worth solving, we design
                the product, build it, launch it and look after it for as long as people use it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="why">
        <div className="container-x">
          <h2 id="why" className="t-h2 max-w-[20em]">
            Everyday tools for money, work and routines are too often fragmented, slow or built around
            somebody else&apos;s priorities.
          </h2>
          <p className="t-lead mt-8 max-w-[38rem]">
            Kervo exists to build the alternative: products that are clear, fast and respectful of the
            people who use them.
          </p>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="builds">
        <div className="container-x">
          <h2 id="builds" className="t-h2 max-w-[14em]">
            What we build.
          </h2>
          <ul className="mt-14 divide-y divide-line border-y border-line md:mt-20">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.href}
                  className="group grid items-center gap-4 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-8"
                >
                  <Image src={p.logo.src} alt="" width={48} height={48} className="rounded-[22%]" />
                  <span>
                    <span className="t-h3 link-draw">{p.name}</span>
                    <span className="mt-1 block text-[16px] text-muted">{p.tagline}</span>
                  </span>
                  <span className="text-[14px] text-muted">{p.statusLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process id="about-process" />

      <section className="section border-t border-line" aria-labelledby="principles">
        <div className="container-x">
          <h2 id="principles" className="t-h2 max-w-[14em]">
            How we think about software.
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-t border-ink pt-6">
                <h3 className="t-h3">{p.title}</h3>
                <p className="t-body mt-3 max-w-[30rem]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="tech">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <h2 id="tech" className="t-h2 lg:col-span-5">
              Proven technology, chosen on purpose.
            </h2>
            <div className="space-y-6 lg:col-span-6 lg:col-start-7">
              <p className="t-body">
                We favour modern web technology, including Next.js and TypeScript, Postgres-backed
                services, Stripe for payments and Vercel for hosting. The aim is software that stays
                fast, stays maintainable and keeps making sense years from now.
              </p>
              <p className="t-body">
                MoneyNest is a local-first progressive web app that works offline and can be installed.
                TradeVault is built as a modern web application. We choose the right tool for each
                product instead of one stack for everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line" aria-labelledby="vision">
        <div className="container-x">
          <h2 id="vision" className="t-h2 max-w-[18em]">
            A small family of products, each good enough to stand on its own.
          </h2>
          <p className="t-lead mt-8 max-w-[38rem]">
            We grow by adding a product when we find a problem worth solving, not on a schedule. Every
            new product is held to the same standard as the first.
          </p>
        </div>
      </section>

      <ClosingCta title="Want to know more about Kervo?" />
    </>
  );
}
