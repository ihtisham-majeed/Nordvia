
import type { Metadata } from "next";

// import About from "@/components/home/About";
// import Categories from "@/components/home/Categories";
import RequestQuote from "@/components/contact/RequestQuote";
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
import { buildMetadata } from "@/lib/seo";

const homeOgImage = "/og/home-og.webp";

export const metadata: Metadata = buildMetadata({
  title: "Custom Apparel Manufacturer for B2B Brands",
  description:
    "Work with a custom apparel manufacturer for hoodies, tracksuits, jackets and private-label clothing. Share your project with Nordvia Exports today.",
  path: "/",
  image: homeOgImage,
});

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
