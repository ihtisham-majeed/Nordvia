
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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const SITE_URL = "https://nordviaexports.store";

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
      title: "Service Not Found | NORDVIA EXPORTS",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = `${SITE_URL}/services/${service.slug}/`;

  return {
    title: `${service.title} | NORDVIA EXPORTS`,
    description: service.description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${service.title} | NORDVIA EXPORTS`,
      description: service.description,
      url,
      siteName: "NORDVIA EXPORTS",
      type: "website",
      locale: "en_US",
    },

    twitter: {
      card: "summary_large_image",
      title: `${service.title} | NORDVIA EXPORTS`,
      description: service.description,
    },
  };
}

export default async function ServiceRoute({ params }: PageProps) {
  const { slug } = await params;

  const service = getManufacturingService(slug);

  if (!service) {
    notFound();
  }

  switch (slug) {
    case "custom-clothing-manufacturing":
      return <CustomClothingManufacturingPage />;

    case "private-label":
      return <PrivateLabelPage />;

    case "oem-odm":
      return <OEMODMPage />;

    case "fabric-sourcing":
      return <FabricSourcingPage />;

    case "product-development-sampling":
      return <ProductDevelopmentSamplingPage />;

    case "printing-embroidery":
      return <PrintingEmbroideryPage />;

    case "custom-apparel-development":
      return <CustomApparelDevelopmentPage />;

    default:
      notFound();
  }
}
