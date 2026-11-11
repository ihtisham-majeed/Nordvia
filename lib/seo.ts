import type { Metadata } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const DEFAULT_IMAGE = "/og/home-og.webp";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}: SeoInput): Metadata {
  const normalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title: normalizedTitle,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: normalizedTitle,
      description,
      url,
      siteName: "Nordvia Exports",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - Nordvia Exports`,
        },
      ],
      type,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: normalizedTitle,
      description,
      images: [imageUrl],
    },
    metadataBase: new URL(SITE_URL),
  };
}
