
import Link from "next/link";

const comparison = [
  {
    label: "Starting point",
    oem: "Your existing design or technical specification.",
    odm: "Your product idea, references or development direction.",
  },
  {
    label: "Design direction",
    oem: "You provide the product direction and specifications.",
    odm: "Development requirements are discussed collaboratively.",
  },
  {
    label: "Main focus",
    oem: "Coordinating production around your approved requirements.",
    odm: "Defining a suitable product direction before production.",
  },
  {
    label: "Brand identity",
    oem: "Your supplied branding and artwork requirements.",
    odm: "Branding requirements considered during development.",
  },
];

const requirements = [
  ["Design files", "Technical drawings, reference images or product sketches."],
  ["Measurements", "Size charts, grading requirements and fit preferences."],
  ["Materials", "Fabric composition, GSM, color and finishing preferences."],
  ["Construction", "Seams, panels, trims, closures and garment details."],
  ["Branding", "Logos, labels, artwork placement and packaging requirements."],
  ["Order details", "Product quantities, target market and preferred timeline."],
];

const workflow = [
  [
    "01",
    "Initial enquiry",
    "Tell us whether you have a finished specification or an early product concept.",
  ],
  [
    "02",
    "Requirement review",
    "Review the available design information, intended product and technical requirements.",
  ],
  [
    "03",
    "Development discussion",
    "Discuss materials, construction, branding and the possible development approach.",
  ],
  [
    "04",
    "Specification alignment",
    "Clarify the product details and identify information that still needs confirmation.",
  ],
  [
    "05",
    "Approval & planning",
    "Confirm the agreed scope, feasibility, costs and project schedule.",
  ],
];

export default function OEMODMPage() {
  return (
    <main className="bg-[#090909] text-white">

      {/* HERO — BLACK */}
      <section className="grid min-h-[570px] bg-[#090909] text-white lg:min-h-[660px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center px-6 py-24 sm:px-10 md:px-12 lg:px-20 lg:py-32">
          <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-[11px]">
            Manufacturing / 03
          </p>

          <h1 className="max-w-2xl text-[clamp(2.8rem,6.5vw,5.8rem)] font-semibold uppercase leading-[0.96] tracking-[-0.06em]">
            OEM & ODM.
            <span className="block text-white/60">Two routes.</span>
            One clear brief.
          </h1>

          <p className="mt-7 max-w-lg text-[14px] leading-7 text-white/60 sm:text-[15px] sm:leading-8 md:text-base">
            Whether you have a complete design or an early product concept,
            establish the right development and manufacturing requirements
            for your apparel project.
          </p>

          <Link
            href="/request-a-quote?product=other"
            className="mt-9 inline-flex min-h-12 w-fit items-center justify-center bg-white px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-white/80"
          >
            Discuss Your Product ↗
          </Link>
        </div>

        <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[#181818] p-8 sm:p-10 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.16),transparent_55%),linear-gradient(135deg,#292929,#090909)]" />

          <div className="relative grid w-full max-w-md grid-cols-2 gap-3">
            <div className="border border-white/20 bg-black/20 p-5 sm:p-6 md:p-8">
              <span className="text-[9px] font-medium tracking-[0.2em] text-white/60 sm:text-[10px]">
                01 / OEM
              </span>

              <p className="mt-10 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold uppercase leading-tight tracking-[-0.045em]">
                Your
                <br />
                Design.
              </p>
            </div>

            <div className="mt-12 border border-white/20 bg-white p-5 text-black sm:p-6 md:p-8">
              <span className="text-[9px] font-medium tracking-[0.2em] text-black/70 sm:text-[10px]">
                02 / ODM
              </span>

              <p className="mt-10 text-[clamp(1.5rem,3vw,2.2rem)] font-semibold uppercase leading-tight tracking-[-0.045em]">
                Your
                <br />
                Concept.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BREADCRUMB — WHITE */}
      <div className="border-b border-black/10 bg-white px-6 py-4 text-black sm:px-10 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.16em] text-black/70 sm:text-[10px]">
          <Link href="/" className="transition hover:text-black">
            Home
          </Link>
          <span>/</span>
          <Link href="/manufacturing" className="transition hover:text-black">
            Manufacturing
          </Link>
          <span>/</span>
          <span className="text-black">OEM & ODM</span>
        </div>
      </div>

      {/* INTRODUCTION — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-[11px]">
              Two development approaches
            </p>

            <h2 className="max-w-xl text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              Start with what you already have.
            </h2>
          </div>

          <p className="self-end text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8 md:text-base">
            Not every apparel project begins at the same stage. Some brands
            already have technical packs and approved designs. Others have an
            idea that needs to be translated into a clearer product brief.
            Understanding that difference helps establish the appropriate
            project scope.
          </p>
        </div>
      </section>

      {/* OEM VS ODM — WHITE */}
      <section className="bg-white px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/70 sm:text-[11px]">
              Compare the approaches
            </p>

            <h2 className="text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              OEM or ODM?
            </h2>
          </div>

          <div className="overflow-x-auto border border-black/10">
            <table className="w-full min-w-[650px] border-collapse text-left">
              <thead>
                <tr className="bg-[#090909] text-white">
                  <th className="w-[22%] p-5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[10px] md:p-6">
                    Project area
                  </th>

                  <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs md:p-6">
                    OEM
                  </th>

                  <th className="p-5 text-[11px] font-semibold uppercase tracking-[0.16em] sm:text-xs md:p-6">
                    ODM
                  </th>
                </tr>
              </thead>

              <tbody>
                {comparison.map((item) => (
                  <tr
                    key={item.label}
                    className="border-b border-black/10 transition-colors last:border-b-0 hover:bg-[#f3f3f1]"
                  >
                    <th className="p-5 align-top text-[10px] font-bold uppercase tracking-[0.1em] sm:text-[11px] md:p-6">
                      {item.label}
                    </th>

                    <td className="p-5 align-top text-[13px] leading-7 text-black/60 sm:text-sm md:p-6">
                      {item.oem}
                    </td>

                    <td className="p-5 align-top text-[13px] leading-7 text-black/60 sm:text-sm md:p-6">
                      {item.odm}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-[11px] leading-6 text-black/70 sm:text-xs">
            The exact scope of OEM or ODM support is agreed individually.
            Design ownership, tooling, development responsibilities and
            commercial terms should be confirmed in writing for each project.
          </p>
        </div>
      </section>

      {/* REQUIREMENTS — BLACK */}
      <section className="bg-[#090909] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-[11px]">
              Prepare your brief
            </p>

            <h2 className="text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
              What should you share?
            </h2>

            <p className="mt-6 max-w-md text-[14px] leading-7 text-white/55 sm:text-[15px] sm:leading-8">
              You do not need to have every detail finalized. Share what is
              available so the initial project discussion can identify what
              needs clarification.
            </p>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {requirements.map(([title, detail], index) => (
              <div
                key={title}
                className="grid gap-2 py-5 sm:grid-cols-[165px_1fr] sm:gap-8 sm:py-6"
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

      {/* PROJECT WORKFLOW — WHITE */}
      <section className="bg-[#f3f3f1] px-6 py-20 text-[#111111] sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/70 sm:text-[11px]">
            Project process
          </p>

          <h2 className="mb-12 text-[clamp(2.1rem,4.5vw,4.2rem)] font-semibold uppercase leading-[1.04] tracking-[-0.05em]">
            A defined path forward.
          </h2>

          <div className="grid gap-px bg-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {workflow.map(([number, title, detail]) => (
              <article
                key={number}
                className="min-h-[230px] bg-white p-6 transition duration-300 hover:bg-[#e9e9e6] sm:p-7"
              >
                <span className="text-[clamp(1.8rem,3vw,2.5rem)] font-light tracking-[-0.05em] text-black/70">
                  {number}
                </span>

                <h3 className="mt-8 text-[13px] font-bold uppercase leading-snug tracking-[0.07em] sm:text-sm">
                  {title}
                </h3>

                <p className="mt-3 text-[13px] leading-7 text-black/70">
                  {detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — BLACK */}
      <section className="bg-[#101010] px-6 py-20 text-white sm:px-10 md:px-12 lg:px-20 lg:py-28">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60 sm:text-[11px]">
              OEM & ODM enquiries
            </p>

            <h2 className="max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)] font-semibold uppercase leading-[1.02] tracking-[-0.055em]">
              Bring your next product into focus.
            </h2>

            <p className="mt-5 max-w-xl text-[14px] leading-7 text-white/60 sm:text-[15px] sm:leading-8">
              Share your design, technical pack or early-stage concept to
              begin a project discussion.
            </p>
          </div>

          <Link
            href="/request-a-quote?product=other"
            className="inline-flex min-h-12 shrink-0 items-center justify-center bg-white px-7 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition duration-300 hover:bg-white/80"
          >
            Start an enquiry ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
