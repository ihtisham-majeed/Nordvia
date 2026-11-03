
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResourceDetailPage from "@/components/resources/ResourceDetailPage";
import {
  resourcePages,
  getResourcePage,
} from "@/components/resources/resourceData";

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
    return {
      title: "Resource Not Found",
    };
  }

  const url = `https://nordviaexports.store/resources/${resource.slug}/`;

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${resource.title} | NORDVIA EXPORTS`,
      description: resource.description,
      url,
      type: "website",
    },
  };
}

export default async function ResourceRoute({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourcePage(slug);

  if (!resource) {
    notFound();
  }

  return <ResourceDetailPage resource={resource} />;
}
