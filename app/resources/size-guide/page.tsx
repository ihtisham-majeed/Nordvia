
import type { Metadata } from "next";
import SizeGuidePage from "@/components/resources/SizeGuidePage";

export const metadata: Metadata = {
  title: "Size Guide | Nordvia Exports",
  description:
    "Explore garment measurement points and fit considerations for hoodies, T-shirts, tracksuits, joggers, jackets and coats.",
  alternates: {
    canonical: "/resources/size-guide",
  },
};

export default function Page() {
  return <SizeGuidePage />;
}
