
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaGlobe,
  FaEnvelope,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const inputClass =
  "w-full border border-white/15 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-white/60 focus:bg-white/[0.06]";

const labelClass =
  "mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400";

export default function RequestQuote() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".quote-intro",
        { y: 30, autoAlpha: 0 },
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
        ".quote-form",
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".quote-form",
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
      id="request-a-quote"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl lg:mb-20">
          <div className="quote-intro mb-6 flex items-center gap-3">
            <span className="h-px w-9 bg-neutral-500" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Start Your Project
            </span>
          </div>

          <h2 className="quote-intro text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
            Let's create
            <br />
            <span className="text-neutral-500">something together.</span>
          </h2>

          <p className="quote-intro mt-7 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Have an apparel collection in mind? Tell us about your project,
            and let's explore the manufacturing possibilities.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          {/* Left information */}
          <aside className="quote-intro flex flex-col justify-between">
            <div>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Your manufacturing partner
              </p>

              <h3 className="mb-5 max-w-sm text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
                Your idea.
                <br />
                Our next project.
              </h3>

              <p className="max-w-sm text-sm leading-7 text-neutral-400">
                Whether you're developing a new clothing brand, expanding an
                existing collection, or sourcing apparel for your business,
                share your requirements with us.
              </p>

              <div className="mt-12 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                    <FaGlobe size={16} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-300">
                      International inquiries
                    </p>
                    <p className="text-sm leading-6 text-neutral-500">
                      We welcome project inquiries from brands and buyers
                      worldwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                    <FaFileAlt size={16} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-300">
                      Share your requirements
                    </p>
                    <p className="text-sm leading-6 text-neutral-500">
                      Include product details, quantities, designs, and
                      customization preferences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                    <FaEnvelope size={16} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-neutral-300">
                      Clear communication
                    </p>
                    <p className="text-sm leading-6 text-neutral-500">
                      We can review your inquiry and discuss the next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                NORDVIA EXPORTS
              </p>
              <p className="mt-2 text-xs text-neutral-500">
                Apparel Manufacturing & Export Inquiries
              </p>
            </div>
          </aside>

          {/* Quote form */}
          <div className="quote-form border border-white/10 bg-[#111111] p-6 sm:p-9 lg:p-11">
            <div className="mb-9 flex items-center justify-between gap-4 border-b border-white/10 pb-7">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  Project inquiry
                </p>
                <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  Request a Quote
                </h3>
              </div>

              <span className="hidden h-12 w-12 items-center justify-center border border-white/15 text-neutral-400 sm:flex">
                <FaArrowRight size={17} />
              </span>
            </div>

            <form action="/api/quote" method="POST" className="space-y-7">
              {/* Contact information */}
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.17em] text-neutral-300">
                  01 / Your information
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClass}>
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company / Brand
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Business email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      className={inputClass}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="country" className={labelClass}>
                      Destination country *
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      autoComplete="country-name"
                      placeholder="e.g. United Kingdom"
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Product requirements */}
              <div className="border-t border-white/10 pt-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.17em] text-neutral-300">
                  02 / Product requirements
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="product" className={labelClass}>
                      Product category *
                    </label>
                    <select
                      id="product"
                      name="product"
                      defaultValue=""
                      className={`${inputClass} appearance-none`}
                      required
                    >
                      <option value="" disabled className="bg-[#111111]">
                        Select a product
                      </option>
                      <option value="Hoodies & Sweatshirts" className="bg-[#111111]">
                        Hoodies & Sweatshirts
                      </option>
                      <option value="T-Shirts & Polos" className="bg-[#111111]">
                        T-Shirts & Polos
                      </option>
                      <option value="Sportswear & Tracksuits" className="bg-[#111111]">
                        Sportswear & Tracksuits
                      </option>
                      <option value="Joggers & Sweatpants" className="bg-[#111111]">
                        Joggers & Sweatpants
                      </option>
                      <option value="Jackets & Outerwear" className="bg-[#111111]">
                        Jackets & Outerwear
                      </option>
                      <option value="Other" className="bg-[#111111]">
                        Other
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quantity" className={labelClass}>
                      Estimated quantity *
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      defaultValue=""
                      className={`${inputClass} appearance-none`}
                      required
                    >
                      <option value="" disabled className="bg-[#111111]">
                        Select quantity
                      </option>
                      <option value="Below 100" className="bg-[#111111]">
                        Below 100 pieces
                      </option>
                      <option value="100–300" className="bg-[#111111]">
                        100–300 pieces
                      </option>
                      <option value="300–500" className="bg-[#111111]">
                        300–500 pieces
                      </option>
                      <option value="500–1000" className="bg-[#111111]">
                        500–1,000 pieces
                      </option>
                      <option value="1000–3000" className="bg-[#111111]">
                        1,000–3,000 pieces
                      </option>
                      <option value="3000+" className="bg-[#111111]">
                        3,000+ pieces
                      </option>
                      <option value="Not sure yet" className="bg-[#111111]">
                        Not sure yet
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="customization" className={labelClass}>
                      Customization required
                    </label>
                    <select
                      id="customization"
                      name="customization"
                      defaultValue=""
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled className="bg-[#111111]">
                        Select an option
                      </option>
                      <option value="Custom design" className="bg-[#111111]">
                        Custom design
                      </option>
                      <option value="Embroidery" className="bg-[#111111]">
                        Embroidery
                      </option>
                      <option value="Printing" className="bg-[#111111]">
                        Printing
                      </option>
                      <option value="Private label" className="bg-[#111111]">
                        Private label
                      </option>
                      <option value="Multiple options" className="bg-[#111111]">
                        Multiple options
                      </option>
                      <option value="Not decided" className="bg-[#111111]">
                        Not decided
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelClass}>
                      Expected timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      defaultValue=""
                      className={`${inputClass} appearance-none`}
                    >
                      <option value="" disabled className="bg-[#111111]">
                        Select timeline
                      </option>
                      <option value="As soon as possible" className="bg-[#111111]">
                        As soon as possible
                      </option>
                      <option value="Within 1 month" className="bg-[#111111]">
                        Within 1 month
                      </option>
                      <option value="1–3 months" className="bg-[#111111]">
                        1–3 months
                      </option>
                      <option value="3+ months" className="bg-[#111111]">
                        3+ months
                      </option>
                      <option value="Planning stage" className="bg-[#111111]">
                        Planning stage
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project details */}
              <div className="border-t border-white/10 pt-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.17em] text-neutral-300">
                  03 / Tell us about your project
                </p>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Project details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Describe your product, fabric preferences, design references, colors, and any other requirements..."
                    className={`${inputClass} resize-y`}
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-white/10 pt-7">
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between bg-white px-6 py-5 text-xs font-bold uppercase tracking-[0.17em] text-black transition-colors duration-300 hover:bg-neutral-200"
                >
                  Submit Your Inquiry
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="mt-5 flex items-start gap-2 text-[11px] leading-6 text-neutral-500">
                  <FaCheckCircle className="mt-1 shrink-0 text-neutral-400" />
                  Your project details will be used to review and respond to
                  your inquiry.
                </p>

                <p className="mt-3 text-[10px] leading-5 text-neutral-600">
                  Fields marked with * are required.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
