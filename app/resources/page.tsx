
import type { Metadata } from "next";
import ResourcesPage from "@/components/resources/ResourcesPage";

export const metadata: Metadata = {
  title: "Apparel Resources & Guides",
  description:
    "Explore NORDVIA EXPORTS apparel resources, frequently asked questions, manufacturing process information and fabric selection guides.",
  alternates: {
    canonical: "https://nordviaexports.store/resources/",
  },
  openGraph: {
    title: "Apparel Resources & Guides | NORDVIA EXPORTS",
    description:
      "Helpful information about apparel manufacturing, materials, customization and product development.",
    url: "https://nordviaexports.store/resources/",
    type: "website",
  },
};

export default function ResourcesRoute() {
  return <ResourcesPage />;
}
