
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
      "Custom clothing manufacturing coordination for fashion brands seeking apparel developed around their own specifications, materials and branding requirements.",
    introduction:
      "Every clothing brand has its own identity and product requirements. NORDVIA EXPORTS coordinates apparel development with manufacturing partners, considering garment specifications, preferred materials, construction details and branding requirements.",
    features: [
      "Custom garment specifications",
      "Fabric and material coordination",
      "Color and size requirements",
      "Garment construction details",
      "Branding and finishing options",
      "Production requirement coordination",
    ],
    process: [
      "Share your product concept and requirements",
      "Discuss materials, construction and customization",
      "Review specifications and development requirements",
      "Coordinate production after requirements are approved",
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
      "Private-label apparel development with custom brand labels, garment identification, selected branding details and packaging coordination.",
    introduction:
      "Build an apparel collection around your own brand identity. NORDVIA EXPORTS coordinates private-label requirements with manufacturing partners, including garment specifications, available labeling options, branding placement and packaging preferences.",
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
      "Discuss available labeling and branding options",
      "Confirm artwork, specifications and placement details",
      "Coordinate approved private-label requirements",
    ],
    considerations:
      "Label materials, packaging options, branding methods, customization possibilities and minimum quantities depend on the product and project requirements.",
  },

  {
    slug: "oem-odm",
    number: "03",
    title: "OEM & ODM Apparel Solutions",
    shortTitle: "OEM & ODM",
    description:
      "OEM and ODM apparel project coordination for brands with established technical specifications or developing product concepts.",
    introduction:
      "Whether you have an established technical specification or an early-stage product idea, NORDVIA EXPORTS can discuss the development approach and coordinate suitable manufacturing requirements with its manufacturing partners.",
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
      "Discuss relevant development options",
      "Confirm the agreed production direction",
    ],
    considerations:
      "OEM and ODM project scope, development support, technical requirements and production feasibility are evaluated individually.",
  },

  {
    slug: "product-development-sampling",
    number: "04",
    title: "Product Development & Sampling",
    shortTitle: "Development & Sampling",
    description:
      "Coordinate apparel product development, garment specifications, material selection and sample requirements before production.",
    introduction:
      "A well-defined product starts with clear specifications. NORDVIA EXPORTS coordinates discussions around garment design, measurements, materials, construction and available sample development options through manufacturing partners.",
    features: [
      "Design and reference review",
      "Garment measurement discussions",
      "Fabric and color selection",
      "Construction and finishing details",
      "Artwork and branding placement",
      "Sample development coordination where available",
    ],
    process: [
      "Submit your design, reference or product brief",
      "Discuss garment specifications and measurements",
      "Review development and sample possibilities",
      "Confirm the next steps after specification approval",
    ],
    considerations:
      "Sample availability, development charges, revisions and timelines are confirmed according to the product and project scope before proceeding.",
  },

  {
    slug: "printing-embroidery",
    number: "05",
    title: "Printing & Embroidery",
    shortTitle: "Printing & Embroidery",
    description:
      "Apparel decoration coordination for brand logos, graphics, lettering and custom garment details.",
    introduction:
      "Branding plays an important role in making a garment recognizable. NORDVIA EXPORTS coordinates suitable printing and embroidery requirements with manufacturing partners according to artwork, fabric, garment construction and product specifications.",
    features: [
      "Screen printing options",
      "Digital printing and transfer discussions",
      "Embroidery artwork placement",
      "Logo and graphic positioning",
      "Custom branding details",
      "Decoration requirement coordination",
    ],
    process: [
      "Share your logo, graphic or artwork",
      "Discuss placement and decoration preferences",
      "Review suitable methods for the garment",
      "Confirm artwork and decoration requirements",
    ],
    considerations:
      "The suitable decoration method depends on artwork complexity, fabric composition, garment construction, application requirements and order specifications.",
  },

  {
    slug: "fabric-sourcing",
    number: "06",
    title: "Fabric Sourcing & Selection",
    shortTitle: "Fabric Sourcing",
    description:
      "Fabric sourcing coordination based on garment category, composition, weight, construction and intended performance.",
    introduction:
      "Fabric influences the appearance, comfort, weight and performance of apparel. NORDVIA EXPORTS discusses material requirements and coordinates suitable sourcing options through its manufacturing network.",
    features: [
      "Fabric composition discussions",
      "Weight and GSM requirements",
      "Fleece, terry and jersey options",
      "Color and finish preferences",
      "Stretch and performance requirements",
      "Material suitability discussions",
    ],
    process: [
      "Identify the intended garment and application",
      "Share fabric preferences and specifications",
      "Discuss suitable material sourcing options",
      "Confirm material requirements before production",
    ],
    considerations:
      "Fabric availability, composition, colors, weights, finishes and minimum sourcing quantities are subject to supplier confirmation.",
  },

  {
    slug: "custom-apparel-development",
    number: "07",
    title: "Custom Apparel Development",
    shortTitle: "Apparel Development",
    description:
      "Custom apparel development coordination for clothing brands building products and collections around their own design direction.",
    introduction:
      "From a single garment concept to a wider collection, NORDVIA EXPORTS helps organize the product requirements that shape your apparel project, including design direction, materials, branding, construction and finishing.",
    features: [
      "Collection requirement discussions",
      "Garment category planning",
      "Design and specification coordination",
      "Material selection discussions",
      "Branding and finishing options",
      "Production planning coordination",
    ],
    process: [
      "Share your collection direction and objectives",
      "Identify product categories and specifications",
      "Discuss customization and material options",
      "Review the proposed development requirements",
    ],
    considerations:
      "Each collection is assessed individually. Product feasibility, customization options, quantities, costs and timelines are confirmed before a project commitment.",
  },
];

export function getManufacturingService(slug: string) {
  return manufacturingServices.find((service) => service.slug === slug);
}
