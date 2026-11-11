import type { Metadata } from "next";
import RequestQuote from "@/components/contact/RequestQuote";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

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

/* SEO metadata is kept in one shared builder for canonical consistency. */
export const metadata: Metadata = buildMetadata({
  title: "Custom Clothing Manufacturing Quote",
  description:
    "Request a custom clothing manufacturing quote for hoodies, sportswear, jackets or private-label apparel. Share your B2B requirements with NORDVIA EXPORTS.",
  path: "/request-a-quote",
  image: "/og/quote-og.webp",
});
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

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Request a Quote", path: "/request-a-quote" },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name="Custom Apparel Manufacturing Quote Request"
        description="Request a custom apparel manufacturing quote and share your B2B clothing project requirements with Nordvia Exports."
        path="/request-a-quote"
      />
      <RequestQuote initialProduct={initialProduct} headingLevel="h1" />
    </>
  );
}