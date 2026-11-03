
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import type { RefObject } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import gsap from "gsap";

// =====================================
// TYPES
// =====================================

type NavigationLink = {
  name: string;
  href: string;
  description?: string;
};

type NavigationDropdown = {
  name: string;
  type: "dropdown";
  items: NavigationLink[];
};

type NavigationSingleLink = {
  name: string;
  href: string;
  type: "link";
};

type NavigationItem =
  | NavigationDropdown
  | NavigationSingleLink;

// =====================================
// NAVIGATION DATA
// =====================================

const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/",
    type: "link",
  },
  {
    name: "About Us",
    href: "/about/",
    type: "link",
  },
  {
    name: "Products",
    type: "dropdown",
    items: [
      {
        name: "All Products",
        href: "/products/",
        description: "Explore our apparel range",
      },
      {
        name: "Hoodies & Sweatshirts",
        href: "/products/hoodies/",
      },
      {
        name: "Tracksuits & Sportswear",
        href: "/products/tracksuits/",
      },
      {
        name: "Jackets & Outerwear",
        href: "/products/jackets/",
      },
      {
        name: "Coats & Overcoats",
        href: "/products/coats/",
      },
      {
        name: "Custom Apparel",
        href: "/products/custom-apparel/",
      },
    ],
  },
  {
    name: "Manufacturing",
    type: "dropdown",
    items: [
      {
        name: "Manufacturing Overview",
        href: "/manufacturing/",
      },
      {
        name: "Custom Clothing Manufacturing",
        href: "/services/custom-clothing-manufacturing/",
      },
      {
        name: "Private Label",
        href: "/services/private-label/",
      },
      {
        name: "OEM / ODM",
        href: "/services/oem-odm/",
      },
      {
        name: "Sampling & Development",
        href: "/services/product-development-sampling/",
      },
      {
        name: "Printing & Embroidery",
        href: "/services/printing-embroidery/",
      },
      {
        name: "Fabric Options",
        href: "/services/fabric-sourcing/",
      },
    ],
  },
  {
    name: "Industries",
    type: "dropdown",
    items: [
      {
        name: "Fashion Brands",
        href: "/industries/fashion-brands/",
      },
      {
        name: "Streetwear Brands",
        href: "/industries/streetwear-brands/",
      },
      {
        name: "Sportswear Brands",
        href: "/industries/sportswear-brands/",
      },
      {
        name: "Wholesalers & Distributors",
        href: "/industries/wholesalers-distributors/",
      },
    ],
  },
  {
    name: "Resources",
    type: "dropdown",
    items: [
      {
        name: "Frequently Asked Questions",
        href: "/resources/faq/",
      },
      {
        name: "Blog & Insights",
        href: "/resources/blog/",
      },
      {
        name: "Manufacturing Process",
        href: "/resources/manufacturing-process/",
      },
      {
        name: "Fabric Guide",
        href: "/resources/fabric-guide/",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact/",
    type: "link",
  },
];

// =====================================
// DESKTOP DROPDOWN
// =====================================

type DesktopDropdownProps = {
  item: NavigationDropdown;
};

function DesktopDropdown({ item }: DesktopDropdownProps) {
  return (
    <div className="relative group">
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-2 py-3 text-[13px] font-medium text-white/75 transition-colors duration-300 hover:text-white"
      >
        {item.name}

        <FaChevronDown
          size={10}
          className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </button>

      <div
        className="
          invisible absolute left-0 top-full z-50 mt-2
          w-72 translate-y-3 overflow-hidden
          rounded-xl border border-white/10
          bg-[#111111] p-2 opacity-0 shadow-2xl
          transition-all duration-300
          group-hover:visible group-hover:translate-y-0
          group-hover:opacity-100
          group-focus-within:visible
          group-focus-within:translate-y-0
          group-focus-within:opacity-100
        "
      >
        {item.items.map((subItem) => (
          <Link
            key={subItem.href}
            href={subItem.href}
            className="group/item flex items-center justify-between rounded-lg px-4 py-3 text-[13px] text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
          >
            <span>
              <span className="block font-medium">
                {subItem.name}
              </span>

              {subItem.description && (
                <span className="mt-1 block text-[11px] text-white/40">
                  {subItem.description}
                </span>
              )}
            </span>

            <FaArrowRight
              size={11}
              className="opacity-0 transition-all duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

// =====================================
// MAIN NAVBAR
// =====================================

export default function Navbar() {
  const phoneNumber = "923248548680";

  const message =
    "Hello NORDVIA EXPORTS! I would like to discuss an apparel manufacturing enquiry.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const [open, setOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // =====================================
  // GSAP MOBILE MENU ANIMATION
  // =====================================

  useEffect(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    gsap.killTweensOf(menu);

    if (open) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
        onComplete: () => {
          gsap.set(menu, { height: "auto" });
        },
      });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [open]);

  // =====================================
  // MOBILE MENU FUNCTIONS
  // =====================================

  const closeMobileMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown((previous) =>
      previous === name ? null : name
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/90 text-white backdrop-blur-xl">

      {/* DESKTOP / TABLET HEADER */}

      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2 sm:py-3 lg:px-8"
        aria-label="Main navigation"
      >
        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2"
          aria-label="NORDVIA EXPORTS Home"
        >
          <span className="text-2xl font-bold tracking-[0.15em] sm:text-3xl">
            NORDVIA
          </span>

          <span className="hidden border-l border-white/30 pl-2 text-[9px] tracking-[0.35em] text-white/60 sm:block">
            EXPORTS
          </span>
        </Link>

        {/* DESKTOP MENU */}

        <div className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) =>
            item.type === "dropdown" ? (
              <DesktopDropdown
                key={item.name}
                item={item}
              />
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="group relative py-3 text-[13px] font-medium text-white/75 transition-colors duration-300 hover:text-white"
              >
                {item.name}

                <span className="absolute bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </div>

        {/* DESKTOP CTA */}

        <div className="hidden items-center gap-4 xl:flex">
          <Link
            href="/request-a-quote/"
            className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] font-semibold text-black transition-all duration-300 hover:bg-white/80"
          >
            Request a Quote

            <FaArrowRight
              size={11}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* TABLET / MOBILE ACTIONS */}

        <div className="flex items-center gap-4 xl:hidden">
          <Link
            href="/request-a-quote/"
            className="hidden rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-black transition hover:bg-white/80 sm:block"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl transition hover:bg-white hover:text-black"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* MOBILE NAVIGATION */}

      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        aria-hidden={!open}
        inert={!open}
        className="xl:hidden overflow-hidden border-t border-white/10 bg-[#090909]"
        style={{
          height: 0,
          opacity: 0,
        }}
      >
        <div className="max-h-[calc(100dvh-75px)] overflow-y-auto px-4 py-4">

          {/* MOBILE LINKS */}

          <div className="flex flex-col">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="border-b border-white/10"
              >
                {item.type === "link" ? (
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="flex items-center justify-between py-4 text-sm font-medium text-white/80 transition hover:text-white"
                  >
                    {item.name}

                    <FaArrowRight
                      size={11}
                      className="text-white/40"
                    />
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-white/80 transition hover:text-white"
                    >
                      {item.name}

                      <FaChevronDown
                        size={12}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.name
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* MOBILE SUBMENU */}

                    <div
                      className={`grid transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "grid-rows-[1fr] pb-4 opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={closeMobileMenu}
                            tabIndex={
                              activeDropdown === item.name ? 0 : -1
                            }
                            className="flex items-center justify-between py-3 pl-4 text-[13px] text-white/55 transition hover:text-white"
                          >
                            {subItem.name}

                            <FaArrowRight
                              size={10}
                              className="text-white/30"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE CTA */}

          <div className="mt-6 flex flex-col gap-3">
            <Link
              href="/request-a-quote/"
              onClick={closeMobileMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-white/80"
            >
              Request a Quote
              <FaArrowRight size={12} />
            </Link>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="flex items-center justify-center rounded-full border border-white/20 px-5 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
            >
              WhatsApp Inquiry
            </Link>
          </div>

          {/* SOCIAL LINKS */}

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Connect With Us
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://www.instagram.com/nordvia.exports/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 transition hover:text-white"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="https://facebook.com/nordviaexports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 transition hover:text-white"
              >
                <FaFacebookF size={19} />
              </a>

              <a
                href="https://www.linkedin.com/company/nordviaexports"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/60 transition hover:text-white"
              >
                <FaLinkedin size={19} />
              </a>

              <a
                href="mailto:nordvia.exports@gmail.com"
                aria-label="Email"
                className="text-white/60 transition hover:text-white"
              >
                <FaEnvelope size={19} />
              </a>
            </div>

            <p className="mt-6 text-[10px] text-white/30">
              © {new Date().getFullYear()} NORDVIA EXPORTS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
