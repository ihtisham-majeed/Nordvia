
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CookieConsent from "@/components/cookies/CookieConsent";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://nordviaexports.store";

const homeOgImage = "/og/home-og.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "NORDVIA EXPORTS | Custom Apparel Manufacturer in Pakistan",
    template: "%s | NORDVIA EXPORTS",
  },

  description:
    "NORDVIA EXPORTS is a Sialkot, Pakistan-based apparel sourcing and manufacturing business working with manufacturing partners to develop custom hoodies, sportswear, tracksuits, jackets and private-label clothing for international brands.",

  applicationName: "NORDVIA EXPORTS",

  keywords: [
    "custom apparel manufacturer Pakistan",
    "clothing manufacturer Sialkot",
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
    title: "NORDVIA EXPORTS | Custom Apparel Manufacturing",
    description:
      "Explore custom apparel development, private-label clothing and manufacturing solutions for international fashion brands and buyers.",
    url: siteUrl,
    siteName: "NORDVIA EXPORTS",
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
    title: "NORDVIA EXPORTS | Custom Apparel Manufacturing",
    description:
      "Custom apparel development and private-label clothing solutions from Sialkot, Pakistan.",
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
        {/* Pinterest domain verification */}
        <meta
          name="p:domain_verify"
          content="858e1c338d44d5ee906557c2cf12ecf6"
        />
      </head>

      <body className="flex min-h-screen flex-col bg-black text-white antialiased">
        <SmoothScrolling>
          <AnnouncementBar />

          <Navbar />

          <main className="flex-1">
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
