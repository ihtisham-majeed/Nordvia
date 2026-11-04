
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
    <main className="overflow-hidden bg-white text-[#171717]">

      {/* HERO — BLACK */}
      <section className="relative flex min-h-[620px] items-end overflow-hidden border-b border-white/10 bg-[#090909] text-white sm:min-h-[680px]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.13),transparent_40%),linear-gradient(120deg,#151515,#090909_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-20 pt-36 sm:px-8 sm:pb-28 md:px-12 lg:px-20 lg:pb-36">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-xs sm:tracking-[0.35em]">
            NORDVIA EXPORTS / INDUSTRIES
          </p>

         <h1 className="max-w-5xl text-[clamp(3.2rem,7.5vw,6.8rem)] font-semibold uppercase leading-[0.95] tracking-[-0.065em] text-white">
  Made For
  <br />
  <span className="text-white">Your Industry.</span>
</h1>

          <div className="mt-9 flex flex-col gap-7 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-10">
            <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 md:text-lg">
              Apparel development and manufacturing coordination for fashion
              labels, streetwear brands, sportswear businesses, wholesalers
              and distributors.
            </p>

            <Link
              href="/request-a-quote/"
              className="group inline-flex w-fit items-center gap-5 border border-white/30 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-black sm:px-7 sm:py-5 sm:text-xs"
            >
              Discuss Your Requirements
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              Who We Work With
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-medium uppercase leading-[1.02] tracking-[-0.055em]">
              Different Brands.
              <br />
              Different Needs.
              <br />
              <span className="text-black/35">One Approach.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-sm leading-7 text-black/70 sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
              Every business has different apparel requirements. A streetwear
              label may prioritize heavyweight fabrics and oversized fits,
              while a sportswear brand may focus on comfort, stretch and
              functional construction.
            </p>

            <p className="mt-5 text-sm leading-7 text-black/50 sm:mt-6 sm:text-base sm:leading-8">
              NORDVIA EXPORTS works with manufacturing partners to coordinate
              product specifications and customization according to each
              project&apos;s requirements.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY CARDS — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.3em]">
              Explore Industries
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-medium uppercase leading-[1.02] tracking-[-0.055em]">
              Who We Support<span className="text-white/35">.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}/`}
                className="group flex min-h-[290px] flex-col justify-between bg-[#101010] p-6 transition duration-300 hover:bg-[#1b1b1b] sm:min-h-[320px] sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-white/35 sm:text-xs">
                    {industry.number} / 04
                  </span>

                  <span className="text-xl text-white/40 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="mt-14">
                  <h3 className="max-w-lg text-[clamp(1.35rem,2.5vw,2rem)] font-medium uppercase leading-tight tracking-[-0.035em]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-[13px] leading-7 text-white/50 sm:text-sm">
                    {industry.description}
                  </p>

                  <span className="mt-7 inline-block text-[9px] font-semibold uppercase tracking-[0.23em] text-white/65 transition-colors group-hover:text-white sm:text-[10px]">
                    Explore Industry →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 sm:mb-16">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              Our Approach
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.25rem)] font-medium uppercase leading-[1.02] tracking-[-0.055em]">
              Built Around
              <br />
              Your Requirements.
            </h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-8">
            {advantages.map((item) => (
              <article
                key={item.number}
                className="border-t border-black/20 pt-5 sm:pt-6"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-black/40 sm:text-xs">
                  {item.number}
                </span>

                <h3 className="mt-9 text-base font-semibold uppercase leading-snug tracking-[-0.02em] sm:mt-12 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-black/55 sm:text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — BLACK */}
      <section className="border-t border-white/10 bg-[#090909] px-5 py-24 text-center text-white sm:px-8 sm:py-28 md:px-12 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.3em]">
            Your Next Collection
          </p>

          <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,5.5vw,4.75rem)] font-medium uppercase leading-[1.02] tracking-[-0.055em]">
            Let&apos;s Build
            <br />
            Something Together.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50 sm:mt-7 sm:text-base sm:leading-8">
            Tell us about your business, apparel category and project
            requirements. We&apos;ll discuss the available options.
          </p>

          <Link
            href="/request-a-quote/"
            className="group mt-9 inline-flex items-center gap-5 bg-white px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-white/85 sm:mt-10 sm:px-8 sm:py-5 sm:text-xs"
          >
            Request A Quote
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
