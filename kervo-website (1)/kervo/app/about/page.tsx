import type { Metadata } from "next";
import WhoWeAre from "@/components/WhoWeAre";
import Principles from "@/components/Principles";
import Technology from "@/components/Technology";
import Timeline from "@/components/Timeline";
import WhyKervo from "@/components/WhyKervo";
import Careers from "@/components/Careers";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kervo is the technology company behind MoneyNest, TradeVault and its other digital products — how we think, what we value and where we are going.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About Kervo" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-black pt-[140px] md:pt-[180px] pb-20 md:pb-28">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">About</span>
            <h1 className="mt-5 text-balance text-[36px] sm:text-5xl md:text-6xl leading-[1.08] tracking-tightest font-semibold text-white max-w-3xl">
              The company behind the products.
            </h1>
          </Reveal>
        </div>
      </section>
      <WhoWeAre />
      <Principles />
      <Technology />
      <Timeline />
      <WhyKervo />
      <Careers />
    </>
  );
}
