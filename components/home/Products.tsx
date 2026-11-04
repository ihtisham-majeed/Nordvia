
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";
import { products } from "@/components/products/productData";

gsap.registerPlugin(ScrollTrigger);

const categoryDetails: Record<
  string,
  {
    tag: string;
    subtitle: string;
    details: string;
  }
> = {
  hoodies: {
    tag: "STREETWEAR",
    subtitle: "Hoodies & Sweatshirts",
    details:
      "Heavyweight fleece, custom silhouettes, refined finishes and private-label branding.",
  },
  tracksuits: {
    tag: "ACTIVEWEAR",
    subtitle: "Tracksuits & Sportswear",
    details:
      "Custom sportswear, coordinated sets and performance-inspired apparel for your brand.",
  },
  jackets: {
    tag: "OUTERWEAR",
    subtitle: "Bomber & Casual Jackets",
    details:
      "Versatile outerwear with custom materials, functional details and distinctive styling.",
  },
  coats: {
    tag: "WINTERWEAR",
    subtitle: "Cold Weather Outerwear",
    details:
      "Cold-weather styles developed with considered construction, materials and branding.",
  },
  joggers: {
    tag: "BOTTOMS",
    subtitle: "Joggers & Sweatpants",
    details:
      "Comfortable and stylish joggers and sweatpants for casualwear and active collections.",
  },
};

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.from(".products-heading", {
        y: 35,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".product-card", {
        y: 55,
        opacity: 0,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".products-grid",
          start: "top 82%",
          once: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F3EF] py-20 text-[#171717] sm:py-28 lg:py-32"
    >
      {/* BACKGROUND DETAIL */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-black/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="products-heading mb-10 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#171717]/70" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#171717]/55 sm:text-xs">
                Our Product Range
              </span>
            </div>

            <h2 className="text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#171717]">
              What We
              <span className="block text-[#171717]/40">
                Manufacture.
              </span>
            </h2>
          </div>

          <div className="max-w-md md:pb-1">
            <p className="text-sm leading-7 text-[#171717]/60 sm:text-base sm:leading-8">
              Apparel solutions developed around your brand. Explore our
              product categories and create collections with custom styles,
              materials, colors and private labeling.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition-colors hover:text-[#171717]/50"
            >
              Discuss Your Requirements
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="products-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {products.map((product, index) => {
            const details = categoryDetails[product.slug];

            if (!details) return null;

            return (
              <article
                key={product.slug}
                className="
                  product-card group relative isolate
                  h-[390px] overflow-hidden
                  border border-black/[0.08]
                  bg-[#deddd8] sm:h-[430px]
                  lg:h-[480px]
                "
              >
                {/* CATEGORY IMAGE */}
                <Image
                  src={product.image}
                  alt={`${product.name} category`}
                  fill
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    25vw
                  "
                  className="
                    object-cover object-center
                    transition-transform duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-105
                  "
                />

                {/* IMAGE OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black via-black/35
                    to-black/5
                    opacity-90 transition-opacity
                    duration-500 group-hover:opacity-100
                  "
                />

                {/* TOP DETAILS */}
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-white/75">
                    {details.tag}
                  </span>

                  <span className="text-xs tabular-nums text-white/65">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* BOTTOM CONTENT */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col p-5 sm:p-6">
                  <div className="mb-3 h-px w-8 bg-white/70 transition-all duration-500 group-hover:w-14" />

                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-[26px]">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/70">
                    {details.subtitle}
                  </p>

                  {/* DESCRIPTION */}
                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="pt-3 text-xs leading-6 text-white/70 sm:text-sm">
                        {details.details}
                      </p>
                    </div>
                  </div>

                  {/* CATEGORY PAGE LINK */}
                  <Link
                    href={`/products/${product.slug}`}
                    aria-label={`Explore ${product.name}`}
                    className="
                      mt-5 flex items-center justify-between
                      border-t border-white/25 pt-4
                      text-[10px] font-semibold uppercase
                      tracking-[0.18em] text-white/90
                      transition-colors hover:text-white
                    "
                  >
                    <span>Explore Collection</span>

                    <span
                      className="
                        flex h-8 w-8 items-center justify-center
                        rounded-full border border-white/40
                        transition-all duration-300
                        group-hover:border-white
                        group-hover:bg-white group-hover:text-black
                      "
                    >
                      <FaArrowRight className="text-[10px]" />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div
          className="
            mt-9 flex flex-col gap-3
            border-t border-black/10 pt-6
            sm:flex-row sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs leading-6 text-[#171717]/45">
            Custom styles. Flexible materials. Your brand identity.
          </p>

          <Link
            href="/products"
            className="
              group inline-flex items-center gap-3
              text-xs font-semibold uppercase
              tracking-[0.16em] text-[#171717]/75
              transition-colors hover:text-black
            "
          >
            Explore All Products
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
