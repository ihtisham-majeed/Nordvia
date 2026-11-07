
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const industries = [
  {
    number: "01",
    category: "STREETWEAR",
    title: "Streetwear Brands",
    description:
      "Oversized hoodies, sweatshirts, joggers and statement pieces for contemporary streetwear labels.",
    image: "/industries/streetwear.webp",
    alt: "Streetwear clothing collection featuring premium hoodies and casual apparel",
  },
  {
    number: "02",
    category: "CONTEMPORARY FASHION",
    title: "Fashion Labels",
    description:
      "Custom casualwear, jackets and distinctive apparel collections developed around your brand identity.",
    image: "/industries/fashion-labels.webp",
    alt: "Contemporary fashion apparel collection",
  },
  {
    number: "03",
    category: "SPORTS & PERFORMANCE",
    title: "Sportswear Brands",
    description:
      "Tracksuits, training apparel and performance-inspired clothing for sportswear businesses.",
    image: "/industries/sportswear.webp",
    alt: "Athletic sportswear and coordinated tracksuit collection",
  },
  {
    number: "04",
    category: "EMERGING BUSINESSES",
    title: "Startups & Private Labels",
    description:
      "Apparel development and private-label possibilities for businesses building their own clothing collections.",
    image: "/industries/startups.webp",
    alt: "Independent clothing brand collection and apparel development",
  },
];

export default function IndustriesWeServe() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".industry-intro",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".industry-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-grid",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".industry-footer",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-footer",
            start: "top 95%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative overflow-hidden bg-[#F4F3EF] py-20 text-[#171717] sm:py-28 lg:py-32"
    >
      {/* Subtle background lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-black/[0.035] blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* INTRO */}
        <div className="mb-12 grid gap-7 md:mb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end lg:gap-16">

          <div className="industry-intro">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#171717]/70" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-[#171717]/50 sm:text-xs">
                Industries We Serve
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#171717]">
              Made for
              <span className="block text-[#171717]/60">
                Different Visions.
              </span>
              Built for Brands.
            </h2>
          </div>

          <div className="industry-intro max-w-xl md:justify-self-end md:pb-2">
            <p className="text-sm leading-7 text-[#171717]/60 sm:text-base sm:leading-8">
              Every brand has its own identity and direction.
              We support different apparel businesses with
              custom product development, manufacturing
              coordination and private-label solutions.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-6 inline-flex cursor-pointer items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#171717] transition-colors hover:text-[#171717]/50"
            >
              Work With NORDVIA

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* INDUSTRY CARDS */}
        <div className="industry-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">

          {industries.map((item) => (
            <article
              key={item.number}
              className="
                industry-card group relative isolate
                flex min-h-[390px] flex-col
                overflow-hidden border border-black/[0.08]
                bg-[#deddd8] sm:min-h-[430px]
                lg:min-h-[490px]
              "
            >
              {/* IMAGE */}
              <div className="absolute inset-0 -z-20">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="
                    (max-width: 639px) 100vw,
                    (max-width: 1023px) 50vw,
                    50vw
                  "
                  className="
                    object-cover object-center
                    transition-transform duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-105
                  "
                />
              </div>

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0 -z-10
                  bg-gradient-to-t
                  from-black via-black/35 to-black/5
                  opacity-95 transition-opacity
                  duration-500 group-hover:opacity-100
                "
              />

              {/* TOP DETAILS */}
              <div className="flex items-center justify-between p-5 sm:p-7">
                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-[10px]">
                  {item.category}
                </span>

                <span className="text-xs tabular-nums text-white/65">
                  / {item.number}
                </span>
              </div>

              {/* BOTTOM CONTENT */}
              <div className="mt-auto p-5 sm:p-7">

                <span
                  className="
                    mb-4 block h-px w-9 bg-white/80
                    transition-all duration-500
                    group-hover:w-16
                  "
                />

                <h3
                  className="
                    text-[clamp(1.7rem,3vw,2.5rem)]
                    font-semibold leading-tight
                    tracking-[-0.045em] text-white
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                  {item.description}
                </p>

                <div
                  className="
                    mt-6 flex items-center justify-between
                    border-t border-white/25 pt-4
                  "
                >
                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-[10px]">
                    Apparel Manufacturing
                  </span>

                  <span
  className="
    flex h-9 w-9 items-center justify-center
    rounded-full border border-white/40
    text-white
    transition-all duration-300
    group-hover:border-white
    group-hover:bg-white
    group-hover:text-black
  "
>
  <FaArrowRight
    className="
      text-xs
      transition-colors duration-300
      group-hover:text-black
    "
  />
</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div
          className="
            industry-footer mt-10 flex flex-col gap-5
            border-t border-black/10 pt-7
            sm:flex-row sm:items-center sm:justify-between
          "
        >
          <div>
            <p className="text-sm font-medium text-[#171717]/85">
              Have a different apparel business?
            </p>

            <p className="mt-1 text-xs leading-6 text-[#171717]/60 sm:text-sm">
              Let's discuss your product ideas and manufacturing requirements.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className="
              group inline-flex min-h-[48px]
              cursor-pointer items-center justify-center gap-3
              rounded-full bg-[#171717] px-6
              text-xs font-semibold text-white
              transition-colors hover:bg-[#393939] sm:text-sm
            "
          >
            Discuss Your Project

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
