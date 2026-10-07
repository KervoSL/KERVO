import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { PRODUCTS } from "@/lib/products";
import { SITE_DESCRIPTION, SITE_URL, TAGLINE, EXTERNAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kervo — Building products for the way people live, work and manage their world",
    template: "%s — Kervo",
  },
  description: SITE_DESCRIPTION,
  keywords: ["Kervo", "technology company", "digital products", ...PRODUCTS.filter((p) => p.href).map((p) => p.name)],
  authors: [{ name: "Kervo" }],
  creator: "Kervo",
  applicationName: "Kervo",
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
    siteName: "Kervo",
    title: "Kervo — Building products for the way people live, work and manage their world",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kervo — Building products for the way people live, work and manage their world",
    description: SITE_DESCRIPTION,
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
  name: "Kervo",
  legalName: "Kervo SL",
  url: SITE_URL,
  slogan: TAGLINE,
  description: SITE_DESCRIPTION,
  sameAs: [EXTERNAL_LINKS.github],
  brand: PRODUCTS.filter((p) => p.href).map((p) => ({ "@type": "Brand", name: p.name, url: p.href })),
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
