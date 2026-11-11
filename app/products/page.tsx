
import type { Metadata } from "next";
import ProductsPage from "@/components/products/ProductsPage";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { absoluteUrl } from "@/lib/site";
import { products } from "@/components/products/productData";

const productsImage = "/og/products-og.webp";

export const metadata: Metadata = buildMetadata({
  title: "Custom Apparel Manufacturer Product Categories",
  description:
    "Explore custom clothing manufacturing solutions for hoodies, tracksuits, jackets, coats, joggers and leather jackets for B2B buyers.",
  path: "/products",
  image: productsImage,
});

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
        ]}
      />
      <PageJsonLd
        type="CollectionPage"
        name="Custom Apparel Manufacturer Product Categories"
        description="Explore custom apparel categories for B2B apparel projects, including hoodies, tracksuits, jackets, coats, joggers and leather jackets."
        path="/products"
        image={productsImage}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Nordvia Exports custom apparel categories",
          itemListElement: products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.name,
            url: absoluteUrl(`/products/${product.slug}`),
          })),
        }}
      />
      <ProductsPage />
    </>
  );
}
