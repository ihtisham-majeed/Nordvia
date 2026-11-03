
import type { MetadataRoute } from "next";
import { products } from "@/components/products/productData";

const SITE_URL = "https://nordviaexports.store";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
    },
    {
      url: `${SITE_URL}/about`,
    },
    {
      url: `${SITE_URL}/products`,
    },
    {
      url: `${SITE_URL}/contact`,
    },
    {
      url: `${SITE_URL}/request-a-quote`,
    },
  ];

  const productPages: MetadataRoute.Sitemap = products.map(
    (product) => ({
      url: `${SITE_URL}/products/${product.slug}`,
    })
  );

  return [...staticPages, ...productPages];
}
