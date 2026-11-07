
import Link from "next/link";
import {
  FaArrowRight,
  FaClipboardList,
  FaRulerCombined,
  FaLayerGroup,
  FaDraftingCompass,
  FaCheckCircle,
  FaRegFileAlt,
} from "react-icons/fa";

const stages = [
  {
    number: "01",
    title: "Project Brief",
    description:
      "Share your garment concept, target customer, intended use, reference material and development goals.",
  },
  {
    number: "02",
    title: "Specifications",
    description:
      "Define garment construction, measurements, fabric preferences, trims, branding and finishing requirements.",
  },
  {
    number: "03",
    title: "Material Planning",
    description:
      "Review suitable fabric and component options according to the product's design, performance and target positioning.",
  },
  {
    number: "04",
    title: "Sample Coordination",
    description:
      "Where sampling is available for the project, coordinate a prototype or sample against the agreed requirements.",
  },
  {
    number: "05",
    title: "Review & Refinement",
    description:
      "Review the submitted sample, identify adjustments and communicate the changes required before production consideration.",
  },
  {
    number: "06",
    title: "Production Preparation",
    description:
      "Organise the approved specifications and project details for the next manufacturing stage.",
  },
];

const deliverables = [
  {
    title: "Product specification planning",
    description:
      "A structured overview of garment details, construction, measurements and finishing requirements.",
    icon: FaClipboardList,
  },
  {
    title: "Fabric and trim direction",
    description:
      "Material and component options considered in relation to your garment concept.",
    icon: FaLayerGroup,
  },
  {
    title: "Measurement guidance",
    description:
      "Measurement points and size requirements documented for the intended garment.",
    icon: FaRulerCombined,
  },
  {
    title: "Prototype coordination",
    description:
      "Sample development coordination where the product and project scope allow.",
    icon: FaDraftingCompass,
  },
];

const requirements = [
  "Garment type and intended use",
  "Design references or sketches",
  "Preferred fabric and material details",
  "Size range and measurement requirements",
  "Branding, labels and finishing preferences",
  "Target quantity and development timeline",
];

export default function ProductDevelopmentSamplingPage() {
  return (
    <main className="bg-white text-[#171717]">

      {/* HERO — BLACK */}
      <section className="relative overflow-hidden bg-[#090909] text-white">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="absolute -right-12 -top-20 h-[360px] w-[360px] rounded-full border border-white/10" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1600px] items-end gap-16 px-6 pb-20 pt-36 md:px-12 md:pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
              Manufacturing / Product Development & Sampling
            </p>

            <h1 className="text-[clamp(2.8rem,6.2vw,5.8rem)] font-semibold uppercase leading-[0.98] tracking-[-0.055em]">
              From product idea
              <br />
              to a defined
              <span className="text-white/40"> garment.</span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
              Turn your apparel concept into a structured development brief.
              Coordinate specifications, material direction and sample
              requirements before moving towards production.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/request-a-quote?product=other"
                className="inline-flex min-h-12 cursor-pointer items-center gap-4 bg-white px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white/80"
              >
                Discuss Your Project <FaArrowRight />
              </Link>

              <Link
                href="#development-process"
                className="inline-flex min-h-12 cursor-pointer items-center border border-white/25 px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
              >
                Explore The Process
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-white/[0.04] p-7 md:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
              Development focus
            </p>

            <div className="mt-8 space-y-6">
              {[
                ["01", "Product requirements"],
                ["02", "Materials & construction"],
                ["03", "Sample coordination"],
                ["04", "Review & refinement"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 border-b border-white/10 pb-5 last:border-0 last:pb-0"
                >
                  <span className="text-xs text-white/35">{number}</span>
                  <span className="text-sm font-medium tracking-wide text-white/85">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                Project development
              </span>
              <p className="mt-2 text-sm text-white/70">
                Specifications. Materials. Samples.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION — WHITE */}
      <section className="mx-auto grid max-w-[1600px] gap-12 px-6 py-20 md:px-12 lg:grid-cols-2 lg:gap-24 lg:px-20 lg:py-28">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
            Development approach
          </p>

          <h2 className="max-w-xl text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.05em]">
            Good products begin with clearly defined requirements.
          </h2>
        </div>

        <div className="max-w-2xl self-end lg:pt-8">
          <p className="text-sm leading-7 text-black/60 md:text-base md:leading-8">
            Product development brings the important decisions behind a
            garment into one organised process. From fabric selection and
            measurements to construction details and branding, each
            requirement helps establish a clearer direction for manufacturing.
          </p>

          <p className="mt-6 text-sm leading-7 text-black/60 md:text-base md:leading-8">
            NORDVIA EXPORTS works with manufacturing partners to coordinate
            development requirements according to the product, specifications
            and agreed project scope.
          </p>
        </div>
      </section>

      {/* DELIVERABLES — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              What we help define
            </p>

            <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.05em]">
              The details behind the garment.
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2">
            {deliverables.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="bg-[#101010] p-8 transition-colors duration-300 hover:bg-[#191919] md:p-11"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-xl text-white/55" />
                    <span className="text-xs text-white/35">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-9 text-[clamp(1.2rem,2vw,1.6rem)] font-semibold uppercase tracking-[-0.035em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — WHITE */}
      <section
        id="development-process"
        className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 lg:px-20 lg:py-28"
      >
        <div className="max-w-2xl">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-black/45">
            Our workflow
          </p>

          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.05em]">
            A considered development process.
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/55 md:text-base">
            The exact sequence and available development options depend on
            your product requirements and project scope.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((stage) => (
            <article
              key={stage.number}
              className="border-t border-black/15 pt-6"
            >
              <span className="text-xs font-semibold tracking-[0.15em] text-black/35">
                {stage.number}
              </span>

              <h3 className="mt-5 text-[clamp(1.15rem,2vw,1.5rem)] font-semibold uppercase tracking-[-0.035em]">
                {stage.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/55">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* BRIEF CHECKLIST — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Prepare your brief
            </p>

            <h2 className="max-w-xl text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.05em]">
              Bring your product idea into focus.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 md:text-base md:leading-8">
              You do not need a complete technical pack to start a
              conversation. Share what you have, and we can identify the
              information needed to assess the project.
            </p>
          </div>

          <div className="grid content-start gap-5 sm:grid-cols-2">
            {requirements.map((item, index) => (
              <div
                key={item}
                className="flex gap-3 border-b border-white/15 pb-4"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-white/40" />
                <div>
                  <span className="mb-2 block text-[9px] uppercase tracking-[0.16em] text-white/35">
                    0{index + 1}
                  </span>
                  <span className="text-sm leading-6 text-white/75">
                    {item}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — WHITE */}
      <section className="bg-[#f3f3f1] px-6 py-20 text-center text-black md:py-28">
        <FaRegFileAlt className="mx-auto text-2xl text-black/35" />

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">
          Start a development enquiry
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.05em]">
          Let&apos;s define your next apparel project.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base">
          Tell us about your product, specifications and development goals.
        </p>

        <Link
          href="/request-a-quote?product=other"
          className="mt-9 inline-flex min-h-12 cursor-pointer items-center gap-4 bg-[#090909] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#333]"
        >
          Request A Project Quote <FaArrowRight />
        </Link>
      </section>
    </main>
  );
}
