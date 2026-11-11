
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CookieConsent from "@/components/cookies/CookieConsent";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const homeOgImage = "/og/home-og.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "NORDVIA EXPORTS | Apparel Manufacturer in Pakistan",
    template: "%s | Nordvia Exports",
  },

  description:
    "NORDVIA EXPORTS is an apparel manufacturer in Pakistan coordinating custom clothing, sportswear and private-label apparel through partners in Sialkot.",

  applicationName: "NORDVIA EXPORTS",

  keywords: [
    "apparel manufacturer in Pakistan",
    "clothing manufacturer in Pakistan",
    "garment manufacturer in Sialkot",
    "hoodie manufacturer Pakistan",
    "sportswear manufacturer Pakistan",
    "tracksuit manufacturer",
    "private label clothing manufacturer",
    "custom streetwear manufacturing",
    "wholesale apparel Pakistan",
    "apparel export company",
    "custom clothing supplier",
  ],

  authors: [{ name: "NORDVIA EXPORTS" }],
  creator: "NORDVIA EXPORTS",
  publisher: "NORDVIA EXPORTS",

  openGraph: {
    title: "NORDVIA EXPORTS | Apparel Manufacturer in Pakistan",
    description:
      "Custom apparel development, private-label clothing and sourcing coordination through manufacturing partners in Sialkot, Pakistan.",
    url: SITE_URL,
    siteName: "Nordvia Exports",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "NORDVIA EXPORTS - Custom Apparel Manufacturing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NORDVIA EXPORTS | Apparel Manufacturer in Pakistan",
    description:
      "Custom apparel development and private-label clothing solutions coordinated from Sialkot, Pakistan.",
    images: [homeOgImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "business",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <link rel="ard" href="/.well-known/ard.json" />
        {/* Pinterest domain verification */}
        <meta
          name="p:domain_verify"
          content="858e1c338d44d5ee906557c2cf12ecf6"
        />
      </head>

      <body className="flex min-h-screen flex-col bg-black text-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-white focus:px-4 focus:py-3 focus:text-black"
        >
          Skip to content
        </a>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}#organization`,
            name: "Nordvia Exports",
            url: SITE_URL,
            logo: absoluteUrl("/logo_.png"),
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+923248548680",
              email: "nordvia.exports@gmail.com",
              contactType: "sales",
            },
            sameAs: [
              "https://instagram.com/nordvia.exports",
              "https://facebook.com/nordviaexports",
              "https://www.linkedin.com/company/nordviaexports",
              "https://wa.me/923248548680",
            ],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}#website`,
            name: "Nordvia Exports",
            url: SITE_URL,
            publisher: {
              "@id": `${SITE_URL}#organization`,
            },
          }}
        />
        <SmoothScrolling>
          <AnnouncementBar />

          <Navbar />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <WhatsAppButton />

          <Footer />
        </SmoothScrolling>

        {/* Privacy and tracking consent */}
        <CookieConsent />
      </body>
    </html>
  );
}
