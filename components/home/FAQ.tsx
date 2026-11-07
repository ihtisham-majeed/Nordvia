
"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaComments,
} from "react-icons/fa";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const faqs = [
  {
    question: "What products can NORDVIA EXPORTS manufacture?",
    answer:
      "We work with manufacturing partners to develop a range of apparel, including hoodies, sweatshirts, T-shirts, polos, sportswear, tracksuits, joggers, and selected outerwear. Share your product requirements with us to discuss the available options.",
  },
  {
    question: "Can I customize designs, fabrics, colors, and labels?",
    answer:
      "Yes. Customization can be discussed according to your project requirements and manufacturing feasibility. Options may include fabric selection, colors, artwork, embroidery, printing, labels, trims, and packaging.",
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Minimum order quantities depend on the garment, fabric, customization, and production requirements. Contact us with your product details and estimated quantity so we can check the applicable MOQ with our manufacturing partners.",
  },
  {
    question: "Can I request samples before placing a bulk order?",
    answer:
      "Sample development can be discussed before bulk production. Availability, development time, and sample costs depend on the product and manufacturing requirements. We will clarify these details during your inquiry.",
  },
  {
    question: "Which countries can you ship to?",
    answer:
      "We welcome inquiries from international brands and buyers. Shipping destinations, available logistics options, costs, and delivery arrangements are confirmed according to the order and destination.",
  },
  {
    question: "Can you manufacture products using my own designs?",
    answer:
      "Yes, you can share your own sketches, reference images, tech packs, or specifications. We can discuss the requirements with our manufacturing partners and assess how the design can be developed.",
  },
  {
    question: "How does the quotation process work?",
    answer:
      "Send us your product type, design references, quantity, fabric preferences, customization details, and destination country. We will review your requirements and coordinate the information needed to prepare a quotation.",
  },
  {
    question: "How can I start working with NORDVIA EXPORTS?",
    answer:
      "Start by sending us your project details through our Request a Quote page. We will review your inquiry, discuss the specifications, and guide you through the next steps.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-intro",
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".faq-item",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 88%",
            once: true,
          },
        }
      );
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, { scope: sectionRef });

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#101010] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-white/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 grid gap-10 lg:mb-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="faq-intro">
            <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
              <span className="h-px w-8 bg-neutral-400" />
              Frequently Asked Questions
            </span>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Questions?
              <br />
              <span className="text-neutral-400">We've got answers.</span>
            </h2>
          </div>

          <div className="faq-intro flex flex-col items-start justify-between gap-7 lg:items-end">
            <p className="max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
              Everything you need to know before starting your apparel
              manufacturing project with NORDVIA EXPORTS.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 border-b border-white/30 pb-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors hover:border-white"
            >
              Still have questions?
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* FAQ content */}
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* Left information panel */}
          <div className="faq-intro flex flex-col justify-between">
            <div className="border border-white/10 bg-white/[0.025] p-7 sm:p-9">
              <div className="mb-8 flex h-12 w-12 items-center justify-center border border-white/15 text-white">
                <FaComments size={19} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Let's talk business
              </p>

              <h3 className="mb-4 text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
                Have a project in mind?
              </h3>

              <p className="mb-8 text-sm leading-7 text-neutral-400">
                Tell us what you want to create. We'll help you explore the
                next steps for your apparel project.
              </p>

              <Link
                href="/request-a-quote"
                className="group inline-flex w-full items-center justify-between bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-neutral-200"
              >
                Request a Quote
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              NORDVIA EXPORTS · Apparel Manufacturing
            </p>
          </div>

          {/* Accordion */}
          <div className="faq-list border-t border-white/15">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={faq.question}
                  className="faq-item border-b border-white/15 cursor-pointer transition-colors hover:bg-white/[0.015]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="group flex w-full items-start gap-5 py-6 text-left sm:items-center sm:py-7 cursor-pointer"
                  >
                    <span className="pt-1 text-[11px] tabular-nums text-neutral-400 sm:pt-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-base font-medium leading-relaxed transition-colors sm:text-lg ${
                        isOpen
                          ? "text-white"
                          : "text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 sm:mt-0 ${
                        isOpen
                          ? "rotate-180 border-white bg-white text-black"
                          : "border-white/20 text-neutral-400 group-hover:border-white/60"
                      }`}
                    >
                      {isOpen ? <FaMinus size={10} /> : <FaPlus size={10} />}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    hidden={!isOpen}
                    className="pb-7 pl-9 pr-12 sm:pl-12"
                  >
                    <p className="max-w-2xl text-sm leading-7 text-neutral-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
