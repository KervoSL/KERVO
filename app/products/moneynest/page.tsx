import type { Metadata } from "next";
import JsonLd from "@/components/ui/JsonLd";
import MnHero from "@/components/moneynest/MnHero";
import MnProblem from "@/components/moneynest/MnProblem";
import MnSolution from "@/components/moneynest/MnSolution";
import MnShowcase from "@/components/moneynest/MnShowcase";
import MnHow from "@/components/moneynest/MnHow";
import MnTrust from "@/components/moneynest/MnTrust";
import MnPricing from "@/components/moneynest/MnPricing";
import MnCta from "@/components/moneynest/MnCta";
import { MONEYNEST_URL } from "@/lib/products";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const TITLE = "MoneyNest — personal finance in one place";
const DESC =
  "MoneyNest brings accounts, spending, budgets, investments and debts into one private workspace. Local-first, works offline, free to start.";

export const metadata: Metadata = {
  title: "MoneyNest",
  description: DESC,
  alternates: { canonical: "/products/moneynest" },
  openGraph: { url: "/products/moneynest", title: TITLE, description: DESC },
  twitter: { title: TITLE, description: DESC },
};

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MoneyNest",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: DESC,
  url: MONEYNEST_URL,
  image: `${SITE_URL}/products/moneynest.png`,
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function MoneyNestPage() {
  return (
    <>
      <JsonLd data={software} />
      <MnHero />
      <MnProblem />
      <MnSolution />
      <MnShowcase />
      <MnHow />
      <MnTrust />
      <MnPricing />
      <MnCta />
    </>
  );
}
