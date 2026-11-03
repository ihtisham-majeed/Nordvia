
import "./globals.css";

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import AnnouncementBar from "@/components/layout/AnnouncementBar";

export const metadata: Metadata = {
  title: {
    default: "NORDVIA EXPORTS | Custom Apparel Manufacturer",
    template: "%s | NORDVIA EXPORTS",
  },
  description:
    "NORDVIA EXPORTS provides custom apparel manufacturing, private-label clothing, and wholesale solutions for fashion brands and international buyers.",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "NORDVIA EXPORTS | Custom Apparel Manufacturing",
    description:
      "Your global partner for custom apparel manufacturing, private-label clothing, and wholesale apparel.",
    siteName: "NORDVIA EXPORTS",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <Script
          id="pinterest-tag"
          strategy="afterInteractive"
        >
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
          {/* Global Header */}
          <AnnouncementBar />
          <Navbar />

          {/* Page Content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Floating WhatsApp */}
          <WhatsAppButton />

          {/* Global Footer */}
          <Footer />
        </SmoothScrolling>

      </body>
    </html>
  );
}
