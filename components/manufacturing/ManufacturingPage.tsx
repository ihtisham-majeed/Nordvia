
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { manufacturingServices } from "./serviceData";

const capabilities = [
  {
    number: "01",
    title: "Product Development",
    description:
      "Discuss garment concepts, specifications, construction and development requirements.",
  },
  {
    number: "02",
    title: "Material Coordination",
    description:
      "Explore fabric compositions, weights, colors and material options for your products.",
  },
  {
    number: "03",
    title: "Brand Customization",
    description:
      "Coordinate labels, artwork, embroidery, printing and other available brand details.",
  },
  {
    number: "04",
    title: "Production Coordination",
    description:
      "Move forward with agreed specifications through our manufacturing partner network.",
  },
];

const steps = [
  ["01", "Share Your Vision", "Tell us about your brand, products and requirements."],
  ["02", "Discuss Specifications", "Review materials, construction, customization and quantities."],
  ["03", "Confirm Development", "Agree on the project scope, available options and next steps."],
  ["04", "Coordinate Production", "Proceed with the confirmed requirements and production arrangements."],
];

export default function ManufacturingPage() {
  return (
    <main className="overflow-hidden bg-[#090909] text-white">
      {/* HERO — BLACK */}
      <section className="relative flex min-h-[650px] items-end overflow-hidden border-b border-white/10 sm:min-h-[720px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.12),transparent_40%),linear-gradient(120deg,#101010,#090909_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:text-xs">
            <span className="h-px w-9 bg-white/50" />
            NORDVIA EXPORTS / MANUFACTURING
          </p>

          <h1 className="max-w-5xl text-[clamp(3.2rem,7.5vw,6.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.065em]">
            Built Around
            <br />
            Your Vision<span className="text-white/35">.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-[14px] leading-7 text-white/60 sm:text-[16px] sm:leading-8">
              Apparel development and manufacturing coordination for
              fashion brands, independent labels and growing businesses.
              From product specifications to custom branding, we help
              organize the details behind your next collection.
            </p>

            <Link
              href="/request-a-quote"
              className="group inline-flex w-fit items-center gap-5 border border-white/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black sm:px-7 sm:py-5"
            >
              Discuss Your Project
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-20 flex flex-wrap justify-between gap-5 border-t border-white/15 pt-6 text-[9px] font-medium uppercase tracking-[0.18em] text-white/40 sm:text-[10px]">
            <span>Product Development</span>
            <span>Material Coordination</span>
            <span>Private Label</span>
            <span>Production Coordination</span>
          </div>
        </div>
      </section>

      {/* INTRO — WHITE */}
      <section className="bg-white px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
              Our Approach
            </p>

            <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
              More Than
              <br />
              A Garment.
              <br />
              <span className="text-black/30">A Brand Identity.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:pb-2">
            <p className="text-[15px] leading-8 text-black/65 sm:text-[17px] sm:leading-9">
              At NORDVIA EXPORTS, we work with manufacturing partners to
              coordinate apparel projects around each brand&apos;s needs.
              We focus on understanding the product, discussing practical
              specifications and organizing suitable customization and
              production requirements.
            </p>

            <p className="mt-6 text-[14px] leading-8 text-black/45 sm:text-[15px]">
              Based in Sialkot, Pakistan, we aim to make apparel project
              coordination clear, practical and straightforward for
              international customers.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — BLACK */}
      <section className="border-y border-white/10 bg-[#090909] px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                What We Coordinate
              </p>

              <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[1] tracking-[-0.055em]">
                Our Capabilities
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-7 text-white/50 sm:text-[14px]">
              Flexible project discussions covering the details that matter
              when developing and customizing apparel.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="min-h-[250px] border border-white/10 bg-[#111111] p-7 transition duration-300 hover:border-white/30 hover:bg-[#171717] sm:p-8"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/35">
                  {item.number}
                </span>

                <div className="my-8 h-px w-10 bg-white/20" />

                <h3 className="text-[17px] font-semibold uppercase leading-snug tracking-[-0.025em] sm:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/45 sm:text-[14px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — WHITE */}
      <section className="bg-[#F4F3EF] px-5 py-20 text-[#111111] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Explore Our Services
              </p>

              <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
                Manufacturing
                <br />
                Services<span className="text-black/30">.</span>
              </h2>
            </div>

            <p className="max-w-md text-[13px] leading-7 text-black/55 sm:text-[14px]">
              Explore the different services available for discussing,
              developing and coordinating your apparel project.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {manufacturingServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex min-h-[250px] cursor-pointer flex-col justify-between border border-black/10 bg-white p-7 transition duration-300 hover:border-black/30 hover:bg-[#FAFAF8] sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-black/35">
                    {service.number} / 07
                  </span>

                  <FaArrowRight className="text-lg text-black/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                </div>

                <div className="mt-12">
                  <h3 className="text-[clamp(1.35rem,2.5vw,1.9rem)] font-semibold uppercase leading-tight tracking-[-0.04em]">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-[13px] leading-7 text-black/55 sm:text-[14px]">
                    {service.description}
                  </p>

                  <span className="mt-7 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/65 transition group-hover:text-black">
                    Explore Service
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — BLACK */}
      <section className="border-y border-white/10 bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              How We Work
            </p>

            <h2 className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
              From Brief
              <br />
              To Production.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <article key={number} className="border-t border-white/20 pt-6">
                <span className="text-[10px] tracking-[0.2em] text-white/35">
                  {number}
                </span>

                <h3 className="mt-9 text-[16px] font-semibold uppercase leading-snug tracking-[-0.02em] sm:text-[18px]">
                  {title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/45 sm:text-[14px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — WHITE */}
      <section className="bg-white px-5 py-24 text-center text-[#111111] sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
            Start A Conversation
          </p>

          <h2 className="text-[clamp(2.7rem,6vw,5.3rem)] font-semibold uppercase leading-[0.98] tracking-[-0.06em]">
            Have A Product
            <br />
            In Mind?
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-[14px] leading-7 text-black/55 sm:text-[16px] sm:leading-8">
            Tell us about your apparel project. We&apos;ll discuss your
            requirements and the available next steps.
          </p>

          <Link
            href="/request-a-quote"
            className="group mt-10 inline-flex items-center gap-5 bg-[#090909] px-7 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#292929] sm:px-8"
          >
            Request A Quote
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
