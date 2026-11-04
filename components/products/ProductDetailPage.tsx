
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaLayerGroup,
  FaShoppingCart,
} from "react-icons/fa";
import { addQuoteItem } from "@/lib/quote";
import { products, type ProductInfo } from "./productData";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  product: ProductInfo;
};

export default function ProductDetailPage({ product }: Props) {
  const pageRef = useRef<HTMLElement>(null);

  const [addedToQuote, setAddedToQuote] = useState(false);

  const handleAddToQuote = () => {
    addQuoteItem({
      id: product.slug,
      name: product.name,
      code: String(product.number),
      category: product.name,
    });

    setAddedToQuote(true);

    window.setTimeout(() => {
      setAddedToQuote(false);
    }, 2500);
  };

  const currentIndex = products.findIndex(
    (item) => item.slug === product.slug
  );

  const previousProduct =
    products[(currentIndex - 1 + products.length) % products.length];

  const nextProduct = products[(currentIndex + 1) % products.length];

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
        ".product-feature",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-feature-grid",
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
    <main ref={pageRef} className="overflow-hidden bg-[#090909] text-white">

      {/* HERO - BLACK */}
      <section className="relative flex min-h-[600px] items-end overflow-hidden border-b border-white/10 bg-[#090909] pt-32 sm:min-h-[680px] lg:min-h-[760px]">
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/75 to-[#090909]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28">
          <Link
            href="/products"
            className="product-hero-content mb-10 inline-flex cursor-pointer items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 transition hover:text-white sm:mb-12"
          >
            <FaArrowLeft />
            All Products
          </Link>

          <div className="max-w-4xl">
            <p className="product-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/55 sm:text-[11px] sm:tracking-[0.3em]">
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

            <div className="product-hero-content mt-9 flex flex-wrap gap-3 sm:gap-4">
              <button
                type="button"
                onClick={handleAddToQuote}
                className="group inline-flex cursor-pointer items-center gap-4 border border-white/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white/10 sm:px-7"
              >
                {addedToQuote ? "Added to Quote List" : "Add to Quote List"}

                {addedToQuote ? (
                  <FaCheck />
                ) : (
                  <FaShoppingCart className="transition-transform duration-300 group-hover:scale-110" />
                )}
              </button>

              <Link
                href={`/request-a-quote?product=${product.slug}`}
                className="group inline-flex cursor-pointer items-center gap-4 bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white/85 sm:px-7"
              >
                Inquire About This Product
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex cursor-pointer items-center gap-3 border border-white/25 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:border-white hover:bg-white/5 sm:px-7"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="product-hero-content mt-16 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.17em] text-white/40 sm:text-[10px]">
            <span>NORDVIA EXPORTS</span>
            <span>Custom Apparel Development</span>
            <span>Product {product.number} / 05</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW - WHITE */}
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

      {/* FEATURES - BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="product-reveal mb-12 max-w-2xl sm:mb-14">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
              02 / Product Possibilities
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Explore the details.
            </h2>

            <p className="mt-6 text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              Product details can be discussed and adapted to your
              intended design, market, and specifications.
            </p>
          </div>

          <div className="product-feature-grid grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div
                key={feature}
                className="product-feature flex min-h-[125px] items-start gap-5 bg-[#101010] p-6 sm:min-h-[145px] sm:p-8"
              >
                <span className="pt-1 text-[10px] tracking-[0.18em] text-white/35">
                  0{index + 1}
                </span>

                <p className="text-[13px] leading-7 text-white/75 sm:text-[14px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION - WHITE */}
      <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">
              03 / Make It Yours
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Customization
              <br />
              <span className="text-black/30">possibilities.</span>
            </h2>

            <p className="mt-7 max-w-lg text-[14px] leading-8 text-black/60 sm:text-[15px]">
              Your brand identity should carry through every detail.
              Discuss your preferred materials, colors, artwork,
              labels, and finishing requirements with us.
            </p>

            <Link
              href={`/request-a-quote?product=${product.slug}`}
              className="group mt-9 inline-flex cursor-pointer items-center gap-4 border-b border-black/25 pb-3 text-[10px] font-bold uppercase tracking-[0.16em] transition hover:border-black"
            >
              Discuss Customization
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="product-reveal border border-black/10 bg-[#F7F7F5] p-6 sm:p-9 lg:p-10">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
              Possible Custom Details
            </p>

            <ul className="space-y-0">
              {product.customization.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-black/10 py-5 text-[13px] text-black/70 last:border-0 sm:text-[14px]"
                >
                  <FaCheck className="shrink-0 text-[11px] text-black/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS - BLACK */}
      <section className="border-y border-white/10 bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40">
              04 / Before Production
            </p>

            <h2 className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Details worth discussing.
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-8 text-white/50 sm:text-[15px]">
              A clear product brief helps us understand your
              expectations and discuss suitable manufacturing
              possibilities.
            </p>
          </div>

          <div className="product-reveal">
            <ul className="space-y-0">
              {product.considerations.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center gap-6 border-b border-white/10 py-6"
                >
                  <span className="text-[10px] tracking-[0.18em] text-white/35">
                    0{index + 1}
                  </span>

                  <span className="text-[13px] leading-6 text-white/75 sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[11px] leading-6 text-white/40 sm:text-[12px]">
              Minimum quantities, material availability, sampling,
              production timelines, and delivery arrangements are
              confirmed individually for each project.
            </p>
          </div>
        </div>
      </section>

      {/* INQUIRY CTA - WHITE */}
      <section className="bg-[#F4F3EF] px-5 py-24 text-[#111111] sm:px-8 sm:py-32 lg:px-16">
        <div className="product-reveal mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.24em] text-black/45">
            Let's Discuss Your Product
          </p>

          <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.06em]">
            Have a design
            <br />
            <span className="text-black/30">in mind?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[14px] leading-8 text-black/55 sm:text-[15px]">
            Share your requirements, reference images, or product
            specifications. Let's start a conversation about your
            next collection.
          </p>

          <Link
            href={`/request-a-quote?product=${product.slug}`}
            className="group mt-10 inline-flex cursor-pointer items-center gap-5 bg-black px-8 py-5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-black/80"
          >
            Request A Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* PREVIOUS / NEXT - BLACK */}
      <section className="border-t border-white/10 bg-[#090909] text-white">
        <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2">
          <Link
            href={`/products/${previousProduct.slug}`}
            className="group border-b border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.04] sm:border-b-0 sm:border-r sm:p-10 lg:p-14"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
              <FaArrowLeft className="mr-2 inline" />
              Previous Product
            </span>

            <p className="mt-5 text-[clamp(1.35rem,2.5vw,2rem)] font-semibold uppercase tracking-[-0.04em] transition-colors group-hover:text-white/60">
              {previousProduct.name}
            </p>
          </Link>

          <Link
            href={`/products/${nextProduct.slug}`}
            className="group p-7 text-left transition-colors duration-300 hover:bg-white/[0.04] sm:p-10 sm:text-right lg:p-14"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Next Product
              <FaArrowRight className="ml-2 inline" />
            </span>

            <p className="mt-5 text-[clamp(1.35rem,2.5vw,2rem)] font-semibold uppercase tracking-[-0.04em] transition-colors group-hover:text-white/60">
              {nextProduct.name}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
