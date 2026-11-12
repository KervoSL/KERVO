import { MN_FAQ } from "@/lib/moneynest";

/** Accordion built on native <details>, so it works without JavaScript. */
export default function MnFaq() {
  return (
    <section className="section scroll-mt-14 border-t border-line" id="faq" aria-labelledby="mn-faq">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="eyebrow">FAQ</span>
          <h2 id="mn-faq" className="t-h2">
            Common questions.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {MN_FAQ.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[18px] font-medium tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                      <path d="M9 3v12M3 9h12" />
                    </svg>
                  </span>
                </summary>
                <p className="t-body max-w-[40rem] pb-6">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
