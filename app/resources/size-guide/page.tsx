
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import SizeGuidePage from "@/components/resources/SizeGuidePage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Apparel Size Guide for Custom Clothing",
  description: "Review garment measurement points and fit considerations for hoodies, tracksuits, joggers, jackets and coats before requesting a project discussion.",
  path: "/resources/size-guide",
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Size Guide", path: "/resources/size-guide" },
        ]}
      />
      <SizeGuidePage />
    </>
  );
}
