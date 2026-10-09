import { BrowserFrame } from "@/components/ui/Frames";
import MnFeatures from "./MnFeatures";

const DASH_POINTS = [
  {
    title: "Net worth, always current",
    text: "Liquidity, investments, assets and debts add up to one number, compared with last month.",
  },
  {
    title: "A financial health score",
    text: "A single score built from saving, stability, distribution and fixed costs.",
  },
  {
    title: "Any period you need",
    text: "Switch between this month, the previous month, this year, all time or a custom range.",
  },
];

export default function MnShowcase() {
  return (
    <section className="stage section" id="features" aria-labelledby="mn-dashboard">
      <div className="container-x">
        <h2 id="mn-dashboard" className="t-h2 max-w-[14em]">
          A clear picture, the moment you open it.
        </h2>
        <p className="t-lead mt-6 max-w-[36rem]">
          The dashboard is where everything meets: what you have, what you owe and how you are doing.
        </p>

        <div className="mt-14 md:mt-20">
          <BrowserFrame
            src="/moneynest/desktop-dashboard.webp"
            alt="MoneyNest dashboard with net worth, financial health, accounts, assets and debts"
            sizes="(min-width: 1280px) 1144px, 92vw"
          />
        </div>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-12">
          {DASH_POINTS.map((p) => (
            <div key={p.title} className="border-t border-white/25 pt-5">
              <h3 className="t-h3">{p.title}</h3>
              <p className="t-body mt-3 text-[15px]">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-36">
          <h2 className="t-h2 max-w-[14em]">Everything else, one tab away.</h2>
          <p className="t-lead mt-6 max-w-[36rem]">
            Each area of MoneyNest, shown as it really is.
          </p>
          <MnFeatures />
        </div>
      </div>
    </section>
  );
}
