
import type { Metadata } from "next";
import ProductsPage from "@/components/products/ProductsPage";

const productsImage = "/og/products-og.webp";

export const metadata: Metadata = {
  title: "Custom Apparel Products | Hoodies, Sportswear & Jackets",

  description:
    "Explore custom hoodies, sweatshirts, tracksuits, sportswear, jackets, coats and joggers from NORDVIA EXPORTS, a Sialkot, Pakistan-based apparel sourcing and manufacturing business.",

  keywords: [
    "custom apparel manufacturer",
    "hoodie manufacturer Pakistan",
    "sportswear manufacturer Pakistan",
    "tracksuit manufacturer",
    "custom jacket manufacturer",
    "private label clothing",
    "wholesale apparel supplier",
    "custom clothing development",
    "joggers manufacturer",
  ],

  openGraph: {
    title: "Custom Apparel Products | NORDVIA EXPORTS",
    description:
      "Explore apparel categories and customization possibilities for international fashion brands, retailers and private-label businesses.",
    type: "website",
    siteName: "NORDVIA EXPORTS",
    images: [
      {
        url: productsImage,
        width: 1200,
        height: 630,
        alt: "NORDVIA EXPORTS custom apparel product categories",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Apparel Products | NORDVIA EXPORTS",
    description:
      "Explore custom hoodies, tracksuits, sportswear, jackets and private-label apparel.",
    images: [productsImage],
  },
};

export default function Page() {
  return <ProductsPage />;
}
