
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CustomClothingManufacturingPage from "@/components/manufacturing/service-pages/CustomClothingManufacturingPage";
import PrivateLabelPage from "@/components/manufacturing/service-pages/PrivateLabelPage";
import OEMODMPage from "@/components/manufacturing/service-pages/OEMODMPage";
import FabricSourcingPage from "@/components/manufacturing/service-pages/FabricSourcingPage";
import ProductDevelopmentSamplingPage from "@/components/manufacturing/service-pages/ProductDevelopmentSamplingPage";
import PrintingEmbroideryPage from "@/components/manufacturing/service-pages/PrintingEmbroideryPage";
import CustomApparelDevelopmentPage from "@/components/manufacturing/service-pages/CustomApparelDevelopmentPage";

import {
  manufacturingServices,
  getManufacturingService,
} from "@/components/manufacturing/serviceData";
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
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested Nordvia Exports service page was not found.",
      path: `/services/${slug}`,
      noindex: true,
    });
  }

  const path = `/services/${service.slug}`;
  const primary = seoKeywords[path as keyof typeof seoKeywords]?.primary;

  return buildMetadata({
    title: primary ?? service.title,
    description: `${service.description} Discuss your B2B apparel requirements with Nordvia Exports and explore suitable next steps.`,
    path,
  });
}

export default async function ServiceRoute({ params }: PageProps) {
  const { slug } = await params;

  const service = getManufacturingService(slug);

  if (!service) {
    notFound();
  }

  let page;
  switch (slug) {
    case "custom-clothing-manufacturing":
      page = <CustomClothingManufacturingPage />;
      break;

    case "private-label":
      page = <PrivateLabelPage />;
      break;

    case "oem-odm":
      page = <OEMODMPage />;
      break;

    case "fabric-sourcing":
      page = <FabricSourcingPage />;
      break;

    case "product-development-sampling":
      page = <ProductDevelopmentSamplingPage />;
      break;

    case "printing-embroidery":
      page = <PrintingEmbroideryPage />;
      break;

    case "custom-apparel-development":
      page = <CustomApparelDevelopmentPage />;
      break;

    default:
      notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Manufacturing", path: "/manufacturing" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      {page}
    </>
  );
}
