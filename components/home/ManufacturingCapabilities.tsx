
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    category: "MATERIALS",
    title: "Fabric Selection",
    description:
      "Explore material options suited to your product, desired feel, performance and collection requirements.",
    image: "/capabilities/fabric-selection.webp",
    alt: "Cotton, fleece and textile fabric samples",
  },
  {
    number: "02",
    category: "COLOR & FINISH",
    title: "Colors & Finishes",
    description:
      "Develop your collection with considered color choices, fabric finishes and distinctive visual details.",
    image: "/capabilities/colors-finishes.webp",
    alt: "Fabric color swatches and textile samples",
  },
  {
    number: "03",
    category: "BRANDING",
    title: "Embroidery & Printing",
    description:
      "Bring your brand identity to life with embroidered logos, screen printing and other suitable techniques.",
    image: "/capabilities/embroidery-printing.webp",
    alt: "Close-up of embroidered logo on apparel",
  },
  {
    number: "04",
    category: "CONSTRUCTION",
    title: "Custom Development",
    description:
      "Discuss garment fits, sizing, patterns, panels, stitching, trims and construction details.",
    image: "/capabilities/custom-development.webp",
    alt: "Garment construction and sewing details",
  },
  {
    number: "05",
    category: "PRIVATE LABEL",
    title: "Your Brand Identity",
    description:
      "Explore custom neck labels, woven labels, hangtags and other private-label details.",
    image: "/capabilities/private-label.webp",
    alt: "Custom woven clothing labels and hangtags",
  },
  {
    number: "06",
    category: "PRESENTATION",
    title: "Custom Packaging",
    description:
      "Complete your product presentation with packaging options developed around your brand.",
    image: "/capabilities/packaging.webp",
    alt: "Folded apparel and custom clothing packaging",
  },
];

export default function ManufacturingCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const intro = section.querySelectorAll(".capability-intro");
      const cards = section.querySelectorAll(".capability-card");
      const footer = section.querySelector(".capability-footer");

      gsap.fromTo(
        intro,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        cards,
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".capability-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      if (footer) {
        gsap.fromTo(
          footer,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footer,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-white/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* SECTION INTRO */}
        <div className="mb-12 grid gap-7 md:mb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:gap-16">

          <div className="capability-intro">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-white/70" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50 sm:text-xs">
                Made Around Your Brand
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
              Manufacturing
              <span className="block text-white/40">
                Without Limits.
              </span>
            </h2>
          </div>

          <div className="capability-intro max-w-xl md:justify-self-end md:pb-2">
            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Apparel solutions developed around your brand. Explore our
              customization options and create collections with considered
              materials, colors, construction and private-label details.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-white/60"
            >
              Discuss Your Requirements
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* CAPABILITY GRID */}
        <div className="capability-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="capability-card group relative isolate flex min-h-[390px] flex-col overflow-hidden border border-white/10 bg-[#111] sm:min-h-[420px] lg:min-h-[440px]"
            >
              {/* PRODUCT / DETAIL IMAGE */}
              <div className="absolute inset-0 -z-20">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Dark overlays */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/10 to-black/95" />
              <div className="absolute inset-0 -z-10 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />

              {/* Top details */}
              <div className="flex items-center justify-between p-5 sm:p-6">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-[10px]">
                  {item.category}
                </span>

                <span className="text-xs tabular-nums text-white/60">
                  {item.number}
                </span>
              </div>

              {/* Bottom content */}
              <div className="mt-auto p-5 sm:p-6">
                <span className="mb-4 block h-px w-9 bg-white/80 transition-all duration-500 group-hover:w-16" />

                <h3 className="text-2xl font-semibold tracking-[-0.04em] sm:text-[28px]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-[380px] text-sm leading-6 text-white/65">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.17em] text-white/75 sm:text-[10px]">
                    Explore Possibilities
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="capability-footer mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white/80">
              Have a specific product in mind?
            </p>
            <p className="mt-1 text-xs leading-6 text-white/45 sm:text-sm">
              Tell us your requirements and let's explore the possibilities.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-white px-6 text-xs font-semibold text-black transition-colors hover:bg-white/80 sm:text-sm"
          >
            Start Your Project
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
