import { Check } from "@/components/ui/Icons";
import { MN_TRUST } from "@/lib/moneynest";

export default function MnTrust() {
  return (
    <section className="section scroll-mt-14 border-t border-line" id="privacy" aria-labelledby="mn-trust">
      <div className="container-x">
        <span className="eyebrow">Privacy</span>
        <h2 id="mn-trust" className="t-h2 max-w-[12em]">
          Private by design.
        </h2>
        <p className="t-lead mt-6 max-w-[38rem]">
          MoneyNest is built local-first: you can use it fully without an account, and your data stays on
          your device unless you choose to sync it.
        </p>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {MN_TRUST.map((t) => (
            <div key={t.title} className="card">
              <span className="mb-6 flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4aa]/15 text-[#007a63]">
                <Check size={16} />
              </span>
              <h3 className="t-h3">{t.title}</h3>
              <p className="t-body mt-3 text-[16px]">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
