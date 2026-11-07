
import Link from "next/link";
import type { Industry } from "./industryData";
import { industries } from "./industryData";

type Props = {
  industry: Industry;
};

export default function IndustryDetailPage({ industry }: Props) {
  const currentIndex = industries.findIndex(
    (item) => item.slug === industry.slug
  );

  const nextIndustry =
    industries[(currentIndex + 1) % industries.length];

  return (
    <main className="overflow-hidden bg-white text-[#171717]">

      {/* HERO — BLACK */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#090909] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 md:px-12 lg:px-20 lg:pb-32 lg:pt-36">

          {/* BREADCRUMB */}
          <div className="mb-12 flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/40 sm:mb-14 sm:gap-3 sm:text-[10px] sm:tracking-[0.2em]">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/industries" className="transition hover:text-white">
              Industries
            </Link>
            <span>/</span>
            <span className="text-white/70">{industry.shortTitle}</span>
          </div>

          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:mb-6 sm:text-xs sm:tracking-[0.3em]">
            Industry / {industry.number}
          </p>

          <h1 className="max-w-5xl text-[clamp(2.8rem,7vw,6rem)] font-semibold uppercase leading-[0.95] tracking-[-0.06em]">
            {industry.title}
            <span className="text-white/35">.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:mt-9 sm:text-base sm:leading-8 md:text-lg">
            {industry.description}
          </p>

          <Link
            href="/request-a-quote"
            className="group mt-8 inline-flex items-center gap-5 border border-white/30 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-white hover:text-black sm:mt-10 sm:px-7 sm:py-5 sm:text-xs"
          >
            Discuss Your Project
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </section>

      {/* INTRO — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-24">

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              Understanding Your Business
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.1rem)] font-medium uppercase leading-[1.03] tracking-[-0.055em]">
              Apparel That
              <br />
              Fits Your
              <br />
              <span className="text-black/35">Direction.</span>
            </h2>
          </div>

          <p className="self-end text-sm leading-8 text-black/65 sm:text-base sm:leading-9 lg:text-lg">
            {industry.introduction}
          </p>
        </div>
      </section>

      {/* REQUIREMENTS — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-24">

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.3em]">
              Project Requirements
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.1rem)] font-medium uppercase leading-[1.03] tracking-[-0.055em]">
              What Matters
              <br />
              To Your
              <br className="hidden sm:block" />
              Business<span className="text-white/35">.</span>
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {industry.requirements.map((item, index) => (
              <div key={item} className="flex gap-5 py-5 sm:gap-6 sm:py-6">
                <span className="shrink-0 pt-0.5 text-[10px] tracking-[0.15em] text-white/35 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-[12px] font-medium uppercase leading-6 tracking-[0.06em] text-white/75 sm:text-sm sm:leading-7 sm:tracking-wide">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS — WHITE */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-10 sm:mb-14">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/45 sm:text-xs sm:tracking-[0.3em]">
              Relevant Product Categories
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.1rem)] font-medium uppercase leading-[1.03] tracking-[-0.055em]">
              Products To Explore<span className="text-black/35">.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {industry.products.map((product, index) => (
              <div
                key={product}
                className="min-h-[145px] bg-white p-6 transition duration-300 hover:bg-[#f5f5f5] sm:p-8 lg:p-9"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-black/40 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-8 text-base font-semibold uppercase leading-snug tracking-[-0.02em] text-black/80 sm:text-lg">
                  {product}
                </h3>
              </div>
            ))}
          </div>

          <Link
            href="/products"
            className="group mt-8 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/55 transition hover:text-black sm:mt-9 sm:text-xs sm:tracking-[0.2em]"
          >
            Explore All Products
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>
      </section>

      {/* APPROACH — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 text-white sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-10 sm:mb-14">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-xs sm:tracking-[0.3em]">
              Working Together
            </p>

            <h2 className="text-[clamp(2.2rem,5vw,4.1rem)] font-medium uppercase leading-[1.03] tracking-[-0.055em]">
              Our Approach<span className="text-white/35">.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {industry.approach.map((step, index) => (
              <article
                key={step}
                className="bg-[#101010] p-6 transition duration-300 hover:bg-[#1a1a1a] sm:p-8 lg:p-9"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-white/35 sm:text-xs">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-8 text-[13px] leading-7 text-white/65 sm:mt-10 sm:text-sm">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — WHITE */}
      <section className="bg-white px-5 py-24 text-center sm:px-8 sm:py-28 md:px-12 lg:px-20 lg:py-36">
        <div className="mx-auto max-w-[1440px]">

          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-black/40 sm:text-xs sm:tracking-[0.3em]">
            Start Your Project
          </p>

          <h2 className="mx-auto max-w-4xl text-[clamp(2.4rem,5.5vw,4.75rem)] font-medium uppercase leading-[1.02] tracking-[-0.055em]">
            Let&apos;s Discuss
            <br />
            Your Collection<span className="text-black/35">.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/55 sm:mt-7 sm:text-base sm:leading-8">
            Share your business requirements and the apparel products you
            want to develop. We&apos;ll discuss the next steps.
          </p>

          <Link
            href="/request-a-quote"
            className="group mt-9 inline-flex items-center gap-5 bg-black px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-black/80 sm:mt-10 sm:px-8 sm:py-5 sm:text-xs"
          >
            Request A Quote
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              ↗
            </span>
          </Link>

          {/* NEXT INDUSTRY */}
          <div className="mt-16 border-t border-black/15 pt-8 sm:mt-20">
            <Link
              href={`/industries/${nextIndustry.slug}`}
              className="group inline-flex flex-wrap items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/50 transition hover:text-black sm:text-xs sm:tracking-[0.2em]"
            >
              Next Industry:
              <span className="text-black">{nextIndustry.shortTitle}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
