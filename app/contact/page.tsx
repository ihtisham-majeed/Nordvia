
import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

const contactImage = "/images/og/contact-og.jpg";

export const metadata: Metadata = {
  title: "Contact | Custom Apparel Manufacturing & Sourcing",
  description:
    "Contact NORDVIA EXPORTS in Sialkot, Pakistan, for custom hoodies, sportswear, tracksuits, jackets, private-label apparel, and international business inquiries.",

  keywords: [
    "contact apparel manufacturer Pakistan",
    "clothing manufacturer Sialkot",
    "custom apparel sourcing",
    "private label clothing manufacturer",
    "NORDVIA EXPORTS contact",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact NORDVIA EXPORTS | Apparel Manufacturing",
    description:
      "Discuss your apparel manufacturing and private-label development requirements with NORDVIA EXPORTS, based in Sialkot, Pakistan.",
    type: "website",
    siteName: "NORDVIA EXPORTS",
    images: [
      {
        url: contactImage,
        width: 1200,
        height: 630,
        alt: "Contact NORDVIA EXPORTS for custom apparel manufacturing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact NORDVIA EXPORTS",
    description:
      "Get in touch about custom apparel manufacturing and private-label development.",
    images: [contactImage],
  },
};

export default function Contact() {
  return <ContactPage />;
}
