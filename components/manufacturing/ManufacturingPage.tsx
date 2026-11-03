
import Link from "next/link";
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
    <main className="bg-[#090909] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[690px] items-end overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.12),transparent_40%),linear-gradient(120deg,#101010,#090909_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-40 md:px-12 lg:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
            NORDVIA EXPORTS / MANUFACTURING
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[100px]">
            Built Around
            <br />
            Your Vision<span className="text-white/35">.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Apparel development and manufacturing coordination for
              fashion brands, independent labels and growing businesses.
              From product specifications to custom branding, we help
              organize the details behind your next collection.
            </p>

            <Link
              href="/request-a-quote/"
              className="inline-flex w-fit items-center gap-5 border border-white/30 px-7 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Discuss Your Project
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Our Approach
          </p>
          <h2 className="text-4xl font-medium uppercase leading-tight tracking-[-0.04em] md:text-6xl">
            More Than
            <br />
            A Garment.
            <br />
            <span className="text-white/35">A Brand Identity.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-lg leading-9 text-white/65">
            At NORDVIA EXPORTS, we work with manufacturing partners to
            coordinate apparel projects around each brand&apos;s needs.
            We focus on understanding the product, discussing practical
            specifications and organizing suitable customization and
            production requirements.
          </p>
          <p className="mt-6 text-base leading-8 text-white/45">
            Based in Sialkot, Pakistan, we aim to make apparel project
            coordination clear, practical and straightforward for
            international customers.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
                What We Coordinate
              </p>
              <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
                Our Capabilities
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/50">
              Flexible project discussions covering the details that matter
              when developing and customizing apparel.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.number}
                className="min-h-[245px] bg-[#101010] p-7 transition duration-300 hover:bg-[#191919] md:p-9"
              >
                <span className="text-xs tracking-[0.2em] text-white/35">
                  {item.number}
                </span>
                <h3 className="mt-14 text-xl font-medium uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mb-14">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Explore Our Services
          </p>
          <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
            Manufacturing
            <br />
            Services<span className="text-white/35">.</span>
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          {manufacturingServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}/`}
              className="group flex min-h-[250px] flex-col justify-between bg-[#090909] p-7 transition duration-300 hover:bg-[#171717] md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.2em] text-white/35">
                  {service.number} / 07
                </span>
                <span className="text-xl text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                  ↗
                </span>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-medium uppercase tracking-[-0.025em] md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-7 text-white/45">
                  {service.description}
                </p>
                <span className="mt-7 inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                  Explore Service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              How We Work
            </p>
            <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
              From Brief
              <br />
              To Production.
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, description]) => (
              <div key={number} className="border-t border-white/20 pt-6">
                <span className="text-xs tracking-[0.2em] text-white/35">
                  {number}
                </span>
                <h3 className="mt-10 text-lg font-medium uppercase tracking-wide">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/45">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center md:px-12 lg:px-20 lg:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
          Start A Conversation
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-medium uppercase leading-tight tracking-[-0.045em] md:text-6xl">
          Have A Product
          <br />
          In Mind?
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50">
          Tell us about your apparel project. We&apos;ll discuss your
          requirements and the available next steps.
        </p>
        <Link
          href="/request-a-quote/"
          className="mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
        >
          Request A Quote <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
