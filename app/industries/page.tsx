
import type { Metadata } from "next";
import IndustriesPage from "@/components/industries/IndustriesPage";

export const metadata: Metadata = {
  title: "Industries We Serve | Apparel Manufacturing",
  description:
    "NORDVIA EXPORTS coordinates custom apparel development for fashion brands, streetwear labels, sportswear businesses, wholesalers and distributors.",
  alternates: {
    canonical: "https://nordviaexports.store/industries/",
  },
  openGraph: {
    title: "Industries We Serve | NORDVIA EXPORTS",
    description:
      "Apparel development and manufacturing coordination for different types of clothing businesses.",
    url: "https://nordviaexports.store/industries/",
    type: "website",
  },
};

export default function IndustriesRoute() {
  return <IndustriesPage />;
}
