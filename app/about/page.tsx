
import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

const aboutImage = "/og/about-og.webp";

export const metadata: Metadata = buildMetadata({
  title: "Apparel Manufacturer for Brands and Startups",
  description:
    "Learn how Nordvia Exports supports brands and startups with custom apparel development, sourcing and private-label manufacturing. Explore our approach.",
  path: "/about",
  image: aboutImage,
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />
      <PageJsonLd
        type="AboutPage"
        name="About Nordvia Exports"
        description="Learn how Nordvia Exports supports brands and startups with custom apparel development, sourcing and private-label manufacturing."
        path="/about"
        image={aboutImage}
      />
      <AboutPage />
    </>
  );
}
