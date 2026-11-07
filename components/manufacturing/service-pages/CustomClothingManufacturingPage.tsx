
import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Hoodies & Sweatshirts",
    detail: "Fleece, French terry and jersey-based garment requirements.",
  },
  {
    number: "02",
    title: "Tracksuits & Sportswear",
    detail: "Coordinated tops, bottoms and performance-inspired apparel.",
  },
  {
    number: "03",
    title: "Jackets & Outerwear",
    detail: "Casual, lightweight and selected cold-weather garment concepts.",
  },
  {
    number: "04",
    title: "T-Shirts & Polos",
    detail: "Everyday essentials with considered fits, fabrics and finishing.",
  },
  {
    number: "05",
    title: "Joggers & Sweatpants",
    detail: "Relaxed and athletic silhouettes with custom construction details.",
  },
  {
    number: "06",
    title: "Custom Collections",
    detail: "Product combinations developed around your brand direction.",
  },
];

const stages = [
  [
    "01",
    "Project brief",
    "Share your garment idea, target market, references and expected order requirements.",
  ],
  [
    "02",
    "Specification",
    "Discuss fabric, GSM, measurements, fit, construction, colors and finishing.",
  ],
  [
    "03",
    "Development review",
    "Review the proposed product details and available development or sampling options.",
  ],
  [
    "04",
    "Production planning",
    "Confirm the agreed specifications, quantities, costing and estimated schedule.",
  ],
  [
    "05",
    "Production coordination",
    "Coordinate the approved requirements with the selected manufacturing partner.",
  ],
  [
    "06",
    "Order completion",
    "Discuss final checks, packing requirements and dispatch arrangements.",
  ],
];

const specifications = [
  ["Fabric", "Composition, weight, texture and material preference."],
  ["Fit & measurements", "Size range, garment measurements and fit direction."],
  [
    "Construction",
    "Stitching, seams, panels, pockets, closures and garment details.",
  ],
  ["Color", "Color references, garment panels and color combinations."],
  [
    "Branding",
    "Artwork, logo placement, labels, printing and embroidery.",
  ],
  [
    "Finishing",
    "Trims, washing preferences, packaging and presentation details.",
  ],
];

export default function CustomClothingManufacturingPage() {
  return (
    <main className="bg-[#090909] text-white">

      {/* HERO — BLACK */}
      <section className="grid min-h-[580px] bg-[#090909] text-white lg:min-h-[680px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 sm:px-10 md:px-12 lg:px-20 lg:py-32">
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-[11px]">
            Manufacturing / 01
          </p>

          <h1 className="max-w-[720px] text-[clamp(2.8rem,6.5vw,6rem)] font-semibold uppercase leading-[0.96] tracking-[-0.06em]">
            Custom clothing.
            <span className="block text-white/40">Built around</span>
            your brand.
          </h1>

          <p className="mt-7 max-w-lg text-[14px] leading-7 text-white/60 sm:text-[15px] sm:leading-8 md:text-base">
            Develop apparel around your own product specifications, material
            preferences, construction details and brand requirements.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/request-a-quote?product=other"
              className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-white/80 sm:px-7"
            >
              Discuss Your Project ↗
            </Link>

            <Link
              href="/products"
              className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-white hover:text-black sm:px-7"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[350px] items-end overflow-hidden bg-[#181818] p-8 sm:p-10 md:p-12 lg:min-h-full lg:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_35%,rgba(255,255,255,0.16),transparent_42%),linear-gradient(135deg,#292929,#090909)]" />

          <div className="absolute inset-6 border border-white/10 sm:inset-8 md:inset-12" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:text-[11px]">
              From concept to garment
            </p>

            <p className="mt-4 max-w-md text-[clamp(1.8rem,3.8vw,3.5rem)] font-medium uppercase leading-[1.08] tracking-[-0.045em]">
              Your product.
              <br />
              Your specifications.
              <br />
              Your identity.
            </p>
          </div>

          <span className="absolute right-8 top-8 text-[10px] tracking-[0.25em] text-white/30 sm:right-10 sm:top-10">
            N / 01
          </span>
        </div>
      </section>

      {/* BREADCRUMB — WHITE */}
      <div className="border-b border-black/10 bg-white px-6 py-4 text-black sm:px-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] text-black/45 sm:text-[10px]">
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link href="/manufacturing" className="transition hover:text-black">
            Manufacturing
          </Link>
          <span>/</span>
          <span className="text-black">
            Custom Clothing Manufacturing
          </span>
        </div>
      </div>

      {/* INTRODUCTION — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              The manufacturing approach
            </p>

            <h2 className="max-w-xl text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              Apparel development starts with the details.
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 md:text-base">
              Every brand has different product requirements. We work with
              manufacturing partners to coordinate apparel development around
              your chosen garment category, fit, material, construction and
              branding direction.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 md:text-base">
              Rather than treating every order the same, we discuss the
              specifications that matter to your project and establish the
              requirements before production is considered.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT CAPABILITIES — WHITE */}
      <section className="bg-white px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45 sm:text-[11px]">
                Product capabilities
              </p>

              <h2 className="text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
                What can we develop?
              </h2>
            </div>

            <p className="max-w-sm text-[13px] leading-7 text-black/55 sm:text-sm">
              Product feasibility and available construction options are
              reviewed according to each project.
            </p>
          </div>

          <div className="grid border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <article
                key={item.number}
                className="group min-h-[200px] border-b border-r border-black/10 p-6 transition duration-300 hover:bg-[#f3f3f1] sm:p-7 md:p-9"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-black/35">
                  {item.number}
                </span>

                <h3 className="mt-8 text-[clamp(1.15rem,1.8vw,1.55rem)] font-semibold uppercase leading-tight tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-[13px] leading-6 text-black/55 sm:text-sm">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              Specification checklist
            </p>

            <h2 className="text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              Define the garment before production.
            </h2>

            <p className="mt-6 max-w-md text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              Clear specifications help establish a shared understanding of
              the product and its requirements.
            </p>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {specifications.map(([title, detail], index) => (
              <div
                key={title}
                className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-8 sm:py-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/80 sm:text-[11px]">
                  0{index + 1} / {title}
                </span>

                <p className="text-[13px] leading-7 text-white/55 sm:text-sm">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT WORKFLOW — WHITE */}
      <section className="bg-[#f3f3f1] px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45 sm:text-[11px]">
            Project workflow
          </p>

          <h2 className="mb-12 text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
            From brief to production.
          </h2>

          <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map(([number, title, detail]) => (
              <article
                key={number}
                className="min-h-[220px] bg-white p-6 transition duration-300 hover:bg-[#eaeae7] sm:p-7 md:p-9"
              >
                <span className="text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[-0.05em] text-black/30">
                  {number}
                </span>

                <h3 className="mt-8 text-[14px] font-bold uppercase tracking-[0.07em] sm:text-[15px]">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-black/55 sm:text-sm">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              Start a manufacturing enquiry
            </p>

            <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Have a garment in mind?
              <span className="block text-white/40">
                Let’s define it.
              </span>
            </h2>
          </div>

          <Link
            href="/request-a-quote?product=other"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-white/80"
          >
            Request a project quote ↗
          </Link>
        </div>

        <p className="mx-auto mt-12 max-w-[1440px] border-t border-white/15 pt-6 text-[11px] leading-6 text-white/40 sm:text-xs">
          Minimum quantities, production feasibility, development availability,
          pricing and timelines are confirmed individually according to the
          product and project requirements.
        </p>
      </section>
    </main>
  );
}
