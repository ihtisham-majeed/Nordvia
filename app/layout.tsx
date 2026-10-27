import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/Common/SmoothScrolling";
// import { ScrollProgress } from "@/components/ui/scroll-progress";
import WhatsAppButton from "@/components/Common/WhatsAppButton";

export const metadata = {
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
        <meta name="p:domain_verify" content="d8676f1dd4f9a5c0a36612aab7973b9b" />
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
