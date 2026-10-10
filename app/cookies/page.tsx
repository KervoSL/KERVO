import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage, { LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = pageMeta({
  title: 'Cookies',
  description:
    'What cookies and similar technologies the Kervo website uses, and how to manage them. Working draft.',
  path: '/cookies',
});

export default function CookiesPage() {
  return (
    <LegalPage title="Cookies" intro="What this website stores in your browser, which today is nothing beyond what is needed to show it.">
      <LegalSection title="1. This website">
        <p>
          This website does not set cookies of its own and does not use analytics or advertising
          trackers. Because of that, it does not show a cookie banner.
        </p>
        <p>
          If this changes, for example by adding analytics, we will update this page and ask for your
          consent where the law requires it.
        </p>
      </LegalSection>

      <LegalSection title="2. Our products">
        <p>
          Kervo products are separate applications with their own technology. What each one stores in
          your browser or device is described in that product&apos;s own policies.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
