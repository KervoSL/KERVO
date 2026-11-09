const POINTS = [
  {
    title: "One workspace",
    text: "Accounts, movements, budgets, investments, debts and goals live side by side.",
  },
  {
    title: "One source of truth",
    text: "Everything recalculates from the same data, so the numbers always agree.",
  },
  {
    title: "Yours to keep",
    text: "Export your data whenever you want, as PDF, Excel or a JSON backup.",
  },
];

export default function MnSolution() {
  return (
    <section className="section scroll-mt-14 border-t border-line" id="overview" aria-labelledby="mn-solution">
      <div className="container-x">
        <span className="eyebrow">Overview</span>
        <h2 id="mn-solution" className="t-h2 max-w-[14em]">
          MoneyNest brings it together.
        </h2>
        <p className="t-lead mt-6 max-w-[38rem]">
          One place for the information that matters, so you can understand your financial situation
          without rebuilding the picture every month.
        </p>
        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
          {POINTS.map((p, i) => (
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
