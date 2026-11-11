
import Link from "next/link";
import {
  FaArrowRight,
  FaTshirt,
  FaLayerGroup,
  FaRulerCombined,
  FaSwatchbook,
  FaCheckCircle,
  FaRegLightbulb,
} from "react-icons/fa";

const categories = [
  {
    number: "01",
    title: "Hoodies & Sweatshirts",
    description:
      "Custom silhouettes, fleece and terry options, hood construction, cuffs, hems and branding details.",
  },
  {
    number: "02",
    title: "T-Shirts & Polos",
    description:
      "Garment proportions, neckline details, sleeve construction, fabric selection and graphic placement.",
  },
  {
    number: "03",
    title: "Tracksuits & Sportswear",
    description:
      "Coordinated tops and bottoms, functional details, fabric direction and selected performance requirements.",
  },
  {
    number: "04",
    title: "Jackets & Outerwear",
    description:
      "Outerwear silhouettes, lining considerations, closures, pockets, trims and finishing details.",
  },
  {
    number: "05",
    title: "Joggers & Sweatpants",
    description:
      "Waistband construction, leg shape, pocket details, cuffs and fabric weight considerations.",
  },
  {
    number: "06",
    title: "Custom Apparel",
    description:
      "Product-specific garment concepts developed around your brand brief and intended market.",
  },
];

const elements = [
  {
    title: "Silhouette & Fit",
    description:
      "Define the overall garment shape, proportions and intended fit direction.",
    icon: FaRulerCombined,
  },
  {
    title: "Fabric & Materials",
    description:
      "Consider fabric composition, weight, construction, texture and intended use.",
    icon: FaLayerGroup,
  },
  {
    title: "Colours & Finishes",
    description:
      "Establish colour direction, trims, surface details and garment finishing.",
    icon: FaSwatchbook,
  },
  {
    title: "Brand Identity",
    description:
      "Plan labels, logos, artwork placements and other brand-specific details.",
    icon: FaRegLightbulb,
  },
];

const process = [
  [
    "01",
    "Understand the Brief",
    "Discuss your brand, target customer, garment type and product objectives.",
  ],
  [
    "02",
    "Define the Garment",
    "Establish silhouette, fabric direction, construction and key design details.",
  ],
  [
    "03",
    "Coordinate Requirements",
    "Organise specifications, branding, trims and relevant development details.",
  ],
  [
    "04",
    "Review the Direction",
    "Evaluate the proposed requirements and identify any adjustments needed.",
  ],
  [
    "05",
    "Prepare for Production",
    "Move forward with agreed specifications, subject to project assessment and approval.",
  ],
];

const requirements = [
  "Product category and intended market",
  "Design references, sketches or inspiration",
  "Preferred fabric, colours and materials",
  "Fit, construction and size requirements",
  "Branding, labels and finishing details",
  "Estimated quantity and target timeline",
];

export default function CustomApparelDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-[#090909] text-white">
      {/* HERO — BLACK */}
      <section className="relative overflow-hidden bg-[#090909] text-white">
        <div className="absolute -bottom-64 -left-32 h-[560px] w-[560px] rounded-full border border-white/10" />
        <div className="absolute -bottom-44 -left-12 h-[380px] w-[380px] rounded-full border border-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(255,255,255,0.1),transparent_40%)]" />

        <div className="relative mx-auto grid min-h-[620px] max-w-[1600px] items-end gap-12 px-5 pb-20 pt-36 sm:px-8 sm:pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              <span className="h-px w-8 bg-white/50" />
              Manufacturing / Custom Apparel Development
            </p>

            <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.06em]">
              Custom apparel development
              <br />
              for your <span className="text-white/60">brand.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[14px] leading-7 text-white/65 sm:text-[16px] sm:leading-8">
              Develop custom apparel around your brand identity, product
              requirements and intended market. Define the garment details
              before moving towards manufacturing.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/request-a-quote?product=other"
                className="group inline-flex cursor-pointer items-center gap-4 bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white/80 sm:px-7"
              >
                Start Your Project
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#apparel-categories"
                className="inline-flex cursor-pointer items-center border border-white/25 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black sm:px-7"
              >
                Explore Apparel
              </Link>
            </div>
          </div>

          <div className="border border-white/15 bg-white/[0.02] p-7 sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Development Considerations
            </p>

            <div className="mt-9 space-y-7">
              {[
                ["01", "Design Direction"],
                ["02", "Garment Construction"],
                ["03", "Materials & Components"],
                ["04", "Branding & Finishing"],
              ].map(([number, label]) => (
                <div key={number} className="flex items-center gap-5">
                  <span className="text-[10px] text-white/60">{number}</span>
                  <span className="text-[13px] font-medium text-white/85 sm:text-[14px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — WHITE */}
      <section className="bg-white px-5 py-20 text-[#171717] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
              Custom Product Direction
            </p>

            <h2 className="mt-6 text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
              More Than
              <br />
              Choosing A Garment.
              <br />
              <span className="text-black/70">Defining Its Details.</span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pt-10">
            <p className="text-[14px] leading-8 text-black/60 sm:text-[16px]">
              Custom apparel development brings your product requirements
              together into a clear garment direction. The process can include
              silhouette, construction, material choices, trims, colours and
              branding elements.
            </p>

            <p className="mt-6 text-[14px] leading-8 text-black/70 sm:text-[15px]">
              Whether you are developing a new clothing line or refining an
              existing product, NORDVIA EXPORTS coordinates with manufacturing
              partners to assess the requirements and identify a suitable
              development approach.
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES — BLACK */}
      <section
        id="apparel-categories"
        className="scroll-mt-20 bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              Product Categories
            </p>

            <h2 className="mt-5 text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[1] tracking-[-0.055em]">
              Develop Across
              <br />
              Apparel Categories.
            </h2>

            <p className="mt-6 text-[13px] leading-7 text-white/60 sm:text-[14px]">
              Share your preferred category or discuss a product concept
              that requires a more specific development brief.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {categories.map((item) => (
              <article
                key={item.number}
                className="border border-white/10 bg-[#111111] p-7 transition duration-300 hover:border-white/30 hover:bg-[#171717] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <FaTshirt className="text-xl text-white/55" />
                  <span className="text-[10px] tracking-[0.2em] text-white/60">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-9 text-[17px] font-semibold tracking-[-0.025em] sm:text-[19px]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/60 sm:text-[14px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN ELEMENTS — WHITE */}
      <section className="bg-[#F4F3EF] px-5 py-20 text-[#171717] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
              The Design Framework
            </p>

            <h2 className="mt-5 text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
              Every Detail
              <br />
              Contributes To
              <br />
              <span className="text-black/70">The Final Product.</span>
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {elements.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="border-t border-black/15 pt-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-xl text-black/70" />
                    <span className="text-[10px] tracking-[0.2em] text-black/70">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[17px] font-semibold sm:text-[19px]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-7 text-black/70 sm:text-[14px]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — BLACK */}
      <section className="bg-[#090909] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Development Workflow
          </p>

          <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[1] tracking-[-0.055em]">
            From Your Brief
            <br />
            To A Defined Apparel Project.
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {process.map(([number, title, description]) => (
              <article
                key={number}
                className="border-t border-white/20 pt-6"
              >
                <span className="text-[10px] tracking-[0.2em] text-white/60">
                  {number}
                </span>

                <h3 className="mt-7 text-[17px] font-semibold sm:text-[19px]">
                  {title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/60 sm:text-[14px]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS — WHITE */}
      <section className="bg-white px-5 py-20 text-[#171717] sm:px-8 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
              Project Preparation
            </p>

            <h2 className="mt-5 text-[clamp(2.5rem,5.2vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.055em]">
              What Should
              <br />
              Your Brief
              <br />
              <span className="text-black/70">Include?</span>
            </h2>

            <p className="mt-6 max-w-lg text-[14px] leading-7 text-black/70 sm:text-[15px]">
              A clear starting brief helps us understand the product you
              want to develop. Initial ideas and references are welcome.
            </p>
          </div>

          <div className="lg:pt-5">
            {requirements.map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-black/10 py-5 first:border-t"
              >
                <FaCheckCircle className="mt-1 shrink-0 text-[13px] text-black/70" />
                <span className="text-[13px] leading-6 text-black/65 sm:text-[14px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — BLACK */}
      <section className="border-t border-white/10 bg-[#090909] px-5 py-24 text-center text-white sm:px-8 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <FaTshirt className="mx-auto text-2xl text-white/60" />

          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Custom Apparel Enquiry
          </p>

          <h2 className="mt-5 text-[clamp(2.7rem,6vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
            Have A Garment
            <br />
            <span className="text-white/60">Concept In Mind?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[14px] leading-7 text-white/60 sm:text-[16px] sm:leading-8">
            Tell us what you want to develop and let&apos;s assess the
            requirements together.
          </p>

          <Link
            href="/request-a-quote?product=other"
            className="group mt-9 inline-flex cursor-pointer items-center gap-4 bg-white px-7 py-5 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white/80"
          >
            Discuss Your Project
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
