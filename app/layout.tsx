import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";
// import { ScrollProgress } from "@/components/ui/scroll-progress";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nordvia | Winter Apparel Manufacturer",
  description:
    "Premium winter apparel manufacturer for global brands. Quality, consistency, reliability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Pinterest Domain Verification */}
        <meta name="p:domain_verify" content="858e1c338d44d5ee906557c2cf12ecf6" />

        {/* Pinterest Tag Base Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e){if(!window.pintrk){window.pintrk = function () {
              window.pintrk.queue.push(Array.prototype.slice.call(arguments));};var
              n=window.pintrk;n.queue=[],n.version="3.0";var
              t=document.createElement("script");t.async=!0,t.src="https://s.pinimg.com/ct/core.js";
              var r=document.getElementsByTagName("script")[0];
              r.parentNode.insertBefore(t,r);}}();
              pintrk('load', '2612924698071', {em: '<user_email_address>'});
              pintrk('page');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://ct.pinterest.com/v3/?event=init&tid=2612924698071&pd[em]=<hashed_email_address>&noscript=1"
          />
        </noscript>
      </head>
      <body className="bg-black text-white antialiased flex flex-col min-h-screen">
        <SmoothScrolling>
          <Navbar />
          {/* <ScrollProgress className="sm:top-18.25 top-15.25" /> */}

          <main className="pt-14 flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}