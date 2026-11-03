
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
    <main className="bg-[#090909] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-36 md:px-12 lg:px-20 lg:pb-32">
          <div className="mb-14 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/industries/" className="hover:text-white">
              Industries
            </Link>
            <span>/</span>
            <span className="text-white/70">{industry.shortTitle}</span>
          </div>

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
            Industry / {industry.number}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
            {industry.title}
            <span className="text-white/35">.</span>
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            {industry.description}
          </p>

          <Link
            href="/request-a-quote/"
            className="mt-10 inline-flex items-center gap-5 border border-white/30 px-7 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Discuss Your Project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Understanding Your Business
          </p>

          <h2 className="text-4xl font-medium uppercase leading-tight tracking-[-0.04em] md:text-5xl">
            Apparel That
            <br />
            Fits Your
            <br />
            Direction.
          </h2>
        </div>

        <p className="self-end text-base leading-9 text-white/60 md:text-lg">
          {industry.introduction}
        </p>
      </section>

      {/* REQUIREMENTS */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Project Requirements
            </p>

            <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-5xl">
              What Matters
              <br />
              To Your Business.
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {industry.requirements.map((item, index) => (
              <div key={item} className="flex gap-6 py-6">
                <span className="text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm uppercase tracking-wide text-white/75">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mb-14">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Relevant Product Categories
          </p>

          <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
            Products To Explore.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {industry.products.map((product, index) => (
            <div
              key={product}
              className="min-h-[145px] bg-[#090909] p-7 md:p-9"
            >
              <span className="text-xs tracking-[0.2em] text-white/35">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-8 text-lg font-medium uppercase tracking-wide text-white/80">
                {product}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="/products/"
          className="mt-9 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-white"
        >
          Explore All Products <span aria-hidden="true">↗</span>
        </Link>
      </section>

      {/* APPROACH */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Working Together
            </p>

            <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
              Our Approach.
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {industry.approach.map((step, index) => (
              <article key={step} className="bg-[#101010] p-7 md:p-9">
                <span className="text-xs tracking-[0.2em] text-white/35">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-10 text-sm leading-7 text-white/65">
                  {step}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center md:px-12 lg:px-20 lg:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
          Start Your Project
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-medium uppercase leading-tight tracking-[-0.045em] md:text-6xl">
          Let&apos;s Discuss
          <br />
          Your Collection.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50">
          Share your business requirements and the apparel products you
          want to develop. We&apos;ll discuss the next steps.
        </p>

        <Link
          href="/request-a-quote/"
          className="mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
        >
          Request A Quote <span aria-hidden="true">↗</span>
        </Link>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href={`/industries/${nextIndustry.slug}/`}
            className="text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
          >
            Next Industry: {nextIndustry.shortTitle} ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
