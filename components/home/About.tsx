"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Highlighter } from "@/components/ui/highlighter";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Image */}
          <div className="about-item relative w-full h-105 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/About.webp"
              alt="Nordvia Manufacturing"
              fill
              className="object-cover"
              priority
            />
            {/* subtle dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </div>

          {/* Text */}
          <div className="space-y-6 text-base leading-relaxed opacity-80 sm:text-base">
            <h2 className="about-item text-3xl font-semibold sm:text-4xl text-white">
              <Highlighter action="circle" color="#FF9800" padding={15}>
                About Nordvia
              </Highlighter>
            </h2>

            <p className="about-item">
              Nordvia is a Sialkot based winter apparel manufacturer
              specializing in premium hoodies, tracksuits, and jackets for
              international brands.
            </p>

            <p className="about-item">
              With a focus on fabric quality, precise stitching, and dependable
              production, we support startups and growing labels through low
              minimum order quantities and full customization.
            </p>

            <p className="about-item">
              Our goal is simple, to be a reliable manufacturing partner for
              brands serving cold climates worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
