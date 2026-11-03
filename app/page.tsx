import About from "@/components/sections/About";
import Categories from "@/components/sections/Categories";
import RequestQuote from "@/components/sections/RequestQuote";
import Hero from "@/components/sections/Hero";
import IndustriesWeServe from "@/components/sections/IndustriesWeServe";
import ManufacturingCapabilities from "@/components/sections/ManufacturingCapabilities";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import ShippingPartners from "@/components/sections/ShippingPartners";
import WhyUs from "@/components/sections/WhyUs";
import { Analytics } from "@vercel/analytics/next";
import QualityStandards from "@/components/sections/QualityStandards";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Analytics />
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <ManufacturingCapabilities />
      <IndustriesWeServe />
      <Categories />
      <ShippingPartners />
      <HowItWorks />
      <QualityStandards />
      <FAQ />
      <RequestQuote />
    </>
  );
}
