import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How KERVO handles data across its products and this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="relative bg-black pt-[150px] pb-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Legal</span>
        <h1 className="mt-5 text-[32px] md:text-[44px] font-semibold text-white leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-500">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 text-neutral-400 leading-relaxed">
          <p>
            This is a placeholder Privacy Policy for kervo.com and its
            products. It will be replaced with a complete, legally reviewed
            policy before public launch.
          </p>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">1. What we collect</h2>
            <p>
              KERVO builds local-first software wherever possible. Where data
              is collected — for example, account details for billing or
              support — we collect only what is necessary to provide the
              product or service.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">2. How we use it</h2>
            <p>
              Data is used strictly to operate, maintain and improve KERVO
              products. We do not sell personal data, and we do not use it to
              power advertising.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">3. Your rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to
              access, correct, export or delete your data. Requests can be
              sent to the contact below.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">4. Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:hello@kervo.com" className="text-white underline underline-offset-4 hover:text-accent">
                hello@kervo.com
              </a>
              .
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="mt-16 inline-flex items-center text-sm text-neutral-400 hover:text-white transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
}
