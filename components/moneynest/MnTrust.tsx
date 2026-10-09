import { MN_TRUST } from "@/lib/moneynest";

export default function MnTrust() {
  return (
    <section className="border-t border-line section" aria-labelledby="mn-trust">
      <div className="container-x">
        <h2 id="mn-trust" className="t-h2 max-w-[12em]">
          Private by design.
        </h2>
        <p className="t-lead mt-6 max-w-[38rem]">
          MoneyNest is built local-first: you can use it fully without an account, and your data stays on
          your device unless you choose to sync it.
        </p>

        <div className="mt-14 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {MN_TRUST.map((t) => (
            <div key={t.title} className="border-t border-ink pt-6">
              <h3 className="t-h3">{t.title}</h3>
              <p className="t-body mt-3 text-[16px]">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
