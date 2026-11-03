
import Link from "next/link";
import type { ManufacturingService } from "./serviceData";
import { manufacturingServices } from "./serviceData";

type Props = {
  service: ManufacturingService;
};

export default function ServiceDetailPage({ service }: Props) {
  const currentIndex = manufacturingServices.findIndex(
    (item) => item.slug === service.slug
  );

  const nextService =
    manufacturingServices[(currentIndex + 1) % manufacturingServices.length];

  return (
    <main className="bg-[#090909] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-36 md:px-12 lg:px-20 lg:pb-32">
          <div className="mb-14 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/manufacturing/" className="hover:text-white">
              Manufacturing
            </Link>
            <span>/</span>
            <span className="text-white/70">{service.shortTitle}</span>
          </div>

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
            Manufacturing Service / {service.number}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[92px]">
            {service.title}
            <span className="text-white/35">.</span>
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            {service.description}
          </p>

          <Link
            href="/request-a-quote/"
            className="mt-10 inline-flex items-center gap-5 border border-white/30 px-7 py-5 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
          >
            Discuss This Service <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-32">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Overview
          </p>
          <h2 className="text-4xl font-medium uppercase leading-tight tracking-[-0.04em] md:text-5xl">
            Your Requirements.
            <br />
            Our Coordination.
          </h2>
        </div>

        <p className="self-end text-base leading-9 text-white/60 md:text-lg">
          {service.introduction}
        </p>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
              Service Details
            </p>
            <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-5xl">
              What We
              <br />
              Can Discuss.
            </h2>
          </div>

          <div className="divide-y divide-white/10">
            {service.features.map((feature, index) => (
              <div key={feature} className="flex gap-6 py-6">
                <span className="text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm uppercase tracking-wide text-white/75">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
        <div className="mb-14">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40">
            Project Journey
          </p>
          <h2 className="text-4xl font-medium uppercase tracking-[-0.04em] md:text-6xl">
            How It Works.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, index) => (
            <article key={step} className="bg-[#090909] p-7 md:p-9">
              <span className="text-xs tracking-[0.2em] text-white/35">
                STEP {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-10 text-sm leading-7 text-white/70">{step}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-white/10 p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Important Project Considerations
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-white/45">
            {service.considerations}
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#101010] px-6 py-24 text-center md:px-12 lg:px-20 lg:py-32">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/40">
          Have A Project In Mind?
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-medium uppercase leading-tight tracking-[-0.045em] md:text-6xl">
          Let&apos;s Discuss
          <br />
          Your Requirements.
        </h2>
        <Link
          href={`/request-a-quote/?product=other`}
          className="mt-10 inline-flex items-center gap-5 bg-white px-8 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
        >
          Request A Quote <span aria-hidden="true">↗</span>
        </Link>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href={`/services/${nextService.slug}/`}
            className="text-xs uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
          >
            Next Service: {nextService.shortTitle} ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
