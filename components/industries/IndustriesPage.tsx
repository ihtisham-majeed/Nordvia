
import Link from "next/link";
import { industries } from "./industryData";

const advantages = [
  {
    number: "01",
    title: "Product Flexibility",
    description:
      "Discuss different garment categories, fits, materials and customization requirements.",
  },
  {
    number: "02",
    title: "Brand Customization",
    description:
      "Coordinate branding options including labels, artwork, printing and embroidery.",
  },
  {
    number: "03",
    title: "Project Coordination",
    description:
      "Work through product specifications, quantities and development requirements.",
  },
  {
    number: "04",
    title: "Partner Network",
    description:
      "Coordinate apparel projects through manufacturing partners based on project needs.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#090909] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[680px] items-end overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.13),transparent_40%),linear-gradient(120deg,#151515,#090909_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-40 md:px-12 lg:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            NORDVIA EXPORTS / INDUSTRIES
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[100px]">
            Made For
            <br />
            Your Industry<span className="text-white/35">.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Apparel development and manufacturing coordination for fashion
              labels, streetwear brands, sportswear businesses, wholesalers
              and distributors.
            </p>

            <Link
              href="/request-a-quote/"
              className="inline-flex w-fit items-center gap-5 border border-white/30 px-7 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Discuss Your Requirements
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Who We Work With
          </p>

          <h2 className="text-4xl font-medium uppercase leading-tight tracking-[-0.04em] md:text-6xl">
            Different Brands.
            <br />
            Different Needs.
            <br />
            <span className="text-white/35">One Approach.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-lg leading-9 text-white/65">
            Every business has different apparel requirements. A streetwear
            label may prioritize heavyweight fabrics and oversized fits,
            while a sportswear brand may focus on comfort, stretch and
            functional construction.
          </p>

          <p className="mt-6 text-base leading-8 text-white/45">
            NORDVIA EXPORTS works with manufacturing partners to coordinate
            product specifications and customization according to each
            project&apos;s requirements.
          </p>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Explore Industries
            </p>
            <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
              Who We Support<span className="text-white/35">.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}/`}
                className="group flex min-h-[310px] flex-col justify-between bg-[#101010] p-7 transition duration-300 hover:bg-[#1a1a1a] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/35">
                    {industry.number} / 04
                  </span>
                  <span className="text-xl text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="mt-14">
                  <h3 className="max-w-lg text-2xl font-medium uppercase leading-tight tracking-[-0.025em] md:text-3xl">
                    {industry.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
                    {industry.description}
                  </p>

                  <span className="mt-8 inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                    Explore Industry →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Our Approach
          </p>
          <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
            Built Around
            <br />
            Your Requirements.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <article
              key={item.number}
              className="border-t border-white/20 pt-6"
            >
              <span className="text-xs tracking-[0.2em] text-white/35">
                {item.number}
              </span>

              <h3 className="mt-12 text-lg font-medium uppercase tracking-wide">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#101010] px-6 py-28 text-center md:px-12 lg:px-20 lg:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
          Your Next Collection
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-medium uppercase leading-tight tracking-[-0.045em] md:text-6xl">
          Let&apos;s Build
          <br />
          Something Together.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50">
          Tell us about your business, apparel category and project
          requirements. We&apos;ll discuss the available options.
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
