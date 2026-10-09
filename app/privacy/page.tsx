import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { CONTACT_EMAIL, LEGAL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kervo handles personal data on this website and across its products.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Kervo handles personal data on this website and, in general terms, across its products."
    >
      <LegalSection title="1. Who is responsible">
        <p>
          {LEGAL_NAME} is responsible for this website. You can reach us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-draw text-ink">
            {CONTACT_EMAIL}
          </a>
          . Our full company details are in the Legal notice.
        </p>
      </LegalSection>

      <LegalSection title="2. This website">
        <p>
          This website does not ask you for personal data, does not use analytics and does not set
          advertising or tracking cookies. If you write to us, we use your message and email address
          only to reply to you.
        </p>
        <p>
          Our hosting provider, Vercel, may process technical request data such as your IP address to
          deliver and secure the site.
        </p>
      </LegalSection>

      <LegalSection title="3. Our products">
        <p>
          Kervo builds local-first software wherever possible. Where data is collected, for example
          account details for billing or support, we collect only what is necessary to provide the
          product or service. We do not sell personal data, and we do not use it to power advertising.
        </p>
        <p>
          Each product describes in its own privacy policy what it stores and where. Payments are
          processed by Stripe.
        </p>
      </LegalSection>

      <LegalSection title="4. Your rights">
        <p>
          Depending on where you live, you may have the right to access, correct, export or delete your
          data. Send requests to the contact above.
        </p>
      </LegalSection>

      <LegalSection title="5. Changes">
        <p>We may update this policy as our products evolve. The date at the top shows the latest version.</p>
      </LegalSection>
    </LegalPage>
  );
}
