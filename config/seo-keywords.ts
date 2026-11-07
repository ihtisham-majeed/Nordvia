export type SearchIntent = "commercial" | "informational" | "navigational";

export type SeoKeywordEntry = {
  primary: string;
  secondary: [string, string, string, ...string[]];
  intent: SearchIntent;
};

export const seoKeywords = {
  "/": {
    primary: "custom apparel manufacturer",
    secondary: [
      "private label clothing manufacturer",
      "OEM and ODM apparel manufacturer",
      "apparel sourcing for brands",
      "bulk garment export",
    ],
    intent: "commercial",
  },
  "/about": {
    primary: "apparel manufacturer for brands",
    secondary: [
      "clothing manufacturer for startups",
      "apparel sourcing partner",
      "private label apparel development",
    ],
    intent: "commercial",
  },
  "/products": {
    primary: "custom apparel manufacturer",
    secondary: [
      "wholesale hoodies bulk order",
      "custom tracksuit manufacturer",
      "leather jacket manufacturer and exporter",
      "custom clothing supplier",
    ],
    intent: "commercial",
  },
  "/products/hoodies": {
    primary: "custom hoodie manufacturer",
    secondary: [
      "hoodie manufacturer and exporter",
      "wholesale hoodies bulk order",
      "custom embroidered hoodies bulk supplier",
    ],
    intent: "commercial",
  },
  "/products/tracksuits": {
    primary: "custom tracksuit manufacturer",
    secondary: [
      "private label tracksuits",
      "sportswear manufacturer",
      "bulk tracksuit supplier",
    ],
    intent: "commercial",
  },
  "/products/jackets": {
    primary: "custom jacket manufacturer",
    secondary: [
      "private label jackets",
      "wholesale outerwear manufacturer",
      "bulk jacket supplier",
    ],
    intent: "commercial",
  },
  "/products/coats": {
    primary: "custom coat manufacturer",
    secondary: [
      "private label winter coats",
      "wholesale coats supplier",
      "custom outerwear manufacturer",
    ],
    intent: "commercial",
  },
  "/products/joggers": {
    primary: "custom jogger manufacturer",
    secondary: [
      "private label sweatpants",
      "wholesale joggers supplier",
      "custom fleece bottoms manufacturer",
    ],
    intent: "commercial",
  },
  "/products/leather-jackets": {
    primary: "leather jacket manufacturer and exporter",
    secondary: [
      "custom leather jackets wholesale",
      "biker leather jackets bulk",
      "fashion leather jackets bulk",
    ],
    intent: "commercial",
  },
  "/manufacturing": {
    primary: "private label clothing manufacturer",
    secondary: [
      "custom apparel manufacturing",
      "OEM and ODM apparel manufacturer",
      "clothing production services",
    ],
    intent: "commercial",
  },
  "/services/custom-clothing-manufacturing": {
    primary: "custom clothing manufacturer",
    secondary: [
      "custom apparel production",
      "clothing manufacturer for startups",
      "bulk garment export",
    ],
    intent: "commercial",
  },
  "/services/private-label": {
    primary: "private label clothing manufacturer",
    secondary: [
      "private label apparel supplier",
      "custom branded clothing",
      "clothing manufacturer for brands",
    ],
    intent: "commercial",
  },
  "/services/oem-odm": {
    primary: "OEM and ODM apparel manufacturer",
    secondary: [
      "OEM clothing manufacturer",
      "ODM apparel development",
      "custom clothing production",
    ],
    intent: "commercial",
  },
  "/services/product-development-sampling": {
    primary: "apparel product development manufacturer",
    secondary: [
      "clothing sample development",
      "custom garment sampling",
      "apparel development for brands",
    ],
    intent: "commercial",
  },
  "/services/printing-embroidery": {
    primary: "custom apparel printing and embroidery",
    secondary: [
      "custom embroidered clothing supplier",
      "private label garment branding",
      "bulk apparel decoration",
    ],
    intent: "commercial",
  },
  "/services/fabric-sourcing": {
    primary: "apparel fabric sourcing partner",
    secondary: [
      "fabric sourcing for clothing brands",
      "custom garment materials",
      "apparel material supplier",
    ],
    intent: "commercial",
  },
  "/services/custom-apparel-development": {
    primary: "custom apparel development manufacturer",
    secondary: [
      "apparel sourcing for brands",
      "private label clothing development",
      "streetwear manufacturer for private label brands",
    ],
    intent: "commercial",
  },
  "/industries": {
    primary: "apparel manufacturer for brands",
    secondary: [
      "streetwear manufacturer",
      "sportswear manufacturer",
      "wholesale apparel manufacturer",
    ],
    intent: "commercial",
  },
  "/industries/fashion-brands": {
    primary: "fashion brand clothing manufacturer",
    secondary: [
      "private label fashion manufacturer",
      "custom apparel for fashion brands",
      "apparel sourcing partner",
    ],
    intent: "commercial",
  },
  "/industries/streetwear-brands": {
    primary: "streetwear manufacturer for private label brands",
    secondary: [
      "custom streetwear manufacturer",
      "private label hoodies supplier",
      "streetwear clothing production",
    ],
    intent: "commercial",
  },
  "/industries/sportswear-brands": {
    primary: "sportswear manufacturer for brands",
    secondary: [
      "custom sportswear manufacturer",
      "private label tracksuits",
      "bulk sportswear supplier",
    ],
    intent: "commercial",
  },
  "/industries/wholesalers-distributors": {
    primary: "wholesale apparel manufacturer",
    secondary: [
      "bulk garment export",
      "clothing supplier for wholesalers",
      "apparel distributor supplier",
    ],
    intent: "commercial",
  },
  "/resources": {
    primary: "apparel manufacturing resources",
    secondary: [
      "clothing manufacturer guide",
      "apparel sourcing information",
      "private label clothing resources",
    ],
    intent: "informational",
  },
  "/resources/faq": {
    primary: "custom apparel manufacturing FAQ",
    secondary: [
      "clothing manufacturer questions",
      "private label apparel FAQ",
      "apparel quotation process",
    ],
    intent: "informational",
  },
  "/resources/manufacturing-process": {
    primary: "custom apparel manufacturing process",
    secondary: [
      "clothing production process",
      "apparel product development steps",
      "garment manufacturing guide",
    ],
    intent: "informational",
  },
  "/resources/fabric-guide": {
    primary: "apparel fabric guide",
    secondary: [
      "clothing fabric selection",
      "fabric sourcing for apparel",
      "garment material guide",
    ],
    intent: "informational",
  },
  "/resources/blog": {
    primary: "apparel manufacturing insights",
    secondary: [
      "clothing industry insights",
      "apparel sourcing advice",
      "private label clothing guidance",
    ],
    intent: "informational",
  },
  "/resources/size-guide": {
    primary: "apparel size guide",
    secondary: [
      "hoodie size measurements",
      "tracksuit size guide",
      "custom clothing measurements",
    ],
    intent: "informational",
  },
  "/contact": {
    primary: "contact apparel manufacturer",
    secondary: [
      "contact clothing manufacturer",
      "apparel sourcing inquiry",
      "private label clothing contact",
    ],
    intent: "commercial",
  },
  "/request-a-quote": {
    primary: "custom apparel manufacturing quote",
    secondary: [
      "private label clothing quote",
      "bulk clothing manufacturer inquiry",
      "apparel sourcing request",
    ],
    intent: "commercial",
  },
  "/privacy-policy": {
    primary: "Nordvia Exports privacy policy",
    secondary: [
      "apparel website privacy",
      "business inquiry data protection",
      "website privacy policy",
    ],
    intent: "informational",
  },
  "/cookie-policy": {
    primary: "Nordvia Exports cookie policy",
    secondary: [
      "website cookie preferences",
      "analytics consent policy",
      "marketing cookie policy",
    ],
    intent: "informational",
  },
  "/terms": {
    primary: "Nordvia Exports terms and conditions",
    secondary: [
      "apparel inquiry terms",
      "clothing website terms",
      "business communication terms",
    ],
    intent: "informational",
  },
} satisfies Record<string, SeoKeywordEntry>;

export type SeoRoute = keyof typeof seoKeywords;
