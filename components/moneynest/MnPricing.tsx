import { MN_PLANS } from "@/lib/moneynest";

export default function MnPricing() {
  return (
    <section className="border-t border-line section" aria-labelledby="mn-pricing">
      <div className="container-x">
        <h2 id="mn-pricing" className="t-h2 max-w-[13em]">
          Start free. Pay only if you keep going.
        </h2>

        <div className="mt-14 grid overflow-hidden rounded-[1.5rem] border border-line bg-surface md:mt-20 md:grid-cols-3">
          {MN_PLANS.map((p) => (
            <div
              key={p.name}
              className="border-b border-line p-7 last:border-b-0 md:border-b-0 md:border-r md:p-9 md:last:border-r-0"
            >
              <h3 className="text-[17px] font-semibold">{p.name}</h3>
              <p className="mt-6 text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-semibold leading-none tracking-[-0.04em]">
                {p.price}
              </p>
              <p className="mt-2 min-h-[1.5rem] text-[15px] text-muted">{p.period}</p>
              <p className="t-body mt-6 text-[16px]">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[14px] text-muted">
          Plans and prices are managed inside MoneyNest and may change. Prices include the plans as
          currently offered in the app.
        </p>
      </div>
    </section>
  );
}
