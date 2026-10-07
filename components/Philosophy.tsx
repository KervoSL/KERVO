import Reveal from "./Reveal";

const STEPS = [
  { n: "01", title: "Build", text: "We design and develop every product in-house, end to end." },
  { n: "02", title: "Learn", text: "Real use shows what works. We listen to it and measure against it." },
  { n: "03", title: "Improve", text: "Each release is better than the last. Products are never finished." },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative bg-black py-28 md:py-40 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">How we work</span>
          <h2 className="mt-5 text-balance text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            Build. Learn. Improve.
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-neutral-400">
            Kervo designs, develops and improves digital products continuously.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08} className="bg-black">
              <div className="group h-full p-8 md:p-10 transition-colors duration-500 hover:bg-neutral-950">
                <span className="text-[13px] tabular-nums text-accent">{s.n}</span>
                <h3 className="mt-10 md:mt-16 text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-400 max-w-xs">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
