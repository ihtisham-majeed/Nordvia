export type SearchIntent = "commercial" | "informational" | "navigational";

export type SeoKeywordEntry = {
  primary: string;
  secondary: [string, string, string, ...string[]];
  intent: SearchIntent;
};

export const seoKeywords = {
  "/": {
    primary: "apparel manufacturer in Pakistan",
    secondary: [
      "clothing manufacturer in Pakistan",
      "custom clothing manufacturer",
      "apparel manufacturing and sourcing",
      "private label clothing manufacturer",
    ],
    intent: "commercial",
  },
  "/about": {
    primary: "clothing manufacturer in Sialkot",
    secondary: [
      "apparel manufacturer in Pakistan",
      "Pakistani apparel sourcing",
      "custom garment manufacturing",
      "international apparel sourcing",
    ],
    intent: "commercial",
  },
  "/products": {
    primary: "custom apparel manufacturer",
    secondary: [
      "custom clothing manufacturing",
      "apparel manufacturing solutions",
      "wholesale apparel supplier",
      "private-label apparel",
    ],
    intent: "commercial",
  },
  "/products/hoodies": {
    primary: "hoodie manufacturer in Pakistan",
    secondary: [
      "custom hoodie manufacturer",
      "private label hoodies",
      "wholesale hoodies",
      "custom sweatshirt manufacturer",
      "heavyweight hoodie manufacturing",
    ],
    intent: "commercial",
  },
  "/products/tracksuits": {
    primary: "tracksuit manufacturer",
    secondary: [
      "custom tracksuits",
      "sportswear manufacturer in Pakistan",
      "wholesale sportswear",
      "private label sportswear",
      "athletic apparel manufacturing",
    ],
    intent: "commercial",
  },
  "/products/jackets": {
    primary: "custom jacket manufacturer",
    secondary: [
      "winter jacket supplier",
      "custom outerwear manufacturer",
      "private label jackets",
      "jacket manufacturing in Pakistan",
    ],
    intent: "commercial",
  },
  "/products/coats": {
    primary: "winter clothing manufacturer",
    secondary: [
      "coat manufacturer",
      "custom winter coats",
      "winter outerwear supplier",
      "private label winter clothing",
    ],
    intent: "commercial",
  },
  "/products/joggers": {
    primary: "custom joggers manufacturer",
    secondary: [
      "wholesale sweatpants",
      "private label joggers",
      "custom sweatpants manufacturing",
      "jogger manufacturing",
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
    primary: "clothing product development",
    secondary: [
      "apparel sampling",
      "garment development",
      "clothing sample development",
      "apparel product design and development",
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
    primary: "apparel fabric sourcing",
    secondary: [
      "garment fabric sourcing",
      "clothing material sourcing",
      "fabric selection for apparel manufacturing",
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
