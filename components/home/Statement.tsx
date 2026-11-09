const PILLARS = [
  {
    title: "Design",
    text: "Design is part of the build, not a layer on top. We shape the experience and the system behind it together, from the first flow to the last empty state.",
  },
  {
    title: "Build",
    text: "Focused codebases on proven technology. We pick tools that will still make sense in five years over tools that happen to be trending.",
  },
  {
    title: "Operate",
    text: "We run what we ship: hosting, support and updates. A product is not finished at launch, so neither are we.",
  },
];

export default function Statement() {
  return (
    <section className="section border-t border-line" aria-labelledby="statement">
      <div className="container-x">
        <span className="eyebrow">What we do</span>
        <h2 id="statement" className="t-h2 max-w-[21em]">
          Kervo builds its own digital products. No client work, no agency: every product is ours to
          design, ship and keep improving.
        </h2>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="card">
              <span className="mb-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#2457f5]/10 text-[13px] font-semibold tabular-nums text-kervo">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="t-h3">{p.title}</h3>
              <p className="t-body mt-3">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
