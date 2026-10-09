import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of this website and Kervo products.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The general terms that apply to this website. Each product may add its own terms at sign-up."
    >
      <LegalSection title="1. Using Kervo products">
        <p>
          By using a Kervo product, you agree to use it lawfully and in line with any product-specific
          terms provided at sign-up.
        </p>
      </LegalSection>

      <LegalSection title="2. Accounts">
        <p>
          You are responsible for keeping your account credentials secure and for activity that happens
          under your account.
        </p>
      </LegalSection>

      <LegalSection title="3. This website">
        <p>
          The content of this website is provided for information. We may change or remove it at any
          time.
        </p>
      </LegalSection>

      <LegalSection title="4. Changes">
        <p>
          We may update these terms as Kervo products evolve. Material changes will be communicated
          before they take effect.
        </p>
      </LegalSection>

      <LegalSection title="5. Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-draw text-ink">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
