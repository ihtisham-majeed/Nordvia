
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaCheck,
  FaLayerGroup,
  FaPalette,
  FaTags,
  FaRulerCombined,
} from "react-icons/fa";

import { products } from "@/components/products/productData";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const customization = [
  {
    icon: FaLayerGroup,
    title: "Fabric & Materials",
    description:
      "Discuss fabric types, weights, textures, and material options according to your product requirements.",
  },
  {
    icon: FaPalette,
    title: "Colors & Finishes",
    description:
      "Explore color options, garment finishes, and details that support your collection's visual direction.",
  },
  {
    icon: FaTags,
    title: "Branding & Labels",
    description:
      "Discuss private labels, woven labels, printed branding, embroidery, and other identity details.",
  },
  {
    icon: FaRulerCombined,
    title: "Fit & Specifications",
    description:
      "Share size charts, measurements, tech packs, and construction references for project discussions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Product",
    description:
      "Tell us which category and styles you are interested in.",
  },
  {
    number: "02",
    title: "Share Requirements",
    description:
      "Send your references, specifications, quantities, and branding details.",
  },
  {
    number: "03",
    title: "Discuss Options",
    description:
      "We discuss feasibility and potential manufacturing arrangements with our partners.",
  },
  {
    number: "04",
    title: "Request A Quote",
    description:
      "Review the proposed details and discuss the next steps for your project.",
  },
];

export default function ProductsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".products-hero-content",
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray<HTMLElement>(".products-reveal").forEach((item) => {
        gsap.fromTo(
          item,
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".product-card",
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".customization-card",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".customization-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".product-step",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-steps-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, page);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="overflow-hidden bg-[#090909] text-white">
      {/* HERO — BLACK */}
      <section className="relative flex min-h-[650px] items-end overflow-hidden border-b border-white/10 pt-32 sm:min-h-[730px] lg:min-h-[790px]">
        <div className="absolute inset-0">
          <Image
            src="/image/hoodie_1.webp"
            alt="Custom apparel manufacturer product collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/75 to-[#090909]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-4xl">
            <p className="products-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/55 sm:text-xs">
              <span className="h-px w-9 bg-white/60" />
              Our Product Categories
            </p>

            <h1 className="products-hero-content text-[clamp(3.5rem,8vw,7rem)] font-semibold uppercase leading-[0.94] tracking-[-0.065em]">
              Apparel
              <br />
              For Your
              <br />
              <span className="text-white/60">Next Collection.</span>
            </h1>

            <p className="products-hero-content mt-8 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8">
              Explore apparel categories and customization possibilities
              for your brand. From everyday essentials to statement
              outerwear, let&apos;s discuss the products you want to develop.
            </p>

            <div className="products-hero-content mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="#product-categories"
                className="group inline-flex items-center gap-4 bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white/85 sm:px-7"
              >
                Explore Categories
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/request-a-quote"
                className="inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/5 sm:px-7"
              >
                Request A Quote
              </Link>
            </div>
          </div>

          <div className="products-hero-content mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.18em] text-white/60 sm:text-[10px] sm:tracking-[0.2em]">
            {products.map((product) => (
              <span key={product.slug}>{product.shortName}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO — WHITE */}
      <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="products-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
              01 / Explore Our Range
            </p>

            <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
              Find the right
              <br />
              <span className="text-black/70">starting point.</span>
            </h2>
          </div>

          <p className="products-reveal max-w-2xl text-[14px] leading-8 text-black/60 sm:text-[16px]">
            Every collection starts with a product idea. Explore the
            categories below, then tell us about your preferred style,
            materials, branding, and order requirements. We will discuss
            the possibilities based on your project and manufacturing
            partner availability.
          </p>
        </div>
      </section>

    
      {/* PRODUCT CATEGORIES — BLACK */}
      <section
        id="product-categories"
        className="scroll-mt-20 bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="products-reveal mb-10 flex flex-col justify-between gap-5 sm:mb-12 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                02 / Product Range
              </p>

              <h2 className="text-[clamp(2.4rem,4.5vw,4rem)] font-semibold uppercase leading-[1] tracking-[-0.055em]">
                Explore the
                <br />
                <span className="text-white/60">categories.</span>
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-7 text-white/60 sm:text-[14px]">
              Explore apparel categories and discover styles that could
              become part of your next collection.
            </p>
          </div>

          <div className="products-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                id={product.slug}
                key={product.slug}
                className="product-card group min-w-0 scroll-mt-28 overflow-hidden border border-white/10 bg-[#111111] transition-colors duration-500 hover:border-white/30"
              >
                {/* PRODUCT IMAGE */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative block aspect-[1.15/1] overflow-hidden bg-[#171717] sm:aspect-[1.12/1]"
                >
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                  <span className="absolute left-4 top-4 border border-white/30 bg-black/30 px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.18em] text-white backdrop-blur-sm">
                    {product.number} / CATEGORY
                  </span>

                  <span className="absolute bottom-4 right-4 text-[8px] font-medium uppercase tracking-[0.14em] text-white/75">
                    Design Concept
                  </span>

                  <span className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-black/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <FaArrowRight className="-rotate-45 text-xs transition-transform duration-300 group-hover:rotate-0" />
                  </span>
                </Link>

                {/* PRODUCT INFORMATION */}
                <div className="p-5 sm:p-5 lg:p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    {product.eyebrow}
                  </p>

                  <h3 className="mt-2 text-[clamp(1.15rem,1.6vw,1.4rem)] font-semibold uppercase leading-tight tracking-[-0.04em]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-white/60 sm:text-[13px]">
                    {product.description}
                  </p>

                  {/* STYLE TAGS */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="border border-white/10 px-2.5 py-1.5 text-[9px] leading-4 text-white/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <Link
                      href={`/products/${product.slug}`}
                      className="group/link inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-white/75 transition hover:text-white"
                    >
                      Explore Category
                      <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-7 text-[14px] leading-6 text-white/60">
            Product imagery is illustrative and represents design concepts.
            Final products, materials, and specifications are subject to
            development and manufacturing confirmation.
          </p>
        </div>
      </section>


      {/* CUSTOMIZATION — WHITE */}
      <section
        id="custom-apparel"
        className="scroll-mt-20 border-y border-black/10 bg-[#F4F3EF] px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="products-reveal mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
                03 / Make It Your Own
              </p>

              <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
                Your product.
                <br />
                <span className="text-black/70">Your identity.</span>
              </h2>
            </div>

            <p className="max-w-xl text-[14px] leading-8 text-black/60 sm:text-[16px]">
              The details help make a product your own. Share your preferred
              specifications and branding direction so we can discuss
              suitable customization options.
            </p>
          </div>

          <div className="customization-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {customization.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="customization-card border border-black/10 bg-white p-7 transition-colors duration-300 hover:border-black/30 sm:p-8"
                >
                  <span className="text-[10px] tracking-[0.2em] text-black/70">
                    0{index + 1}
                  </span>

                  <Icon className="mt-10 text-2xl text-black/65" />

                  <h3 className="mt-7 text-[16px] font-semibold uppercase tracking-[-0.02em] sm:text-[17px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-black/70 sm:text-[14px]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="products-reveal mt-8 flex flex-col justify-between gap-5 border border-black/10 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-black/70">
                Your Brand Identity
              </p>

              <h3 className="mt-3 text-[clamp(1.3rem,2vw,1.7rem)] font-semibold uppercase tracking-[-0.04em]">
                Private Label & Custom Branding
              </h3>

              <p className="mt-2 max-w-xl text-[14px] leading-6 text-black/70">
                Discuss woven labels, neck labels, embroidery, printed
                branding, custom trims, and packaging possibilities.
              </p>
            </div>

            <Link
              href="/services/private-label"
              className="group inline-flex shrink-0 items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black/75 transition hover:text-black"
            >
              Explore Private Label
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <p className="mt-6 text-[10px] leading-6 text-black/70">
            Customization options depend on the selected product, materials,
            specifications, order quantity, and manufacturing feasibility.
          </p>
        </div>
      </section>

      {/* HOW TO START — BLACK */}
      <section className="bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="products-reveal mb-14 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              04 / Start Your Project
            </p>

            <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
              From product idea
              <br />
              <span className="text-white/60">to inquiry.</span>
            </h2>

            <p className="mt-6 text-[14px] leading-7 text-white/60 sm:text-[16px]">
              A clear starting brief helps us understand your requirements
              and discuss the next steps.
            </p>
          </div>

          <div className="products-steps-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="product-step border border-white/10 p-7 transition-colors duration-300 hover:border-white/35 sm:p-8"
              >
                <span className="text-[11px] tracking-[0.2em] text-white/60">
                  {step.number}
                </span>

                <div className="my-8 h-px w-full bg-white/10" />

                <h3 className="text-[15px] font-semibold uppercase tracking-[-0.02em] sm:text-[16px]">
                  {step.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/60 sm:text-[14px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="products-reveal mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-white/60 sm:text-[11px]">
            <FaCheck className="shrink-0 text-white/60" />
            <span>
              Tech packs, reference images, and initial product descriptions
              are welcome.
            </span>
          </div>
        </div>
      </section>

      {/* CTA — WHITE */}
      <section className="relative overflow-hidden border-t border-black/10 bg-white px-5 py-24 text-[#111111] sm:px-8 sm:py-32 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F0F0F0] via-white to-white" />

        <div className="products-reveal relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
            Let&apos;s Discuss Your Requirements
          </p>

          <h2 className="text-[clamp(2.7rem,6vw,5.5rem)] font-semibold uppercase leading-[0.98] tracking-[-0.06em]">
            Ready to develop
            <br />
            <span className="text-black/70">your collection?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[14px] leading-7 text-black/70 sm:text-[16px] sm:leading-8">
            Tell us what you want to make. Share your product category,
            specifications, and project requirements to begin the
            conversation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/request-a-quote"
              className="group inline-flex items-center gap-5 bg-[#090909] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black/80"
            >
              Request A Quote
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources/size-guide"
              className="inline-flex items-center border border-black/20 px-8 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:border-black/50"
            >
              View Apparel Size Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
