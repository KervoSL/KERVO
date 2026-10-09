import { MN_PROBLEM_ITEMS } from "@/lib/moneynest";

export default function MnProblem() {
  return (
    <section className="section" aria-labelledby="mn-problem">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h2 id="mn-problem" className="t-h2">
              Personal finance is scattered.
            </h2>
            <p className="t-lead mt-6 max-w-[34rem]">
              Money lives in bank apps, spreadsheets and investment platforms. Debts are tracked in one
              place, goals in another, budgets nowhere. Understanding the whole picture means stitching
              it together again every time.
            </p>
          </div>
          <ul className="lg:col-span-5 lg:col-start-8" aria-label="Where personal finance usually lives">
            {MN_PROBLEM_ITEMS.map((item) => (
              <li
                key={item}
                className="border-t border-line py-3.5 text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] font-medium tracking-[-0.02em] text-[#9aa3b5] last:border-b"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
