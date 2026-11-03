
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/components/manufacturing/ServiceDetailPage";
import { manufacturingServices, getManufacturingService } from "@/components/manufacturing/serviceData";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return manufacturingServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getManufacturingService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `https://nordviaexports.store/services/${service.slug}/`;

  return {
    title: `${service.title} | Apparel Manufacturing`,
    description: service.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | NORDVIA EXPORTS`,
      description: service.description,
      url,
      type: "website",
    },
  };
}

export default async function ServiceRoute({ params }: PageProps) {
  const { slug } = await params;
  const service = getManufacturingService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
