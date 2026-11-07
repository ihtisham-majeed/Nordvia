
import Link from "next/link";
import { resourcePages } from "./resourceData";

const benefits = [
  {
    number: "01",
    title: "Make Informed Decisions",
    description:
      "Understand product specifications and the details to consider before starting an apparel project.",
  },
  {
    number: "02",
    title: "Understand Materials",
    description:
      "Explore common fabrics, fabric weights and material considerations for different garments.",
  },
  {
    number: "03",
    title: "Know The Process",
    description:
      "Get familiar with the typical stages involved in apparel development and production coordination.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-[#090909] text-white">
      {/* HERO */}
      <section className="relative flex min-h-[650px] items-end overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.13),transparent_40%),linear-gradient(120deg,#151515,#090909_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-24 pt-40 md:px-12 lg:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            NORDVIA EXPORTS / RESOURCES
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[100px]">
            Knowledge
            <br />
            For Better
            <br />
            Decisions<span className="text-white/35">.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Practical information to help clothing brands understand
              apparel materials, customization, manufacturing processes
              and project requirements.
            </p>

            <Link
              href="/request-a-quote"
              className="inline-flex w-fit items-center gap-5 border border-white/30 px-7 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Discuss Your Project <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/resources/size-guide"
              className="inline-flex w-fit items-center gap-5 border border-white/20 px-7 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              View Apparel Size Guide
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Resource Center
          </p>

          <h2 className="text-4xl font-medium uppercase leading-tight tracking-[-0.04em] md:text-6xl">
            Understand
            <br />
            The Details
            <br />
            <span className="text-white/35">Behind Apparel.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-end">
          <p className="text-lg leading-9 text-white/65">
            Developing an apparel collection involves more than choosing
            a garment. Fabric, construction, fit, branding, quantities
            and delivery requirements all contribute to the final project.
          </p>

          <p className="mt-6 text-base leading-8 text-white/45">
            Explore these resources to prepare your requirements and
            have more informed conversations about your next collection.
          </p>
        </div>
      </section>

      {/* RESOURCE LINKS */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Explore Resources
            </p>

            <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
              Learn & Explore<span className="text-white/35">.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {resourcePages.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group flex min-h-[280px] flex-col justify-between bg-[#101010] p-7 transition duration-300 hover:bg-[#1a1a1a] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/35">
                    {resource.number} / 04
                  </span>

                  <span className="text-xl text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-medium uppercase tracking-[-0.025em] md:text-3xl">
                    {resource.title}
                  </h3>

                  <p className="mt-5 max-w-lg text-sm leading-7 text-white/45">
                    {resource.description}
                  </p>

                  <span className="mt-8 inline-block text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                    Explore Resource →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Useful Knowledge
          </p>

          <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
            Prepare With Clarity.
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
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
          Need More Information?
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-medium uppercase leading-tight tracking-[-0.045em] md:text-6xl">
          Let&apos;s Talk
          <br />
          About Your Project.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/50">
          Share your product idea and requirements with NORDVIA EXPORTS.
          We&apos;ll discuss the available options and next steps.
        </p>

        <Link
          href="/request-a-quote"
          className="mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
        >
          Request A Quote <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
