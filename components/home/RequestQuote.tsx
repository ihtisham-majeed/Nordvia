
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaGlobe,
  FaEnvelope,
  FaCheckCircle,
  FaFileAlt,
  FaSpinner,
  FaExclamationCircle,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const inputClass =
  "w-full border border-white/15 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-neutral-600 focus:border-white/60 focus:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50";

const selectClass =
  `${inputClass} appearance-none bg-[#111111] [color-scheme:dark]`;

const optionClass = "bg-[#111111] text-white cursor-pointer";

const placeholderOptionClass = "bg-[#111111] text-neutral-500 cursor-pointer";

const labelClass =
  "mb-3 block text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400";

const products = [
  { value: "hoodies", label: "Hoodies & Sweatshirts" },
  { value: "t-shirts", label: "T-Shirts & Polos" },
  { value: "tracksuits", label: "Sportswear & Tracksuits" },
  { value: "joggers", label: "Joggers & Sweatpants" },
  { value: "jackets", label: "Jackets" },
  { value: "coats", label: "Coats & Outerwear" },
  { value: "other", label: "Other" },
];

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  product: "",
  quantity: "",
  customization: "",
  timeline: "",
  message: "",
  website: "",
};

type FormData = typeof initialFormData;

type RequestQuoteProps = {
  initialProduct?: string;
};

function getValidProduct(product: string) {
  return products.some((item) => item.value === product) ? product : "";
}

export default function RequestQuote({
  initialProduct = "",
}: RequestQuoteProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    product: getValidProduct(initialProduct),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: getValidProduct(initialProduct),
    }));
  }, [initialProduct]);

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

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            "We couldn't submit your inquiry. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          result?.message ||
          "Your inquiry has been submitted successfully. Thank you for contacting Nordvia Exports.",
      });

      setFormData({
        ...initialFormData,
        product: getValidProduct(initialProduct),
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="request-a-quote"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-22 text-white sm:px-8 lg:px-12 lg:py-28"
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
            Let&apos;s create
            <br />
            <span className="text-neutral-500">
              something together.
            </span>
          </h2>

          <p className="quote-intro mt-7 max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
            Have an apparel collection in mind? Tell us about your
            project, and let&apos;s explore the manufacturing possibilities.
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
                Whether you&apos;re developing a new clothing brand,
                expanding an existing collection, or sourcing apparel
                for your business, share your requirements with us.
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
                Apparel Manufacturing &amp; Export Inquiries
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

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Honeypot spam protection */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

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
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      disabled={isSubmitting}
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
                      value={formData.company}
                      onChange={handleChange}
                      maxLength={150}
                      disabled={isSubmitting}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      disabled={isSubmitting}
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
                      value={formData.country}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      disabled={isSubmitting}
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
                      value={formData.product}
                      onChange={handleChange}
                      className={selectClass}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled className={placeholderOptionClass}>
                        Select a product
                      </option>

                      {products.map((product) => (
                        <option
                          key={product.value}
                          value={product.value}
                          className={optionClass}
                        >
                          {product.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quantity" className={labelClass}>
                      Estimated quantity *
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={selectClass}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled className={placeholderOptionClass}>
                        Select quantity
                      </option>
                      <option value="Below 100" className={optionClass}>Below 100 pieces</option>
                      <option value="100–300" className={optionClass}>100–300 pieces</option>
                      <option value="300–500" className={optionClass}>300–500 pieces</option>
                      <option value="500–1000" className={optionClass}>500–1,000 pieces</option>
                      <option value="1000–3000" className={optionClass}>1,000–3,000 pieces</option>
                      <option value="3000+" className={optionClass}>3,000+ pieces</option>
                      <option value="Not sure yet" className={optionClass}>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="customization" className={labelClass}>
                      Customization required
                    </label>
                    <select
                      id="customization"
                      name="customization"
                      value={formData.customization}
                      onChange={handleChange}
                      className={selectClass}
                      disabled={isSubmitting}
                    >
                      <option value="" disabled className={placeholderOptionClass}>
                        Select an option
                      </option>
                      <option value="Custom design" className={optionClass}>Custom design</option>
                      <option value="Embroidery" className={optionClass}>Embroidery</option>
                      <option value="Printing" className={optionClass}>Printing</option>
                      <option value="Private label" className={optionClass}>Private label</option>
                      <option value="Multiple options" className={optionClass}>Multiple options</option>
                      <option value="Not decided" className={optionClass}>Not decided</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelClass}>
                      Expected timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={selectClass}
                      disabled={isSubmitting}
                      
                    >
                      <option value="" disabled className={placeholderOptionClass}>
                        Select timeline
                      </option>
                      <option value="As soon as possible" className={optionClass}>
                        As soon as possible
                      </option>
                      <option value="Within 1 month" className={optionClass}>
                        Within 1 month
                      </option>
                      <option value="1–3 months" className={optionClass}>
                        1–3 months
                      </option>
                      <option value="3+ months" className={optionClass}>
                        3+ months
                      </option>
                      <option value="Planning stage" className={optionClass}>
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Status feedback */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-green-500/25 bg-green-500/[0.07] text-green-300"
                      : "border-red-500/25 bg-red-500/[0.07] text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="mt-1 shrink-0" />
                  ) : (
                    <FaExclamationCircle className="mt-1 shrink-0" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              {/* Submit */}
              <div className="border-t border-white/10 pt-7">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-between bg-white px-6 py-5 text-xs font-bold uppercase tracking-[0.17em] text-black transition-colors duration-300 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                >
                  <span>
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Your Inquiry"}
                  </span>

                  {isSubmitting ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </button>

                <p className="mt-5 flex items-start gap-2 text-[11px] leading-6 text-neutral-500">
                  <FaCheckCircle className="mt-1 shrink-0 text-neutral-400" />
                  Your project details will be used to review and respond
                  to your inquiry.
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
