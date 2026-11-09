
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceDetailPage from "@/components/resources/ResourceDetailPage";
import {
  resourcePages,
  getResourcePage,
} from "@/components/resources/resourceData";
import { buildMetadata } from "@/lib/seo";
import { seoKeywords } from "@/config/seo-keywords";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import JsonLd from "@/components/seo/JsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return resourcePages.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourcePage(slug);

  if (!resource) {
    return buildMetadata({
      title: "Resource Not Found",
      description: "The requested Nordvia Exports resource page was not found.",
      path: `/resources/${slug}`,
      noindex: true,
    });
  }

  const path = `/resources/${resource.slug}`;
  const primary = seoKeywords[path as keyof typeof seoKeywords]?.primary;

  return buildMetadata({
    title: primary ?? resource.title,
    description: `${resource.description} Read the guide and use the information to prepare your next apparel project.`,
    path,
  });
}

export default async function ResourceRoute({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourcePage(slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: resource.shortTitle, path: `/resources/${resource.slug}` },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name={resource.title}
        description={resource.description}
        path={`/resources/${resource.slug}`}
      />
      {resource.type === "faq" && resource.faqs && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: resource.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }}
        />
      )}
      <ResourceDetailPage resource={resource} />
    </>
  );
}
