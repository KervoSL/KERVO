import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="intro" className="relative bg-black py-28 md:py-40 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Kervo</span>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.05}>
              <p className="text-balance text-[26px] leading-[1.35] sm:text-[30px] md:text-[38px] md:leading-[1.3] font-medium text-white">
                Kervo creates its own digital products, focused on solving real
                problems through software, automation and technology.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-400">
                Each product is designed, built and maintained in-house — one
                company, one standard, a growing family of products.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
