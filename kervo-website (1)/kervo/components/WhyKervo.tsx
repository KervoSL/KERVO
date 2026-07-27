import Reveal from "./Reveal";

const ROWS = [
  {
    axis: "Quality",
    common: "Ship first, fix later.",
    kervo: "Ship when it's right — quality is the release criteria.",
  },
  {
    axis: "Time horizon",
    common: "Optimized for this quarter's metrics.",
    kervo: "Built to still make sense in five years.",
  },
  {
    axis: "Attention to detail",
    common: "Good enough, move on.",
    kervo: "The last 5% is where trust actually gets built.",
  },
  {
    axis: "Privacy",
    common: "Your data is the business model.",
    kervo: "Your data is yours. Local-first by default.",
  },
  {
    axis: "Performance",
    common: "Acceptable on a fast connection.",
    kervo: "Fast everywhere, without asking why.",
  },
];

export default function WhyKervo() {
  return (
    <section id="why-kervo" className="relative bg-black py-32 md:py-44 border-t border-white/10">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Why KERVO</span>
          <h2 className="mt-5 text-balance text-[36px] md:text-[52px] leading-[1.1] font-semibold text-white max-w-2xl">
            Not a comparison to competitors. A different set of defaults.
          </h2>
        </Reveal>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-3 border-b border-white/10 bg-neutral-950 text-[12px] tracking-wide uppercase text-neutral-500">
            <div className="px-6 md:px-8 py-5">Dimension</div>
            <div className="px-6 md:px-8 py-5">Most software</div>
            <div className="px-6 md:px-8 py-5 text-white">KERVO</div>
          </div>
          {ROWS.map((r, i) => (
            <Reveal key={r.axis} delay={i * 0.05} className="grid grid-cols-3 border-b border-white/10 last:border-b-0">
              <div className="px-6 md:px-8 py-6 text-sm font-medium text-white">{r.axis}</div>
              <div className="px-6 md:px-8 py-6 text-sm text-neutral-500 leading-relaxed">{r.common}</div>
              <div className="px-6 md:px-8 py-6 text-sm text-neutral-200 leading-relaxed border-l border-white/10 bg-white/[0.02]">
                {r.kervo}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
