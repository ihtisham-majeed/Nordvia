
import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { buildMetadata } from "@/lib/seo";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

const contactImage = "/og/contact-og.webp";

export const metadata: Metadata = buildMetadata({
  title: "Contact Apparel Manufacturer for Your Project",
  description:
    "Contact Nordvia Exports about custom hoodies, tracksuits, jackets and private-label apparel. Send your B2B requirements for a project discussion.",
  path: "/contact",
  image: contactImage,
});

export default function Contact() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <PageJsonLd
        type="ContactPage"
        name="Contact Nordvia Exports"
        description="Contact Nordvia Exports about custom apparel, private-label manufacturing and B2B clothing projects."
        path="/contact"
        image={contactImage}
      />
      <ContactPage />
    </>
  );
}
