
import type { Metadata } from "next";
import ManufacturingPage from "@/components/manufacturing/ManufacturingPage";

export const metadata: Metadata = {
  title: "Apparel Manufacturing & Production Services",
  description:
    "Explore NORDVIA EXPORTS apparel manufacturing coordination, private label, OEM and ODM, product development, fabric sourcing, printing and embroidery services in Pakistan.",
  alternates: {
    canonical: "https://nordviaexports.store/manufacturing/",
  },
  openGraph: {
    title: "Apparel Manufacturing Services | NORDVIA EXPORTS",
    description:
      "Apparel development, customization and manufacturing coordination for international clothing brands.",
    url: "https://nordviaexports.store/manufacturing/",
    type: "website",
  },
};

export default function ManufacturingRoute() {
  return <ManufacturingPage />;
}
