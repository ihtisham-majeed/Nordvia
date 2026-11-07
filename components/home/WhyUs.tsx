
"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHeadset,
  FaPalette,
  FaBoxes,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const reasons = [
  {
    number: "01",
    title: "Direct Communication",
    subtitle: "A Partner You Can Reach",
    desc: "Clear communication and order coordination throughout your project, from initial inquiry to production updates.",
    icon: FaHeadset,
  },
  {
    number: "02",
    title: "Custom Development",
    subtitle: "Your Design, Your Identity",
    desc: "Explore custom fabrics, colors, fits, sizes, branding and finishing options around your collection requirements.",
    icon: FaPalette,
  },
  {
    number: "03",
    title: "Flexible Order Options",
    subtitle: "Built Around Your Needs",
    desc: "Discuss suitable order quantities for your business, whether you are developing a new collection or planning a larger order.",
    icon: FaBoxes,
  },
  {
    number: "04",
    title: "International Focus",
    subtitle: "Supporting Global Buyers",
    desc: "Export-oriented order coordination and communication designed to support apparel businesses in international markets.",
    icon: FaGlobe,
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  
useGSAP(() => {
  const section = sectionRef.current;
  if (!section) return;

  const intro = section.querySelectorAll(".why-intro");
  const grid = section.querySelector(".why-grid");
  const cards = section.querySelectorAll(".why-card");

  const ctx = gsap.context(() => {
    // Animate the introduction
    gsap.fromTo(
      intro,
      {
        y: 30,
        autoAlpha: 0,
      },
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

    // Animate the benefit cards
    if (grid && cards.length) {
      gsap.fromTo(
        cards,
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: grid,
            start: "top 90%",
            once: true,
          },
        }
      );
    }
  }, section);

  // Recalculate trigger positions after setup
  ScrollTrigger.refresh();

  return () => ctx.revert();
}, { scope: sectionRef });


  return (
    <section
      ref={sectionRef}
      id="why-nordvia"
      className="relative overflow-hidden bg-[#080808] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Subtle background lighting */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-white/[0.035] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-white/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* INTRO */}
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1.15fr_0.85fr] md:items-end lg:gap-16">

          <div className="why-intro">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-white/70" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55 sm:text-xs">
                The NORDVIA Advantage
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.7rem,6vw,5.6rem)] font-semibold leading-[0.96] tracking-[-0.06em]">
              More Than
              <span className="block text-white/60">
                Manufacturing.
              </span>
              <span className="block">A Partner in Growth.</span>
            </h2>
          </div>

          <div className="why-intro max-w-xl md:justify-self-end md:pb-2">
            <p className="text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Building an apparel collection takes more than production.
              It takes communication, customization and a partner who
              understands your requirements.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:text-white/60"
            >
              Let's Discuss Your Project
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* BENEFIT CARDS */}
        <div className="why-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  why-card group relative flex min-h-[270px]
                  flex-col overflow-hidden border border-white/10
                  bg-white/[0.025] p-6
                  transition-all duration-500
                  hover:border-white/25 hover:bg-white/[0.055]
                  sm:min-h-[300px] sm:p-7
                "
              >
                {/* Number and icon */}
                <div className="flex items-start justify-between">
                  <span className="text-xs tabular-nums tracking-[0.15em] text-white/60">
                    / {item.number}
                  </span>

                  <div className="
                    flex h-11 w-11 items-center justify-center
                    border border-white/15 text-white/75
                    transition-all duration-500
                    group-hover:border-white/50
                    group-hover:bg-white group-hover:text-black
                  ">
                    <Icon className="text-lg" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto pt-12">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/60">
                    {item.subtitle}
                  </p>

                  <h3 className="text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="
                  absolute bottom-0 left-0 h-[2px] w-0
                  bg-white transition-all duration-500
                  group-hover:w-full
                " />
              </article>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <div className="
          mt-9 flex flex-col gap-3
          border-t border-white/10 pt-6
          sm:flex-row sm:items-center sm:justify-between
        ">
          <p className="text-xs leading-6 text-white/60">
            Custom apparel. Thoughtful development. Long-term partnerships.
          </p>

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
            NORDVIA EXPORTS
          </span>
        </div>
      </div>
    </section>
  );
}
