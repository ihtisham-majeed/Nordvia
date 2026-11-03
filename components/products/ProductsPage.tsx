
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FaArrowRight,
    FaCheck,
    FaLayerGroup,
    FaPalette,
    FaTags,
    FaRulerCombined,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        id: "hoodies",
        number: "01",
        title: "Hoodies & Sweatshirts",
        subtitle: "Everyday essentials. Elevated.",
        description:
            "Explore fleece hoodies and sweatshirts for streetwear labels, fashion collections, and private-label projects.",
        image: "/products/hoodies.webp",
        imageAlt: "Hoodie and sweatshirt product concept",
        styles: [
            "Pullover hoodies",
            "Zip-up hoodies",
            "Crewneck sweatshirts",
            "Heavyweight styles",
        ],
    },
    {
        id: "tracksuits",
        number: "02",
        title: "Sportswear & Tracksuits",
        subtitle: "Made for movement.",
        description:
            "Discuss coordinated sportswear and tracksuit styles for lifestyle collections, teams, and activewear brands.",
        image: "/products/tracksuits.webp",
        imageAlt: "Tracksuit product concept",
        styles: [
            "Tracksuit sets",
            "Sports jackets",
            "Training tops",
            "Joggers & sweatpants",
        ],
    },
    {
        id: "jackets",
        number: "03",
        title: "Jackets",
        subtitle: "Outerwear with identity.",
        description:
            "Explore casual and statement jacket concepts with options for different materials, construction details, and branding.",
        image: "/products/jackets.webp",
        imageAlt: "Jacket product concept",
        styles: [
            "Bomber jackets",
            "Casual jackets",
            "Leather-look styles",
            "Custom outerwear",
        ],
    },
    {
        id: "coats",
        number: "04",
        title: "Coats & Outerwear",
        subtitle: "Designed for colder days.",
        description:
            "Discuss cold-weather apparel concepts with attention to fabric selection, lining, construction, and finishing.",
        image: "/products/coats.webp",
        imageAlt: "Coat and outerwear product concept",
        styles: [
            "Winter coats",
            "Padded outerwear",
            "Casual cold-weather styles",
            "Custom designs",
        ],
    },
];

const customization = [
    {
        icon: FaLayerGroup,
        title: "Fabric & Materials",
        description:
            "Discuss fabric types, weights, textures, and material options according to your product requirements.",
    },
    {
        icon: FaPalette,
        title: "Colors & Finishes",
        description:
            "Explore color options, garment finishes, and details that support your collection's visual direction.",
    },
    {
        icon: FaTags,
        title: "Branding & Labels",
        description:
            "Discuss private labels, woven labels, printed branding, embroidery, and other identity details.",
    },
    {
        icon: FaRulerCombined,
        title: "Fit & Specifications",
        description:
            "Share size charts, measurements, tech packs, and construction references for project discussions.",
    },
];

const steps = [
    {
        number: "01",
        title: "Choose Your Product",
        description:
            "Tell us which category and styles you are interested in.",
    },
    {
        number: "02",
        title: "Share Requirements",
        description:
            "Send your references, specifications, quantities, and branding details.",
    },
    {
        number: "03",
        title: "Discuss Options",
        description:
            "We discuss feasibility and potential manufacturing arrangements with our partners.",
    },
    {
        number: "04",
        title: "Request A Quote",
        description:
            "Review the proposed details and discuss the next steps for your project.",
    },
];

export default function ProductsPage() {
    const pageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const page = pageRef.current;
        if (!page) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".products-hero-content",
                { y: 35, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 1,
                    stagger: 0.14,
                    ease: "power3.out",
                }
            );

            gsap.utils.toArray<HTMLElement>(".products-reveal").forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 35, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            once: true,
                        },
                    }
                );
            });

            gsap.fromTo(
                ".product-card",
                { y: 35, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    stagger: 0.14,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".products-grid",
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".customization-card",
                { y: 25, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".customization-grid",
                        start: "top 85%",
                        once: true,
                    },
                }
            );

            gsap.fromTo(
                ".product-step",
                { y: 25, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".products-steps-grid",
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
        <main ref={pageRef} className="overflow-hidden bg-[#090909] text-white">
            {/* HERO */}
            <section className="relative flex min-h-[650px] items-end overflow-hidden border-b border-white/10 pt-32 sm:min-h-[730px] lg:min-h-[790px]">
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
                        <p className="products-hero-content mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/55 sm:text-xs">
                            <span className="h-px w-9 bg-white/60" />
                            Our Product Categories
                        </p>

                        <h1 className="products-hero-content text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
                            Apparel
                            <br />
                            For Your
                            <br />
                            <span className="text-white/40">Next Collection.</span>
                        </h1>

                        <p className="products-hero-content mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                            Explore apparel categories and customization possibilities
                            for your brand. From everyday essentials to statement
                            outerwear, let's discuss the products you want to develop.
                        </p>

                        <div className="products-hero-content mt-10 flex flex-wrap gap-4">
                            <Link
                                href="#product-categories"
                                className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition hover:bg-white/85"
                            >
                                Explore Categories
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="/request-a-quote"
                                className="inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/5"
                            >
                                Request A Quote
                            </Link>
                        </div>
                    </div>

                    <div className="products-hero-content mt-20 flex flex-wrap items-center justify-between gap-5 border-t border-white/20 pt-6 text-[9px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
                        <span>Hoodies & Sweatshirts</span>
                        <span>Sportswear & Tracksuits</span>
                        <span>Jackets & Outerwear</span>
                        <span>Custom Apparel</span>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
                <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div className="products-reveal">
                        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                            01 / Explore Our Range
                        </p>

                        <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                            Find the right
                            <br />
                            <span className="text-white/35">starting point.</span>
                        </h2>
                    </div>

                    <p className="products-reveal max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                        Every collection starts with a product idea. Explore the
                        categories below, then tell us about your preferred style,
                        materials, branding, and order requirements. We will discuss
                        the possibilities based on your project and manufacturing
                        partner availability.
                    </p>
                </div>
            </section>

            {/* PRODUCT CATEGORIES */}
            <section
                id="product-categories"
                className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32 lg:px-16"
            >
                <div className="products-grid mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-2">
                    {products.map((product) => (
                        <article
                            id={product.id}
                            key={product.id}
                            className="product-card group min-w-0 scroll-mt-28 border border-white/10 bg-[#101010]"
                        >
                            <div className="relative aspect-[1.2/1] overflow-hidden bg-[#171717] sm:aspect-[1.25/1]">
                                <Image
                                    src={product.image}
                                    alt={product.imageAlt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 620px"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

                                <span className="absolute left-5 top-5 border border-white/30 bg-black/20 px-3 py-2 text-[9px] font-semibold tracking-[0.2em] backdrop-blur-sm">
                                    CATEGORY {product.number}
                                </span>

                                <span className="absolute bottom-5 right-5 text-[9px] font-medium uppercase tracking-[0.2em] text-white/70">
                                    Illustrative product concept
                                </span>
                            </div>

                            <div className="p-6 sm:p-8">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                                    {product.subtitle}
                                </p>

                                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.035em] sm:text-3xl">
                                    {product.title}
                                </h3>

                                <p className="mt-4 max-w-xl text-xs leading-7 text-white/50 sm:text-sm">
                                    {product.description}
                                </p>

                                <div className="mt-7 border-t border-white/10 pt-6">
                                    <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                        Styles To Explore
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {product.styles.map((style) => (
                                            <span
                                                key={style}
                                                className="border border-white/10 px-3 py-2 text-[10px] text-white/65"
                                            >
                                                {style}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href={`/products/${product.id}`}
                                    className="group/link mt-8 inline-flex items-center gap-4 border-b border-white/25 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] transition hover:border-white"
                                >
                                    Explore This Product
                                    <FaArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CUSTOMIZATION */}
            <section
                id="custom-apparel"
                className="scroll-mt-24 border-y border-white/10 bg-[#101010] px-5 py-24 sm:px-8 sm:py-32 lg:px-16"
            >
                <div className="mx-auto max-w-[1440px]">
                    <div className="products-reveal mb-14 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                        <div>
                            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                                02 / Make It Your Own
                            </p>

                            <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                                Your product.
                                <br />
                                <span className="text-white/35">Your identity.</span>
                            </h2>
                        </div>

                        <p className="max-w-xl text-sm leading-8 text-white/50 sm:text-base">
                            The details help make a product your own. Share your
                            preferred specifications and branding direction so we
                            can discuss suitable customization options.
                        </p>
                    </div>

                    <div className="customization-grid grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                        {customization.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="customization-card bg-[#101010] p-7 sm:p-8"
                                >
                                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                                        0{index + 1}
                                    </span>

                                    <Icon className="mt-10 text-2xl text-white/65" />

                                    <h3 className="mt-7 text-base font-semibold uppercase tracking-[-0.02em]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-xs leading-7 text-white/45">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    <div
                        id="joggers"
                        className="products-reveal mt-8 flex scroll-mt-28 flex-col justify-between gap-5 border border-white/10 p-6 sm:flex-row sm:items-center sm:p-8"
                    >
                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/40">
                                Additional Product Interest
                            </p>
                            <h3 className="mt-3 text-xl font-semibold uppercase tracking-[-0.03em]">
                                Joggers & Sweatpants
                            </h3>
                            <p className="mt-2 max-w-xl text-xs leading-6 text-white/45">
                                Ask us about coordinating joggers, sweatpants, and
                                related styles for your collection.
                            </p>
                        </div>

                        <Link
                            href="/request-a-quote"
                            className="group inline-flex shrink-0 items-center gap-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
                        >
                            Enquire About This
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <p className="mt-6 text-[10px] leading-6 text-white/35">
                        Customization options depend on the selected product,
                        materials, specifications, order quantity, and
                        manufacturing feasibility.
                    </p>
                </div>
            </section>

            {/* HOW TO START */}
            <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
                <div className="mx-auto max-w-[1440px]">
                    <div className="products-reveal mb-14 max-w-2xl">
                        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                            03 / Start Your Project
                        </p>

                        <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.045em] sm:text-6xl">
                            From product idea
                            <br />
                            <span className="text-white/35">to inquiry.</span>
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
                            A clear starting brief helps us understand your
                            requirements and discuss the next steps.
                        </p>
                    </div>

                    <div className="products-steps-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <article
                                key={step.number}
                                className="product-step border border-white/10 p-7 transition-colors duration-300 hover:border-white/35 sm:p-8"
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

                    <div className="products-reveal mt-10 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
                        <FaCheck className="text-white/60" />
                        <span>
                            Tech packs, reference images, and initial product
                            descriptions are welcome.
                        </span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden border-t border-white/10 px-5 py-28 sm:px-8 sm:py-36 lg:px-16">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#252525] via-[#090909] to-[#090909]" />

                <div className="products-reveal relative z-10 mx-auto max-w-4xl text-center">
                    <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                        Let's Discuss Your Requirements
                    </p>

                    <h2 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                        Ready to develop
                        <br />
                        <span className="text-white/35">your collection?</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
                        Tell us what you want to make. Share your product
                        category, specifications, and project requirements
                        to begin the conversation.
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
