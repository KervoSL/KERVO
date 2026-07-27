import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const SITE_URL = "https://kervo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KERVO — Software That Empowers.",
    template: "%s — KERVO",
  },
  description:
    "KERVO builds world-class software — MoneyNest, TradeVault, Axiora and beyond — engineered with craftsmanship, privacy and performance at the core.",
  keywords: [
    "KERVO",
    "software company",
    "MoneyNest",
    "TradeVault",
    "Axiora",
    "software craftsmanship",
    "product studio",
  ],
  authors: [{ name: "KERVO" }],
  creator: "KERVO",
  applicationName: "KERVO",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "KERVO",
    title: "KERVO — Software That Empowers.",
    description:
      "World-class software, built with craftsmanship, privacy and performance at the core.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "KERVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KERVO — Software That Empowers.",
    description:
      "World-class software, built with craftsmanship, privacy and performance at the core.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KERVO",
  url: SITE_URL,
  slogan: "Software That Empowers.",
  description:
    "KERVO is a software company building world-class products including MoneyNest, TradeVault and Axiora.",
  brand: [
    { "@type": "Brand", name: "MoneyNest" },
    { "@type": "Brand", name: "TradeVault" },
    { "@type": "Brand", name: "Axiora" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
