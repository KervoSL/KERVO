import { MN_STEPS } from "@/lib/moneynest";

export default function MnHow() {
  return (
    <section className="section" aria-labelledby="mn-how">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h2 id="mn-how" className="t-h2 max-w-[11em]">
              From first launch to a full picture.
            </h2>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {MN_STEPS.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-8 first:border-t-ink md:grid-cols-[3.5rem_1fr]">
                <span className="pt-1 text-[15px] font-medium tabular-nums text-muted">{i + 1}</span>
                <div>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="t-body mt-3">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
