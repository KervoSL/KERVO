export const STEPS = [
  { name: "Research", text: "Start from a real problem people have, not from a list of features." },
  { name: "Design", text: "Shape the flows, states and language before any code is written." },
  { name: "Build", text: "Ship in small, working increments on proven technology." },
  { name: "Launch", text: "Release to real people early, then listen to what they actually do." },
  { name: "Learn", text: "Watch how the product is used and fix whatever is unclear." },
  { name: "Improve", text: "Every release raises the baseline. Then the loop starts again." },
];

export default function Process({ id = "process" }: { id?: string }) {
  return (
    <section className="section border-t border-line" aria-labelledby={id}>
      <div className="container-x">
        <h2 id={id} className="t-h2 max-w-[16em]">
          How Kervo builds a product.
        </h2>
        <p className="t-lead mt-6 max-w-[36rem]">
          Every product follows the same loop, and the loop never really ends: what we learn after
          launch feeds the next release.
        </p>

        <ol className="mt-14 grid gap-x-8 gap-y-10 md:mt-20 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-6">
          {STEPS.map((s) => (
            <li key={s.name} className="relative border-t border-ink pt-6">
              <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-ink" aria-hidden="true" />
              <h3 className="t-h3">{s.name}</h3>
              <p className="t-body mt-3 text-[15px]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
