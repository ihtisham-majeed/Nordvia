import type { Metadata } from "next";
import RequestQuote from "@/components/contact/RequestQuote";

const validProducts = [
  "hoodies",
  "t-shirts",
  "tracksuits",
  "joggers",
  "jackets",
  "coats",
  "other",
];

type PageProps = {
  searchParams: Promise<{
    product?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Request an Apparel Manufacturing Quote",
  description:
    "Request a custom apparel manufacturing and private-label quote from NORDVIA EXPORTS in Sialkot, Pakistan. Tell us about your products, quantity, customization, and requirements.",
  keywords: [
    "apparel manufacturing quote",
    "clothing manufacturing inquiry",
    "custom clothing quotation",
    "private label apparel quote",
    "wholesale clothing manufacturer Pakistan",
    "NORDVIA EXPORTS",
  ],
  alternates: {
    canonical: "/request-a-quote",
  },
  openGraph: {
    title: "Request an Apparel Manufacturing Quote | NORDVIA EXPORTS",
    description:
      "Share your apparel requirements with NORDVIA EXPORTS and discuss custom clothing development, private labeling, and manufacturing possibilities.",
    type: "website",
    siteName: "NORDVIA EXPORTS",
    images: [
      {
        url: "/images/og/quote-og.jpg",
        width: 1200,
        height: 630,
        alt: "Request a custom apparel manufacturing quote from NORDVIA EXPORTS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request an Apparel Manufacturing Quote",
    description:
      "Discuss your custom apparel and private-label manufacturing requirements with NORDVIA EXPORTS.",
    images: ["/images/og/quote-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RequestAQuotePage({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  const requestedProduct = Array.isArray(params.product)
    ? params.product[0]
    : params.product;

  const initialProduct = validProducts.includes(requestedProduct ?? "")
    ? requestedProduct!
    : "";

  return <RequestQuote initialProduct={initialProduct} />;
}