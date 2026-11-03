
export type ResourceSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ResourceFAQ = {
  question: string;
  answer: string;
};

export type ResourcePageData = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  type: "content" | "faq" | "blog";
  sections?: ResourceSection[];
  faqs?: ResourceFAQ[];
};

export const resourcePages: ResourcePageData[] = [
  {
    slug: "faq",
    number: "01",
    title: "Frequently Asked Questions",
    shortTitle: "FAQ",
    description:
      "Answers to common questions about apparel development, customization, quotations and working with NORDVIA EXPORTS.",
    intro:
      "Starting an apparel project can involve many questions. Here are answers to some common topics. Exact requirements, costs and availability are confirmed individually for each project.",
    type: "faq",
    faqs: [
      {
        question: "What types of apparel can I discuss with NORDVIA EXPORTS?",
        answer:
          "Our product categories include hoodies and sweatshirts, T-shirts and polos, tracksuits and sportswear, joggers and sweatpants, jackets and coats, and other custom apparel. Share your product requirements so we can discuss project suitability.",
      },
      {
        question: "Can I customize garments with my own design?",
        answer:
          "Yes, you can share your artwork, references, measurements, preferred materials, colors and construction details. Available customization options are reviewed according to the garment and project requirements.",
      },
      {
        question: "Do you offer private-label options?",
        answer:
          "Private-label requirements can be discussed, including available brand labels, care labels, hang tags, logo placement and packaging options. Final possibilities depend on the product and order.",
      },
      {
        question: "What is your minimum order quantity?",
        answer:
          "Minimum order quantities are not the same for every product or customization method. Please share the product, estimated quantity and requirements so we can check the applicable minimums.",
      },
      {
        question: "Can I request a sample before production?",
        answer:
          "Sample development may be available depending on the product and project. Sample feasibility, charges and timelines should be confirmed before proceeding.",
      },
      {
        question: "How can I get a quotation?",
        answer:
          "Use the Request a Quote form and provide your product category, estimated quantity, customization requirements and destination country. The more details you share, the easier it is to review your inquiry.",
      },
      {
        question: "What information should I provide for a quotation?",
        answer:
          "Useful details include product type, reference images or artwork, fabric preferences, size range, color requirements, branding details, estimated quantity and delivery destination.",
      },
      {
        question: "Do you work with international buyers?",
        answer:
          "NORDVIA EXPORTS is based in Sialkot, Pakistan and is oriented toward international apparel business inquiries. Project, shipping and commercial arrangements are discussed and confirmed individually.",
      },
      {
        question: "How long does production take?",
        answer:
          "Timelines depend on product complexity, material availability, order quantity, customization and the agreed development process. A project-specific timeline should be confirmed before an order proceeds.",
      },
      {
        question: "How do I start working with you?",
        answer:
          "Start by submitting a quote request with your product and business requirements. We can then review the inquiry and discuss feasibility, specifications and possible next steps.",
      },
    ],
  },
  {
    slug: "manufacturing-process",
    number: "02",
    title: "Our Manufacturing Process",
    shortTitle: "Manufacturing Process",
    description:
      "Understand the typical stages involved in discussing, developing and coordinating a custom apparel project.",
    intro:
      "A clear process helps both sides understand the product requirements before moving forward. The stages below provide a general guide; the exact workflow depends on the product and agreed project scope.",
    type: "content",
    sections: [
      {
        heading: "01. Share Your Requirements",
        paragraphs: [
          "Start by explaining your brand, product category and project objectives. You can share reference images, sketches, existing samples or technical specifications.",
          "Include your estimated quantity, destination country and preferred timeline so the project can be reviewed with useful context.",
        ],
        bullets: [
          "Product type and intended use",
          "Reference images or artwork",
          "Estimated order quantity",
          "Preferred colors, sizes and materials",
        ],
      },
      {
        heading: "02. Review Product Specifications",
        paragraphs: [
          "The garment requirements are discussed in more detail. This may include fabric composition, fabric weight, measurements, fit, construction, finishing and branding placement.",
          "Clear specifications help establish what is required and what needs further confirmation.",
        ],
      },
      {
        heading: "03. Discuss Development Options",
        paragraphs: [
          "Available material, customization and development options are reviewed against your requirements.",
          "Where sample development is available, its feasibility, cost and expected timeline should be confirmed before proceeding.",
        ],
      },
      {
        heading: "04. Confirm the Project",
        paragraphs: [
          "Before production arrangements begin, the key commercial and product details should be agreed. These may include specifications, quantity, pricing, payment terms, timeline and delivery arrangements.",
        ],
        bullets: [
          "Approved product specifications",
          "Confirmed quantity and commercial terms",
          "Agreed development or sample requirements",
          "Confirmed production and delivery arrangements",
        ],
      },
      {
        heading: "05. Production Coordination",
        paragraphs: [
          "After the project requirements and terms are confirmed, production is coordinated through the relevant manufacturing partner arrangements.",
          "Any agreed checks, updates and packaging requirements should be established as part of the project plan.",
        ],
      },
      {
        heading: "06. Packaging & Dispatch Arrangements",
        paragraphs: [
          "Packaging and dispatch arrangements are discussed according to the order and destination. Shipping method, documentation, responsibilities and expected transit time should be confirmed before dispatch.",
        ],
      },
    ],
  },
  {
    slug: "fabric-guide",
    number: "03",
    title: "Apparel Fabric Guide",
    shortTitle: "Fabric Guide",
    description:
      "An introduction to common apparel fabrics, fabric weights and material considerations for clothing brands.",
    intro:
      "Fabric affects the look, feel, comfort, weight and intended use of a garment. This guide introduces common material considerations to help you prepare a clearer apparel brief.",
    type: "content",
    sections: [
      {
        heading: "Cotton",
        paragraphs: [
          "Cotton is widely used in everyday apparel because of its familiar soft hand feel and breathability. It is commonly considered for T-shirts, sweatshirts and casual clothing.",
          "When choosing cotton, consider the fabric construction, composition, weight, shrinkage expectations and intended garment use.",
        ],
      },
      {
        heading: "Polyester",
        paragraphs: [
          "Polyester is a synthetic fiber commonly used in sportswear, tracksuits and other performance-oriented garments. It is often selected for its durability and quick-drying potential.",
          "The fabric construction and finishing influence its final feel and performance, so the specific material should be evaluated for the intended application.",
        ],
      },
      {
        heading: "Cotton-Polyester Blends",
        paragraphs: [
          "Blended fabrics combine fibers to achieve a balance of characteristics. Cotton-polyester blends are commonly considered for hoodies, sweatshirts and casual apparel.",
          "The exact fiber ratio affects the feel, appearance and behavior of the material.",
        ],
      },
      {
        heading: "Fleece",
        paragraphs: [
          "Fleece fabrics are commonly used in cold-weather garments, including hoodies, sweatshirts and tracksuits. Different constructions can provide different levels of softness, warmth and surface texture.",
          "Discuss the intended warmth, fabric weight and inner or outer surface finish when selecting fleece.",
        ],
      },
      {
        heading: "Jersey",
        paragraphs: [
          "Jersey is a knitted fabric frequently used for T-shirts and lightweight casual garments. It can be made from cotton, polyester, blends and other fibers.",
          "Consider the fabric weight, stretch, drape and intended fit when selecting a jersey fabric.",
        ],
      },
      {
        heading: "Understanding GSM",
        paragraphs: [
          "GSM means grams per square meter. It is a measurement of fabric weight, not a complete measure of quality or warmth.",
          "A higher GSM generally indicates a heavier fabric, but construction, fiber content and finishing also affect how a garment feels and performs.",
        ],
        bullets: [
          "Specify GSM as a target or preferred range",
          "Consider the garment's intended season and use",
          "Review the actual fabric construction",
          "Confirm material details before production",
        ],
      },
      {
        heading: "Choosing the Right Fabric",
        paragraphs: [
          "The best fabric depends on the garment, intended customer, price positioning, fit and expected use. A heavyweight streetwear hoodie has different requirements from a lightweight training T-shirt.",
          "When requesting a quotation, share your preferred composition, GSM, fabric reference or sample if available. If you are unsure, explain the desired feel and application so suitable options can be discussed.",
        ],
      },
    ],
  },
  {
    slug: "blog",
    number: "04",
    title: "Apparel Industry Insights",
    shortTitle: "Blog",
    description:
      "Guides and insights on apparel development, fabric selection, customization and clothing manufacturing.",
    intro:
      "A resource space for practical information about apparel products, materials, customization and the process of developing a clothing collection.",
    type: "blog",
  },
];

export function getResourcePage(slug: string) {
  return resourcePages.find((page) => page.slug === slug);
}
