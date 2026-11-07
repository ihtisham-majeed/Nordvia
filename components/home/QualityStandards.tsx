
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
  FaRulerCombined,
  FaHandScissors,
  FaBoxOpen,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const standards = [
  {
    number: "01",
    title: "Material Selection",
    label: "FABRIC & FINISHING",
    description:
      "Choose materials according to your product requirements, including fabric composition, weight, texture, colors and finishing preferences.",
    image: "/quality/material-selection.webp",
    imageAlt: "Apparel fabric swatches and textile material selection",
    icon: FaLayerGroup,
    points: [
      "Fabric composition and weight",
      "Color and texture options",
      "Finishing requirements",
    ],
  },
  {
    number: "02",
    title: "Workmanship",
    label: "CONSTRUCTION DETAILS",
    description:
      "Define the construction details of your garments, from stitching and seams to embroidery, printing and finishing specifications.",
    image: "/quality/workmanship.webp",
    imageAlt: "Close-up of garment stitching and apparel construction",
    icon: FaHandScissors,
    points: [
      "Stitching and seam details",
      "Embroidery and printing",
      "Garment finishing",
    ],
  },
  {
    number: "03",
    title: "Order Verification",
    label: "SPECIFICATIONS & DETAILS",
    description:
      "Coordinate checks against the agreed order requirements, including garment measurements, sizing, quantities and product details.",
    image: "/quality/order-verification.webp",
    imageAlt: "Apparel garment measurement and size verification",
    icon: FaRulerCombined,
    points: [
      "Size and measurement details",
      "Order quantity verification",
      "Product specification review",
    ],
  },
  {
    number: "04",
    title: "Packaging & Dispatch",
    label: "ORDER PREPARATION",
    description:
      "Discuss packaging, labeling and shipping requirements to prepare your finished order for the agreed delivery arrangements.",
    image: "/quality/packaging-dispatch.webp",
    imageAlt: "Folded apparel prepared for packaging and dispatch",
    icon: FaBoxOpen,
    points: [
      "Packaging preferences",
      "Private-label requirements",
      "Shipping coordination",
    ],
  },
];

export default function QualityStandards() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll(".quality-intro"),
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll(".quality-card"),
        { y: 45, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.13,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".quality-grid"),
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll(".quality-bottom"),
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".quality-bottom"),
            start: "top 95%",
            once: true,
          },
        }
      );
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="quality-standards"
      className="relative overflow-hidden bg-white py-24 text-[#111111] sm:py-32 lg:py-36"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-neutral-100 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* INTRO */}
        <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:gap-20">

          <div className="quality-intro">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-black/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/50 sm:text-xs">
                Quality & Production Standards
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.6rem,5.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-[#111111]">
              Every Detail.
              <span className="block text-black/35">
                Carefully
              </span>
              <span className="block">Considered.</span>
            </h2>
          </div>

          <div className="quality-intro max-w-lg md:justify-self-end md:pb-2">
            <p className="text-[14px] leading-7 text-black/60 sm:text-[15px] sm:leading-8">
              Good apparel starts with clear specifications and attention
              to detail. We coordinate with manufacturing partners around
              your requirements, from material selection and construction
              to order preparation and dispatch.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-7 bg-black/50" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-black/45">
                Your Requirements. Our Focus.
              </span>
            </div>
          </div>
        </div>

        {/* TOP LABEL */}
        <div className="quality-intro mb-6 flex items-center justify-between border-b border-black/10 pb-5">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/50 sm:text-[10px]">
            Areas of Attention
          </span>

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/50 sm:text-[10px]">  
            04 / Key Areas
          </span>
        </div>

        {/* QUALITY GRID */}
        <div className="quality-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">

          {standards.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  quality-card group relative overflow-hidden
                  border border-black/10 bg-white
                  transition-all duration-500
                  hover:border-black/25 hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)]
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/15" />

                  {/* Image overlay */}
                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <span className="border border-white/40 bg-black/30 px-3 py-2 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-sm">
                      / {item.number}
                    </span>

                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      {item.label}
                    </span>
                  </div>

                  <div className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center border border-white/50 bg-black/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <Icon className="text-lg" />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-6 sm:p-8">
                  <h3 className="text-[23px] font-semibold tracking-[-0.04em] text-[#111111] sm:text-[27px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-black/60 sm:text-[14px]">
                    {item.description}
                  </p>

                  {/* DETAILS */}
                  <div className="mt-7 space-y-3 border-t border-black/10 pt-6">
                    {item.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <FaCheck className="shrink-0 text-[10px] text-black/60" />
                        <span className="text-[12px] text-black/65 sm:text-[13px]">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="quality-bottom mt-14 flex flex-col gap-7 border-t border-black/10 pt-9 sm:mt-20 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">
              Have Specific Quality Requirements?
            </p>

            <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.045em] text-[#111111] sm:text-[29px]">
              Let's Discuss Your Standards.
            </h3>
          </div>

          <Link
            href="/request-a-quote"
            className="group inline-flex w-fit items-center gap-4 border border-black/25 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            Discuss Your Requirements
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* FOOTER LABEL */}
        <div className="mt-12 flex justify-between border-t border-black/[0.08] pt-6">
          <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
            NORDVIA EXPORTS
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-black/35">
            ATTENTION TO EVERY DETAIL
          </span>
        </div>
      </div>
    </section>
  );
}
