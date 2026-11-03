
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaGlobe,
  FaHandshake,
  FaLayerGroup,
  FaLightbulb,
  FaBullseye,
  FaCheck,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    number: "01",
    icon: FaHandshake,
    title: "Partnership First",
    description:
      "We aim to build professional, long-term working relationships through clear communication and a practical understanding of each project.",
  },
  {
    number: "02",
    icon: FaCheck,
    title: "Clarity & Transparency",
    description:
      "From initial requirements to production discussions, we believe expectations, specifications, and limitations should be communicated clearly.",
  },
  {
    number: "03",
    icon: FaLightbulb,
    title: "Flexible Development",
    description:
      "Every brand has its own direction. We work to understand your design, materials, and customization requirements before discussing suitable options.",
  },
  {
    number: "04",
    icon: FaBullseye,
    title: "Attention to Detail",
    description:
      "Product specifications matter. We focus on details such as fabric, construction, finishing, branding, and packaging requirements.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand Your Brand",
    description:
      "We begin by learning about your products, target market, design direction, and order requirements.",
  },
  {
    number: "02",
    title: "Explore the Possibilities",
    description:
      "We discuss suitable materials, customization options, and manufacturing requirements with our production partners.",
  },
  {
    number: "03",
    title: "Coordinate the Project",
    description:
      "Once the specifications are discussed, we coordinate the next steps, including sampling where available and production planning.",
  },
  {
    number: "04",
    title: "Work Toward Delivery",
    description:
      "We coordinate agreed production, verification, packaging, and dispatch arrangements for the order.",
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-content",
        { y: 35, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );

      gsap.utils.toArray<HTMLElement>(".about-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 35, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".about-value-card",
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-values-grid",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".about-approach-card",
        { y: 25, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-approach-grid",
            start: "top 85%",
            once: true,
          },
        }
      );
    }, page);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#090909] text-white"
    >
      {/* HERO */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden border-b border-white/10 pt-32 sm:min-h-[740px] lg:min-h-[800px]">
        <div className="absolute inset-0">
          <Image
            src="/image/hoodie_1.png"
            alt="Apparel design concept"
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
            <p className="about-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/55 sm:text-xs">
              <span className="h-px w-9 bg-white/60" />
              About Nordvia Exports
            </p>

            <h1 className="about-hero-content text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
              Connecting
              <br />
              Ideas With
              <br />
              <span className="text-white/40">Craftsmanship.</span>
            </h1>

            <p className="about-hero-content mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
              We help clothing brands and businesses explore apparel
              manufacturing opportunities through clear communication,
              product-focused planning, and manufacturing partnerships
              in Pakistan.
            </p>

            <div className="about-hero-content mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
              >
                Talk To Our Team
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="about-hero-content mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
            <span>Sialkot, Pakistan</span>
            <span>Apparel Manufacturing & Export</span>
            <span>Working With Brands Worldwide</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="about-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              01 / Who We Are
            </p>

            <h2 className="max-w-lg text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              A practical approach to apparel exports.
            </h2>
          </div>

          <div className="about-reveal flex flex-col justify-center">
            <p className="text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              NORDVIA EXPORTS is an apparel export business based in
              Sialkot, Pakistan. We work with manufacturing partners
              to help international brands and businesses explore
              custom clothing production.
            </p>

            <p className="mt-6 text-sm leading-8 text-white/50 sm:text-base">
              Our focus is on understanding what each project requires:
              the product, fabric, fit, construction, branding, and
              finishing details. We use that information to discuss
              suitable manufacturing possibilities and coordinate the
              project with our production partners.
            </p>

            <p className="mt-6 text-sm leading-8 text-white/50 sm:text-base">
              Whether you are developing a new clothing line or
              sourcing products for an established business, we aim
              to make the initial conversation straightforward,
              informed, and focused on your requirements.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-white/15">
                <FaGlobe className="text-lg text-white/70" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                  Based in Pakistan
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Open to international business inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE AND STATEMENT */}
      <section className="border-y border-white/10 bg-[#101010]">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[360px] sm:min-h-[520px]">
            <Image
              src="/capabilities/custom-development.webp"
              alt="Apparel customization concept"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[0.25em] text-white/70 sm:bottom-9 sm:left-9">
              Product Development Concept
            </div>
          </div>

          <div className="about-reveal flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              Our Perspective
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-5xl">
              Every brand starts with an idea.
            </h2>

            <p className="mt-8 text-sm leading-8 text-white/55 sm:text-base">
              Turning that idea into a product takes more than a
              design. It takes clear specifications, suitable
              materials, thoughtful development, and coordination
              with the right manufacturing resources.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/55 sm:text-base">
              That is where we want to add value: helping you move
              from an initial product brief toward a clear and
              workable manufacturing discussion.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-9 inline-flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:border-white"
            >
              Discuss Your Project
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE WORK WITH */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="about-reveal mb-14 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              02 / Product Focus
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              Apparel possibilities.
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
              We focus on product categories that can be discussed
              and developed with our manufacturing partners, subject
              to design, material, order, and production requirements.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Hoodies & Sweatshirts",
                detail: "Fleece, heavyweight, and custom styles",
              },
              {
                number: "02",
                title: "Sportswear",
                detail: "Tracksuits and performance-inspired apparel",
              },
              {
                number: "03",
                title: "Jackets",
                detail: "Casual, bomber, and outerwear styles",
              },
              {
                number: "04",
                title: "Custom Apparel",
                detail: "Product concepts and private-label requests",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="about-reveal group bg-[#090909] p-7 transition-colors duration-300 hover:bg-[#151515] sm:p-9"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/35">
                  {item.number}
                </span>
                <div className="mb-12 mt-8 h-px w-9 bg-white/30 transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
                <h3 className="text-lg font-semibold uppercase tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-6 text-white/45">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-5">
            <p className="max-w-xl text-[11px] leading-6 text-white/35">
              Specific product availability, customization, minimum
              quantities, and production timelines are confirmed
              during project discussions.
            </p>
            <Link
              href="/products"
              className="hidden shrink-0 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 transition hover:text-white sm:inline-flex"
            >
              View Products <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="about-reveal mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                03 / What Guides Us
              </p>
              <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                How we approach
                <br />
                <span className="text-white/35">every project.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              We believe good business relationships are built
              through realistic expectations, thoughtful
              communication, and attention to the details that
              matter to each order.
            </p>
          </div>

          <div className="about-values-grid grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="about-value-card bg-[#101010] p-7 sm:p-8 lg:min-h-[310px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      {value.number}
                    </span>
                    <Icon className="text-lg text-white/55" />
                  </div>

                  <h3 className="mt-14 text-lg font-semibold uppercase tracking-[-0.02em]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-xs leading-7 text-white/45">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="about-reveal mb-14 max-w-2xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              04 / Working Together
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              From inquiry
              <br />
              <span className="text-white/35">to production.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
              Every order is different, but our starting point is
              simple: understand the requirement, discuss the
              possibilities, and agree on the next steps.
            </p>
          </div>

          <div className="about-approach-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <article
                key={step.number}
                className="about-approach-card border border-white/10 p-7 transition-colors duration-300 hover:border-white/35 sm:p-8"
              >
                <span className="text-xs tracking-[0.2em] text-white/35">
                  {step.number}
                </span>

                <div className="my-8 h-px w-full bg-white/10" />

                <h3 className="text-base font-semibold uppercase tracking-[-0.02em]">
                  {step.title}
                </h3>

                <p className="mt-4 text-xs leading-7 text-white/45">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-24 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="about-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
              05 / Our Manufacturing Approach
            </p>

            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
              The right conversation.
              <br />
              <span className="text-white/35">The right direction.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
              NORDVIA EXPORTS works with manufacturing partners
              rather than presenting itself as an owned factory.
              This approach allows us to discuss project
              requirements and explore suitable production
              possibilities based on the product and order.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
              Manufacturing arrangements, sampling, minimum
              quantities, quality checks, and delivery terms are
              discussed and confirmed according to each project's
              requirements before proceeding.
            </p>
          </div>

          <div className="about-reveal border border-white/10 p-8 sm:p-10">
            <FaLayerGroup className="text-2xl text-white/60" />

            <h3 className="mt-8 text-xl font-semibold uppercase tracking-[-0.025em]">
              Built around your requirements.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Share your product idea, reference images, tech pack,
              or initial specifications. We can start by discussing
              what your project needs and what options may be
              available.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition"
            >
              Start An Inquiry
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#252525] via-[#090909] to-[#090909]" />

        <div className="about-reveal relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            Let's Start A Conversation
          </p>

          <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Have a product
            <br />
            <span className="text-white/35">in mind?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Tell us about your brand, product idea, or sourcing
            requirements. Let's explore the possibilities together.
          </p>

          <Link
            href="/request-a-quote"
            className="group mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
          >
            Request A Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
