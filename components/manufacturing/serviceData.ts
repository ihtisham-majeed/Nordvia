
export type ManufacturingService = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  introduction: string;
  features: string[];
  process: string[];
  considerations: string;
};

export const manufacturingServices: ManufacturingService[] = [
  {
    slug: "custom-clothing-manufacturing",
    number: "01",
    title: "Custom Clothing Manufacturing",
    shortTitle: "Custom Manufacturing",
    description:
      "Custom apparel development and manufacturing coordination for brands looking to bring their clothing concepts to life.",
    introduction:
      "Every clothing brand has its own identity. We work with manufacturing partners to coordinate apparel development around your product specifications, preferred materials, construction details and branding requirements.",
    features: [
      "Custom garment specifications",
      "Fabric and material coordination",
      "Color and size requirements",
      "Garment construction details",
      "Branding and finishing options",
      "Production requirement coordination",
    ],
    process: [
      "Share your product idea and requirements",
      "Discuss materials, construction and customization",
      "Review specifications and development requirements",
      "Coordinate production after approval",
    ],
    considerations:
      "Production feasibility, minimum quantities, development timelines and available customization options are confirmed according to the specific project.",
  },
  {
    slug: "private-label",
    number: "02",
    title: "Private Label Manufacturing",
    shortTitle: "Private Label",
    description:
      "Apparel development with your brand identity, labels, packaging and selected finishing details.",
    introduction:
      "Build a clothing collection that represents your own brand. We coordinate private-label apparel requirements with manufacturing partners, including garment specifications and available branding options.",
    features: [
      "Custom brand labels",
      "Neck labels and care labels",
      "Hang tags and brand details",
      "Custom color requirements",
      "Packaging coordination",
      "Branding placement guidance",
    ],
    process: [
      "Share your brand identity and product requirements",
      "Choose available labeling and branding options",
      "Confirm artwork and placement details",
      "Coordinate the approved production requirements",
    ],
    considerations:
      "Label materials, packaging options, branding methods and minimum quantities depend on the product and project requirements.",
  },
  {
    slug: "oem-odm",
    number: "03",
    title: "OEM & ODM Apparel Solutions",
    shortTitle: "OEM & ODM",
    description:
      "Product development support for brands with existing specifications or ideas that need development.",
    introduction:
      "Whether you have an established technical specification or an early-stage product idea, we can discuss the development approach and coordinate suitable manufacturing requirements.",
    features: [
      "Customer-provided designs",
      "Technical specification coordination",
      "Product concept discussions",
      "Material and color options",
      "Construction requirement review",
      "Custom branding possibilities",
    ],
    process: [
      "Share your design, reference or product idea",
      "Review specifications and requirements",
      "Discuss development options",
      "Confirm the agreed production direction",
    ],
    considerations:
      "OEM and ODM project scope, development support and production feasibility are evaluated individually.",
  },
  {
    slug: "product-development-sampling",
    number: "04",
    title: "Product Development & Sampling",
    shortTitle: "Development & Sampling",
    description:
      "Turn product concepts, references and specifications into a clearer garment development brief.",
    introduction:
      "A well-defined product starts with clear specifications. We help coordinate discussions around garment design, measurements, materials, construction and available sample development options.",
    features: [
      "Design and reference review",
      "Garment measurement discussions",
      "Fabric and color selection",
      "Construction details",
      "Artwork and branding placement",
      "Sample development coordination where available",
    ],
    process: [
      "Submit your design or reference",
      "Discuss garment specifications",
      "Review development and sample possibilities",
      "Confirm next steps after specification approval",
    ],
    considerations:
      "Sample availability, development charges and timelines are confirmed before proceeding with a project.",
  },
  {
    slug: "printing-embroidery",
    number: "05",
    title: "Printing & Embroidery",
    shortTitle: "Printing & Embroidery",
    description:
      "Explore branding and decoration options for apparel collections.",
    introduction:
      "Branding plays an important role in making a garment recognizable. We coordinate suitable printing and embroidery requirements according to artwork, fabric and product specifications.",
    features: [
      "Screen printing options",
      "Digital printing discussions",
      "Embroidery artwork placement",
      "Logo and graphic positioning",
      "Custom branding details",
      "Decoration requirement coordination",
    ],
    process: [
      "Share your logo or artwork",
      "Discuss placement and decoration preferences",
      "Review available methods for the garment",
      "Confirm artwork and production requirements",
    ],
    considerations:
      "The suitable decoration method depends on artwork complexity, fabric composition, garment construction and order requirements.",
  },
  {
    slug: "fabric-sourcing",
    number: "06",
    title: "Fabric Sourcing & Selection",
    shortTitle: "Fabric Sourcing",
    description:
      "Coordinate fabric options based on garment type, performance requirements and brand preferences.",
    introduction:
      "Fabric influences the appearance, comfort, weight and performance of apparel. We discuss material requirements and coordinate suitable sourcing options through our manufacturing network.",
    features: [
      "Fabric composition discussions",
      "Weight and GSM requirements",
      "Fleece and jersey options",
      "Color and finish preferences",
      "Stretch and performance requirements",
      "Material suitability discussions",
    ],
    process: [
      "Identify the intended garment and use",
      "Share fabric preferences and specifications",
      "Discuss suitable sourcing options",
      "Confirm material requirements before production",
    ],
    considerations:
      "Fabric availability, composition, colors, weights and minimum sourcing quantities are subject to supplier confirmation.",
  },
  {
    slug: "custom-apparel-development",
    number: "07",
    title: "Custom Apparel Development",
    shortTitle: "Apparel Development",
    description:
      "A coordinated approach to developing apparel collections around your brand's requirements.",
    introduction:
      "From a single garment concept to a wider collection, we help organize the product requirements that shape your apparel project, including design direction, materials, branding and construction.",
    features: [
      "Collection requirement discussions",
      "Garment category planning",
      "Design and specification coordination",
      "Material selection discussions",
      "Branding and finishing options",
      "Production planning coordination",
    ],
    process: [
      "Share your collection direction",
      "Identify products and specifications",
      "Discuss customization and material options",
      "Review the proposed project requirements",
    ],
    considerations:
      "Each collection is assessed individually. Product availability, quantities, costs and timelines are confirmed before a project commitment.",
  },
];

export function getManufacturingService(slug: string) {
  return manufacturingServices.find((service) => service.slug === slug);
}
