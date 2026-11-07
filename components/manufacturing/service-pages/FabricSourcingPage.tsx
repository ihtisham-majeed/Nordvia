
import Link from "next/link";

const fabricGroups = [
  {
    number: "01",
    title: "Cotton & Cotton Blends",
    description:
      "Discuss cotton-based materials and blended constructions for everyday apparel.",
    examples: "Jersey · Interlock · Cotton blends",
    use: "T-shirts, polos and casual apparel",
  },
  {
    number: "02",
    title: "Fleece & Terry",
    description:
      "Explore brushed and loopback constructions for different garment weights and hand-feels.",
    examples: "Fleece · French terry · Brushed fleece",
    use: "Hoodies, sweatshirts and joggers",
  },
  {
    number: "03",
    title: "Performance Fabrics",
    description:
      "Consider stretch, recovery, breathability and functional material requirements.",
    examples: "Polyester blends · Stretch knits",
    use: "Tracksuits and sportswear",
  },
  {
    number: "04",
    title: "Woven Materials",
    description:
      "Discuss woven structures and suitable material options for outerwear concepts.",
    examples: "Polyester woven · Cotton woven · Blends",
    use: "Jackets and selected outerwear",
  },
];

const specification = [
  [
    "Composition",
    "The fibre content, such as cotton, polyester or a blended construction.",
  ],
  [
    "Fabric weight",
    "GSM requirements and the intended weight or substance of the garment.",
  ],
  [
    "Construction",
    "Knit or woven structure, texture, surface and intended fabric behaviour.",
  ],
  [
    "Stretch & recovery",
    "Required flexibility, movement and recovery for the intended garment.",
  ],
  [
    "Color",
    "Color references, dyeing requirements and consistency expectations.",
  ],
  [
    "Finishing",
    "Brushing, softening, surface treatments and other requested finishes.",
  ],
];

const stages = [
  [
    "01",
    "Identify the garment",
    "Define the product category, intended use and target fabric characteristics.",
  ],
  [
    "02",
    "Set material requirements",
    "Discuss composition, GSM, construction, color, stretch and finishing.",
  ],
  [
    "03",
    "Review sourcing options",
    "Coordinate potential material options and supplier availability.",
  ],
  [
    "04",
    "Evaluate suitability",
    "Review the proposed material against the garment and project requirements.",
  ],
  [
    "05",
    "Confirm before production",
    "Confirm the selected material, availability, quantities and applicable costs.",
  ],
];

export default function FabricSourcingPage() {
  return (
    <main className="bg-[#090909] text-white">

      {/* HERO — BLACK */}
      <section className="grid min-h-[570px] bg-[#090909] text-white lg:min-h-[660px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-24 sm:px-10 md:px-12 lg:px-20 lg:py-32">
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45 sm:text-[11px]">
            Manufacturing / 06
          </p>

          <h1 className="max-w-2xl text-[clamp(2.8rem,6.5vw,5.8rem)] font-semibold uppercase leading-[0.96] tracking-[-0.06em]">
            The right fabric.
            <span className="block text-white/40">For the right</span>
            garment.
          </h1>

          <p className="mt-7 max-w-lg text-[14px] leading-7 text-white/60 sm:text-[15px] sm:leading-8 md:text-base">
            Coordinate material options around your garment category,
            composition, weight, performance expectations and preferred finish.
          </p>

          <Link
            href="/request-a-quote?product=other"
            className="mt-9 inline-flex min-h-12 w-fit items-center justify-center bg-white px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-white/80"
          >
            Discuss Fabric Requirements ↗
          </Link>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#181818] p-8 sm:p-10 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(255,255,255,0.15),transparent_48%),linear-gradient(135deg,#303030,#090909)]" />

          <div className="relative w-full max-w-md">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[1.2] border border-white/20 bg-white/[0.04] p-4 sm:p-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Material / 01
                </span>
                <p className="mt-8 text-[clamp(1rem,2vw,1.3rem)] font-semibold uppercase tracking-[-0.03em]">
                  Structure
                </p>
              </div>

              <div className="mt-8 aspect-[1.2] border border-white/20 bg-white/[0.08] p-4 sm:p-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Material / 02
                </span>
                <p className="mt-8 text-[clamp(1rem,2vw,1.3rem)] font-semibold uppercase tracking-[-0.03em]">
                  Weight
                </p>
              </div>

              <div className="aspect-[1.2] border border-white/20 bg-white/[0.08] p-4 sm:p-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Material / 03
                </span>
                <p className="mt-8 text-[clamp(1rem,2vw,1.3rem)] font-semibold uppercase tracking-[-0.03em]">
                  Composition
                </p>
              </div>

              <div className="mt-8 aspect-[1.2] border border-white/20 bg-white/[0.04] p-4 sm:p-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Material / 04
                </span>
                <p className="mt-8 text-[clamp(1rem,2vw,1.3rem)] font-semibold uppercase tracking-[-0.03em]">
                  Finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB — WHITE */}
      <div className="border-b border-black/10 bg-white px-6 py-4 text-black sm:px-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] text-black/45 sm:text-[10px]">
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link href="/manufacturing" className="transition hover:text-black">
            Manufacturing
          </Link>
          <span>/</span>
          <span className="text-black">Fabric Sourcing</span>
        </div>
      </div>

      {/* MATERIAL INTRODUCTION — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              Material selection
            </p>

            <h2 className="max-w-xl text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              Fabric shapes how a garment feels and performs.
            </h2>
          </div>

          <div className="self-end">
            <p className="text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 md:text-base">
              The material affects a garment’s appearance, weight, comfort,
              drape and intended use. We discuss fabric requirements and
              coordinate potential sourcing options through our manufacturing
              network.
            </p>

            <p className="mt-5 text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 md:text-base">
              The starting point is your product. A heavyweight hoodie,
              lightweight T-shirt and performance tracksuit each call for
              different material considerations.
            </p>
          </div>
        </div>
      </section>

      {/* FABRIC CATEGORIES — WHITE */}
      <section className="bg-white px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45 sm:text-[11px]">
              Material categories
            </p>

            <h2 className="text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              Explore fabric directions.
            </h2>
          </div>

          <div className="grid gap-px bg-black/15 sm:grid-cols-2">
            {fabricGroups.map((item) => (
              <article
                key={item.number}
                className="group bg-[#f3f3f1] p-6 transition duration-300 hover:bg-[#e9e9e6] sm:p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-black/35">
                    {item.number}
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-black/40">
                    Material group
                  </span>
                </div>

                <h3 className="mt-8 text-[clamp(1.3rem,2vw,1.8rem)] font-semibold uppercase leading-tight tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-lg text-[13px] leading-7 text-black/60 sm:text-sm">
                  {item.description}
                </p>

                <div className="mt-8 border-t border-black/10 pt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">
                    Examples
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-black/75 sm:text-sm">
                    {item.examples}
                  </p>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.16em] text-black/40">
                    Typical application
                  </p>

                  <p className="mt-2 text-[13px] leading-6 text-black/65 sm:text-sm">
                    {item.use}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-[11px] leading-6 text-black/45 sm:text-xs">
            These are material categories for discussion, not a guaranteed
            stock list. Specific compositions, constructions and availability
            require supplier confirmation.
          </p>
        </div>
      </section>

      {/* FABRIC SPECIFICATION — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              Fabric specification
            </p>

            <h2 className="text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              Six details worth defining.
            </h2>

            <p className="mt-6 max-w-md text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              A useful fabric brief goes beyond simply naming a material.
              These details help communicate what your garment actually needs.
            </p>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {specification.map(([title, detail], index) => (
              <div
                key={title}
                className="grid gap-2 py-5 sm:grid-cols-[170px_1fr] sm:gap-8 sm:py-6"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-white/80 sm:text-[11px]">
                  0{index + 1} / {title}
                </span>

                <p className="text-[13px] leading-7 text-white/55 sm:text-sm">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING PROCESS — WHITE */}
      <section className="bg-[#f3f3f1] px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45 sm:text-[11px]">
            Sourcing process
          </p>

          <h2 className="mb-12 text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
            From material brief to selection.
          </h2>

          <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {stages.map(([number, title, detail]) => (
              <article
                key={number}
                className="min-h-[225px] bg-white p-6 transition duration-300 hover:bg-[#eaeae7] sm:p-7"
              >
                <span className="text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[-0.05em] text-black/30">
                  {number}
                </span>

                <h3 className="mt-8 text-[13px] font-bold uppercase leading-snug tracking-[0.06em] sm:text-sm">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-black/55">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIAL APPROVAL — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/40 sm:text-[11px]">
              Before material approval
            </p>

            <h2 className="max-w-xl text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              What needs confirmation?
            </h2>
          </div>

          <div className="space-y-5 text-[14px] leading-7 text-white/60 sm:text-[15px] sm:leading-8 md:text-base">
            <p>
              Fabric availability, minimum sourcing quantities, composition,
              colors, weights and finishing options are subject to supplier
              confirmation.
            </p>

            <p>
              Where material samples or swatches are available, their
              availability, cost and delivery arrangements should be agreed
              before proceeding.
            </p>

            <p>
              Final material selection should be confirmed against the garment
              specification and the requirements of the intended order.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA — WHITE */}
      <section className="bg-white px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45 sm:text-[11px]">
              Discuss your material requirements
            </p>

            <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Start with the fabric your product needs.
            </h2>

            <p className="mt-5 max-w-xl text-[14px] leading-7 text-black/55 sm:text-[15px] sm:leading-8">
              Tell us about your garment, preferred composition, GSM,
              color and intended application.
            </p>
          </div>

          <Link
            href="/request-a-quote?product=other"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-[#090909] px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-black/75"
          >
            Send an enquiry ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
