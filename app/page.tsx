
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// import About from "@/components/home/About";
// import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import { Analytics } from "@vercel/analytics/next";
import { buildMetadata } from "@/lib/seo";

const Products = dynamic(() => import("@/components/home/Products"));
const WhyUs = dynamic(() => import("@/components/home/WhyUs"));
const ManufacturingCapabilities = dynamic(
  () => import("@/components/home/ManufacturingCapabilities")
);
const IndustriesWeServe = dynamic(
  () => import("@/components/home/IndustriesWeServe")
);
const HowItWorks = dynamic(() => import("@/components/home/HowItWorks"));
const QualityStandards = dynamic(
  () => import("@/components/home/QualityStandards")
);
const ShippingPartners = dynamic(
  () => import("@/components/home/ShippingPartners")
);
const FAQ = dynamic(() => import("@/components/home/FAQ"));
const RequestQuote = dynamic(
  () => import("@/components/contact/RequestQuote")
);

const homeOgImage = "/og/home-og.webp";

export const metadata: Metadata = buildMetadata({
  title: "Apparel Manufacturer in Pakistan for B2B Brands",
  description:
    "Work with an apparel manufacturer in Pakistan for custom hoodies, sportswear, tracksuits, jackets and private-label clothing through Sialkot partners.",
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
