
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailPage from "@/components/industries/IndustryDetailPage";
import {
  industries,
  getIndustry,
} from "@/components/industries/industryData";

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
    return {
      title: "Industry Not Found",
    };
  }

  const url = `https://nordviaexports.store/industries/${industry.slug}/`;

  return {
    title: industry.title,
    description: industry.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${industry.title} | NORDVIA EXPORTS`,
      description: industry.description,
      url,
      type: "website",
    },
  };
}

export default async function IndustryRoute({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailPage industry={industry} />;
}
