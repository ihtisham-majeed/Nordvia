
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ResourcesPage from "@/components/resources/ResourcesPage";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Apparel Manufacturing Resources and Guides",
  description: "Explore practical apparel manufacturing resources, fabric guidance, process information and FAQs to prepare your next clothing project.",
  path: "/resources",
});

export default function ResourcesRoute() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
      />
      <ResourcesPage />
    </>
  );
}
