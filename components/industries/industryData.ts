
export type Industry = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  requirements: string[];
  products: string[];
  approach: string[];
};

export const industries: Industry[] = [
  {
    slug: "fashion-brands",
    number: "01",
    title: "Apparel Manufacturing for Fashion Brands",
    shortTitle: "Fashion Brands",
    description:
      "Apparel development and manufacturing coordination for established fashion labels and emerging clothing brands.",
    introduction:
      "Fashion brands need products that reflect their own identity. We coordinate apparel requirements around your preferred silhouettes, fabrics, colors, garment construction and branding details.",
    requirements: [
      "Custom garment specifications",
      "Seasonal collection development",
      "Fabric and color coordination",
      "Custom labels and branding",
      "Garment finishing requirements",
      "Collection production planning",
    ],
    products: [
      "Hoodies and sweatshirts",
      "T-shirts and polos",
      "Jackets and outerwear",
      "Joggers and sweatpants",
      "Custom apparel collections",
    ],
    approach: [
      "Understand your brand and collection direction",
      "Discuss product specifications and materials",
      "Coordinate available customization options",
      "Confirm project requirements before production",
    ],
  },
  {
    slug: "streetwear-brands",
    number: "02",
    title: "Apparel Manufacturing for Streetwear Brands",
    shortTitle: "Streetwear Brands",
    description:
      "Custom streetwear apparel development for brands creating distinctive everyday clothing collections.",
    introduction:
      "Streetwear is built around identity, fit, graphics and detail. We work with manufacturing partners to coordinate garment requirements for brands developing their own streetwear collections.",
    requirements: [
      "Oversized and relaxed-fit requirements",
      "Heavyweight fabric preferences",
      "Custom graphic placement",
      "Embroidery and printing options",
      "Private-label branding",
      "Custom colors and finishing",
    ],
    products: [
      "Heavyweight hoodies",
      "Oversized T-shirts",
      "Graphic sweatshirts",
      "Streetwear joggers",
      "Casual jackets",
    ],
    approach: [
      "Share your streetwear concept and references",
      "Discuss fit, fabric weight and construction",
      "Review graphics and branding requirements",
      "Coordinate the agreed development and production",
    ],
  },
  {
    slug: "sportswear-brands",
    number: "03",
    title: "Apparel Manufacturing for Sportswear Brands",
    shortTitle: "Sportswear Brands",
    description:
      "Sportswear and active apparel development based on your product specifications and performance requirements.",
    introduction:
      "Sportswear products require attention to fabric, comfort, fit and intended use. We coordinate material and garment requirements with manufacturing partners based on the specifications of your collection.",
    requirements: [
      "Performance fabric discussions",
      "Stretch and comfort requirements",
      "Sportswear construction details",
      "Custom team and brand colors",
      "Logo printing and embroidery",
      "Matching apparel sets",
    ],
    products: [
      "Sports tracksuits",
      "Training apparel",
      "Sports T-shirts",
      "Joggers and sweatpants",
      "Custom teamwear",
    ],
    approach: [
      "Identify the intended activity and garment",
      "Discuss fabric and construction specifications",
      "Review branding and color requirements",
      "Confirm suitable development options",
    ],
  },
  {
    slug: "wholesalers-distributors",
    number: "04",
    title: "Apparel Manufacturing for Wholesalers & Distributors",
    shortTitle: "Wholesalers & Distributors",
    description:
      "Apparel sourcing and manufacturing coordination for wholesale businesses and distribution-focused buyers.",
    introduction:
      "Wholesale and distribution businesses often need clear product specifications, consistent order requirements and practical coordination. We discuss apparel projects according to product categories, quantities and destination-market needs.",
    requirements: [
      "Product category selection",
      "Bulk order requirement discussions",
      "Size and color breakdowns",
      "Private-label possibilities",
      "Packaging requirements",
      "Order and delivery coordination",
    ],
    products: [
      "Hoodies and sweatshirts",
      "T-shirts and polos",
      "Tracksuits and sportswear",
      "Jackets and coats",
      "Joggers and sweatpants",
    ],
    approach: [
      "Share your target products and quantities",
      "Discuss specifications and customization",
      "Review availability and commercial requirements",
      "Confirm the order scope and arrangements",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
