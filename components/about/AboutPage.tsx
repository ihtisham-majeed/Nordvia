"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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

  useGSAP(() => {
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
  }, { scope: pageRef });

  return (
    <main ref={pageRef} className="overflow-hidden bg-white text-[#171717]">
      {/* HERO — BLACK */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden border-b border-white/10 bg-[#090909] pt-32 sm:min-h-[740px] lg:min-h-[800px]">
        <div className="absolute inset-0">
          <Image
            src="/image/hoodie_1.webp"
            alt="Custom apparel manufacturing for brands"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-45"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-[#090909]/75 to-[#090909]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-[#090909]/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 sm:px-8 sm:pb-24 md:px-12 lg:px-20 lg:pb-28">
          <div className="max-w-5xl">
            <p className="about-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 sm:text-xs sm:tracking-[0.35em]">
              <span className="h-px w-9 bg-white/60" />
              About Nordvia Exports
            </p>

            <h1 className="about-hero-content text-[clamp(3.2rem,8vw,7.5rem)] font-semibold uppercase leading-[0.93] tracking-[-0.065em] text-white">
              Connecting
              <br />
              Ideas With
              <br />
              <span className="text-white">Craftsmanship.</span>
            </h1>

            <p className="about-hero-content mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:text-lg">
              We help clothing brands and businesses explore apparel
              manufacturing opportunities through clear communication,
              product-focused planning, and manufacturing partnerships
              in Pakistan.
            </p>

            <div className="about-hero-content mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-white/85 sm:py-5 sm:text-xs"
              >
                Talk To Our Team
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-3 border border-white/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:border-white hover:bg-white/10 sm:py-5 sm:text-xs"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="about-hero-content mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.2em] text-white/50 sm:text-[10px]">
            <span>Sialkot, Pakistan</span>
            <span>Apparel Manufacturing & Export</span>
            <span>Working With Brands Worldwide</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="about-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              01 / Who We Are
            </p>

            <h2 className="max-w-xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em] text-[#171717]">
              A Practical Approach To Apparel Exports.
            </h2>
          </div>

          <div className="about-reveal flex flex-col justify-center">
            <p className="text-base leading-8 text-black/75 sm:text-lg sm:leading-9 lg:text-xl">
              NORDVIA EXPORTS is an apparel export business based in
              Sialkot, Pakistan. We work with manufacturing partners
              to help international brands and businesses explore
              custom clothing production.
            </p>

            <p className="mt-6 text-sm leading-8 text-black/55 sm:text-base">
              Our focus is on understanding what each project requires:
              the product, fabric, fit, construction, branding, and
              finishing details. We use that information to discuss
              suitable manufacturing possibilities and coordinate the
              project with our production partners.
            </p>

            <p className="mt-6 text-sm leading-8 text-black/55 sm:text-base">
              Whether you are developing a new clothing line or
              sourcing products for an established business, we aim
              to make the initial conversation straightforward,
              informed, and focused on your requirements.
            </p>

            <div className="mt-10 flex items-center gap-4 border-t border-black/15 pt-7">
              <div className="flex h-12 w-12 items-center justify-center border border-black/15">
                <FaGlobe className="text-lg text-black/65" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-black">
                  Based in Pakistan
                </p>
                <p className="mt-1 text-xs text-black/45">
                  Open to international business inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE AND STATEMENT — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[360px] sm:min-h-[520px]">
            <Image
              src="/image/hoodie_1.webp"
              alt="Custom apparel customization and development"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-6 left-6 text-[9px] font-medium uppercase tracking-[0.25em] text-white/75 sm:bottom-9 sm:left-9 sm:text-[10px]">
              Product Development Concept
            </div>
          </div>

          <div className="about-reveal flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/45 sm:text-xs sm:tracking-[0.3em]">
              Our Perspective
            </p>

            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em] text-white">
              Every Brand Starts With An Idea.
            </h2>

            <p className="mt-8 text-sm leading-8 text-white/60 sm:text-base">
              Turning that idea into a product takes more than a
              design. It takes clear specifications, suitable
              materials, thoughtful development, and coordination
              with the right manufacturing resources.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/60 sm:text-base">
              That is where we want to add value: helping you move
              from an initial product brief toward a clear and
              workable manufacturing discussion.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-9 inline-flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-white sm:text-xs"
            >
              Discuss Your Project
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE WORK WITH — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="about-reveal mb-12 max-w-3xl sm:mb-16">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              02 / Product Focus
            </p>

            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em] text-[#171717]">
              Apparel Possibilities.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
              We focus on product categories that can be discussed
              and developed with our manufacturing partners, subject
              to design, material, order, and production requirements.
            </p>
          </div>

          <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
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
                className="about-reveal group bg-white p-7 transition-colors duration-300 hover:bg-[#f5f5f5] sm:p-9"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-black/40 sm:text-xs">
                  {item.number}
                </span>

                <div className="mb-12 mt-8 h-px w-9 bg-black/30 transition-all duration-300 group-hover:w-16 group-hover:bg-black" />

                <h3 className="text-[clamp(1.1rem,2vw,1.4rem)] font-semibold uppercase leading-snug tracking-[-0.025em] text-[#171717]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-black/55 sm:text-sm">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="max-w-xl text-[11px] leading-6 text-black/45 sm:text-xs">
              Specific product availability, customization, minimum
              quantities, and production timelines are confirmed
              during project discussions.
            </p>

            <Link
              href="/products"
              className="group inline-flex w-fit shrink-0 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/65 transition hover:text-black sm:text-xs"
            >
              View Products
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="about-reveal mb-12 flex flex-col justify-between gap-6 sm:mb-16 lg:flex-row lg:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.3em]">
                03 / What Guides Us
              </p>

              <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em] text-white">
                How We Approach
                <br />
                <span className="text-white/40">Every Project.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
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
                  className="about-value-card bg-[#101010] p-7 transition-colors duration-300 hover:bg-[#191919] sm:p-8 lg:min-h-[310px]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-white/40 sm:text-xs">
                      {value.number}
                    </span>

                    <Icon className="text-lg text-white/60" />
                  </div>

                  <h3 className="mt-12 text-[clamp(1.1rem,2vw,1.4rem)] font-semibold uppercase leading-snug tracking-[-0.025em] text-white sm:mt-14">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-[13px] leading-7 text-white/50 sm:text-sm">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="about-reveal mb-12 max-w-3xl sm:mb-16">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              04 / Working Together
            </p>

            <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em] text-[#171717]">
              From Inquiry
              <br />
              <span className="text-black/35">To Production.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
              Every order is different, but our starting point is
              simple: understand the requirement, discuss the
              possibilities, and agree on the next steps.
            </p>
          </div>

          <div className="about-approach-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <article
                key={step.number}
                className="about-approach-card border border-black/15 bg-white p-7 transition-colors duration-300 hover:border-black/40 hover:bg-[#f8f8f8] sm:p-8"
              >
                <span className="text-xs tracking-[0.2em] text-black/40">
                  {step.number}
                </span>

                <div className="my-8 h-px w-full bg-black/10" />

                <h3 className="text-[clamp(1.05rem,1.7vw,1.25rem)] font-semibold uppercase leading-snug tracking-[-0.025em] text-[#171717]">
                  {step.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-black/55 sm:text-sm">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
          <div className="about-reveal">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.3em]">
              05 / Our Manufacturing Approach
            </p>

            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em] text-white">
              The Right Conversation.
              <br />
              <span className="text-white/40">The Right Direction.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              NORDVIA EXPORTS works with manufacturing partners
              rather than presenting itself as an owned factory.
              This approach allows us to discuss project
              requirements and explore suitable production
              possibilities based on the product and order.
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/60 sm:text-base">
              Manufacturing arrangements, sampling, minimum
              quantities, quality checks, and delivery terms are
              discussed and confirmed according to each project's
              requirements before proceeding.
            </p>
          </div>

          <div className="about-reveal border border-white/15 bg-[#151515] p-7 sm:p-10">
            <FaLayerGroup className="text-2xl text-white/65" />

            <h3 className="mt-8 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold uppercase leading-snug tracking-[-0.025em] text-white">
              Built Around Your Requirements.
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/55">
              Share your product idea, reference images, tech pack,
              or initial specifications. We can start by discussing
              what your project needs and what options may be
              available.
            </p>

            <Link
              href="/request-a-quote"
              className="group mt-8 inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:text-white/70 sm:text-xs"
            >
              Start An Inquiry
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA — WHITE */}
      <section className="relative overflow-hidden bg-white px-5 py-24 text-[#171717] sm:px-8 sm:py-28 md:px-12 lg:px-20 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.045),transparent_65%)]" />

        <div className="about-reveal relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
            Let&apos;s Start A Conversation
          </p>

          <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-semibold uppercase leading-[0.98] tracking-[-0.06em] text-[#171717]">
            Have A Product
            <br />
            <span className="text-black/35">In Mind?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-black/55 sm:text-base sm:leading-8">
            Tell us about your brand, product idea, or sourcing
            requirements. Let&apos;s explore the possibilities together.
          </p>

          <Link
            href="/request-a-quote"
            className="group mt-10 inline-flex items-center gap-5 bg-black px-8 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-black/80 sm:text-xs"
          >
            Request A Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}