
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api",
    },
    sitemap: "https://www.nordviaexports.store/sitemap.xml",
    host: SITE_URL,
  };
}
