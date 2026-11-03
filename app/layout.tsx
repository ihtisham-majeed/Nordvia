
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nordviaexports.store";

const homeOgImage = "/images/og/home-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "NORDVIA EXPORTS | Custom Apparel Manufacturer in Pakistan",
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
    <html lang="en">
      <head>
        {/* Pinterest Domain Verification */}
        <meta
          name="p:domain_verify"
          content="858e1c338d44d5ee906557c2cf12ecf6"
        />
      </head>

      <body className="flex min-h-screen flex-col bg-black text-white antialiased">

        {/* Pinterest Tag */}
        <Script id="pinterest-tag" strategy="afterInteractive">
          {`
            !function(e){
              if(!window.pintrk){
                window.pintrk = function () {
                  window.pintrk.queue.push(
                    Array.prototype.slice.call(arguments)
                  );
                };
                var n = window.pintrk;
                n.queue = [];
                n.version = "3.0";
                var t = document.createElement("script");
                t.async = !0;
                t.src = "https://s.pinimg.com/ct/core.js";
                var r = document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(t, r);
              }
            }();
            pintrk('load', '2612924698071');
            pintrk('page');
          `}
        </Script>

        {/* Pinterest NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2612924698071&noscript=1"
          />
        </noscript>

        <SmoothScrolling>
          <AnnouncementBar />

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <WhatsAppButton />

          <Footer />
        </SmoothScrolling>

      </body>
    </html>
  );
}
