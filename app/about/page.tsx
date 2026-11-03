
import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

const aboutImage = "/images/og/about-og.jpg";

export const metadata: Metadata = {
  title: "About | Apparel Manufacturing & Sourcing",

  description:
    "Discover NORDVIA EXPORTS, a Sialkot, Pakistan-based apparel business working with manufacturing partners to develop custom clothing and private-label apparel for international brands.",

  keywords: [
    "about NORDVIA EXPORTS",
    "apparel sourcing Pakistan",
    "clothing manufacturing Sialkot",
    "private label apparel",
    "custom clothing manufacturing",
  ],

  openGraph: {
    title: "About NORDVIA EXPORTS | Apparel Manufacturing & Sourcing",
    description:
      "Learn about NORDVIA EXPORTS and our approach to custom apparel development, manufacturing coordination and private-label clothing for international businesses.",
    type: "website",
    siteName: "NORDVIA EXPORTS",
    images: [
      {
        url: aboutImage,
        width: 1200,
        height: 630,
        alt: "NORDVIA EXPORTS apparel manufacturing and sourcing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About NORDVIA EXPORTS",
    description:
      "Custom apparel development and manufacturing solutions from Sialkot, Pakistan.",
    images: [aboutImage],
  },
};

export default function Page() {
  return <AboutPage />;
}
