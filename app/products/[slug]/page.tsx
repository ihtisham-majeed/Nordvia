
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import { getProduct, products } from "@/components/products/productData";
import { buildMetadata } from "@/lib/seo";
import { seoKeywords } from "@/config/seo-keywords";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {
      ...buildMetadata({
        title: "Product Not Found",
        description: "The requested Nordvia Exports product page was not found.",
        path: `/products/${slug}`,
        noindex: true,
      }),
    };
  }

  const path = `/products/${product.slug}`;
  const primary = seoKeywords[path as keyof typeof seoKeywords]?.primary;

  return buildMetadata({
    title: primary ?? `Custom ${product.name} Manufacturer`,
    description: `${product.description} Discuss custom development and private-label options with Nordvia Exports for your next B2B apparel project.`,
    path,
    image: product.image,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: product.shortName, path: `/products/${product.slug}` },
        ]}
      />
      <PageJsonLd
        type="CollectionPage"
        name={`${product.name} Manufacturer`}
        description={product.description}
        path={`/products/${product.slug}`}
        image={product.image}
      />
      <ProductDetailPage product={product} />
    </>
  );
}
