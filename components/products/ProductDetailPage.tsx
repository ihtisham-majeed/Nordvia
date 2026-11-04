
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaLayerGroup,
  FaShoppingCart,
  FaRulerCombined,
  FaTimes,
} from "react-icons/fa";

import { addQuoteItem } from "@/lib/quote";
import { products, type ProductInfo } from "./productData";
import { getProductStyles, type ProductStyle } from "./productCatalogue";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  product: ProductInfo;
};

export default function ProductDetailPage({ product }: Props) {
  const pageRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const [selectedStyle, setSelectedStyle] = useState<ProductStyle | null>(null);
  const [addedStyleId, setAddedStyleId] = useState<string | null>(null);

  const styles = getProductStyles(product.slug);

  const currentIndex = products.findIndex(
    (item) => item.slug === product.slug
  );

  const previousProduct =
    products[(currentIndex - 1 + products.length) % products.length];

  const nextProduct =
    products[(currentIndex + 1) % products.length];

  const handleRequestThis = (style: ProductStyle) => {
    addQuoteItem({
      id: style.id,
      name: style.name,
      code: style.code,
      category: product.name,
    });

    setAddedStyleId(style.id);

    router.push(
      `/request-a-quote?product=${product.slug}`
    );
  };

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-hero-content",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.utils
        .toArray<HTMLElement>(".product-reveal")
        .forEach((element) => {
          gsap.fromTo(
            element,
            { y: 30, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            }
          );
        });

      gsap.fromTo(
        ".individual-product-card",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".individual-products-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, page);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [product.slug]);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#090909] text-white"
    >
      {/* HERO — BLACK */}
      <section className="relative flex min-h-[600px] items-end overflow-hidden border-b border-white/10 bg-[#090909] pt-32 sm:min-h-[680px] lg:min-h-[740px]">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/75 to-[#090909]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28">
          <Link
            href="/products"
            className="product-hero-content mb-10 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
          >
            <FaArrowLeft />
            All Products
          </Link>

          <div className="max-w-4xl">
            <p className="product-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 sm:text-[11px]">
              <span className="h-px w-9 bg-white/60" />
              {product.number} / {product.eyebrow}
            </p>

            <h1 className="product-hero-content text-[clamp(2.8rem,7vw,6.5rem)] font-semibold uppercase leading-[0.96] tracking-[-0.06em]">
              {product.name}
            </h1>

            <p className="product-hero-content mt-6 text-[16px] font-medium text-white/75 sm:text-[19px] lg:text-[21px]">
              {product.tagline}
            </p>

            <p className="product-hero-content mt-4 max-w-xl text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              {product.description}
            </p>

            <div className="product-hero-content mt-9 flex flex-wrap gap-3">
              <Link
                href="#individual-products"
                className="inline-flex items-center gap-4 bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white/85"
              >
                Explore Styles
                <FaArrowRight />
              </Link>

              <Link
                href={`/request-a-quote?product=${product.slug}`}
                className="inline-flex items-center gap-4 border border-white/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white/10"
              >
                Request A Quote
                <FaShoppingCart />
              </Link>
            </div>
          </div>

          <div className="product-hero-content mt-16 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.17em] text-white/40 sm:text-[10px]">
            <span>NORDVIA EXPORTS</span>
            <span>Custom Apparel Development</span>
            <span>Category {product.number} / 05</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW — WHITE */}
      <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">
              01 / Product Overview
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Made around
              <br />
              <span className="text-black/30">your vision.</span>
            </h2>
          </div>

          <div className="product-reveal flex flex-col justify-center">
            <p className="text-[16px] leading-[1.8] text-black/70 sm:text-[18px] lg:text-[20px]">
              {product.overview}
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-black/10 pt-7">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-black/15">
                <FaLayerGroup className="text-lg text-black/65" />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em]">
                  Customization Discussions
                </p>
                <p className="mt-1 text-[12px] leading-5 text-black/45">
                  Options depend on product and order requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIVIDUAL PRODUCTS — BLACK */}
      <section
        id="individual-products"
        className="scroll-mt-20 border-y border-white/10 bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="product-reveal mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
                02 / Available Styles
              </p>

              <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
                Explore the
                <br />
                <span className="text-white/35">individual styles.</span>
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-7 text-white/50 sm:text-[14px]">
              Choose the garment styles you are interested in. Add
              individual products to your quote list and share your
              requirements with our team.
            </p>
          </div>

          <div className="individual-products-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {styles.map((style, index) => (
              <article
                key={style.id}
                className="individual-product-card group min-w-0 overflow-hidden border border-white/10 bg-[#111111] transition-colors duration-300 hover:border-white/30"
              >
                {/* GARMENT IMAGE */}
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#171717]">
                  <Image
                    src={style.image}
                    alt={style.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.04] sm:p-7"
                  />

                  <span className="absolute left-4 top-4 border border-white/20 bg-black/60 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                    {style.code}
                  </span>

                  <span className="absolute bottom-4 right-4 bg-black/65 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.15em] text-white/70 backdrop-blur-sm">
                    Design Concept
                  </span>
                </div>

                {/* PRODUCT DETAILS */}
                <div className="p-5 sm:p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    {product.shortName} / Style {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-[clamp(1.1rem,1.7vw,1.4rem)] font-semibold uppercase leading-tight tracking-[-0.035em]">
                    {style.name}
                  </h3>

                  <p className="mt-3 min-h-[60px] text-[12px] leading-6 text-white/50 sm:text-[13px]">
                    {style.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedStyle(style)}
                      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 border border-white/25 px-3 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-white transition hover:border-white hover:bg-white/10 sm:text-[10px]"
                    >
                      <FaRulerCombined />
                      Size Chart
                    </button>

                    <button
                      type="button"
                      onClick={() => handleRequestThis(style)}
                      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 bg-white px-3 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-black transition hover:bg-white/85 sm:text-[10px]"
                    >
                      {addedStyleId === style.id ? (
                        <>
                          <FaCheck />
                          Added
                        </>
                      ) : (
                        <>
                          Request This
                          <FaArrowRight />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-[16px] leading-6 text-white/35">
            Product imagery is illustrative and represents design concepts.
            Final garment design, measurements, materials and specifications
            are subject to confirmation.
          </p>
        </div>
      </section>

      {/* FEATURES — WHITE */}
      <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="product-reveal mb-12 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">
              03 / Product Possibilities
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Explore the details.
            </h2>

            <p className="mt-6 text-[14px] leading-7 text-black/55 sm:text-[15px] sm:leading-8">
              Product details can be discussed and adapted to your
              intended design, market and specifications.
            </p>
          </div>

          <div className="grid gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div
                key={feature}
                className="flex min-h-[125px] items-start gap-5 bg-white p-6 sm:min-h-[145px] sm:p-8"
              >
                <span className="pt-1 text-[10px] tracking-[0.18em] text-black/35">
                  0{index + 1}
                </span>

                <p className="text-[13px] leading-7 text-black/70 sm:text-[14px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION — BLACK */}
      <section className="bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
              04 / Make It Yours
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Customization
              <br />
              <span className="text-white/35">possibilities.</span>
            </h2>

            <p className="mt-7 max-w-lg text-[14px] leading-8 text-white/55 sm:text-[15px]">
              Discuss your preferred materials, colors, artwork,
              labels and finishing requirements with us.
            </p>

            <Link
              href={`/request-a-quote?product=${product.slug}`}
              className="group mt-9 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] transition hover:border-white"
            >
              Discuss Customization
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="product-reveal border border-white/10 bg-[#171717] p-6 sm:p-9 lg:p-10">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Possible Custom Details
            </p>

            <ul>
              {product.customization.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 py-5 text-[13px] text-white/70 last:border-0 sm:text-[14px]"
                >
                  <FaCheck className="shrink-0 text-[11px] text-white/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS — WHITE */}
      <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">
              05 / Before Production
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Details worth discussing.
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-8 text-black/55 sm:text-[15px]">
              A clear product brief helps us understand your
              expectations and discuss suitable possibilities.
            </p>
          </div>

          <div className="product-reveal">
            <ul>
              {product.considerations.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-6 border-b border-black/10 py-6"
                >
                  <span className="text-[10px] tracking-[0.18em] text-black/35">
                    0{index + 1}
                  </span>

                  <span className="text-[13px] leading-6 text-black/70 sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[11px] leading-6 text-black/45 sm:text-[12px]">
              Minimum quantities, material availability, sampling,
              production timelines and delivery arrangements are
              confirmed individually for each project.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — BLACK */}
      <section className="bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-16">
        <div className="product-reveal mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
            Let's Discuss Your Product
          </p>

          <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.06em]">
            Have a design
            <br />
            <span className="text-white/35">in mind?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[14px] leading-8 text-white/55 sm:text-[15px]">
            Share your requirements, reference images or product
            specifications. Let's discuss your next collection.
          </p>

          <Link
            href={`/request-a-quote?product=${product.slug}`}
            className="group mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white/85"
          >
            Request A Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* PREVIOUS / NEXT — BLACK */}
      <section className="border-t border-white/10 bg-[#090909] text-white">
        <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2">
          <Link
            href={`/products/${previousProduct.slug}`}
            className="group border-b border-white/10 p-7 transition-colors hover:bg-white/[0.04] sm:border-b-0 sm:border-r sm:p-10 lg:p-14"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
              <FaArrowLeft className="mr-2 inline" />
              Previous Category
            </span>

            <p className="mt-5 text-[clamp(1.35rem,2.5vw,2rem)] font-semibold uppercase tracking-[-0.04em] transition-colors group-hover:text-white/60">
              {previousProduct.name}
            </p>
          </Link>

          <Link
            href={`/products/${nextProduct.slug}`}
            className="group p-7 text-left transition-colors hover:bg-white/[0.04] sm:p-10 sm:text-right lg:p-14"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Next Category
              <FaArrowRight className="ml-2 inline" />
            </span>

            <p className="mt-5 text-[clamp(1.35rem,2.5vw,2rem)] font-semibold uppercase tracking-[-0.04em] transition-colors group-hover:text-white/60">
              {nextProduct.name}
            </p>
          </Link>
        </div>
      </section>

      {/* SIZE CHART MODAL */}
      {selectedStyle && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedStyle(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="size-chart-title"
            className="relative w-full max-w-lg border border-white/15 bg-[#111111] p-6 text-white shadow-2xl sm:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close size chart"
              onClick={() => setSelectedStyle(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/20 text-white/65 transition hover:border-white hover:text-white"
            >
              <FaTimes />
            </button>

            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
              {selectedStyle.code} / Size Information
            </p>

            <h2
              id="size-chart-title"
              className="mt-4 max-w-sm pr-8 text-[clamp(1.5rem,4vw,2rem)] font-semibold uppercase leading-tight tracking-[-0.04em]"
            >
              {selectedStyle.name}
            </h2>

            <div className="mt-7 border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <FaRulerCombined className="text-2xl text-white/65" />

              <h3 className="mt-5 text-[12px] font-semibold uppercase tracking-[0.14em]">
                Custom Size Specifications
              </h3>

              <p className="mt-3 text-[13px] leading-7 text-white/55">
                Size measurements for this garment are confirmed
                according to your target market, fit preference,
                measurement chart or approved technical pack.
              </p>

              <p className="mt-4 text-[11px] leading-6 text-white/40">
                No standard measurements are assumed. Share your
                required size specifications when requesting a quote.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleRequestThis(selectedStyle)}
              className="mt-6 flex w-full items-center justify-center gap-3 bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white/85"
            >
              Request This Product
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
