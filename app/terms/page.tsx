import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of KERVO products and this website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="relative bg-black pt-[150px] pb-32 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <span className="text-[13px] tracking-wordmark uppercase text-neutral-500">Legal</span>
        <h1 className="mt-5 text-[32px] md:text-[44px] font-semibold text-white leading-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-neutral-500">Last updated: July 2026</p>

        <div className="mt-12 space-y-10 text-neutral-400 leading-relaxed">
          <p>
            This is a placeholder Terms of Service for kervo.com and its
            products. It will be replaced with a complete, legally reviewed
            document before public launch.
          </p>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">1. Using KERVO products</h2>
            <p>
              By using a KERVO product, you agree to use it lawfully and in
              line with any product-specific terms provided at sign-up.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">2. Accounts</h2>
            <p>
              You&apos;re responsible for keeping your account credentials
              secure and for activity that happens under your account.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">3. Changes</h2>
            <p>
              We may update these terms as KERVO products evolve. Material
              changes will be communicated before they take effect.
            </p>
          </div>

          <div>
            <h2 className="text-white text-lg font-semibold mb-3">4. Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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
