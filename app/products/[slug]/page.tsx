
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "@/components/products/ProductDetailPage";
import { getProduct, products } from "@/components/products/productData";

type Props = {
  params: Promise<{ slug: string }>;
};

const SITE_NAME = "NORDVIA EXPORTS";

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
      title: {
        absolute: "Product Not Found | NORDVIA EXPORTS",
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${product.name} | Custom Apparel Manufacturing`;
  const description = `${product.description} Explore custom development and private-label apparel possibilities with NORDVIA EXPORTS, based in Sialkot, Pakistan.`;

  // Uses the product's existing image as its social preview.
  // Confirm that product.image is the correct field in productData.
  const image = product.image;

  return {
    title,
    description,

    keywords: [
      `${product.name} manufacturer`,
      `custom ${product.name}`,
      `${product.name} manufacturer Pakistan`,
      "private label apparel",
      "custom clothing manufacturing",
      "NORDVIA EXPORTS",
    ],

    alternates: {
      canonical: `/products/${product.slug}`,
    },

    openGraph: {
      title: `${product.name} | ${SITE_NAME}`,
      description,
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `Custom ${product.name} by NORDVIA EXPORTS`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailPage product={product} />;
}
