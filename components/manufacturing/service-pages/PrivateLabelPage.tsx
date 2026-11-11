
import Link from "next/link";

const brandingOptions = [
  {
    number: "01",
    title: "Main Brand Labels",
    description:
      "Discuss woven or printed labels carrying your brand name, logo and visual identity.",
    details: ["Woven labels", "Printed labels", "Brand name and logo"],
  },
  {
    number: "02",
    title: "Neck Labels",
    description:
      "Plan the placement and presentation of your primary brand identification inside the garment.",
    details: ["Inside neck branding", "Label dimensions", "Placement requirements"],
  },
  {
    number: "03",
    title: "Care & Size Labels",
    description:
      "Coordinate garment information and sizing details according to your product requirements.",
    details: ["Care instructions", "Size identification", "Composition information"],
  },
  {
    number: "04",
    title: "Hang Tags",
    description:
      "Discuss branded hang tags that complement the garment and its retail presentation.",
    details: ["Custom artwork", "Tag shape and size", "Attachment options"],
  },
  {
    number: "05",
    title: "Printed & Embroidered Branding",
    description:
      "Explore suitable logo and artwork applications on selected garment areas.",
    details: ["Logo placement", "Print options", "Embroidery options"],
  },
  {
    number: "06",
    title: "Packaging & Presentation",
    description:
      "Coordinate packaging requirements that support your brand's product presentation.",
    details: ["Packaging concepts", "Branding details", "Packing requirements"],
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Brand",
    detail:
      "Provide your brand name, logo, artwork and the products you want to develop.",
  },
  {
    number: "02",
    title: "Define Branding",
    detail:
      "Discuss labels, hang tags, care information, logo placement and packaging.",
  },
  {
    number: "03",
    title: "Review Details",
    detail:
      "Confirm artwork, dimensions, materials, colors and available branding methods.",
  },
  {
    number: "04",
    title: "Approve Requirements",
    detail:
      "Review the agreed branding specifications, costs and project requirements.",
  },
  {
    number: "05",
    title: "Coordinate Production",
    detail:
      "Coordinate the approved garment and private-label requirements with the manufacturing partner.",
  },
];

const checklist = [
  ["Brand identity", "Brand name, logo files, artwork and preferred visual direction."],
  ["Garment selection", "Hoodies, tracksuits, jackets, T-shirts, joggers or other apparel."],
  ["Label requirements", "Label type, dimensions, material, colors and placement."],
  ["Artwork", "Print-ready logos, hang tag designs and other brand graphics."],
  ["Packaging", "Preferred packaging style, dimensions and branding requirements."],
  ["Order details", "Product quantities, destination market and preferred timeline."],
];

const garmentApplications = [
  ["Hoodies & Sweatshirts", "Neck labels, woven labels, embroidery, prints and hang tags."],
  ["Tracksuits & Sportswear", "Logo placement, care labels, size identification and packaging."],
  ["T-Shirts & Polos", "Printed or woven labels, artwork and garment identification."],
  ["Jackets & Outerwear", "Brand labels, selected trims, logo details and presentation."],
  ["Joggers & Sweatpants", "Waistband branding, care labels, logo applications and tags."],
];

export default function PrivateLabelPage() {
  return (
    <main className="bg-white text-[#171717]">

      {/* HERO — BLACK */}
      <section className="grid min-h-[590px] bg-[#090909] text-white lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 py-24 md:px-12 lg:px-20 lg:py-32">
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
            Manufacturing / 02
          </p>

          <h1 className="max-w-2xl text-[clamp(2.8rem,6.2vw,5.8rem)] font-semibold uppercase leading-[0.96] tracking-[-0.06em]">
            Private label clothing.
            <span className="block text-white/60">Your identity.</span>
            Your apparel.
          </h1>

          <p className="mt-8 max-w-lg text-sm leading-7 text-white/60 md:text-base md:leading-8">
            Develop apparel with your own brand identity through coordinated
            garment specifications, custom labeling, branding details and
            packaging requirements.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/request-a-quote?product=other"
              className="inline-flex min-h-12 cursor-pointer items-center bg-white px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-black transition hover:bg-white/80"
            >
              Discuss Your Brand ↗
            </Link>

            <Link
              href="/products"
              className="inline-flex min-h-12 cursor-pointer items-center border border-white/30 px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
            >
              Explore Products
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#242424] p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_35%,rgba(255,255,255,0.16),transparent_48%),linear-gradient(135deg,#292929,#090909)]" />

          <div className="relative w-full max-w-md">
            <div className="border border-white/20 bg-white/[0.04] p-7 md:p-10">
              <p className="text-[9px] uppercase tracking-[0.25em] text-white/60">
                Brand development / N-02
              </p>

              <div className="my-12 border-y border-white/15 py-9 text-center">
                <p className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold uppercase tracking-[0.16em]">
                  Your Label
                </p>
                <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-white/60">
                  Your identity goes here
                </p>
              </div>

              <div className="flex justify-between gap-4 text-[9px] uppercase tracking-[0.16em] text-white/60">
                <span>Labels</span>
                <span>Branding</span>
                <span>Packaging</span>
              </div>
            </div>

            <p className="mt-4 text-center text-[9px] uppercase tracking-[0.2em] text-white/60">
              Illustrative branding concept
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB — WHITE */}
      <div className="border-b border-black/10 bg-white px-6 py-4 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-black/70">
          <Link href="/" className="transition hover:text-black">Home</Link>
          <span>/</span>
          <Link href="/manufacturing" className="transition hover:text-black">Manufacturing</Link>
          <span>/</span>
          <span className="text-black">Private Label</span>
        </div>
      </div>

      {/* INTRODUCTION — WHITE */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 lg:px-20 lg:py-28">
        <div>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
            Private label development
          </p>

          <h2 className="max-w-xl text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
            Make every garment part of your brand.
          </h2>
        </div>

        <div className="self-end">
          <p className="text-sm leading-7 text-black/60 md:text-base md:leading-8">
            Private-label apparel allows businesses to develop garments under
            their own brand identity. Beyond selecting a product, you can
            define how your brand appears through labels, artwork, garment
            details and packaging.
          </p>

          <p className="mt-5 text-sm leading-7 text-black/60 md:text-base md:leading-8">
            NORDVIA EXPORTS coordinates these requirements with manufacturing
            partners, helping establish the branding specifications that
            accompany your apparel project.
          </p>
        </div>
      </section>

      {/* BRANDING OPTIONS — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                Branding possibilities
              </p>

              <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase tracking-[-0.05em]">
                Build your brand details.
              </h2>
            </div>

            <p className="max-w-sm text-xs leading-6 text-white/60 md:text-sm">
              Available options depend on garment construction, artwork,
              supplier capabilities and project quantities.
            </p>
          </div>

          <div className="grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {brandingOptions.map((item) => (
              <article
                key={item.number}
                className="border-b border-r border-white/15 p-7 transition-colors duration-300 hover:bg-white/[0.04] md:p-9"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.2em] text-white/60">
                    {item.number}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/60">
                    Branding option
                  </span>
                </div>

                <h3 className="mt-8 text-[clamp(1.1rem,2vw,1.5rem)] font-semibold uppercase tracking-[-0.035em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-white/15 pt-5">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-[10px] uppercase tracking-[0.06em] text-white/65"
                    >
                      <span className="text-white/60">↗</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GARMENT APPLICATION — WHITE */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-20 lg:py-28">
        <div>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
            Across apparel categories
          </p>

          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
            One brand identity. Different products.
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/70 md:text-base">
            Branding requirements can be considered across different garment
            categories, with suitable placement and finishing determined
            for each product.
          </p>
        </div>

        <div className="divide-y divide-black/15 border-y border-black/15">
          {garmentApplications.map(([title, detail], index) => (
            <div
              key={title}
              className="grid gap-2 py-6 sm:grid-cols-[190px_1fr] sm:gap-8"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-black/75">
                0{index + 1} / {title}
              </span>

              <p className="text-sm leading-7 text-black/60">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-white md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            Private label workflow
          </p>

          <h2 className="mb-12 max-w-3xl text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.05] tracking-[-0.05em]">
            From brand brief to garment.
          </h2>

          <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item) => (
              <article
                key={item.number}
                className="bg-[#101010] p-6 transition-colors duration-300 hover:bg-[#191919] md:p-7"
              >
                <span className="text-3xl font-light tracking-[-0.05em] text-white/60">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.08em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-white/55">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO PREPARE — WHITE */}
      <section className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-20 lg:py-28">
        <div>
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
            Prepare your enquiry
          </p>

          <h2 className="text-[clamp(2rem,4.5vw,4rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
            What should you provide?
          </h2>

          <p className="mt-6 text-sm leading-7 text-black/70 md:text-base">
            A clear brand brief helps identify the right labeling,
            customization and packaging requirements for your project.
          </p>
        </div>

        <div className="divide-y divide-black/15 border-y border-black/15">
          {checklist.map(([title, detail], index) => (
            <div
              key={title}
              className="grid gap-2 py-5 sm:grid-cols-[155px_1fr] sm:gap-8"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
                0{index + 1} / {title}
              </span>

              <p className="text-sm leading-7 text-black/60">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT CONSIDERATIONS — BLACK */}
      <section className="border-y border-white/10 bg-[#101010] px-6 py-16 text-white md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
          <h2 className="text-[clamp(1.35rem,2.5vw,2rem)] font-semibold uppercase leading-tight tracking-[-0.04em]">
            Important project considerations
          </h2>

          <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
            Label materials, branding methods, artwork requirements,
            packaging options, minimum quantities, costs and timelines are
            confirmed individually. Any design ownership, artwork approvals
            and agreed specifications should be documented before production.
            Availability of specific customization options depends on the
            selected garment and manufacturing partner.
          </p>
        </div>
      </section>

      {/* CTA — WHITE */}
      <section className="bg-[#f3f3f1] px-6 py-20 text-black md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/70">
              Develop your private-label collection
            </p>

            <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Your brand deserves its own identity.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/70 md:text-base">
              Tell us about your apparel, brand labels and customization
              requirements to begin a project discussion.
            </p>
          </div>

          <Link
            href="/request-a-quote?product=other"
            className="inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center bg-[#090909] px-7 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#333]"
          >
            Request a quote ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
