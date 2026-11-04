
export type ProductStyle = {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

type CatalogueStyle = Omit<ProductStyle, "imageAlt">;

const catalogue: Record<string, CatalogueStyle[]> = {
  hoodies: [
    {
      id: "heavyweight-fleece-hoodie",
      code: "HD-001",
      name: "Heavyweight Fleece Hoodie",
      description: "A substantial fleece hoodie concept for premium streetwear collections.",
      image: "/products/individual/hoodies/Heavyweight_Hoodie.png",
    },
    {
      id: "cotton-fleece-hoodie",
      code: "HD-002",
      name: "Cotton Fleece Hoodie",
      description: "An everyday hoodie direction with a soft cotton-focused fleece feel.",
      image: "/products/individual/hoodies/Premium_Fleece.png",
    },
    {
      id: "brooklyn-graffiti-streetwear-hoodie",
      code: "HD-003",
      name: "Brooklyn Graffiti Streetwear Hoodie",
      description: "A streetwear-inspired hoodie concept with bold graphics and urban styling.",
      image: "/products/individual/hoodies/Brooklyn_Graffiti_Streetwear_Hoodie.png",
    },
    {
      id: "cropped-black-hoodie",
      code: "HD-004",
      name: "Cropped Black Hoodie",
      description: "A cropped hoodie design direction for contemporary streetwear and fashion collections.",
      image: "/products/individual/hoodies/Cropped_Black_Hoodie.png",
    },
    {
      id: "oversized-pullover-hoodie",
      code: "HD-005",
      name: "Oversized Pullover Hoodie",
      description: "A relaxed silhouette concept for contemporary streetwear brands.",
      image: "/products/individual/hoodies/Oversized_Hoodie.png",
    },
    {
      id: "zip-up-hoodie",
      code: "HD-006",
      name: "Zip-Up Hoodie",
      description: "A full-zip hoodie concept with options for pockets, trims and branding.",
      image: "/products/individual/hoodies/Zip-Up_Hoodies.png",
    },
    {
      id: "crewneck-sweatshirt",
      code: "HD-007",
      name: "Crewneck Sweatshirt",
      description: "A clean crewneck silhouette for everyday and coordinated collections.",
      image: "/products/individual/hoodies/Crewneck_Sweatshirt.png",
    },
    {
      id: "fleece-crewneck-sweatshirt",
      code: "HD-007",
      name: "Fleece Crewneck Sweatshirt",
      description: "A soft fleece crewneck sweatshirt for everyday comfort and style.",
      image: "/products/individual/hoodies/Fleece_Crewneck_Sweatshirt.png",
    },
  ],

//   tracksuits: [
//     {
//       id: "classic-tracksuit",
//       code: "TS-001",
//       name: "Classic Tracksuit",
//       description: "A coordinated jacket and trouser concept for everyday sportswear collections.",
//       image: "/products/individual/tracksuits/classic-tracksuit.png",
//     },
//     {
//       id: "performance-tracksuit",
//       code: "TS-002",
//       name: "Performance Tracksuit",
//       description: "An activewear direction with fabric and construction options based on intended use.",
//       image: "/products/individual/tracksuits/performance-tracksuit.png",
//     },
//     {
//       id: "training-tracksuit",
//       code: "TS-003",
//       name: "Training Tracksuit",
//       description: "A training-focused two-piece concept with functional styling possibilities.",
//       image: "/products/individual/tracksuits/training-tracksuit.png",
//     },
//     {
//       id: "casual-tracksuit",
//       code: "TS-004",
//       name: "Casual Tracksuit",
//       description: "A relaxed coordinated set for casualwear and lifestyle collections.",
//       image: "/products/individual/tracksuits/casual-tracksuit.png",
//     },
//     {
//       id: "slim-fit-tracksuit",
//       code: "TS-005",
//       name: "Slim-Fit Tracksuit",
//       description: "A streamlined silhouette concept with tailored fit possibilities.",
//       image: "/products/individual/tracksuits/slim-fit-tracksuit.png",
//     },
//     {
//       id: "track-jacket",
//       code: "TS-006",
//       name: "Track Jacket",
//       description: "A standalone sports jacket concept with customizable panels and trims.",
//       image: "/products/individual/tracksuits/track-jacket.png",
//     },
//     {
//       id: "track-pants",
//       code: "TS-007",
//       name: "Track Pants",
//       description: "Sports-inspired trousers with options for waistband, cuffs and pocket details.",
//       image: "/products/individual/tracksuits/track-pants.png",
//     },
//   ],

  jackets: [
    {
      id: "bomber-jacket",
      code: "JK-001",
      name: "Bomber Jacket",
      description: "A classic outerwear silhouette with customizable ribbing, lining and closures.",
      image: "/products/individual/jackets/Bomber_Jacket.png",
    },
    {
      id: "brooklyn-varsity-jacket",
      code: "JK-002",
      name: "Varsity Jacket",
      description: "A statement jacket concept with possibilities for patches, embroidery and contrast panels.",
      image: "/products/individual/jackets/Brooklyn_Varsity_Letterman_Jacket.png",
    },
    {
      id: "brooklyn-windbreaker-jacket",
      code: "JK-003",
      name: "Windbreaker Jacket",
      description: "A lightweight outerwear direction with functional design details.",
      image: "/products/individual/jackets/Sporty_Color_Block_Hooded_Windbreaker.png",
    },
    {
      id: "vesper-coach-jacket",
      code: "JK-004",
      name: "Coach Jacket",
      description: "A clean casual jacket concept with customizable snap closures and branding.",
      image: "/products/individual/jackets/Black_VESPER_Dept._Coach_Jacket.png",
    },
    // {
    //   id: "denim-jacket",
    //   code: "JK-005",
    //   name: "Denim Jacket",
    //   description: "A denim outerwear direction with options for washes, trims and garment details.",
    //   image: "/products/individual/jackets/denim-jacket.png",
    // },
    // {
    //   id: "softshell-jacket",
    //   code: "JK-006",
    //   name: "Softshell Jacket",
    //   description: "A functional outerwear concept with material and construction options.",
    //   image: "/products/individual/jackets/softshell-jacket.png",
    // },
  ],

//   coats: [
//     {
//       id: "puffer-coat",
//       code: "CT-001",
//       name: "Puffer Coat",
//       description: "A padded outerwear concept with options for quilting, filling and panel design.",
//       image: "/products/individual/coats/puffer-coat.png",
//     },
//     {
//       id: "quilted-jacket",
//       code: "CT-002",
//       name: "Quilted Jacket",
//       description: "A quilted outerwear direction with customizable patterns and finishing.",
//       image: "/products/individual/coats/quilted-jacket.png",
//     },
//     {
//       id: "parka",
//       code: "CT-003",
//       name: "Parka",
//       description: "A longer outerwear concept with options for hoods, pockets and lining.",
//       image: "/products/individual/coats/parka.png",
//     },
//     {
//       id: "long-winter-coat",
//       code: "CT-004",
//       name: "Long Winter Coat",
//       description: "A long-form cold-weather design direction with customizable construction.",
//       image: "/products/individual/coats/long-winter-coat.png",
//     },
//     {
//       id: "insulated-jacket",
//       code: "CT-005",
//       name: "Insulated Jacket",
//       description: "An insulated outerwear concept developed around the intended climate and use.",
//       image: "/products/individual/coats/insulated-jacket.png",
//     },
//   ],

//   joggers: [
//     {
//       id: "fleece-joggers",
//       code: "JG-001",
//       name: "Fleece Joggers",
//       description: "A fleece-bottom concept for casualwear and coordinated streetwear sets.",
//       image: "/products/individual/joggers/fleece-joggers.png",
//     },
//     {
//       id: "cotton-joggers",
//       code: "JG-002",
//       name: "Cotton Joggers",
//       description: "An everyday jogger direction with options for fit and waistband construction.",
//       image: "/products/individual/joggers/cotton-joggers.png",
//     },
//     {
//       id: "cotton-polyester-joggers",
//       code: "JG-003",
//       name: "Cotton-Polyester Joggers",
//       description: "A blended-fabric jogger concept for versatile casual collections.",
//       image: "/products/individual/joggers/cotton-polyester-joggers.png",
//     },
//     {
//       id: "oversized-sweatpants",
//       code: "JG-004",
//       name: "Oversized Sweatpants",
//       description: "A relaxed sweatpant silhouette for contemporary streetwear collections.",
//       image: "/products/individual/joggers/oversized-sweatpants.png",
//     },
//     {
//       id: "tapered-joggers",
//       code: "JG-005",
//       name: "Tapered Joggers",
//       description: "A tapered-leg design direction with customizable cuffs and pocket details.",
//       image: "/products/individual/joggers/tapered-joggers.png",
//     },
//     {
//       id: "straight-leg-sweatpants",
//       code: "JG-006",
//       name: "Straight-Leg Sweatpants",
//       description: "A straight-leg sweatpant concept for clean everyday styling.",
//       image: "/products/individual/joggers/straight-leg-sweatpants.png",
//     },
//   ],
};

export function getProductStyles(categorySlug: string): ProductStyle[] {
  const styles = catalogue[categorySlug];

  if (!styles) return [];

  return styles.map((style) => ({
    ...style,
    imageAlt: `${style.name} apparel design concept`,
  }));
}
