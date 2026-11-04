
export type ProductInfo = {
  slug: string;
  number: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  overview: string;
  features: string[];
  customization: string[];
  considerations: string[];
};

export const products: ProductInfo[] = [
  {
    slug: "hoodies",
    number: "01",
    name: "Hoodies & Sweatshirts",
    shortName: "Hoodies",
    eyebrow: "Everyday Essentials",
    tagline: "Built around your brand's identity.",
    description:
      "Explore custom hoodie and sweatshirt development for streetwear labels, fashion brands, and private-label businesses.",
    image: "/products/Premium_Fleece.png",
    imageAlt: "Hoodie product design concept",
    overview:
      "From clean everyday silhouettes to heavyweight streetwear-inspired designs, hoodies and sweatshirts offer a versatile foundation for a clothing collection. We work with manufacturing partners to discuss suitable fabric, fit, construction, and branding options based on your requirements.",
    features: [
      "Pullover and zip-up hoodie styles",
      "Crewneck and sweatshirt designs",
      "Regular, relaxed, and oversized fit directions",
      "Different fabric weights and fleece options",
      "Ribbed cuffs, hems, and neckline details",
    ],
    customization: [
      "Custom colors and fabric selection",
      "Embroidery and printed artwork",
      "Woven labels and neck labels",
      "Custom drawstrings and trims",
      "Private-label branding and packaging",
    ],
    considerations: [
      "Target fabric composition and weight",
      "Size chart and fit measurements",
      "Artwork placement and branding details",
      "Required quantity and color breakdown",
    ],
  },
  // {
  //   slug: "tracksuits",
  //   number: "02",
  //   name: "Tracksuits & Sportswear",
  //   shortName: "Sportswear",
  //   eyebrow: "Movement & Performance",
  //   tagline: "Designed for your activewear direction.",
  //   description:
  //     "Explore custom tracksuits and sportswear concepts for sportswear labels, training collections, and private-label brands.",
  //   image: "/products/Performance_Wear.png",
  //   imageAlt: "Tracksuit product design concept",
  //   overview:
  //     "Sportswear collections require thoughtful choices in fabric, fit, comfort, and construction. We discuss tracksuit and sportswear requirements with manufacturing partners to explore options that suit your intended use, design direction, and target market.",
  //   features: [
  //     "Two-piece tracksuit concepts",
  //     "Training tops and sports bottoms",
  //     "Zip-up and pullover styles",
  //     "Different fit and silhouette options",
  //     "Functional panel and pocket details",
  //   ],
  //   customization: [
  //     "Fabric and color combinations",
  //     "Team logos and brand embroidery",
  //     "Screen and other print options",
  //     "Custom panels, trims, and details",
  //     "Private labels and packaging",
  //   ],
  //   considerations: [
  //     "Intended activity and product use",
  //     "Fabric stretch and performance requirements",
  //     "Fit, sizing, and construction details",
  //     "Logo placement and color specifications",
  //   ],
  // },
  {
    slug: "jackets",
    number: "03",
    name: "Jackets & Outerwear",
    shortName: "Jackets",
    eyebrow: "Outerwear Collection",
    tagline: "Distinctive layers for your collection.",
    description:
      "Explore custom casual jackets, bomber-inspired styles, and outerwear concepts for fashion and streetwear brands.",
    image: "/products/Everyday_Layers.png",
    imageAlt: "Jacket product design concept",
    overview:
      "Jackets can define the look and identity of an entire collection. From minimal everyday layers to more distinctive outerwear designs, we discuss materials, construction, closures, lining, and finishing requirements according to your product brief.",
    features: [
      "Casual and streetwear jacket styles",
      "Bomber-inspired silhouettes",
      "Zip-up and button-front designs",
      "Lined and unlined construction options",
      "Different collar, cuff, and pocket details",
    ],
    customization: [
      "Material and color selection",
      "Custom lining and trims",
      "Embroidery, patches, and print details",
      "Zippers, buttons, and hardware options",
      "Private labels and packaging",
    ],
    considerations: [
      "Shell material and lining requirements",
      "Season and intended use",
      "Construction and hardware specifications",
      "Fit, measurements, and finishing details",
    ],
  },
  // {
  //   slug: "coats",
  //   number: "04",
  //   name: "Coats & Winter Outerwear",
  //   shortName: "Coats",
  //   eyebrow: "Cold Weather Collection",
  //   tagline: "A considered approach to winter layers.",
  //   description:
  //     "Explore winter coat and outerwear development for brands planning seasonal collections and cold-weather apparel.",
  //   image: "/products/Winter_Protection.png",
  //   imageAlt: "Winter coat product design concept",
  //   overview:
  //     "Winter outerwear involves careful consideration of materials, insulation, lining, construction, and intended climate. We can discuss your design brief and explore manufacturing possibilities with our partners based on the specifications required.",
  //   features: [
  //     "Winter coat design concepts",
  //     "Casual cold-weather outerwear",
  //     "Different length and silhouette options",
  //     "Lined construction possibilities",
  //     "Custom closure and pocket details",
  //   ],
  //   customization: [
  //     "Outer fabric and lining choices",
  //     "Color and material combinations",
  //     "Brand labels and embroidery",
  //     "Custom buttons, zippers, and trims",
  //     "Private-label packaging options",
  //   ],
  //   considerations: [
  //     "Target climate and intended use",
  //     "Shell, lining, and insulation requirements",
  //     "Construction and finishing details",
  //     "Sizing and seasonal collection needs",
  //   ],
  // },
  // {
  //   slug: "joggers",
  //   number: "05",
  //   name: "Joggers & Sweatpants",
  //   shortName: "Joggers",
  //   eyebrow: "Comfort & Everyday Wear",
  //   tagline: "Essential pieces with room for individuality.",
  //   description:
  //     "Explore custom jogger and sweatpant concepts for coordinated sets, streetwear collections, and everyday apparel brands.",
  //   image: "/products/Jogger_Sweatpants.png",
  //   imageAlt: "Joggers product design concept",
  //   overview:
  //     "Joggers and sweatpants are versatile pieces for casualwear, streetwear, and coordinated apparel collections. Fabric, fit, waistband construction, cuffs, and pocket details all contribute to the final product direction.",
  //   features: [
  //     "Jogger and straight-leg silhouettes",
  //     "Elasticated and adjustable waist options",
  //     "Cuffed and open-hem designs",
  //     "Different pocket configurations",
  //     "Coordinated hoodie and tracksuit sets",
  //   ],
  //   customization: [
  //     "Fabric weight and color selection",
  //     "Embroidery and printed branding",
  //     "Custom drawstrings and waistband details",
  //     "Woven labels and trims",
  //     "Private-label packaging",
  //   ],
  //   considerations: [
  //     "Fit and leg shape",
  //     "Fabric feel and weight",
  //     "Waistband and cuff construction",
  //     "Pocket placement and branding",
  //   ],
  // },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
