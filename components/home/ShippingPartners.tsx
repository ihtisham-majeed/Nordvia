
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGlobe,
  FaBoxOpen,
  FaTruck,
  FaArrowRight,
  FaShieldAlt,
} from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const logisticsOptions = [
  { name: "DHL", logo: "/logos/dhl.webp" },
  { name: "FedEx", logo: "/logos/fedex.webp" },
  { name: "UPS", logo: "/logos/ups.webp" },
  { name: "TCS", logo: "/logos/tcs.webp" },
];

const shippingFeatures = [
  {
    icon: FaGlobe,
    title: "International Reach",
    description:
      "Shipping arrangements can be coordinated for international destinations.",
  },
  {
    icon: FaBoxOpen,
    title: "Packaging Coordination",
    description:
      "Packaging requirements can be discussed according to your order.",
  },
  {
    icon: FaTruck,
    title: "Flexible Shipping",
    description:
      "Courier and freight options can be considered based on shipment requirements.",
  },
  {
    icon: FaShieldAlt,
    title: "Shipment Coordination",
    description:
      "Delivery arrangements and available tracking details can be communicated during order coordination.",
  },
];

export default function ShippingPartners() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".shipping-reveal",
        {
          autoAlpha: 0,
          y: 35,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, { scope: sectionRef });

  return (
    <section
      id="shipping"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#090909] py-24 text-white sm:py-28 lg:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-white/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="shipping-reveal mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-white/50" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">
              Global Logistics
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
            From our production
            <br />
            network to{" "}
            <span className="text-white/60">your destination.</span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            We coordinate shipping arrangements for international
            apparel orders, helping businesses explore suitable
            delivery options based on their destination and
            shipment requirements.
          </p>
        </div>

        {/* Main content */}
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          {/* Logistics features */}
          <div className="shipping-reveal border border-white/10 bg-white/[0.025] p-6 sm:p-9 lg:p-10">
            <div className="mb-9 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Shipping Coordination
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight">
                  Built around your order.
                </h3>
              </div>

              <FaGlobe className="text-2xl text-white/60" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {shippingFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="group">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                      <Icon className="text-sm" />
                    </div>

                    <p className="mb-2 text-base font-medium">
                      {feature.title}
                    </p>

                    <p className="max-w-xs text-sm leading-6 text-white/60">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Logistics options */}
          <div className="shipping-reveal flex flex-col border border-white/10 bg-[#101010] p-6 sm:p-9 lg:p-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Recognized Logistics Providers
              </p>

              <h3 className="mt-2 text-2xl font-medium tracking-tight">
                Delivery options
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Depending on destination, shipment size and
                availability, suitable courier or freight
                arrangements can be discussed.
              </p>
            </div>

            <div className="my-9 grid grid-cols-2 gap-3">
              {logisticsOptions.map((partner) => (
                <div
                  key={partner.name}
                  className="flex min-h-[105px] items-center justify-center border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    className="h-10 w-full object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>

            <p className="mt-auto border-t border-white/10 pt-5 text-xs leading-6 text-white/60">
              Logos identify their respective logistics brands.
              Their appearance does not imply a formal partnership,
              affiliation or guaranteed availability.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="shipping-reveal mt-6 flex flex-col justify-between gap-6 border border-white/10 bg-white/[0.035] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-lg font-medium tracking-tight">
              Planning an international apparel order?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Discuss your destination and shipping requirements with us.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className="group inline-flex min-h-12 items-center justify-center gap-3 border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-white hover:text-black"
          >
            Request a Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
