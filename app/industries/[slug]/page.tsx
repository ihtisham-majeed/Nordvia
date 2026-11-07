
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailPage from "@/components/industries/IndustryDetailPage";
import {
  industries,
  getIndustry,
} from "@/components/industries/industryData";
import { buildMetadata } from "@/lib/seo";
import { seoKeywords } from "@/config/seo-keywords";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return buildMetadata({
      title: "Industry Not Found",
      description: "The requested Nordvia Exports industry page was not found.",
      path: `/industries/${slug}`,
      noindex: true,
    });
  }

  const path = `/industries/${industry.slug}`;
  const primary = seoKeywords[path as keyof typeof seoKeywords]?.primary;

  return buildMetadata({
    title: primary ?? industry.title,
    description: `${industry.description} Discuss your requirements with Nordvia Exports for a practical B2B apparel manufacturing conversation.`,
    path,
  });
}

export default async function IndustryRoute({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.shortTitle, path: `/industries/${industry.slug}` },
        ]}
      />
      <IndustryDetailPage industry={industry} />
    </>
  );
}
