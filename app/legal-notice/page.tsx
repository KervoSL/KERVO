import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { LEGAL_DETAILS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal notice",
  description: "Company details for Kervo SL.",
  alternates: { canonical: "/legal-notice" },
};

export default function LegalNoticePage() {
  return (
    <LegalPage title="Legal notice" intro="Information about the company that operates this website.">
      <LegalSection title="Company details">
        <dl className="divide-y divide-line border-y border-line">
          {LEGAL_DETAILS.map((d) => (
            <div key={d.label} className="grid gap-1 py-4 sm:grid-cols-3 sm:gap-6">
              <dt className="text-[15px] text-muted">{d.label}</dt>
              <dd className="text-[16px] text-ink sm:col-span-2">
                {d.value ?? <span className="text-muted">To be completed</span>}
              </dd>
            </div>
          ))}
        </dl>
      </LegalSection>

      <LegalSection title="Use of this website">
        <p>
          The content of this website, including text, logos and product names, belongs to Kervo SL or
          its owners. Product names and logos may not be reused without permission.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
