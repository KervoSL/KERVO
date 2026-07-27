import Reveal from "./Reveal";

const STAGES = [
  {
    label: "Past",
    year: "The starting point",
    text: "KERVO began as a single idea worked on late at night: personal finance software that respects the person using it. MoneyNest was the first product built to prove it.",
  },
  {
    label: "Present",
    year: "Where we are",
    text: "We're refining MoneyNest with every release and laying the groundwork for TradeVault and Axiora — extending the same standard into investing and intelligence.",
  },
  {
    label: "Future",
    year: "Where we're going",
    text: "A small family of software that shares one philosophy, built by a team that would rather ship one thing exceptionally than ten things forgettably.",
  },
];

export default function Timeline() {
  return (
    <section className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Evolution</span>
          <h2 className="mt-5 text-balance text-[36px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            A company built one deliberate step at a time.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[10px] hidden md:block h-px bg-white/10" aria-hidden="true" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {STAGES.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="relative pl-6 md:pl-0">
                  <div className="hidden md:block h-[10px] w-[10px] rounded-full bg-accent mb-8" />
                  <div className="absolute left-0 top-1 h-full w-px bg-white/10 md:hidden" aria-hidden="true" />
                  <span className="text-[13px] tracking-wordmark uppercase text-accent">{s.label}</span>
                  <h3 className="mt-3 text-xl font-semibold text-white">{s.year}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-400 max-w-xs">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
