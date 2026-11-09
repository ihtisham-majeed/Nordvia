
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import IndustriesPage from "@/components/industries/IndustriesPage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Apparel Manufacturer for Fashion and Sportswear",
  description: "Explore apparel manufacturing for fashion brands, streetwear labels, sportswear businesses and wholesalers. Find a suitable B2B partner today.",
  path: "/industries",
});

export default function IndustriesRoute() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name="Apparel Manufacturing Industries"
        description="Explore apparel manufacturing for fashion brands, streetwear labels, sportswear businesses and wholesalers."
        path="/industries"
      />
      <IndustriesPage />
    </>
  );
}
