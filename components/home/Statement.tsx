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
        <h2 id="statement" className="t-h2 max-w-[21em]">
          Kervo builds its own digital products. No client work, no agency: every product is ours to
          design, ship and keep improving.
        </h2>

        <div className="mt-14 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-12">
          {PILLARS.map((p) => (
            <div key={p.title} className="border-t border-ink pt-6">
              <h3 className="t-h3">{p.title}</h3>
              <p className="t-body mt-3">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
