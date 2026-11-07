
"use client";

import {
  useRef,
  useState,
  type FormEvent,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CONTACT_EMAIL = "nordvia.exports@gmail.com";
const LOCATION = "Sialkot, Pakistan";

const contactDetails = [
  {
    icon: FaEnvelope,
    label: "Email inquiries",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: FaMapMarkerAlt,
    label: "Business location",
    value: LOCATION,
    href: null,
  },
  {
    icon: FaGlobe,
    label: "Business inquiries",
    value: "Worldwide",
    href: null,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://instagram.com/nordvia.exports",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/nordviaexports",
  },
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://facebook.com/nordviaexports",
  },
];

const subjectOptions = [
  {
    label: "Manufacturing inquiry",
    value: "Manufacturing inquiry",
  },
  {
    label: "Private label",
    value: "Private label",
  },
  {
    label: "Product development",
    value: "Product development",
  },
  {
    label: "Business partnership",
    value: "Partnership",
  },
  {
    label: "General inquiry",
    value: "General inquiry",
  },
];

const inputClass =
  "w-full border border-white/15 bg-white/[0.035] px-4 py-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-400 focus:border-white/60";

const labelClass =
  "mb-3 block text-[10px] font-semibold uppercase tracking-[0.17em] text-neutral-400";

export default function ContactPage() {
  const sectionRef = useRef<HTMLElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [subject, setSubject] = useState("");
  const [subjectOpen, setSubjectOpen] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        {
          y: 35,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, { scope: sectionRef });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    if (!subject) {
      setStatus({
        type: "error",
        message: "Please select an inquiry type.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to send your message. Please try again."
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Thank you! Your message has been sent successfully. Our team will get back to you.",
      });

      form.reset();
      setSubject("");
      setSubjectOpen(false);
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
  }

  return (
    <main
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#0b0b0b] text-white"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-32 h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[150px]"
      />

      {/* Hero */}
      <section className="relative px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-38">
        <div className="mx-auto max-w-7xl">
          <div className="contact-reveal mb-7 flex items-center gap-3">
            <span className="h-px w-9 bg-neutral-500" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Get in touch
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h1 className="contact-reveal max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
              Let's start a
              <br />
              <span className="text-neutral-400">
                conversation.
              </span>
            </h1>

            <p className="contact-reveal max-w-md text-sm leading-7 text-neutral-400 sm:text-base lg:pb-3">
              Looking for an apparel manufacturing partner? Have
              a collection to develop or a sourcing inquiry? We'd
              be glad to hear about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Main contact area */}
      <section className="relative border-t border-white/10 px-2 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Contact information */}
          <div className="contact-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Contact information
            </p>

            <h2 className="mb-5 text-3xl font-medium tracking-tight sm:text-4xl">
              We're here to
              <br />
              discuss your ideas.
            </h2>

            <p className="mb-12 max-w-sm text-sm leading-7 text-neutral-400">
              Tell us about your business, product requirements,
              and sourcing goals. Start a conversation with
              NORDVIA EXPORTS.
            </p>

            <div className="space-y-8">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-5 border-b border-white/10 pb-7"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 text-neutral-300">
                      <Icon size={16} />
                    </div>

                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-neutral-400">
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="break-all text-sm text-neutral-200 transition-colors hover:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-neutral-200">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="mt-12">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Follow NORDVIA
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center border border-white/15 text-neutral-400 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-reveal border border-white/10 bg-[#111111] p-4 sm:p-10 lg:p-12">
            <div className="mb-9 border-b border-white/10 pb-7">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Send us a message
              </p>

              <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
                Tell us about your inquiry.
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Honeypot spam protection */}
              <div
                aria-hidden="true"
                className="absolute -left-[9999px] h-px w-px overflow-hidden"
              >
                <label htmlFor="contact-website">
                  Website
                </label>

                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full name *
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={120}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className={labelClass}>
                    Company / Brand
                  </label>

                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    maxLength={150}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email address *
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Custom dark inquiry dropdown */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className={labelClass}
                  >
                    Inquiry type *
                  </label>

                  <div className="relative">
                    <input
                      type="hidden"
                      name="subject"
                      value={subject}
                    />

                    <button
                      id="contact-subject"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={subjectOpen}
                      onClick={() =>
                        setSubjectOpen((previous) => !previous)
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Escape") {
                          setSubjectOpen(false);
                        }
                      }}
                      className={`${inputClass} flex cursor-pointer items-center justify-between text-left ${
                        subject
                          ? "text-white"
                          : "text-neutral-400"
                      }`}
                    >
                      <span>
                        {subjectOptions.find(
                          (option) => option.value === subject
                        )?.label || "Select inquiry type"}
                      </span>

                      <FaChevronDown
                        size={11}
                        className={`shrink-0 text-neutral-400 transition-transform duration-300 ${
                          subjectOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {subjectOpen && (
                      <div
                        role="listbox"
                        aria-labelledby="contact-subject"
                        className="absolute left-0 top-full z-50 mt-1 max-h-64 w-full overflow-y-auto border border-white/15 bg-[#111111] py-2 shadow-2xl shadow-black/50"
                      >
                        {subjectOptions.map((option) => {
                          const isSelected =
                            subject === option.value;

                          return (
                            <button
                              key={option.value}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSubject(option.value);
                                setSubjectOpen(false);
                                setStatus(null);
                              }}
                              className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
                            >
                              {option.label}

                              {isSelected && (
                                <FaCheck
                                  size={11}
                                  className="text-white"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className={labelClass}
                >
                  Your message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  maxLength={5000}
                  placeholder="Tell us about your business, products, requirements, and how we can help..."
                  required
                  className={`${inputClass} resize-y leading-7`}
                />
              </div>

              {/* Submission feedback */}
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`flex items-start gap-3 border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-emerald-500/30 bg-emerald-500/[0.07] text-emerald-300"
                      : "border-red-500/30 bg-red-500/[0.07] text-red-300"
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

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex w-full cursor-pointer items-center justify-between bg-white px-6 py-5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>
                  {isSubmitting
                    ? "Sending Message..."
                    : "Send Your Message"}
                </span>

                {isSubmitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              <p className="text-[11px] leading-6 text-neutral-400">
                By submitting this form, you agree that we may
                use your information to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 px-5 py-20 text-center sm:px-8 lg:px-12 lg:py-28">
        <div className="contact-reveal mx-auto max-w-3xl">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Ready to get started?
          </p>

          <h2 className="mb-7 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
            Have a specific product
            <br />
            <span className="text-neutral-400">
              in mind?
            </span>
          </h2>

          <Link
            href="/request-a-quote"
            className="group inline-flex items-center gap-5 bg-white px-7 py-5 text-xs font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-neutral-200"
          >
            Request a Quote

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
