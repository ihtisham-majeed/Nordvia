import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/site";

type PageSchemaType =
  | "AboutPage"
  | "CollectionPage"
  | "ContactPage"
  | "Service"
  | "WebPage";

type PageJsonLdProps = {
  type: PageSchemaType;
  name: string;
  description: string;
  path: string;
  image?: string;
};

export default function PageJsonLd({
  type,
  name,
  description,
  path,
  image,
}: PageJsonLdProps) {
  const url = absoluteUrl(path);

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${url}#${type.toLowerCase()}`,
        url,
        name,
        description,
        ...(image ? { image: absoluteUrl(image) } : {}),
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
      }}
    />
  );
}
