"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { MN_PLANS } from "@/lib/moneynest";
import { MONEYNEST_URL } from "@/lib/products";

type Billing = "monthly" | "yearly";

const OPTIONS: { id: Billing; label: string }[] = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
];

export default function MnPricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section className="section scroll-mt-14 border-t border-line" id="pricing" aria-labelledby="mn-pricing">
      <div className="container-x">
        <span className="eyebrow">Pricing</span>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 id="mn-pricing" className="t-h2 max-w-[13em]">
            Start free. Pay only if you keep going.
          </h2>

          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex shrink-0 self-start rounded-full border border-line bg-surface p-1 md:self-auto"
          >
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                aria-pressed={billing === o.id}
                onClick={() => setBilling(o.id)}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition-colors duration-300 ${
                  billing === o.id ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
          {MN_PLANS.map((p) => {
            const shown = p[billing];
            return (
              <div
                key={p.name}
                className={`card flex flex-col ${p.badge ? "!border-ink shadow-[0_30px_60px_-34px_rgba(36,87,245,0.45)]" : ""}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[17px] font-semibold">{p.name}</h3>
                  {p.badge && (
                    <span className="rounded-full bg-[#2457f5]/10 px-2.5 py-1 text-[12px] font-medium text-kervo">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-6 text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-semibold leading-none tracking-[-0.04em]">
                  {shown.price}
                </p>
                <p className="mt-2 min-h-[1.5rem] text-[15px] text-muted">{shown.period}</p>
                <p className="t-body mt-6 text-[16px]">{p.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[34rem] text-[14px] text-muted">
            Plans and prices are set inside MoneyNest and may change. The app always shows the current offer.
          </p>
          <ButtonLink href={MONEYNEST_URL} external track="try-moneynest:pricing">
            Start free in MoneyNest
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
