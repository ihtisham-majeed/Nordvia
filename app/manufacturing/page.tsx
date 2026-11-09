
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ManufacturingPage from "@/components/manufacturing/ManufacturingPage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Private Label Clothing Manufacturer Services",
  description: "Explore private label, OEM, ODM, fabric sourcing, printing and apparel development services for B2B clothing brands. Discuss your project today.",
  path: "/manufacturing",
});

export default function ManufacturingRoute() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Manufacturing", path: "/manufacturing" },
        ]}
      />
      <PageJsonLd
        type="Service"
        name="Private Label Clothing Manufacturer Services"
        description="Explore private label, OEM, ODM, fabric sourcing, printing and apparel development services for B2B clothing brands."
        path="/manufacturing"
      />
      <ManufacturingPage />
    </>
  );
}
