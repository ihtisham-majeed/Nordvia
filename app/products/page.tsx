
import type { Metadata } from "next";
import ProductsPage from "@/components/products/ProductsPage";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site";
import { products } from "@/components/products/productData";

const productsImage = "/og/products-og.webp";

export const metadata: Metadata = buildMetadata({
  title: "Custom Apparel Manufacturer Product Categories",
  description:
    "Explore hoodies, tracksuits, jackets, coats, joggers and leather jackets for B2B apparel projects. Review product categories and request details.",
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
