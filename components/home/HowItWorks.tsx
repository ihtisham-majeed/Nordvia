
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaFileAlt,
  FaSlidersH,
  FaClipboardCheck,
  FaIndustry,
  FaShippingFast,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Your Vision",
    label: "INITIAL INQUIRY",
    description:
      "Share your ideas, designs or references. Tell us what you want to create and the requirements for your collection.",
    icon: FaFileAlt,
    details: "Tell us about your project",
  },
  {
    number: "02",
    title: "Development",
    label: "DESIGN & DETAILS",
    description:
      "Explore fabrics, colors, fits, sizing, branding and finishing options to shape your apparel requirements.",
    icon: FaSlidersH,
    details: "Define your specifications",
  },
  {
    number: "03",
    title: "Approval",
    label: "REVIEW & CONFIRM",
    description:
      "Where sampling is available, review the sample and confirm the agreed specifications before bulk production.",
    icon: FaClipboardCheck,
    details: "Approve the agreed details",
  },
  {
    number: "04",
    title: "Production",
    label: "ORDER EXECUTION",
    description:
      "Move forward with production according to the confirmed specifications, quantities and agreed schedule.",
    icon: FaIndustry,
    details: "Bring your collection to life",
  },
  {
    number: "05",
    title: "Dispatch",
    label: "FINAL PREPARATION",
    description:
      "Coordinate final checks, packaging and shipping arrangements to prepare your order for dispatch.",
    icon: FaShippingFast,
    details: "Prepare your order for delivery",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll(".hiw-reveal"),
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        section.querySelectorAll(".hiw-card"),
        { y: 45, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: section.querySelector(".hiw-grid"),
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-32 lg:py-36"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.025] blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-16 grid gap-10 md:mb-24 md:grid-cols-[1.15fr_0.85fr] md:items-end lg:gap-20">

          <div className="hiw-reveal">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-white/70" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45 sm:text-xs">
                How We Work
              </span>
            </div>

            <h2 className="max-w-3xl text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              From First
              <span className="block text-white/35">
                Conversation.
              </span>
              <span className="block">To Final Delivery.</span>
            </h2>
          </div>

          <div className="hiw-reveal max-w-lg md:justify-self-end md:pb-2">
            <p className="text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              A straightforward process built around your apparel
              requirements. From the first conversation to production
              coordination and shipment, every stage starts with clear
              communication.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:text-white/50"
            >
              Start a Conversation
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Process label */}
        <div className="hiw-reveal mb-6 flex items-center justify-between border-b border-white/15 pb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/50">
            The Process
          </span>

          <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
            05 Steps / One Journey
          </span>
        </div>

        {/* Cards */}
        <div className="hiw-grid grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="
                  hiw-card group relative flex min-h-[340px]
                  flex-col overflow-hidden border border-white/10
                  bg-[#101010] p-6 transition-all duration-500
                  hover:border-white/30 hover:bg-[#151515]
                  sm:min-h-[360px] sm:p-7
                  lg:min-h-[390px] lg:p-6
                  xl:p-7
                "
              >
                {/* Card top */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.16em] text-white/35">
                    / {step.number}
                  </span>

                  <Icon className="text-xl text-white/40 transition-all duration-500 group-hover:scale-110 group-hover:text-white" />
                </div>

                {/* Large number */}
                <div className="mt-9 overflow-hidden">
                  <span className="
                    block text-[64px] font-semibold leading-none
                    tracking-[-0.08em] text-white/[0.075]
                    transition-colors duration-500
                    group-hover:text-white/[0.16]
                    sm:text-[76px] lg:text-[68px] xl:text-[78px]
                  ">
                    {step.number}
                  </span>
                </div>

                {/* Card content */}
                <div className="mt-auto pt-8">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    {step.label}
                  </p>

                  <h3 className="text-xl font-semibold tracking-[-0.045em] sm:text-2xl lg:text-xl xl:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-white/45 sm:text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-white/35">
                    {step.details}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-white/30 transition-colors duration-300 group-hover:bg-white" />
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="hiw-reveal mt-16 flex flex-col gap-7 border-t border-white/10 pt-9 sm:flex-row sm:items-center sm:justify-between lg:mt-20">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Your Next Collection Starts Here
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] sm:text-3xl lg:text-4xl">
              Have a Project in Mind?
            </h3>
          </div>

          <Link
            href="/request-a-quote"
            className="
              group inline-flex w-fit items-center gap-5
              border border-white/25 px-7 py-5
              text-[10px] font-semibold uppercase tracking-[0.16em]
              transition-all duration-300
              hover:border-white hover:bg-white hover:text-black
            "
          >
            Discuss Your Project
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Footer label */}
        <div className="mt-12 flex justify-between border-t border-white/[0.06] pt-6">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            NORDVIA EXPORTS
          </span>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            BUILT AROUND YOUR VISION
          </span>
        </div>
      </div>
    </section>
  );
}
