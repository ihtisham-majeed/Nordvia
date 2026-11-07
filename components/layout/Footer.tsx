
"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedin,
  FaArrowRight,
  FaArrowUp,
  FaSlidersH,
  FaCookieBite,
} from "react-icons/fa";

const phoneNumber = "923248548680";
const message = "Hi! I want to check your catalog.";

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Nordvia", href: "/about" },
  { label: "Our Products", href: "/products" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/contact" },
  { label: "Terms & Conditions", href: "/terms" },
];

const products = [
  { label: "Winter Jackets", href: "/products/jackets" },
  { label: "Hoodies & Sweatshirts", href: "/products/hoodies" },
  { label: "Sportswear & Tracksuits", href: "/products/tracksuits" },
  { label: "Joggers & Sweatpants", href: "/products/joggers" },
  { label: "Custom Apparel", href: "/products#custom-apparel" },
  { label: "Size Guide", href: "/resources/size-guide" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/nordvia.exports",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/nordviaexports",
    icon: FaFacebookF,
  },
  {
    label: "WhatsApp",
    href: whatsappUrl,
    icon: FaWhatsapp,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nordviaexports",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function openCookieSettings() {
    window.dispatchEvent(
      new Event("nordvia:open-cookie-settings")
    );
  }

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] text-white">

      {/* Top CTA */}
      {/* <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        <div className="flex flex-col justify-between gap-9 border-b border-white/10 pb-16 lg:flex-row lg:items-end">

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Let's build something
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Have a collection
              <br />
              <span className="text-neutral-500">
                in mind?
              </span>
            </h2>
          </div>

          <Link
            href="/request-a-quote"
            className="group inline-flex cursor-pointer items-center justify-between gap-10 bg-white px-6 py-5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-neutral-200"
          >
            Start Your Project

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>
      </div> */}

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:gap-12 lg:px-12 lg:py-20">

        {/* Brand */}
        <div className="flex flex-col items-start">

          <Link href="/" className="inline-block cursor-pointer">
            <span className="text-3xl font-bold tracking-[0.18em]">
              NORDVIA
            </span>

            <span className="mt-1 block text-[9px] font-medium tracking-[0.55em] text-neutral-500">
              EXPORTS
            </span>
          </Link>

          <p className="mt-7 max-w-xs text-sm leading-7 text-neutral-400">
            Apparel manufacturing and export solutions from Sialkot,
            Pakistan. Connecting clothing ideas with manufacturing
            possibilities for brands and businesses worldwide.
          </p>

          {/* Social links */}
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center border border-white/15 text-neutral-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>

        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
            Explore
          </h3>

          <ul className="space-y-4">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
            Our Products
          </h3>

          <ul className="space-y-4">
            {products.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-sm text-neutral-500 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-7 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
            Get in Touch
          </h3>

          <p className="mb-6 max-w-xs text-sm leading-7 text-neutral-400">
            Have a manufacturing inquiry or want to explore our apparel
            catalog? Connect with our team.
          </p>

          <div className="space-y-5 text-sm">

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-neutral-600">
                Email
              </p>

              <a
                href="mailto:nordvia.exports@gmail.com"
                className="break-all text-neutral-300 transition-colors hover:text-white"
              >
                nordvia.exports@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-neutral-600">
                WhatsApp / Phone
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-neutral-300 transition-colors hover:text-white"
              >
                +92 324 8548680
              </a>
            </div>

            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.17em] text-neutral-600">
                Location
              </p>

              <p className="text-neutral-300">
                Sialkot, Pakistan
              </p>
            </div>

          </div>

          <Link
            href="/contact"
            className="group mt-8 inline-flex cursor-pointer items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] text-neutral-400 transition-colors hover:text-white"
          >
            Contact Us

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <p className="text-[10px] tracking-wide text-neutral-600">
            © {currentYear} NORDVIA EXPORTS. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">

            <Link
              href="/privacy-policy"
              className="cursor-pointer text-[10px] text-neutral-600 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/cookie-policy"
              className="cursor-pointer text-[10px] text-neutral-600 transition-colors hover:text-white"
            >
              Cookie Policy
            </Link>

            {/* Cookie Settings */}
            <button
              type="button"
              onClick={openCookieSettings}
              className="inline-flex cursor-pointer items-center gap-2 text-[10px] text-neutral-600 transition-colors hover:text-white"
            >
              <FaSlidersH size={11} />
              Cookie Settings
            </button>

            {/* Back to top */}
            <button
              type="button"
              aria-label="Back to top"
              onClick={backToTop}
              className="flex h-9 w-9 cursor-pointer items-center justify-center border border-white/15 text-neutral-400 transition-all hover:border-white hover:bg-white hover:text-black"
            >
              <FaArrowUp size={13} />
            </button>

          </div>

        </div>
      </div>

    </footer>
  );
}
