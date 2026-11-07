
"use client";

import { useState } from "react";
import Link from "next/link";

const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

const categories = [
  "Size Guide",
  "Tops",
  "Bottoms",
  "Tracksuits",
  "Outerwear",
  "How to Measure",
];

const chartSections = [
  {
    id: "hoodies",
    category: "TOPS",
    title: "Hoodies & Sweatshirts",
    description:
      "A reference for developing relaxed, regular and oversized hoodie silhouettes.",
    charts: [
      {
        title: "Hoodie Measurement Chart",
        unit: "CM",
        columns: ["Chest", "Body Length", "Shoulder", "Sleeve"],
      },
      {
        title: "Sweatshirt Measurement Chart",
        unit: "CM",
        columns: ["Chest", "Body Length", "Shoulder", "Sleeve"],
      },
    ],
  },
//   {
//     id: "tshirts",
//     category: "TOPS",
//     title: "T-Shirts & Polos",
//     description:
//       "Measurement references for everyday T-shirts, oversized tees and polo shirts.",
//     charts: [
//       {
//         title: "T-Shirt Measurement Chart",
//         unit: "CM",
//         columns: ["Chest", "Body Length", "Shoulder", "Sleeve"],
//       },
//       {
//         title: "Polo Shirt Measurement Chart",
//         unit: "CM",
//         columns: ["Chest", "Body Length", "Shoulder", "Sleeve"],
//       },
//     ],
//   },
  {
    id: "joggers",
    category: "BOTTOMS",
    title: "Joggers & Sweatpants",
    description:
      "Reference points for casual joggers, fleece pants and tapered sweatpants.",
    charts: [
      {
        title: "Joggers Measurement Chart",
        unit: "CM",
        columns: ["Waist", "Hip", "Front Rise", "Inseam", "Leg Opening"],
      },
      {
        title: "Sweatpants Measurement Chart",
        unit: "CM",
        columns: ["Waist", "Hip", "Front Rise", "Inseam", "Leg Opening"],
      },
    ],
  },
  {
    id: "tracksuits",
    category: "TRACKSUITS",
    title: "Tracksuits & Sportswear",
    description:
      "Separate measurement references for tracksuit jackets and matching trousers.",
    charts: [
      {
        title: "Tracksuit Jacket Chart",
        unit: "CM",
        columns: ["Chest", "Length", "Shoulder", "Sleeve"],
      },
      {
        title: "Tracksuit Trouser Chart",
        unit: "CM",
        columns: ["Waist", "Hip", "Rise", "Inseam", "Leg Opening"],
      },
    ],
  },
  {
    id: "jackets",
    category: "OUTERWEAR",
    title: "Jackets & Coats",
    description:
      "Measurement references for casual jackets, bomber jackets and winter outerwear.",
    charts: [
      {
        title: "Jacket Measurement Chart",
        unit: "CM",
        columns: ["Chest", "Length", "Shoulder", "Sleeve"],
      },
      {
        title: "Coat Measurement Chart",
        unit: "CM",
        columns: ["Chest", "Length", "Shoulder", "Sleeve"],
      },
    ],
  },
];

const measurementGuides = [
  {
    number: "01",
    title: "Chest",
    description:
      "Measure horizontally across the garment, just below the armholes.",
  },
  {
    number: "02",
    title: "Shoulder",
    description:
      "Measure from one shoulder seam to the opposite shoulder seam.",
  },
  {
    number: "03",
    title: "Body Length",
    description:
      "Measure from the highest shoulder point down to the bottom hem.",
  },
  {
    number: "04",
    title: "Sleeve Length",
    description:
      "Measure from the shoulder seam to the end of the sleeve cuff.",
  },
  {
    number: "05",
    title: "Waist",
    description:
      "Measure across the waistband in its relaxed position.",
  },
  {
    number: "06",
    title: "Inseam",
    description:
      "Measure along the inside leg from the crotch seam to the hem.",
  },
];

function SizeTable({
  title,
  columns,
  unit,
}: {
  title: string;
  columns: string[];
  unit: string;
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-neutral-200">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-200 bg-[#f8f8f8] px-5 py-4">
        <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-800">
          {title}
        </h4>
        <span className="text-[9px] font-semibold tracking-[0.15em] text-neutral-400">
          UNIT: {unit}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[570px] border-collapse text-left">
          <thead>
            <tr className="bg-white">
              <th className="border-b border-r border-neutral-200 px-4 py-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                Size
              </th>
              {columns.map((column) => (
                <th
                  key={column}
                  className="border-b border-r border-neutral-200 px-4 py-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 last:border-r-0"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sizes.map((size) => (
              <tr key={size} className="transition hover:bg-neutral-50">
                <td className="border-b border-r border-neutral-200 bg-[#fafafa] px-4 py-4 text-xs font-semibold text-neutral-900">
                  {size}
                </td>
                {columns.map((column) => (
                  <td
                    key={column}
                    className="border-b border-r border-neutral-200 px-4 py-4 text-center text-xs text-neutral-400 last:border-r-0"
                  >
                    —
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-neutral-100 bg-[#fafafa] px-5 py-3">
        <p className="text-[10px] leading-5 text-neutral-400">
          Final measurements to be confirmed after physical sample development
          and approval.
        </p>
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-5 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-neutral-900">
          {title}
        </span>

        <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-neutral-200 text-lg font-light text-neutral-600">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="pb-7 text-sm leading-7 text-neutral-500">
          {children}
        </div>
      )}
    </div>
  );
}

export default function SizeGuidePage() {
  const [unit, setUnit] = useState<"CM" | "IN">("CM");
  const [activeCategory, setActiveCategory] = useState("Size Guide");

  const navigateTo = (id: string, label: string) => {
    setActiveCategory(label);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen bg-white text-neutral-950">
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-25 lg:px-20">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
            <Link href="/" className="transition hover:text-black">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="transition hover:text-black">
              Resources
            </Link>
            <span>/</span>
            <span className="text-neutral-900">Size Guide</span>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Nordvia Exports / Fit Reference
              </p>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-[88px]">
                SIZE GUIDE
                <span className="text-neutral-300">.</span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
                Explore our garment measurement references, understand
                different fit considerations and find the right starting
                point for your custom apparel development.
              </p>
            </div>

            <div className="flex items-center gap-8 border-t border-neutral-200 pt-6 lg:min-w-[260px] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div>
                <p className="text-3xl font-semibold tracking-tight">06</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                  Measurement areas
                </p>
              </div>
              <div className="h-12 w-px bg-neutral-200" />
              <div>
                <p className="text-3xl font-semibold tracking-tight">02</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.16em] text-neutral-400">
                  Unit options
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-[1500px] px-6 py-12 md:px-12 lg:px-20">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Before you begin
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Understanding your fit
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Regular Fit",
                text: "A balanced silhouette with comfortable proportions.",
              },
              {
                number: "02",
                title: "Relaxed Fit",
                text: "More room through the body for everyday comfort.",
              },
              {
                number: "03",
                title: "Oversized Fit",
                text: "A deliberately generous silhouette and proportions.",
              },
              {
                number: "04",
                title: "Custom Fit",
                text: "A silhouette developed around your brand requirements.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-neutral-200 bg-white p-6"
              >
                <span className="text-[10px] font-semibold text-neutral-300">
                  {item.number}
                </span>
                <h3 className="mt-5 text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-neutral-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY NAVIGATION */}
      <section className="sticky top-0 z-40 border-y border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 lg:px-20">
          <div className="flex gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  const ids: Record<string, string> = {
                    "Size Guide": "size-charts",
                    Tops: "hoodies",
                    Bottoms: "joggers",
                    Tracksuits: "tracksuits",
                    Outerwear: "jackets",
                    "How to Measure": "how-to-measure",
                  };
                  navigateTo(ids[category], category);
                }}
                className={`shrink-0 cursor-pointer border-b-2 py-5 text-[10px] font-semibold uppercase tracking-[0.13em] transition ${
                  activeCategory === category
                    ? "border-neutral-950 text-neutral-950"
                    : "border-transparent text-neutral-400 hover:text-neutral-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SIZE CHARTS */}
      <section
        id="size-charts"
        className="scroll-mt-20 bg-white"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 lg:px-20">
          <div className="flex flex-col justify-between gap-8 border-b border-neutral-200 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Apparel measurements / 01
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                Garment size charts
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                Browse measurement tables for different apparel categories.
                Select your preferred measurement unit.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="mr-2 text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                Units
              </span>
              {(["CM", "IN"] as const).map((value) => (
                <button
                  key={value}
                  onClick={() => setUnit(value)}
                  className={`cursor-pointer border px-5 py-3 text-[10px] font-semibold tracking-widest transition ${
                    unit === value
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-900"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-20">
            {chartSections.map((section, index) => (
              <div
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <div className="mb-8 flex items-end justify-between gap-5">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      {section.category} / 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-xs leading-6 text-neutral-500">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 xl:grid-cols-2">
                  {section.charts.map((chart) => (
                    <SizeTable
                      key={chart.title}
                      title={chart.title}
                      columns={chart.columns}
                      unit={unit}
                    />
                  ))}
                </div>

                <div className="mt-6 border-l-2 border-neutral-200 pl-5">
                  <p className="text-[10px] leading-6 text-neutral-400">
                    Size specifications are developed according to the
                    selected design, intended fit, fabric and approved sample.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEASUREMENT INSTRUCTIONS */}
      <section
        id="how-to-measure"
        className="scroll-mt-20 border-t border-neutral-200 bg-[#f7f7f7]"
      >
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Measurement reference / 06
              </p>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
                How to
                <br />
                measure.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-neutral-500">
                Correct measurement techniques help establish consistent
                garment specifications and a more predictable fit.
              </p>

              <div className="mt-10 border border-neutral-200 bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider">
                  Measurement tip
                </p>
                <p className="mt-3 text-xs leading-6 text-neutral-500">
                  Place the garment flat on an even surface. Keep it relaxed
                  and smooth out folds without stretching the fabric.
                </p>
              </div>
            </div>

            <div className="border-t border-neutral-200">
              {measurementGuides.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[48px_1fr] gap-5 border-b border-neutral-200 py-7"
                >
                  <span className="text-xs font-semibold text-neutral-300">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Frequently asked questions
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">
                Sizing
                <br />
                explained.
              </h2>
            </div>

            <div>
              <Accordion title="Are these final Nordvia garment measurements?">
                No. The tables currently show the measurement structure and
                available size range. Final garment measurements will be
                established after physical sample development and approval.
              </Accordion>

              <Accordion title="Can I request a custom size chart?">
                Yes. You can discuss your preferred size range, grading,
                silhouette and garment measurements with our team during
                product development.
              </Accordion>

              <Accordion title="What is the difference between garment and body measurements?">
                Body measurements are taken directly from a person. Garment
                measurements are taken from the finished clothing item. They
                are different and should not be treated as interchangeable.
              </Accordion>

              <Accordion title="Can measurements vary between fabrics?">
                Yes. Fabric composition, stretch, weight, construction and
                intended fit can all influence the final garment
                specifications.
              </Accordion>

              <Accordion title="How are final production measurements confirmed?">
                Measurements should be checked against an approved physical
                sample and agreed specification before bulk production.
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-10 px-6 py-20 md:px-12 md:py-28 lg:flex-row lg:items-end lg:px-20">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
              Nordvia Exports / Custom Apparel
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-6xl">
              Your fit.
              <br />
              Your specifications.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/50">
              Have a specific fit or size requirement? Let's discuss the
              specifications for your next apparel collection.
            </p>
          </div>

          <Link
            href="/request-a-quote"
            className="inline-flex w-fit cursor-pointer items-center gap-8 border border-white/30 px-7 py-5 text-[10px] font-semibold uppercase tracking-[0.16em] transition hover:bg-white hover:text-black"
          >
            Request a Quote
            <span>↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
