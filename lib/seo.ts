import type { Metadata } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/site";

const DEFAULT_IMAGE = "/og/home-og.webp";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Pixel size of `image`. Defaults to 1200x630 (the default OG image). */
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** Article-only fields (used when type === "article"). */
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageWidth = 1200,
  imageHeight = 630,
  imageAlt,
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
  authors,
}: SeoInput): Metadata {
  const normalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  const openGraph = {
    title: normalizedTitle,
    description,
    url,
    siteName: "Nordvia Exports",
    images: [
      {
        url: imageUrl,
        width: imageWidth,
        height: imageHeight,
        alt: imageAlt || `${title} - Nordvia Exports`,
      },
    ],
    type,
    locale: "en_US",
    ...(type === "article"
      ? {
          ...(publishedTime ? { publishedTime } : {}),
          ...(modifiedTime ? { modifiedTime } : {}),
          ...(authors?.length ? { authors } : {}),
        }
      : {}),
  } as Metadata["openGraph"];

  return {
    title: normalizedTitle,
    description,
    ...(authors?.length ? { authors: authors.map((name) => ({ name })) } : {}),
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: normalizedTitle,
      description,
      images: [imageUrl],
    },
    metadataBase: new URL(SITE_URL),
  };
}