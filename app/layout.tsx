// Next.js processes this stylesheet import at build time.
// @ts-expect-error The CSS module is provided by Next.js, not TypeScript.
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
  verification: {
    other: {
      "p:domain_verify": "d8676f1dd4f9a5c0a36612aab7973b9b",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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