
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import PageJsonLd from "@/components/seo/PageJsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Nordvia Exports Terms and Conditions",
  description: "Review the terms governing website use, apparel inquiries, quotations and business communications with Nordvia Exports before contacting us.",
  path: "/terms",
});

const sections = [
  {
    title: "1. Introduction and Acceptance",
    content: (
      <>
        <p>
          Welcome to NORDVIA EXPORTS. These Terms & Conditions
          apply to your access to and use of{" "}
          <Link href="/" className="text-white underline underline-offset-4">
            nordviaexports.store
          </Link>
          , including its content, product information and
          business inquiry facilities.
        </p>
        <p>
          By accessing or using this website, you agree to these
          terms. If you do not agree, please discontinue use of
          the website.
        </p>
        <p>
          These website terms do not replace a separate written
          agreement, purchase order or sales contract that may
          govern an individual business transaction.
        </p>
      </>
    ),
  },
  {
    title: "2. About NORDVIA EXPORTS",
    content: (
      <p>
        NORDVIA EXPORTS is an apparel manufacturing and sourcing
        business based in Sialkot, Pakistan. We communicate with
        brands, businesses and prospective customers regarding
        apparel development, customization, private-label
        requirements and potential production arrangements.
        Manufacturing arrangements may involve independent
        manufacturing partners, depending on the project.
      </p>
    ),
  },
  {
    title: "3. Website Information and Product Images",
    content: (
      <>
        <p>
          Product descriptions, photographs, illustrations,
          graphics and other materials on this website are
          provided for general information and presentation.
        </p>
        <p>
          Some product visuals may be digital design concepts
          or AI-generated illustrations. Such visuals are
          illustrative only and must not be treated as proof
          that a physical garment, sample or finished product
          already exists.
        </p>
        <p>
          Actual garments may differ from concept visuals in
          color, fabric texture, construction, dimensions,
          printing, embroidery and other details. Final
          specifications should be agreed in writing and,
          where appropriate, confirmed through an approved
          physical sample or other agreed approval process.
        </p>
        <p>
          We make reasonable efforts to keep website
          information accurate, but we do not guarantee that
          every description, image or other item of information
          is complete, current or free from error.
        </p>
      </>
    ),
  },
  {
    title: "4. Product Customization and Development",
    content: (
      <>
        <p>
          Custom apparel requirements may include fabric,
          garment construction, colors, sizing, labels,
          embroidery, printing, packaging and other branding
          specifications.
        </p>
        <p>
          Customization options, technical feasibility,
          material availability and production arrangements
          are subject to project review and written agreement.
          Not every requested design or specification may
          be available.
        </p>
        <p>
          Customers are responsible for reviewing and
          approving the specifications, artwork, measurements,
          branding and other project details submitted for
          production.
        </p>
      </>
    ),
  },
  {
    title: "5. Quotations and Orders",
    content: (
      <>
        <p>
          Submitting a contact form or quotation request does
          not constitute an accepted order or create a
          production commitment.
        </p>
        <p>
          Any quotation we provide is subject to its stated
          validity period, specifications and conditions.
          Unless expressly stated otherwise in writing,
          quotations are indicative and may need revision
          if project requirements or material costs change.
        </p>
        <p>
          An order will only be considered accepted when the
          relevant commercial and production details have
          been confirmed in writing by the parties.
        </p>
      </>
    ),
  },
  {
    title: "6. Pricing, Minimum Quantities and Payment",
    content: (
      <>
        <p>
          Pricing may depend on garment type, fabric,
          customization, quantity, packaging, production
          requirements and destination.
        </p>
        <p>
          Minimum order quantities, where applicable, are
          determined according to the product and project.
          Payment methods, deposits, balances, currency,
          payment deadlines and any other financial terms
          must be agreed in writing before an order proceeds.
        </p>
        <p>
          Unless expressly included in a written quotation
          or agreement, prices do not automatically include
          shipping, customs duties, import taxes, insurance
          or other destination-related charges.
        </p>
      </>
    ),
  },
  {
    title: "7. Samples and Approvals",
    content: (
      <>
        <p>
          Physical samples or development stages may be
          discussed and arranged depending on the project
          and agreed availability.
        </p>
        <p>
          Any applicable sample charges, development fees,
          shipping costs, approval requirements and timelines
          will be communicated separately.
        </p>
        <p>
          Production specifications should be approved in
          writing before production begins. Any agreed
          tolerances, acceptable variations or approval
          procedures should be recorded in the relevant
          project documentation.
        </p>
      </>
    ),
  },
  {
    title: "8. Production, Shipping and Delivery",
    content: (
      <>
        <p>
          Production schedules and estimated delivery dates
          depend on the agreed specifications, order
          requirements, material availability, approvals
          and other project conditions.
        </p>
        <p>
          Delivery estimates are not guaranteed unless
          expressly agreed in writing. Shipping arrangements,
          delivery terms, responsibility for freight,
          insurance, customs clearance and applicable
          Incoterms, if any, should be specified in the
          relevant commercial agreement.
        </p>
        <p>
          Customers are responsible for complying with
          applicable import requirements, customs procedures
          and destination-country regulations unless the
          parties expressly agree otherwise in writing.
        </p>
      </>
    ),
  },
  {
    title: "9. Cancellations, Changes and Returns",
    content: (
      <>
        <p>
          Requests to change or cancel an order must be
          submitted in writing. Whether a change or
          cancellation can be accepted depends on the
          production stage, materials already committed,
          work completed and the terms agreed for that order.
        </p>
        <p>
          Return, replacement, defect reporting and refund
          arrangements for individual orders should be
          agreed in the applicable written sales agreement
          or order confirmation.
        </p>
        <p>
          Nothing in these terms is intended to exclude
          consumer or other legal rights that cannot
          lawfully be excluded. Any applicable order-specific
          agreement will govern to the extent permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "10. Customer Responsibilities and Intellectual Property",
    content: (
      <>
        <p>
          Customers must ensure that artwork, logos,
          photographs, trademarks, designs and other
          materials they provide may lawfully be used for
          the requested purpose.
        </p>
        <p>
          Customers remain responsible for obtaining
          necessary permissions for materials they submit.
          They must not request production or use of
          materials that infringe another party's rights
          or violate applicable law.
        </p>
        <p>
          Website content, branding, text, graphics and
          other materials owned by or licensed to NORDVIA
          EXPORTS may not be copied, republished or used
          commercially without appropriate authorization.
        </p>
        <p>
          Ownership, permitted use and confidentiality
          arrangements for custom artwork, technical files,
          designs and developed products should be expressly
          agreed between the parties.
        </p>
      </>
    ),
  },
  {
    title: "11. Website Availability and Acceptable Use",
    content: (
      <>
        <p>
          We may update, modify, suspend or remove website
          content or features at any time. We do not
          guarantee uninterrupted website availability.
        </p>
        <p>
          You must not misuse the website, attempt
          unauthorized access, interfere with its operation,
          introduce malicious code or use it for unlawful
          purposes.
        </p>
        <p>
          We may restrict access where reasonably necessary
          to protect the website, its users or our business.
        </p>
      </>
    ),
  },
  {
    title: "12. Third-Party Services and Links",
    content: (
      <p>
        Our website may include links to third-party
        platforms and services. These are provided for
        convenience only. We do not control or accept
        responsibility for their content, availability,
        policies or practices. Your use of those services
        is subject to their own terms.
      </p>
    ),
  },
  {
    title: "13. Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law,
          NORDVIA EXPORTS will not be liable for indirect,
          incidental, special or consequential losses
          arising from your use of this website or reliance
          on general website information.
        </p>
        <p>
          We do not exclude or limit liability where doing
          so would be unlawful, including liability that
          cannot legally be excluded or restricted.
        </p>
        <p>
          Any liability arising from a specific accepted
          order or written commercial agreement will be
          governed by that agreement and applicable law.
        </p>
      </>
    ),
  },
  {
    title: "14. Governing Law and Disputes",
    content: (
      <p>
        These website terms are governed by the laws of
        Pakistan, subject to any mandatory legal protections
        that apply in your jurisdiction. Disputes relating
        to these website terms will be subject to the
        jurisdiction of the competent courts in Pakistan,
        unless applicable law or a separate written
        agreement provides otherwise.
      </p>
    ),
  },
  {
    title: "15. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms & Conditions from time
        to time. Updated terms will be published on this
        page with a revised date. Continued use of the
        website after changes are published constitutes
        acceptance to the extent permitted by applicable law.
      </p>
    ),
  },
  {
    title: "16. Contact Information",
    content: (
      <>
        <p>
          If you have questions about these Terms &
          Conditions or wish to discuss a business inquiry,
          please contact us:
        </p>
        <ul>
          <li>
            <strong>Business:</strong> NORDVIA EXPORTS
          </li>
          <li>
            <strong>Location:</strong> Sialkot, Pakistan
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:nordvia.exports@gmail.com"
              className="text-white underline underline-offset-4"
            >
              nordvia.exports@gmail.com
            </a>
          </li>
          <li>
            <strong>Phone / WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/923248548680"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4"
            >
              +92 324 8548680
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Terms and Conditions", path: "/terms" },
        ]}
      />
      <PageJsonLd
        type="WebPage"
        name="Nordvia Exports Terms and Conditions"
        description="Review the terms governing website use, apparel inquiries, quotations and business communications with Nordvia Exports."
        path="/terms"
      />
      <main className="min-h-screen bg-[#090909] text-white">
      <section className="border-b border-white/10 px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Legal / Website Terms
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Terms & <span className="text-white/60">Conditions.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            The terms governing access to our website,
            apparel inquiries and potential business
            arrangements.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/60">
            Last updated: November 4, 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[240px_1fr] lg:gap-24">
          <aside className="h-fit lg:sticky lg:top-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              On this page
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#terms-${index + 1}`}
                  className="text-xs text-white/60 transition-colors hover:text-white"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-3xl">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <article
                  key={section.title}
                  id={`terms-${index + 1}`}
                  className="scroll-mt-32 border-b border-white/10 pb-10"
                >
                  <h2 className="mb-5 text-xl font-medium tracking-tight sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-sm leading-8 text-white/55 sm:text-[15px] [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_strong]:font-medium [&_strong]:text-white/80 [&_ul]:space-y-2">
                    {section.content}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                Business enquiries
              </p>
              <p className="mt-4 text-lg font-medium">
                Have a question about working with us?
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
              >
                Contact NORDVIA EXPORTS
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
