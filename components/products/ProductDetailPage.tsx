
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaLayerGroup,
} from "react-icons/fa";
import { products, type ProductInfo } from "./productData";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  product: ProductInfo;
};

export default function ProductDetailPage({ product }: Props) {
  const pageRef = useRef<HTMLElement>(null);

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
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#090909] text-white"
    >
      {/* HERO */}
      <section className="relative flex min-h-[650px] items-end overflow-hidden border-b border-white/10 pt-32 sm:min-h-[730px] lg:min-h-[780px]">
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
            className="product-hero-content mb-12 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
          >
            <FaArrowLeft />
            All Products
          </Link>

          <div className="max-w-4xl">
            <p className="product-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55 sm:text-xs">
              <span className="h-px w-9 bg-white/60" />
              {product.number} / {product.eyebrow}
            </p>

            <h1 className="product-hero-content text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
              {product.name}
            </h1>

            <p className="product-hero-content mt-6 text-lg font-medium text-white/75 sm:text-xl">
              {product.tagline}
            </p>

            <p className="product-hero-content mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              {product.description}
            </p>

            <div className="product-hero-content mt-9 flex flex-wrap gap-4">
              <Link
                href={`/request-a-quote?product=${product.slug}`}
                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
              >
                Inquire About This Product
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="product-hero-content mt-16 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
            <span>NORDVIA EXPORTS</span>
            <span>Custom Apparel Development</span>
            <span>Product {product.number} / 05</span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              01 / Product Overview
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Made around
              <br />
              your vision.
            </h2>
          </div>

          <div className="product-reveal flex flex-col justify-center">
            <p className="text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              {product.overview}
            </p>

            <div className="mt-9 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15">
                <FaLayerGroup className="text-lg text-white/65" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Customization Discussions
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Options depend on product and order requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="product-reveal mb-14 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              02 / Product Possibilities
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Explore the details.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
              Product details can be discussed and adapted to your
              intended design, market, and specifications.
            </p>
          </div>

          <div className="product-feature-grid grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {product.features.map((feature, index) => (
              <div
                key={feature}
                className="product-feature flex min-h-[130px] items-start gap-5 bg-[#101010] p-6 sm:p-8"
              >
                <span className="pt-1 text-[10px] tracking-[0.2em] text-white/35">
                  0{index + 1}
                </span>
                <p className="text-sm leading-7 text-white/75">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              03 / Make It Yours
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Customization
              <br />
              possibilities.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/50 sm:text-base">
              Your brand identity should carry through every detail.
              Discuss your preferred materials, colors, artwork,
              labels, and finishing requirements with us.
            </p>

            <Link
              href={`/request-a-quote?product=${product.slug}`}
              className="group mt-9 inline-flex items-center gap-4 border-b border-white/30 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:border-white"
            >
              Discuss Customization
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="product-reveal border border-white/10 p-7 sm:p-10">
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Possible Custom Details
            </p>

            <ul className="space-y-6">
              {product.customization.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 pb-5 text-sm text-white/75"
                >
                  <FaCheck className="shrink-0 text-xs text-white/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-24 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="product-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              04 / Before Production
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Details worth discussing.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/45">
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
                  <span className="text-[10px] tracking-[0.2em] text-white/35">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-white/75 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs leading-6 text-white/35">
              Minimum quantities, material availability, sampling,
              production timelines, and delivery arrangements are
              confirmed individually for each project.
            </p>
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="px-5 py-28 sm:px-8 sm:py-36 lg:px-16">
        <div className="product-reveal mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Let's Discuss Your Product
          </p>

          <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Have a design
            <br />
            <span className="text-white/35">in mind?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Share your requirements, reference images, or product
            specifications. Let's start a conversation about your
            next collection.
          </p>

          <Link
            href={`/request-a-quote?product=${product.slug}`}
            className="group mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
          >
            Request A Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* PREVIOUS / NEXT */}
      <section className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1440px] sm:grid-cols-2">
          <Link
            href={`/products/${previousProduct.slug}`}
            className="group border-b border-white/10 p-7 transition hover:bg-white/[0.03] sm:border-b-0 sm:border-r sm:p-10 lg:p-14"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
              <FaArrowLeft className="mr-2 inline" />
              Previous Product
            </span>
            <p className="mt-5 text-2xl font-semibold uppercase tracking-[-0.03em] transition group-hover:text-white/65">
              {previousProduct.name}
            </p>
          </Link>

          <Link
            href={`/products/${nextProduct.slug}`}
            className="group p-7 text-left transition hover:bg-white/[0.03] sm:p-10 sm:text-right lg:p-14"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
              Next Product
              <FaArrowRight className="ml-2 inline" />
            </span>
            <p className="mt-5 text-2xl font-semibold uppercase tracking-[-0.03em] transition group-hover:text-white/65">
              {nextProduct.name}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
