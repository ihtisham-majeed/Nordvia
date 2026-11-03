
import type { MetadataRoute } from "next";
import { products } from "@/components/products/productData";

const SITE_URL = "https://nordviaexports.store";

const serviceSlugs = [
  "custom-clothing-manufacturing",
  "private-label",
  "oem-odm",
  "product-development-sampling",
  "printing-embroidery",
  "fabric-sourcing",
  "custom-apparel-development",
];

const industrySlugs = [
  "fashion-brands",
  "streetwear-brands",
  "sportswear-brands",
  "wholesalers-distributors",
];

const resourceSlugs = [
  "faq",
  "manufacturing-process",
  "fabric-guide",
  "blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/products",
    "/manufacturing",
    "/industries",
    "/resources",
    "/contact",
    "/request-a-quote",
    "/privacy-policy",
    "/cookie-policy",
  ];

  const productPages = products.map(
    (product) => `/products/${product.slug}`
  );

  const servicePages = serviceSlugs.map(
    (slug) => `/services/${slug}`
  );

  const industryPages = industrySlugs.map(
    (slug) => `/industries/${slug}`
  );

  const resourcePages = resourceSlugs.map(
    (slug) => `/resources/${slug}`
  );

  const allPages = [
    ...staticPages,
    ...productPages,
    ...servicePages,
    ...industryPages,
    ...resourcePages,
  ];

  return allPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority:
      path === ""
        ? 1
        : staticPages.includes(path)
          ? 0.8
          : 0.7,
  }));
}
