import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function AboutTeaser() {
  return (
    <section id="about" className="relative bg-black py-28 md:py-40 border-t border-white/10 scroll-mt-16">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">About Kervo</span>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p className="text-balance text-[26px] leading-[1.35] sm:text-[30px] md:text-[38px] md:leading-[1.3] font-medium text-white">
                Kervo is the company behind its digital products.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-400">
                We are not a finance company, a productivity company or a
                trading company. We are a software company that builds in
                whichever domain deserves better tools. Today that means
                personal finance and investing. Tomorrow it will mean more.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm font-medium px-7 py-3.5 transition-colors duration-300 hover:border-white/40 hover:bg-white/5"
              >
                More about Kervo
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
