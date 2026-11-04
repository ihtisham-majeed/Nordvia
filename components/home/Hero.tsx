
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaArrowRight,
  FaGlobe,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

type ProductSlide = {
  number: string;
  category: string;
  title: string;
  secondLine: string;
  description: string;
  image: string;
  imageAlt: string;
};

const products: ProductSlide[] = [
  {
    number: "01",
    category: "STREETWEAR COLLECTION",
    title: "Built for Brands.",
    secondLine: "Made for Everyday.",
    description:
      "Premium heavyweight hoodies and sweatshirts, developed around your brand identity.",
    image: "/image/hoodie_1.webp",
    imageAlt: "Black heavyweight hoodie design concept",
  },
  {
    number: "02",
    category: "PERFORMANCE COLLECTION",
    title: "Designed to Move.",
    secondLine: "Made to Perform.",
    description:
      "Custom sportswear and tracksuits developed for active lifestyles and ambitious brands.",
    image: "/image/Tracksuit.webp",
    imageAlt: "Custom tracksuit design concept",
  },
  {
    number: "03",
    category: "LEATHER COLLECTION",
    title: "A Timeless Look.",
    secondLine: "A Distinct Identity.",
    description:
      "Explore custom leather jacket concepts with distinctive silhouettes and detailing.",
    image: "/image/Black_Leather_Jacket.webp",
    imageAlt: "Black leather jacket design concept",
  },
  {
    number: "04",
    category: "LEATHER COLLECTION",
    title: "Make It Yours.",
    secondLine: "Define Your Style.",
    description:
      "Develop distinctive leather outerwear in custom colors, finishes and brand details.",
    image: "/image/Brown_Leather_Jacket.webp",
    imageAlt: "Brown leather jacket design concept",
  },
];

const trustPoints = [
  { icon: FaGlobe, label: "Global shipping" },
  { icon: FaShieldAlt, label: "Quality focused" },
  { icon: FaHandshake, label: "Trusted partnership" },
];

const LAST = products.length - 1;

const getNavHeight = () =>
  window.innerWidth < 768 ? 58 : 76;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const render = (p: number) => {
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;

        const distance = Math.abs(p - i);
        const visible = clamp(1 - distance);
        const eased = visible * visible * (3 - 2 * visible);

        slide.style.opacity = String(eased);
        slide.style.zIndex = String(Math.round(eased * 10));

        const stage = stageRefs.current[i];
        if (stage) {
          stage.style.transform = `scale(${1 + distance * 0.06})`;
        }

        const content = contentRefs.current[i];
        if (content) {
          content.style.opacity = String(clamp(1 - distance * 1.8));
          content.style.transform = `translate3d(0, ${(i - p) * 32}px, 0)`;
        }
      });

      const next = clamp(Math.round(p), 0, LAST);

      setActiveIndex((current) =>
        current === next ? current : next
      );
    };

    const ctx = gsap.context(() => {
      const proxy = { p: 0 };
      render(0);

      const tween = gsap.to(proxy, {
        p: LAST,
        ease: "none",
        onUpdate: () => render(proxy.p),
        scrollTrigger: {
          trigger: section,
          start: () => `top top+=${getNavHeight()}`,
          end: () => `+=${window.innerHeight * 0.9 * LAST}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          scrub: 0.7,
          snap: {
            snapTo: 1 / LAST,
            duration: { min: 0.3, max: 0.7 },
            delay: 0.08,
            ease: "power2.inOut",
          },
        },
      });

      triggerRef.current = tween.scrollTrigger ?? null;
    }, section);

    const handleLoad = () => ScrollTrigger.refresh();

    if (document.readyState === "complete") {
      requestAnimationFrame(handleLoad);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      ctx.revert();
      triggerRef.current = null;
    };
  }, []);

  const goToSlide = useCallback((index: number) => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const target =
      trigger.start +
      (index / LAST) * (trigger.end - trigger.start);

    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  }, []);

  const activeProduct = products[activeIndex];

  return (
    <div>
      <section
        ref={sectionRef}
        id="home"
        className="
          relative isolate flex w-full flex-col overflow-hidden
          bg-[#070707] text-white
          h-[calc(100svh-58px)] min-h-[640px]
          sm:min-h-[680px]
          md:h-[calc(100svh-76px)] md:min-h-[650px]
          lg:landscape:min-h-[600px]
        "
      >
        {/* SLIDES */}
        <div className="relative min-h-0 flex-1">
          {products.map((product, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={product.number}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                aria-hidden={!isActive}
                style={{ opacity: index === 0 ? 1 : 0 }}
                className={`absolute inset-0 ${
                  isActive ? "" : "pointer-events-none"
                }`}
              >
                {/* FULL BACKGROUND PRODUCT IMAGE */}
                <div
                  className="
                    absolute inset-0 z-0
                    lg:landscape:left-[42%]
                  "
                >
                  <div
                    ref={(el) => {
                      stageRefs.current[index] = el;
                    }}
                    className="absolute inset-0 will-change-transform"
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      quality={90}
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="
                        (max-width: 1023px) 100vw,
                        65vw
                      "
                      className="
                        object-cover object-center
                        lg:landscape:object-cover
                      "
                    />
                  </div>

                  {/* MOBILE + TABLET IMAGE OVERLAY */}
                  <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#070707] via-[#070707]/55
                    to-[#070707]/10
                    lg:landscape:hidden
                  " />

                  {/* MOBILE + TABLET SIDE SHADE */}
                  <div className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-[#070707]/35 via-transparent
                    to-[#070707]/20
                    lg:landscape:hidden
                  " />

                  {/* DESKTOP IMAGE BLENDING */}
                  <div className="
                    absolute inset-y-0 left-0 hidden w-[25%]
                    bg-gradient-to-r from-[#070707] to-transparent
                    lg:landscape:block
                  " />

                  <div className="
                    absolute inset-y-0 right-0 hidden w-[10%]
                    bg-gradient-to-l from-[#070707] to-transparent
                    lg:landscape:block
                  " />

                  <div className="
                    absolute inset-x-0 bottom-0 hidden h-[15%]
                    bg-gradient-to-t from-[#070707] to-transparent
                    lg:landscape:block
                  " />
                </div>

                {/* FOREGROUND TEXT */}
                <div className="
                  relative z-10 flex h-full min-h-0
                  items-end px-5 pb-5
                  sm:px-10 sm:pb-8
                  md:px-14 md:pb-10
                  lg:landscape:items-center
                  lg:landscape:px-0
                  lg:landscape:pb-0
                  lg:landscape:pl-[4%]
                ">
                  <div
                    ref={(el) => {
                      contentRefs.current[index] = el;
                    }}
                    style={{ opacity: index === 0 ? 1 : 0 }}
                    className="
                      w-full max-w-[620px]
                      will-change-[opacity,transform]
                      lg:landscape:w-[42%]
                    "
                  >
                    {/* CATEGORY */}
                    <div className="
                      mb-3 flex items-center gap-3
                      sm:mb-5 sm:gap-4
                    ">
                      <span className="h-px w-8 bg-white/80 sm:w-12" />

                      <span className="
                        text-[9px] font-semibold uppercase
                        tracking-[0.2em] text-white/90
                        sm:text-xs sm:tracking-[0.25em]
                      ">
                        {product.category}
                      </span>
                    </div>

                    {/* HEADING */}
                    {index === 0 ? (
                      <h1 className="
                        text-[clamp(2.1rem,8vw,3.5rem)]
                        font-semibold leading-[1.04]
                        tracking-[-0.045em]
                        lg:landscape:text-[clamp(2.2rem,4vw,5rem)]
                      ">
                        <span className="block">{product.title}</span>
                        <span className="block text-white/60">
                          {product.secondLine}
                        </span>
                      </h1>
                    ) : (
                      <h2 className="
                        text-[clamp(2.1rem,8vw,3.5rem)]
                        font-semibold leading-[1.04]
                        tracking-[-0.045em]
                        lg:landscape:text-[clamp(2.2rem,4vw,5rem)]
                      ">
                        <span className="block">{product.title}</span>
                        <span className="block text-white/60">
                          {product.secondLine}
                        </span>
                      </h2>
                    )}

                    {/* DESCRIPTION */}
                    <p className="
                      mt-3 max-w-[460px]
                      text-[12px] leading-[1.7] text-white/80
                      sm:mt-5 sm:text-base sm:leading-8
                    ">
                      {product.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="
                      mt-4 flex flex-col gap-2
                      min-[400px]:flex-row
                      sm:mt-7 sm:gap-3
                    ">
                      <Link
                        href="/request-a-quote"
                        tabIndex={isActive ? 0 : -1}
                        className="
                          group inline-flex min-h-[46px]
                          items-center justify-center gap-2
                          rounded-full bg-white px-5
                          text-[12px] font-semibold text-black
                          transition-colors hover:bg-white/85
                          min-[400px]:flex-1
                          sm:min-h-[52px] sm:flex-none
                          sm:gap-3 sm:px-7 sm:text-sm
                        "
                      >
                        Discuss Your Collection
                        <FaArrowRight className="
                          hidden transition-transform
                          group-hover:translate-x-1 sm:block
                        " />
                      </Link>

                      <Link
                        href="#catalog"
                        tabIndex={isActive ? 0 : -1}
                        className="
                          inline-flex min-h-[46px]
                          items-center justify-center gap-2
                          rounded-full border border-white/50
                          bg-black/20 px-5
                          text-[12px] font-semibold text-white
                          backdrop-blur-sm transition-colors
                          hover:bg-white hover:text-black
                          min-[400px]:flex-1
                          sm:min-h-[52px] sm:flex-none
                          sm:gap-3 sm:px-7 sm:text-sm
                        "
                      >
                        Explore Products
                        <FaArrowRight className="hidden sm:block" />
                      </Link>
                    </div>

                    {/* TRUST POINTS */}
                    <ul className="
                      mt-8 hidden items-center gap-6
                      text-xs text-white/65
                      xl:landscape:flex
                    ">
                      {trustPoints.map(({ icon: Icon, label }) => (
                        <li key={label} className="flex items-center gap-2">
                          <Icon className="text-base" />
                          {label}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM NAVIGATION */}
        <div className="
          relative z-30 flex shrink-0 items-center
          gap-2 px-4 pb-3 pt-2
          sm:gap-3 sm:px-10 sm:pb-5
          lg:landscape:px-[4%]
        ">
          {/* THUMBNAILS */}
          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2 sm:-mt-40">
            {products.map((product, index) => (
              <button
                key={product.number}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`View ${product.category} (${product.number})`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`
                  relative h-[34px] w-[43px] shrink-0
                  overflow-hidden rounded-md border
                  bg-black/50 transition-all duration-300
                  min-[380px]:h-[38px] min-[380px]:w-[48px]
                  sm:h-[52px] sm:w-[78px] sm:rounded-lg
                  lg:w-[92px]
                  ${
                    activeIndex === index
                      ? "border-white opacity-100 ring-1 ring-white/50"
                      : "border-white/30 opacity-65 hover:opacity-100"
                  }
                `}
              >
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="92px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* COUNTER */}
          <div className="
            ml-auto flex shrink-0 items-center
            gap-1.5 text-xs sm:gap-3 sm:text-sm
            lg:landscape:pr-40
          ">
            <span className="font-semibold tabular-nums">
              {activeProduct.number}
            </span>

            <span className="tabular-nums text-white/55">
              / {String(products.length).padStart(2, "0")}
            </span>

            <div className="
              hidden h-[2px] w-16 overflow-hidden
              bg-white/30 sm:block sm:w-24
            ">
              <div
                className="h-full bg-white transition-[width] duration-500 ease-out"
                style={{
                  width: `${((activeIndex + 1) / products.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
