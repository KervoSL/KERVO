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
    <section className="border-t border-line section" aria-labelledby="mn-solution">
      <div className="container-x">
        <h2 id="mn-solution" className="t-h2 max-w-[14em]">
          MoneyNest brings it together.
        </h2>
        <p className="t-lead mt-6 max-w-[38rem]">
          One place for the information that matters, so you can understand your financial situation
          without rebuilding the picture every month.
        </p>
        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12">
          {POINTS.map((p) => (
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
