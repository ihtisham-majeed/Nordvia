"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Example category-wise products
const categories = [
  {
    category: "Winter Jackets",
    items: [
      { title: "Nordvia Puffer Jacket", image: "/products/jacket1.webp" },
      { title: "Nordvia Windbreaker Jacket", image: "/products/jacket2.webp" },
      {
        title: "Nordvia Arctic Edge Softshell Jacket",
        image: "/products/Jackets/black_jacket/soft_jacket.webp",
      },
    ],
  },
  {
    category: "Hoodies & Sweatshirts",
    items: [
      { title: "Premium Fleece Hoodie", image: "/products/hoodie1.webp" },
      { title: "Zip-Up Hoodie", image: "/products/hoodie2.webp" },
      { title: "Pullover Hoodie", image: "/products/hoodie3.webp" },
    ],
  },
  {
    category: "Casual Winter Coats",
    items: [
      {
        title: "Nordvia PolarCraft Wool-Blend Coat",

        image: "/products/Coats/Black_Coat/plain_coat.webp",
      },
      {
        title: "Nordvia Classic Winter Coat",

        image: "/products/Coats/check_coat/check_coat.webp",
      },
      {
        title: "Nordvia PolarCraft Wool-Blend Coat - Long",
        image: "/products/Coats/long_coat/long_coat.webp",
      },
    ],
  },

  {
    category: "Winter Gloves",
    items: [
      {
        title: "Nordvia Winter Gloves",
        image: "/products/glove/glove.png",
      },
    ],
  },
];

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".product-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="catalog" className="bg-black py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6  text-white">
        <h2 className="shipping-item text-4xl mb-4 md:text-5xl font-bold leading-tight">
          Our Catalog
        </h2>
        <div>
          {categories.map((cat) => (
            <div key={cat.category} className="mb-16">
              {/* Category Heading */}
              <h2 className="text-3xl font-semibold sm:text-4xl mb-6">
                {cat.category}
              </h2>

              {/* Product Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cat.items.map((item) => (
                  <div
                    key={item.title}
                    className="product-card group relative h-100 overflow-hidden rounded-2xl border border-white/10 shadow-lg"
                  >
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-no-repeat bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Title */}
                    <div className="relative z-10 flex h-full flex-col justify-end text-center p-5">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
