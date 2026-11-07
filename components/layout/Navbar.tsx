
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaArrowRight,
  FaBars,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

type QuoteItem = {
  id: string;
  name: string;
  code: string;
  category: string;
  quantity: number;
};

const QUOTE_STORAGE_KEY = "nordvia-quote-list";

const products = [
  {
    name: "Hoodies & Sweatshirts",
    href: "/products/hoodies",
    description: "Premium fleece and custom hooded apparel",
  },
  {
    name: "Tracksuits & Sportswear",
    href: "/products/tracksuits",
    description: "Custom sportswear and coordinated sets",
  },
  {
    name: "Jackets & Outerwear",
    href: "/products/jackets",
    description: "Bomber, casual and technical outerwear",
  },
  {
    name: "Coats & Overcoats",
    href: "/products/coats",
    description: "Cold-weather and winter outerwear",
  },
  {
    name: "Joggers & Sweatpants",
    href: "/products/joggers",
    description: "Custom bottoms and fleece essentials",
  },
  {
    name: "Custom Apparel",
    href: "/products#custom-apparel",
    description: "Develop apparel around your requirements",
  },
];

const mobileLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Industries", href: "/industries" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { name: "Products", href: "/products" },
  { name: "Why Nordvia", href: "/about" },
  { name: "Fabrics", href: "/resources/fabric-guide" },
  { name: "Our Process", href: "/resources/manufacturing-process" },
  { name: "FAQ", href: "/resources/faq" },
];

const manufacturingGroups = [
  {
    title: "Manufacturing Services",
    links: [
      {
        name: "Custom Clothing Manufacturing",
        href: "/services/custom-clothing-manufacturing",
        description: "Apparel production developed around your requirements.",
      },
      {
        name: "Private Label Manufacturing",
        href: "/services/private-label",
        description: "Custom branding and private-label options.",
      },
      {
        name: "OEM & ODM",
        href: "/services/oem-odm",
        description: "Product manufacturing and development approaches.",
      },
      {
        name: "Product Development & Sampling",
        href: "/services/product-development-sampling",
        description: "Develop designs and evaluate samples.",
      },
    ],
  },
  {
    title: "Customization & Development",
    links: [
      {
        name: "Printing & Embroidery",
        href: "/services/printing-embroidery",
        description: "Branding, decoration and garment detailing.",
      },
      {
        name: "Fabric Sourcing",
        href: "/services/fabric-sourcing",
        description: "Explore materials for your apparel collection.",
      },
      {
        name: "Custom Apparel Development",
        href: "/services/custom-apparel-development",
        description: "Turn your apparel requirements into a product concept.",
      },
    ],
  },
];

const industryGroups = [
  {
    title: "Industries We Serve",
    links: [
      {
        name: "Fashion Brands",
        href: "/industries/fashion-brands",
        description: "Apparel development for emerging and established labels.",
      },
      {
        name: "Streetwear Brands",
        href: "/industries/streetwear-brands",
        description: "Custom streetwear, hoodies and everyday essentials.",
      },
    ],
  },
  {
    title: "Business & Teams",
    links: [
      {
        name: "Sportswear Brands",
        href: "/industries/sportswear-brands",
        description: "Custom sportswear and coordinated apparel collections.",
      },
      {
        name: "Wholesalers & Distributors",
        href: "/industries/wholesalers-distributors",
        description: "Apparel supply solutions for wholesale businesses.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

function readQuoteItems(): QuoteItem[] {
  try {
    const saved = localStorage.getItem(QUOTE_STORAGE_KEY);

    if (!saved) return [];

    const parsed: unknown = JSON.parse(saved);

    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item): item is QuoteItem =>
          item &&
          typeof item === "object" &&
          typeof item.id === "string" &&
          typeof item.name === "string" &&
          typeof item.code === "string" &&
          typeof item.category === "string"
      )
      .map((item) => ({
        ...item,
        quantity: Math.max(
          1,
          Math.floor(Number(item.quantity) || 1)
        ),
      }));
  } catch {
    return [];
  }
}

function areQuoteItemsEqual(
  first: QuoteItem[],
  second: QuoteItem[]
): boolean {
  if (first.length !== second.length) return false;

  return first.every((item, index) => {
    const other = second[index];

    return (
      !!other &&
      item.id === other.id &&
      item.name === other.name &&
      item.code === other.code &&
      item.category === other.category &&
      item.quantity === other.quantity
    );
  });
}

function MegaMenuLink({
  name,
  href,
  description,
}: {
  name: string;
  href: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group/item block"
    >
      <span className="flex items-center justify-between gap-3 text-[14px] font-medium text-neutral-900 transition-colors group-hover/item:text-neutral-500 sm:text-[15px]">
        {name}

        <FaArrowRight
          size={11}
          className="-translate-x-2 shrink-0 opacity-0 transition-[transform,opacity] duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
        />
      </span>

      <span className="mt-1 block text-xs leading-5 text-neutral-500">
        {description}
      </span>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* NAVBAR                                                                     */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [quoteHydrated, setQuoteHydrated] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const phoneNumber = "923248548680";

  const whatsappMessage =
    "Hello NORDVIA EXPORTS! I would like to discuss an apparel manufacturing enquiry.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const totalPieces = quoteItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* -------------------------------------------------------------------------- */
  /* LOAD SAVED QUOTE ITEMS                                                     */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    const loadQuoteItems = () => {
      const nextItems = readQuoteItems();

      setQuoteItems((currentItems) => {
        return areQuoteItemsEqual(currentItems, nextItems)
          ? currentItems
          : nextItems;
      });

      setQuoteHydrated(true);
    };

    // Load saved items when Navbar mounts.
    loadQuoteItems();

    // Listen for quote changes from product pages and other components.
    const handleQuoteUpdate = () => {
      loadQuoteItems();
    };

    // Listen for changes made in another browser tab.
    const handleStorage = (event: StorageEvent) => {
      if (
        event.key === QUOTE_STORAGE_KEY ||
        event.key === null
      ) {
        loadQuoteItems();
      }
    };

    window.addEventListener(
      "nordvia:quote-updated",
      handleQuoteUpdate
    );

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(
        "nordvia:quote-updated",
        handleQuoteUpdate
      );

      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  /* -------------------------------------------------------------------------- */
  /* SAVE QUOTE ITEMS                                                           */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    // Prevent initial empty state from overwriting saved items.
    if (!quoteHydrated) return;

    try {
      localStorage.setItem(
        QUOTE_STORAGE_KEY,
        JSON.stringify(quoteItems)
      );
    } catch (error) {
      console.error("Unable to save quote list:", error);
    }
  }, [quoteItems, quoteHydrated]);

  /* ------------------------------------------------------------------------ */
  /* MOBILE MENU ANIMATION                                                    */
  /* ------------------------------------------------------------------------ */

  useGSAP(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    gsap.killTweensOf(menu);

    if (mobileOpen) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
      });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }

    return () => {
      gsap.killTweensOf(menu);
    };
  }, {
    scope: mobileMenuRef,
    dependencies: [mobileOpen],
    revertOnUpdate: true,
  });

  /* ------------------------------------------------------------------------ */
  /* DRAWER ACCESSIBILITY AND SCROLL LOCK                                     */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    if (!quoteOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setQuoteOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [quoteOpen]);
  /* -------------------------------------------------------------------------- */
  /* ACTIONS                                                                    */
  /* -------------------------------------------------------------------------- */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const openQuoteDrawer = () => {
    setQuoteOpen(true);
    setMobileOpen(false);
  };

  const closeQuoteDrawer = () => {
    setQuoteOpen(false);
  };

  const updateQuoteQuantity = (
    id: string,
    quantity: number
  ) => {
    const safeQuantity = Math.max(
      1,
      Math.floor(Number(quantity) || 1)
    );

    const updatedItems = quoteItems.map((item) =>
      item.id === id
        ? { ...item, quantity: safeQuantity }
        : item
    );

    try {
      localStorage.setItem(
        QUOTE_STORAGE_KEY,
        JSON.stringify(updatedItems)
      );

      setQuoteItems(updatedItems);

      window.dispatchEvent(
        new CustomEvent("nordvia:quote-updated")
      );
    } catch (error) {
      console.error("Unable to update quote quantity:", error);
    }
  };

  const removeQuoteItem = (id: string) => {
    const updatedItems = quoteItems.filter(
      (item) => item.id !== id
    );

    try {
      localStorage.setItem(
        QUOTE_STORAGE_KEY,
        JSON.stringify(updatedItems)
      );

      setQuoteItems(updatedItems);

      window.dispatchEvent(
        new CustomEvent("nordvia:quote-updated")
      );
    } catch (error) {
      console.error("Unable to remove quote item:", error);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* RENDER                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-neutral-900">

      {/* ================================================================== */}
      {/* PRIMARY NAVIGATION                                                 */}
      {/* ================================================================== */}

      <div className="relative z-30 border-b border-white/10 bg-[#101010] text-white">

        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-12"
        >

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="NORDVIA EXPORTS"
            className="group flex shrink-0 flex-col leading-none"
          >
            <span className="text-[25px] font-bold tracking-[0.12em] sm:text-[29px]">
              NORDVIA
            </span>

            <span className="mt-2 text-[8px] font-medium tracking-[0.48em] text-white/55">
              EXPORTS
            </span>
          </Link>

          {/* ============================================================ */}
          {/* DESKTOP PRIMARY LINKS                                        */}
          {/* ============================================================ */}

          <div className="hidden h-full items-center gap-7 xl:flex 2xl:gap-10">

            {/* -------------------------------------------------------- */}
            {/* PRODUCTS MEGA MENU                                       */}
            {/* -------------------------------------------------------- */}

            <div className="group/products flex h-full items-center">

              <Link
                href="/products"
                className="flex h-full items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-white transition-colors hover:text-neutral-400"
              >
                Products

                <FaChevronDown
                  size={9}
                  className="transition-transform duration-300 group-hover/products:rotate-180"
                />
              </Link>

              <div
                className="
                  invisible absolute left-0 top-full z-50 w-full
                  translate-y-3 border-t border-black/10
                  bg-[#f5f5f3] text-neutral-900 opacity-0
                  shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                  transition-all duration-300 ease-out
                  group-hover/products:visible
                  group-hover/products:translate-y-0
                  group-hover/products:opacity-100
                  group-focus-within/products:visible
                  group-focus-within/products:translate-y-0
                  group-focus-within/products:opacity-100
                "
              >

                <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-10 px-12 py-12 2xl:px-16">

                  {/* PRODUCT CATEGORIES */}

                  <div className="col-span-7 grid grid-cols-2 gap-x-12">

                    <div>
                      <p className="mb-5 border-b border-neutral-300 pb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                        Explore Products
                      </p>

                      <div className="space-y-5">
                        {products.slice(0, 3).map((product) => (
                          <MegaMenuLink
                            key={product.href}
                            {...product}
                          />
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-5 border-b border-neutral-300 pb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                        More Categories
                      </p>

                      <div className="space-y-5">
                        {products.slice(3).map((product) => (
                          <MegaMenuLink
                            key={product.href}
                            {...product}
                          />
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* FEATURED PRODUCT */}

                  <div className="col-span-5">

                    <Link
                      href="/products/tracksuits"
                      className="group/feature block"
                    >

                      <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">

                        <Image
                          src="/image/Tracksuit.webp"
                          alt="NORDVIA EXPORTS custom tracksuit manufacturing"
                          fill
                          sizes="(max-width: 1280px) 40vw, 500px"
                          className="object-cover transition-transform duration-700 group-hover/feature:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/10 transition-colors group-hover/feature:bg-black/20" />

                        <span className="absolute bottom-4 left-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                          NORDVIA / COLLECTION
                        </span>

                      </div>

                      <div className="mt-5 flex items-start justify-between gap-5">

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                            Made to your specifications
                          </p>

                          <h3 className="mt-2 text-xl font-semibold tracking-tight">
                            Develop your next collection.
                          </h3>

                          <p className="mt-2 text-sm text-neutral-500">
                            Custom apparel, materials and branding options.
                          </p>
                        </div>

                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-neutral-300 transition-colors group-hover/feature:bg-black group-hover/feature:text-white">
                          <FaArrowRight size={13} />
                        </span>

                      </div>

                    </Link>

                  </div>

                </div>

                {/* PRODUCT MENU FOOTER */}

                <div className="border-t border-neutral-200 bg-[#ededeb]">

                  <div className="mx-auto flex max-w-[1500px] items-center justify-between px-12 py-5 2xl:px-16">

                    <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-neutral-500">
                      Apparel manufacturing / Private label / Custom development
                    </p>

                    <Link
                      href="/products"
                      className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-neutral-500"
                    >
                      View all products
                      <FaArrowRight size={11} />
                    </Link>

                  </div>

                </div>

              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* MANUFACTURING MEGA MENU                                  */}
            {/* -------------------------------------------------------- */}

            <div className="group/manufacturing flex h-full items-center">

              <Link
                href="/manufacturing"
                className="flex h-full items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-white/80 transition-colors hover:text-white"
              >
                Manufacturing

                <FaChevronDown
                  size={9}
                  className="transition-transform duration-300 group-hover/manufacturing:rotate-180"
                />
              </Link>

              <div
                className="
                  invisible absolute left-0 top-full z-50 w-full
                  translate-y-3 border-t border-black/10
                  bg-[#f5f5f3] text-neutral-900
                  opacity-0 shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                  transition-all duration-300 ease-out
                  group-hover/manufacturing:visible
                  group-hover/manufacturing:translate-y-0
                  group-hover/manufacturing:opacity-100
                  group-focus-within/manufacturing:visible
                  group-focus-within/manufacturing:translate-y-0
                  group-focus-within/manufacturing:opacity-100
                "
              >

                <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-12 px-12 py-12 2xl:px-16">

                  {/* MANUFACTURING LINKS */}

                  <div className="col-span-8 grid grid-cols-2 gap-12">

                    {manufacturingGroups.map((group) => (
                      <div key={group.title}>

                        <p className="mb-5 border-b border-neutral-300 pb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                          {group.title}
                        </p>

                        <div className="space-y-6">
                          {group.links.map((item) => (
                            <MegaMenuLink
                              key={item.href}
                              {...item}
                            />
                          ))}
                        </div>

                      </div>
                    ))}

                  </div>

                  {/* FEATURED PANEL */}

                  <div className="col-span-4 flex flex-col justify-between border-l border-neutral-200 pl-10">

                    <div>
                      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                        From Concept to Production
                      </p>

                      <h3 className="max-w-xs text-3xl font-medium leading-tight tracking-tight">
                        Build your next apparel collection.
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500">
                        Explore custom manufacturing, material options,
                        branding and product development for your business.
                      </p>
                    </div>

                    <Link
                      href="/manufacturing"
                      className="mt-8 inline-flex w-fit items-center gap-3 border border-neutral-900 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
                    >
                      Explore Manufacturing
                      <FaArrowRight size={10} />
                    </Link>

                  </div>

                </div>

                {/* MANUFACTURING FOOTER */}

                <div className="border-t border-neutral-200 bg-[#ededeb]">

                  <div className="mx-auto flex max-w-[1500px] items-center justify-between px-12 py-5 2xl:px-16">

                    <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-neutral-500">
                      Custom Production / Private Label / Fabric / Branding
                    </p>

                    <button
                      type="button"
                      onClick={openQuoteDrawer}
                      aria-label={`Open quote list with ${quoteItems.length} items`}
                      className="inline-flex cursor-pointer items-center gap-3 border border-neutral-900 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
                    >
                      Quote ({quoteItems.length})
                      <FaArrowRight size={10} />
                    </button>

                  </div>

                </div>

              </div>
            </div>

            {/* -------------------------------------------------------- */}
            {/* INDUSTRIES MEGA MENU                                     */}
            {/* -------------------------------------------------------- */}

            <div className="group/industries flex h-full items-center">

              <Link
                href="/industries"
                className="flex h-full items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-white/80 transition-colors hover:text-white"
              >
                Industries

                <FaChevronDown
                  size={9}
                  className="transition-transform duration-300 group-hover/industries:rotate-180"
                />
              </Link>

              <div
                className="
                  invisible absolute left-0 top-full z-50 w-full
                  translate-y-3 border-t border-black/10
                  bg-[#f5f5f3] text-neutral-900
                  opacity-0 shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                  transition-all duration-300 ease-out
                  group-hover/industries:visible
                  group-hover/industries:translate-y-0
                  group-hover/industries:opacity-100
                  group-focus-within/industries:visible
                  group-focus-within/industries:translate-y-0
                  group-focus-within/industries:opacity-100
                "
              >

                <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-12 px-12 py-12 2xl:px-16">

                  {/* INDUSTRY LINKS */}

                  <div className="col-span-8 grid grid-cols-2 gap-12">

                    {industryGroups.map((group) => (
                      <div key={group.title}>

                        <p className="mb-5 border-b border-neutral-300 pb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                          {group.title}
                        </p>

                        <div className="space-y-6">
                          {group.links.map((item) => (
                            <MegaMenuLink
                              key={item.href}
                              {...item}
                            />
                          ))}
                        </div>

                      </div>
                    ))}

                  </div>

                  {/* FEATURED PANEL */}

                  <div className="col-span-4 flex flex-col justify-between border-l border-neutral-200 pl-10">

                    <div>
                      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-500">
                        Your Brand. Your Direction.
                      </p>

                      <h3 className="max-w-xs text-3xl font-medium leading-tight tracking-tight">
                        Apparel manufacturing for your market.
                      </h3>

                      <p className="mt-4 max-w-sm text-sm leading-7 text-neutral-500">
                        Explore how NORDVIA EXPORTS can support your apparel
                        requirements through custom development and private
                        label manufacturing.
                      </p>
                    </div>

                    <Link
                      href="/industries"
                      className="mt-8 inline-flex w-fit items-center gap-3 border border-neutral-900 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-black hover:text-white"
                    >
                      Explore All Industries
                      <FaArrowRight size={10} />
                    </Link>

                  </div>

                </div>

                {/* INDUSTRIES FOOTER */}

                <div className="border-t border-neutral-200 bg-[#ededeb]">

                  <div className="mx-auto flex max-w-[1500px] items-center justify-between px-12 py-5 2xl:px-16">

                    <p className="text-[10px] font-medium uppercase tracking-[0.17em] text-neutral-500">
                      Fashion / Streetwear / Sportswear / Wholesale
                    </p>

                    <button
                      type="button"
                      onClick={openQuoteDrawer}
                      className="inline-flex cursor-pointer items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-neutral-500"
                    >
                      Discuss Your Project
                      <FaArrowRight size={11} />
                    </button>

                  </div>

                </div>

              </div>
            </div>

            {/* ABOUT */}

            <Link
              href="/about"
              className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/80 transition-colors hover:text-white"
            >
              About
            </Link>

            {/* CONTACT */}

            <Link
              href="/contact"
              className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/80 transition-colors hover:text-white"
            >
              Contact
            </Link>

          </div>

          {/* ============================================================ */}
          {/* DESKTOP QUOTE BUTTON                                        */}
          {/* ============================================================ */}

          <div className="hidden xl:block">

            <button
              type="button"
              onClick={openQuoteDrawer}
              aria-label={`Open quote list with ${quoteItems.length} items`}
              className="inline-flex cursor-pointer items-center gap-3 border border-white/30 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-white hover:text-black"
            >
              Your Quote

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-[9px] text-black">
                {quoteItems.length}
              </span>

              <FaArrowRight size={10} />
            </button>

          </div>

          {/* ============================================================ */}
          {/* MOBILE ACTIONS                                               */}
          {/* ============================================================ */}

          <div className="flex items-center gap-3 xl:hidden">

            <button
              type="button"
              onClick={openQuoteDrawer}
              aria-label={`Open quote list with ${quoteItems.length} items`}
              className="hidden cursor-pointer border border-white/30 px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-black sm:block"
            >
              Quote ({quoteItems.length})
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((previous) => !previous)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-white/25 text-lg transition hover:bg-white hover:text-black"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </nav>

      </div>

      {/* ================================================================== */}
      {/* SECONDARY NAVIGATION                                               */}
      {/* ================================================================== */}

      <div className="hidden border-b border-neutral-200 bg-[#f0f0ee] text-neutral-800 xl:block">

        <nav
          aria-label="Secondary navigation"
          className="mx-auto flex h-[58px] max-w-[1500px] items-center justify-between px-12 2xl:px-16"
        >

          <div className="flex h-full items-center gap-9">

            {secondaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.17em] text-neutral-600 transition-colors hover:text-black"
              >
                <span className="relative">

                  {item.name}

                  <span className="absolute -bottom-[7px] left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />

                </span>
              </Link>
            ))}

          </div>

          <Link
            href="/request-a-quote"
            className="flex items-center justify-center gap-3 bg-black px-5 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-transparent hover:text-black hover:outline hover:outline-1 hover:outline-black"
          >
            Request a Quote
            <FaArrowRight size={11} />
          </Link>

        </nav>

      </div>

      {/* ================================================================== */}
      {/* MOBILE NAVIGATION                                                  */}
      {/* ================================================================== */}

      <div
        ref={mobileMenuRef}
        inert={!mobileOpen}
        className="overflow-hidden border-t border-white/10 bg-[#101010] text-white xl:hidden"
        style={{ height: 0, opacity: 0 }}
      >

        <div className="max-h-[calc(100dvh-76px)] overflow-y-auto px-5 py-5">

          {/* MAIN LINKS */}

          <div className="flex flex-col">

            {mobileLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                tabIndex={mobileOpen ? 0 : -1}
                className="flex items-center justify-between border-b border-white/10 py-4 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {item.name}

                <FaArrowRight
                  size={11}
                  className="text-white/60"
                />
              </Link>
            ))}

          </div>

          {/* MOBILE PRODUCT LINKS */}

          <div className="border-b border-white/10 py-5">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">
              Product Categories
            </p>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">

              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  onClick={closeMobileMenu}
                  tabIndex={mobileOpen ? 0 : -1}
                  className="text-xs leading-5 text-white/65 transition-colors hover:text-white"
                >
                  {product.name}
                </Link>
              ))}

            </div>

          </div>

          {/* MOBILE MANUFACTURING LINKS */}

          <div className="border-b border-white/10 py-5">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">
              Manufacturing Services
            </p>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">

              {manufacturingGroups.flatMap((group) =>
                group.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    tabIndex={mobileOpen ? 0 : -1}
                    className="text-xs leading-5 text-white/65 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))
              )}

            </div>

          </div>

          {/* MOBILE INDUSTRY LINKS */}

          <div className="border-b border-white/10 py-5">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">
              Industries
            </p>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">

              {industryGroups.flatMap((group) =>
                group.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    tabIndex={mobileOpen ? 0 : -1}
                    className="text-xs leading-5 text-white/65 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))
              )}

            </div>

          </div>

          {/* MOBILE SECONDARY LINKS */}

          <div className="border-b border-white/10 py-5">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-4">

              {secondaryLinks.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  tabIndex={mobileOpen ? 0 : -1}
                  className="text-xs text-white/65 transition-colors hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>

          {/* MOBILE CTA */}

          <div className="mt-6 flex flex-col gap-3">

            <button
              type="button"
              onClick={openQuoteDrawer}
              className="flex cursor-pointer items-center justify-center gap-3 bg-white px-5 py-4 text-xs font-bold uppercase tracking-wider text-black transition hover:bg-neutral-200"
            >
              Your Quote
              <FaArrowRight size={11} />
            </button>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-3 border border-white/25 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
            >
              <FaWhatsapp size={15} />
              WhatsApp Inquiry
            </Link>

          </div>

          {/* SOCIAL LINKS */}

          <div className="mt-8 border-t border-white/10 pt-6">

            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.22em] text-white/60">
              Connect With Us
            </p>

            <div className="flex items-center gap-6">

              <a
                href="https://instagram.com/nordvia.exports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 transition hover:text-white"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://facebook.com/nordviaexports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 transition hover:text-white"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/nordviaexports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 transition hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="mailto:nordvia.exports@gmail.com"
                aria-label="Email"
                className="text-white/60 transition hover:text-white"
              >
                <FaEnvelope size={18} />
              </a>

            </div>

            <p className="mt-6 text-[10px] text-white/60">
              © {new Date().getFullYear()} NORDVIA EXPORTS. All rights reserved.
            </p>

          </div>

        </div>

      </div>

      {/* ================================================================== */}
      {/* QUOTE DRAWER                                                        */}
      {/* ================================================================== */}

      <div
        className={`fixed inset-0 z-[100] ${quoteOpen
            ? "visible"
            : "invisible pointer-events-none"
          }`}
        inert={!quoteOpen}
      >

        {/* BACKDROP */}

        <button
          type="button"
          aria-label="Close quote list"
          tabIndex={quoteOpen ? 0 : -1}
          onClick={closeQuoteDrawer}
          className={`absolute inset-0 h-full w-full cursor-default bg-black/60 transition-opacity duration-300 ${quoteOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* DRAWER */}

        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Your quote list"
          className={`absolute right-0 top-0 flex h-full w-full max-w-[550px] flex-col bg-[#f5f5f5] text-[#111] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${quoteOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >

          {/* DRAWER HEADER */}

          <div className="flex h-[94px] shrink-0 items-center justify-between border-b border-black/10 px-6 sm:px-9">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.18em]">
                Quote List ({quoteItems.length})
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                Your selected products
              </p>

            </div>

            <button
              type="button"
              onClick={closeQuoteDrawer}
              aria-label="Close quote list"
              className="flex h-10 w-10 cursor-pointer items-center justify-center border border-black/30 transition hover:bg-black hover:text-white"
            >
              <FaTimes size={16} />
            </button>

          </div>

          {/* QUOTE ITEMS */}

          <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-9">

            {quoteItems.length === 0 ? (

              <div className="flex min-h-[350px] flex-col items-center justify-center text-center">

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">
                  Your quote list is empty
                </p>

                <h3 className="mt-5 text-2xl font-semibold uppercase tracking-[-0.04em]">
                  Start building your inquiry.
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-neutral-500">
                  Explore our products and add the styles you would like
                  to discuss with our team.
                </p>

                <Link
                  href="/products"
                  onClick={closeQuoteDrawer}
                  className="mt-7 inline-flex items-center gap-3 bg-black px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-700"
                >
                  Explore Products
                  <FaArrowRight size={11} />
                </Link>

              </div>

            ) : (

              <div>

                {quoteItems.map((item) => (

                  <div
                    key={item.id}
                    className="border-b border-black/15 py-6 first:pt-1"
                  >

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="min-w-0">

                        <h3 className="text-sm font-bold uppercase tracking-[0.07em]">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                          {item.code} · {item.category}
                        </p>

                      </div>

                      <div className="flex shrink-0 items-center gap-3">

                        <input
                          type="number"
                          min={1}
                          step={1}
                          value={item.quantity}
                          onChange={(event) =>
                            updateQuoteQuantity(
                              item.id,
                              Number(event.target.value)
                            )
                          }
                          aria-label={`Quantity for ${item.name}`}
                          className="h-11 w-[90px] border border-black/25 bg-transparent px-3 text-center text-base outline-none transition focus:border-black"
                        />

                        <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                          PCS
                        </span>

                        <button
                          type="button"
                          onClick={() => removeQuoteItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="ml-1 cursor-pointer text-lg text-neutral-500 transition hover:text-black"
                        >
                          ×
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* DRAWER FOOTER */}

          <div className="shrink-0 border-t border-black/15 bg-[#ededed] px-6 py-7 sm:px-9">

            <div className="mb-6 flex items-center justify-between">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Estimated Pieces
              </span>

              <span className="text-sm font-bold tabular-nums">
                {totalPieces.toLocaleString()}
              </span>

            </div>

            <Link
              href="/request-a-quote"
              onClick={closeQuoteDrawer}
              aria-disabled={quoteItems.length === 0}
              className={`flex min-h-[66px] w-full items-center justify-center gap-3 px-6 text-xs font-bold uppercase tracking-[0.2em] transition ${quoteItems.length > 0
                  ? "bg-[#090909] text-white hover:bg-neutral-700"
                  : "pointer-events-none bg-neutral-300 text-neutral-500"
                }`}
            >
              Request a Quote
              <FaArrowRight size={12} />
            </Link>

            <p className="mt-4 text-xs leading-6 text-neutral-500">
              Factory-direct pricing on every line, with a reply targeted
              within 1 working day.
            </p>

          </div>

        </aside>

      </div>

    </header>
  );
}
