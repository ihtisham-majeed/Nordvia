
import type { MetadataRoute } from "next";
import { products } from "@/components/products/productData";
import { manufacturingServices } from "@/components/manufacturing/serviceData";
import { industries } from "@/components/industries/industryData";
import { resourcePages } from "@/components/resources/resourceData";
import { absoluteUrl } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-11-07");

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
    "/resources/size-guide",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
  ];

  const productPages = products.map((product) => `/products/${product.slug}`);
  const servicePages = manufacturingServices.map(
    (service) => `/services/${service.slug}`
  );
  const industryPages = industries.map(
    (industry) => `/industries/${industry.slug}`
  );
  const resourceRoutePages = resourcePages.map(
    (resource) => `/resources/${resource.slug}`
  );

  const allPages = [
    ...staticPages,
    ...productPages,
    ...servicePages,
    ...industryPages,
    ...resourceRoutePages,
  ];

  return allPages.map((path) => ({
    url: absoluteUrl(path),
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority:
      path === ""
        ? 1
        : staticPages.includes(path) ? 0.8 : 0.7,
  }));
}
