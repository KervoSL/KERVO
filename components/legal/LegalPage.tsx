import type { ReactNode } from "react";

export const LEGAL_UPDATED = "October 2026";

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="t-h3">{title}</h2>
      <div className="t-body mt-4 space-y-4">{children}</div>
    </section>
  );
}

/**
 * Shared shell for legal documents. The draft notice stays visible until the
 * texts have had a legal review.
 */
export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="container-x pb-24 pt-14 md:pb-32 md:pt-24">
      <div className="max-w-[44rem]">
        <h1 className="t-display !text-[clamp(2.25rem,1.4rem+3.6vw,4rem)]">{title}</h1>
        <p className="mt-4 text-[15px] text-muted">Last updated: {LEGAL_UPDATED}</p>
        <p className="t-lead mt-8">{intro}</p>

        <p className="mt-8 rounded-2xl border border-line bg-surface px-5 py-4 text-[15px] leading-relaxed text-muted">
          This document is a working draft and will be reviewed by a legal professional before it is
          treated as final. It describes how this website works today.
        </p>

        <div className="mt-12 space-y-10">{children}</div>
      </div>
    </div>
  );
}
