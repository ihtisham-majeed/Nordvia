
import Link from "next/link";
import type { ResourcePageData } from "./resourceData";
import { resourcePages } from "./resourceData";

type Props = {
  resource: ResourcePageData;
};

export default function ResourceDetailPage({ resource }: Props) {
  const isFAQ = resource.type === "faq";
  const isBlog = resource.type === "blog";

  const nextResource =
    resourcePages[
      (resourcePages.findIndex((item) => item.slug === resource.slug) + 1) %
        resourcePages.length
    ];

  return (
    <main className="bg-[#090909] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-[1440px] px-6 pb-24 pt-36 md:px-12 lg:px-20 lg:pb-32">
          <div className="mb-14 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-white">
              Resources
            </Link>
            <span>/</span>
            <span className="text-white/70">{resource.shortTitle}</span>
          </div>

          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-white/60">
            Resource / {resource.number}
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[88px]">
            {resource.title}
            <span className="text-white/60">.</span>
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-8 text-white/55 md:text-lg">
            {resource.description}
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
        <p className="max-w-4xl text-lg leading-9 text-white/65 md:text-xl">
          {resource.intro}
        </p>
      </section>

      {/* FAQ */}
      {isFAQ && resource.faqs && (
        <section className="border-y border-white/10 bg-[#101010] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-12">
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/60">
                Common Questions
              </p>
              <h2 className="text-3xl font-medium uppercase tracking-[-0.04em] md:text-5xl">
                Answers & Information.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {resource.faqs.map((faq, index) => (
                <details key={faq.question} className="group py-7">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                    <span className="flex gap-5 text-base font-medium leading-7 text-white/85 md:text-lg">
                      <span className="shrink-0 text-xs text-white/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-xl text-white/60 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="ml-10 mt-6 max-w-3xl text-sm leading-8 text-white/60 md:ml-12">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTENT SECTIONS */}
      {resource.sections && (
        <section className="border-y border-white/10 bg-[#101010] px-6 py-20 md:px-12 lg:px-20 lg:py-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-14">
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/60">
                {isFAQ ? "Questions" : "Learn More"}
              </p>
              <h2 className="text-3xl font-medium uppercase tracking-[-0.04em] md:text-5xl">
                {resource.shortTitle}
              </h2>
            </div>

            <div className="space-y-16">
              {resource.sections.map((section, index) => (
                <article
                  key={section.heading}
                  className="grid gap-7 border-t border-white/15 pt-8 md:grid-cols-[220px_1fr] md:gap-12"
                >
                  <div>
                    <span className="text-xs tracking-[0.2em] text-white/60">
                      SECTION {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium uppercase tracking-wide md:text-2xl">
                      {section.heading}
                    </h3>

                    <div className="mt-6 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-8 text-white/55 md:text-base"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <ul className="mt-7 space-y-4">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-4 text-sm leading-7 text-white/65"
                          >
                            <span className="text-white/60">—</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BLOG EMPTY STATE */}
      {isBlog && (
        <section className="border-y border-white/10 bg-[#101010] px-6 py-24 md:px-12 lg:px-20 lg:py-32">
          <div className="mx-auto max-w-[900px] border border-white/10 px-7 py-16 text-center md:px-16 md:py-24">
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              Editorial Journal
            </span>

            <h2 className="mt-8 text-3xl font-medium uppercase tracking-[-0.04em] md:text-5xl">
              Insights Are
              <br />
              Coming Soon.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/60">
              We&apos;re preparing practical articles about apparel
              materials, product development, customization and the
              clothing industry. Check back for future updates.
            </p>

            <Link
              href="/resources/fabric-guide"
              className="mt-9 inline-flex items-center gap-4 border border-white/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
            >
              Explore Fabric Guide <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      )}

      {/* NEXT RESOURCE */}
      <section className="px-6 py-20 text-center md:px-12 lg:px-20">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/60">
          Continue Exploring
        </p>

        <Link
          href={`/resources/${nextResource.slug}`}
          className="inline-flex flex-col items-center gap-4"
        >
          <span className="text-2xl font-medium uppercase tracking-[-0.03em] transition hover:text-white/60 md:text-4xl">
            {nextResource.shortTitle}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-white/60">
            Next Resource ↗
          </span>
        </Link>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#101010] px-6 py-24 text-center md:px-12 lg:px-20 lg:py-32">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-white/60">
          NORDVIA EXPORTS
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-medium uppercase leading-tight tracking-[-0.045em] md:text-6xl">
          Ready To Discuss
          <br />
          Your Apparel Project?
        </h2>

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
