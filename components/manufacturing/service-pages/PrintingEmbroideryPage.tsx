
import Link from "next/link";
import {
  FaArrowRight,
  FaPaintBrush,
  FaLayerGroup,
  FaImage,
  FaCheckCircle,
  FaTshirt,
} from "react-icons/fa";

const methods = [
  {
    number: "01",
    title: "Screen Printing",
    category: "Print application",
    description:
      "A printing approach commonly considered for bold artwork, graphic placements and repeat designs. Suitability depends on the artwork, garment and production requirements.",
    details: ["Graphic artwork", "Placement planning", "Colour considerations"],
  },
  {
    number: "02",
    title: "DTF & Heat Transfer",
    category: "Transfer application",
    description:
      "Transfer-based decoration options for selected artwork and garment applications. The appropriate method depends on the design and fabric.",
    details: ["Detailed artwork", "Selected garment fabrics", "Placement requirements"],
  },
  {
    number: "03",
    title: "Embroidery",
    category: "Thread application",
    description:
      "Thread-based branding for logos, lettering and selected decorative elements, with stitch detail and placement considered during planning.",
    details: ["Logo embroidery", "Text and lettering", "Placement guidance"],
  },
  {
    number: "04",
    title: "Artwork & Placement",
    category: "Design preparation",
    description:
      "Artwork requirements are reviewed for size, position, colour and application before decoration specifications are confirmed.",
    details: ["Artwork review", "Size and position", "Application planning"],
  },
];

const workflow = [
  ["01", "Share artwork", "Provide your logo, graphic, reference or design file."],
  ["02", "Review application", "Discuss the garment, artwork complexity and suitable decoration options."],
  ["03", "Confirm placement", "Define artwork size, position, colours and relevant production details."],
  ["04", "Coordinate execution", "Proceed according to the confirmed decoration requirements and project scope."],
];

const garmentApplications = [
  ["Hoodies & Sweatshirts", "Chest logos, back graphics and sleeve details."],
  ["T-Shirts & Polos", "Front graphics, chest branding and selected placements."],
  ["Tracksuits & Sportswear", "Logos, lettering and coordinated garment branding."],
  ["Jackets & Outerwear", "Selected embroidered and printed applications."],
];

const artworkRequirements = [
  "Logo, graphic or artwork files",
  "Garment category and fabric details",
  "Preferred decoration method, if known",
  "Artwork size and placement references",
  "Colour preferences and quantity",
];

export default function PrintingEmbroideryPage() {
  return (
    <main className="bg-white text-[#171717]">

      {/* HERO — BLACK */}
      <section className="relative overflow-hidden bg-[#090909] text-white">
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="absolute -right-20 top-0 h-full w-px bg-white" />
          <div className="absolute right-[18%] top-0 h-full w-px bg-white" />
          <div className="absolute right-[36%] top-0 h-full w-px bg-white" />
          <div className="absolute bottom-[25%] left-0 h-px w-full bg-white" />
        </div>

        <div className="relative mx-auto grid min-h-[580px] max-w-[1600px] items-end gap-14 px-6 pb-20 pt-32 sm:pt-36 md:px-12 md:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Manufacturing / Printing & Embroidery
            </p>

            <h1 className="text-[clamp(2.8rem,6.5vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.055em]">
              Make your
              <br />
              brand&apos;s identity
              <span className="text-white/40"> visible.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 md:text-base">
              Coordinate garment decoration and branding details through
              printing, embroidery and selected application methods suited
              to your artwork and apparel requirements.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/request-a-quote/?product=other"
                className="inline-flex min-h-12 cursor-pointer items-center gap-4 bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white/80 sm:px-7"
              >
                Discuss Your Artwork <FaArrowRight />
              </Link>

              <Link
                href="#decoration-methods"
                className="inline-flex min-h-12 cursor-pointer items-center border border-white/25 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black sm:px-7"
              >
                Explore Methods
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px border border-white/15 bg-white/15">
            <div className="bg-[#111] p-6 sm:p-7">
              <FaPaintBrush className="text-xl text-white/60" />
              <p className="mt-8 text-sm font-semibold sm:text-base">
                Print applications
              </p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Graphic and artwork decoration
              </p>
            </div>

            <div className="bg-[#111] p-6 sm:p-7">
              <FaLayerGroup className="text-xl text-white/60" />
              <p className="mt-8 text-sm font-semibold sm:text-base">
                Thread applications
              </p>
              <p className="mt-2 text-xs leading-6 text-white/45">
                Embroidered branding details
              </p>
            </div>

            <div className="col-span-2 bg-[#111] p-6 sm:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                The details matter
              </p>
              <p className="mt-3 text-base font-medium text-white/85 sm:text-lg">
                Artwork. Placement. Fabric. Finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — WHITE */}
      <section className="bg-white px-6 py-20 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
              Branding & decoration
            </p>

            <h2 className="mt-6 max-w-xl text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
              Decoration that works with the garment.
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-[14px] leading-7 text-black/60 sm:text-[15px] sm:leading-8 md:text-base">
              Printing and embroidery can shape how a garment communicates a
              brand. The right application depends on the artwork, fabric,
              garment construction, desired appearance and intended use.
            </p>

            <p className="mt-6 text-[14px] leading-7 text-black/60 sm:text-[15px] sm:leading-8 md:text-base">
              We coordinate decoration requirements with manufacturing
              partners, helping establish the artwork and placement details
              before the project moves forward.
            </p>
          </div>
        </div>
      </section>

      {/* METHODS — BLACK */}
      <section
        id="decoration-methods"
        className="scroll-mt-24 bg-[#101010] px-6 py-20 text-white sm:py-24 md:px-12 md:py-28 lg:px-20"
      >
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            Decoration options
          </p>

          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
            Different methods. Different expressions.
          </h2>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-14">
            {methods.map((method) => (
              <article
                key={method.number}
                className="bg-[#101010] p-7 transition-colors duration-300 hover:bg-[#191919] sm:p-9 md:p-11"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] tracking-[0.2em] text-white/40">
                    {method.number}
                  </span>

                  <span className="text-right text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                    {method.category}
                  </span>
                </div>

                <h3 className="mt-8 text-[clamp(1.35rem,2.2vw,1.8rem)] font-semibold tracking-[-0.035em]">
                  {method.title}
                </h3>

                <p className="mt-4 max-w-lg text-[13px] leading-7 text-white/55 sm:text-sm">
                  {method.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {method.details.map((detail) => (
                    <span
                      key={detail}
                      className="border border-white/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/55"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GARMENT APPLICATIONS — WHITE */}
      <section className="bg-white px-6 py-20 sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <FaTshirt className="text-2xl text-black/40" />

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
              Garment applications
            </p>

            <h2 className="mt-5 max-w-lg text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
              Branding across apparel categories.
            </h2>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {garmentApplications.map(([title, description], index) => (
              <div
                key={title}
                className="border-t border-black/15 py-7 sm:px-4"
              >
                <span className="text-[10px] tracking-[0.18em] text-black/35">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-[clamp(1.1rem,2vw,1.4rem)] font-semibold tracking-[-0.035em]">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-black/55 sm:text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-white sm:py-24 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            From artwork to application
          </p>

          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
            A clear route for your branding requirements.
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:mt-16 lg:grid-cols-4">
            {workflow.map(([number, title, description]) => (
              <article key={number} className="border-t border-white/20 pt-6">
                <span className="text-[11px] tracking-[0.15em] text-white/40">
                  {number}
                </span>

                <h3 className="mt-6 text-[clamp(1.1rem,2vw,1.4rem)] font-semibold tracking-[-0.025em]">
                  {title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/55 sm:text-sm">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT CONSIDERATIONS — WHITE */}
      <section className="bg-white px-6 py-20 sm:py-24 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
              Artwork preparation
            </p>

            <h2 className="mt-5 max-w-xl text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
              What to share with us.
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-7 text-black/55 sm:text-[15px] sm:leading-8">
              Providing clear artwork and garment information helps us assess
              suitable decoration options for your project.
            </p>
          </div>

          <div className="space-y-0">
            {artworkRequirements.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 border-b border-black/10 py-5 first:border-t"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-sm text-black/40" />

                <div className="flex flex-1 items-start justify-between gap-4">
                  <span className="text-[13px] leading-6 text-black/65 sm:text-sm">
                    {item}
                  </span>

                  <span className="shrink-0 text-[9px] tracking-[0.15em] text-black/30">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-center text-white sm:py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1000px]">
          <FaImage className="mx-auto text-2xl text-white/45" />

          <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            Printing & embroidery enquiry
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
            Let&apos;s discuss how your artwork meets your apparel.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
            Share your garment, artwork and branding requirements for a
            project-specific assessment.
          </p>

          <Link
            href="/request-a-quote/?product=other"
            className="mt-9 inline-flex min-h-12 cursor-pointer items-center gap-4 bg-white px-7 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white/80 sm:px-8"
          >
            Request A Project Quote <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
