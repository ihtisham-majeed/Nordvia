
import type { Metadata } from "next";

// import About from "@/components/home/About";
// import Categories from "@/components/home/Categories";
import RequestQuote from "@/components/home/RequestQuote";
import Hero from "@/components/home/Hero";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import ManufacturingCapabilities from "@/components/home/ManufacturingCapabilities";
import Products from "@/components/home/Products";
import HowItWorks from "@/components/home/HowItWorks";
import ShippingPartners from "@/components/home/ShippingPartners";
import WhyUs from "@/components/home/WhyUs";
import { Analytics } from "@vercel/analytics/next";
import QualityStandards from "@/components/home/QualityStandards";
import FAQ from "@/components/home/FAQ";

const siteUrl = "https://nordviaexports.store";
const homeOgImage = "/images/og/home-og.jpg";

export const metadata: Metadata = {
  title: {
    absolute: "NORDVIA EXPORTS | Custom Apparel Manufacturer in Pakistan",
  },

  description:
    "Explore custom apparel manufacturing and private-label clothing development with NORDVIA EXPORTS, based in Sialkot, Pakistan. Discover hoodies, sweatshirts, tracksuits, sportswear, jackets and custom clothing solutions for international brands.",

  keywords: [
    "custom apparel manufacturer Pakistan",
    "clothing manufacturer Sialkot",
    "hoodie manufacturer Pakistan",
    "sportswear manufacturer Pakistan",
    "tracksuit manufacturer Pakistan",
    "private label clothing manufacturer",
    "custom streetwear manufacturer",
    "apparel sourcing Pakistan",
    "wholesale clothing supplier",
    "NORDVIA EXPORTS",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "NORDVIA EXPORTS | Custom Apparel Manufacturing",
    description:
      "Develop your next apparel collection with NORDVIA EXPORTS. Explore custom clothing, private-label development and apparel sourcing from Sialkot, Pakistan.",

    url: siteUrl,
    siteName: "NORDVIA EXPORTS",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "NORDVIA EXPORTS - Custom Apparel Manufacturing and Private Label Clothing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NORDVIA EXPORTS | Custom Apparel Manufacturer",

    description:
      "Custom apparel development, private-label clothing and sourcing solutions from Sialkot, Pakistan.",

    images: [homeOgImage],
  },
};

export default function Home() {
  return (

    <>
      <Analytics />

      <Hero />
      <Products />
      {/* <About /> */}
      <WhyUs />
      <ManufacturingCapabilities />
      <IndustriesWeServe />
      <HowItWorks />
      <QualityStandards />
      <ShippingPartners />
      <FAQ />
      <RequestQuote />
    </>

  );
}
