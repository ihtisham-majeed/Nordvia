
import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEnvelope,
  FaShieldAlt,
} from "react-icons/fa";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://nordviaexports.store";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Privacy",
  description:
    "Read the NORDVIA EXPORTS Privacy Policy to understand how we collect, use, protect and process information submitted through our website.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | NORDVIA EXPORTS",
    description:
      "Learn how NORDVIA EXPORTS handles business inquiries, quotation requests, website analytics and personal information.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "NORDVIA EXPORTS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "Introduction",
    paragraphs: [
      "NORDVIA EXPORTS respects the privacy of visitors, prospective customers, business partners and other individuals who interact with our website.",
      "This Privacy Policy explains what information we may collect, why we collect it, how it is used and the choices available to you when visiting nordviaexports.store.",
      "By using our website, you acknowledge that you have read this policy. Where consent is required for optional tracking or other processing, we will request it separately.",
    ],
  },
  {
    number: "02",
    title: "Information we collect",
    paragraphs: [
      "We may collect information that you voluntarily provide when contacting us or submitting a manufacturing quotation request.",
      "Depending on the form you use, this information may include:",
    ],
    bullets: [
      "Full name and company name.",
      "Business email address.",
      "Country or business location.",
      "Product category and requested quantity.",
      "Customization, design and manufacturing requirements.",
      "Project timeline and additional messages.",
      "Any other information you choose to include in your inquiry.",
    ],
    ending:
      "We may also receive technical information associated with website visits, such as browser type, device category, referring pages and general website interaction data, subject to your privacy preferences and applicable requirements.",
  },
  {
    number: "03",
    title: "How we use your information",
    paragraphs: [
      "We use information submitted through our website for legitimate business communication and inquiry handling.",
    ],
    bullets: [
      "Responding to contact messages and quotation requests.",
      "Understanding your requested products and customization requirements.",
      "Preparing and discussing potential manufacturing or sourcing arrangements.",
      "Following up on business inquiries where appropriate.",
      "Operating, maintaining and improving our website.",
      "Protecting our website and managing spam or misuse.",
      "Measuring website performance when you enable analytics.",
      "Measuring advertising activity when you enable marketing tracking.",
    ],
  },
  {
    number: "04",
    title: "Contact forms and quotation requests",
    paragraphs: [
      "When you submit a contact form or quotation request, the information you provide is transmitted to NORDVIA EXPORTS through our website's server-side form processing system.",
      "We use Resend as an email delivery service to deliver these inquiries to our business email address. The submitted information is used to review and respond to your request.",
      "Please avoid including passwords, payment card information, government identification numbers or other sensitive information in website forms.",
      "Submitting an inquiry does not automatically create a customer account, confirm an order or establish a manufacturing agreement.",
    ],
  },
  {
    number: "05",
    title: "Analytics and marketing",
    paragraphs: [
      "Our website may use optional third-party tracking technologies to understand website activity and advertising performance.",
      "Google Analytics 4 may collect website usage and technical information when you enable Analytics consent.",
      "Pinterest Tag may collect advertising-related interaction information when you enable Marketing consent.",
      "These optional tracking technologies are controlled through our cookie preference interface. You can reject them or change your preferences later.",
      "Our current page-view tracking implementation is not intended to send quotation form messages, names or email addresses to Google Analytics.",
    ],
  },
  {
    number: "06",
    title: "Cookies and browser storage",
    paragraphs: [
      "Our consent system uses browser local storage to remember your privacy preferences. The preference is saved under the key nordvia-cookie-consent.",
      "Essential storage is used to remember your choices. Google Analytics and Pinterest tracking are controlled separately through the Analytics and Marketing consent options.",
      "For further information about these technologies and how to manage your choices, please read our Cookie Policy.",
    ],
  },
  {
    number: "07",
    title: "Third-party service providers",
    paragraphs: [
      "We may use third-party service providers to operate our website, deliver communications and support website measurement.",
      "These providers may process information on our behalf or under their own privacy terms, depending on the service.",
    ],
    bullets: [
      "Resend — email delivery for contact and quotation inquiries.",
      "Google Analytics — website analytics when permitted by your consent.",
      "Pinterest — marketing measurement when permitted by your consent.",
      "Vercel — website hosting and infrastructure.",
    ],
    ending:
      "We do not sell personal information to third parties. We do not control the independent privacy practices of external service providers.",
  },
  {
    number: "08",
    title: "International data processing",
    paragraphs: [
      "NORDVIA EXPORTS is based in Sialkot, Pakistan and may communicate with prospective customers and business partners internationally.",
      "Our website hosting, email delivery and optional analytics providers may process information using infrastructure located in different countries.",
      "Where information is transferred internationally, the applicable service provider's safeguards, contractual arrangements and relevant legal requirements may apply.",
    ],
  },
  {
    number: "09",
    title: "Data retention",
    paragraphs: [
      "We retain inquiry information for as long as reasonably necessary to respond to business requests, maintain relevant communications, manage business relationships and meet applicable legal or operational requirements.",
      "Third-party providers may apply their own data retention periods and settings to information processed through their services.",
      "We do not promise a fixed deletion period for all information. Retention depends on the nature of the inquiry, business requirements and applicable obligations.",
    ],
  },
  {
    number: "10",
    title: "Data security",
    paragraphs: [
      "We use reasonable technical and organizational measures intended to protect information submitted through our website.",
      "However, no website, email transmission or electronic storage system can be guaranteed to be completely secure.",
      "You should avoid sending confidential or highly sensitive information through general website inquiry forms.",
    ],
  },
  {
    number: "11",
    title: "Your privacy rights",
    paragraphs: [
      "Depending on your country or applicable privacy law, you may have rights regarding your personal information.",
      "These rights may include:",
    ],
    bullets: [
      "Requesting access to personal information we hold about you.",
      "Requesting correction of inaccurate information.",
      "Requesting deletion of information where applicable.",
      "Objecting to or requesting restriction of certain processing.",
      "Withdrawing consent for optional analytics and marketing tracking.",
      "Submitting a privacy-related question or complaint to the appropriate authority.",
    ],
    ending:
      "To make a privacy request, contact us using the email address below. We may need to verify your identity before responding. Some rights may be subject to legal exceptions.",
  },
  {
    number: "12",
    title: "Children's privacy",
    paragraphs: [
      "Our website and services are intended for businesses, brands, wholesalers and other professional contacts. They are not designed to target children.",
      "We do not knowingly request personal information from children through our business inquiry forms.",
    ],
  },
  {
    number: "13",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy when our business practices, website technologies or applicable legal requirements change.",
      "The latest version will be published on this page. Please review it periodically for updates.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-12 inline-flex cursor-pointer items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 transition-colors hover:text-white"
          >
            <FaArrowLeft size={10} />
            Back to homepage
          </Link>

          <div className="mb-8 flex items-center gap-3">
            <FaShieldAlt className="text-neutral-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
              NORDVIA EXPORTS / Legal
            </span>
          </div>

         <h1 className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
  Privacy <span className="text-neutral-500">Policy.</span>
</h1>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
              Your business information deserves responsible
              handling. Understand how we collect, use and protect
              information when you interact with NORDVIA EXPORTS.
            </p>

            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
              Last updated: November 2026
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Our commitment
            </p>

            <h2 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Business relationships begin with trust.
            </h2>
          </div>

          <p className="text-sm leading-8 text-neutral-400">
            Whether you are exploring custom apparel manufacturing,
            requesting a quotation or simply browsing our website,
            we aim to handle the information you share responsibly
            and transparently.
          </p>
        </div>
      </section>

      {/* Policy content */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[260px_1fr] lg:gap-24">
          <aside className="h-fit lg:sticky lg:top-32">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              On this page
            </p>

            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="cursor-pointer text-xs text-neutral-500 transition-colors hover:text-white"
                >
                  {section.number} / {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div>
            {sections.map((section) => (
              <article
                key={section.number}
                id={`section-${section.number}`}
                className="scroll-mt-32 border-b border-white/10 py-10 first:pt-0 sm:py-12"
              >
                <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-neutral-600">
                  SECTION {section.number}
                </p>

                <h2 className="mb-7 text-2xl font-medium tracking-tight sm:text-3xl">
                  {section.title}
                </h2>

                <div className="max-w-3xl space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-8 text-neutral-400"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {"bullets" in section && section.bullets && (
                    <ul className="space-y-3 pl-5">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="list-disc text-sm leading-7 text-neutral-400 marker:text-neutral-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {"ending" in section && section.ending && (
                    <p className="text-sm leading-8 text-neutral-400">
                      {section.ending}
                    </p>
                  )}
                </div>
              </article>
            ))}

            {/* Contact */}
            <div className="mt-14 border border-white/10 bg-white/[0.025] p-7 sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <FaEnvelope className="text-neutral-400" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  Privacy contact
                </p>
              </div>

              <h2 className="mb-4 text-2xl font-medium tracking-tight">
                Need to contact us?
              </h2>

              <p className="mb-7 max-w-xl text-sm leading-7 text-neutral-500">
                For questions, access requests, correction requests
                or other privacy-related matters, contact NORDVIA
                EXPORTS.
              </p>

              <a
                href="mailto:nordvia.exports@gmail.com?subject=Privacy%20Request"
                className="inline-flex cursor-pointer items-center gap-3 text-sm text-white transition-colors hover:text-neutral-400"
              >
                nordvia.exports@gmail.com
                <FaArrowRight size={11} />
              </a>

              <p className="mt-5 text-xs leading-6 text-neutral-600">
                NORDVIA EXPORTS
                <br />
                Sialkot, Pakistan
              </p>
            </div>

            {/* Related links */}
            <div className="mt-12 flex flex-wrap gap-6 text-xs text-neutral-500">
              <Link
                href="/cookie-policy"
                className="cursor-pointer transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>

              <Link
                href="/contact"
                className="cursor-pointer transition-colors hover:text-white"
              >
                Contact Us
              </Link>

              <Link
                href="/"
                className="cursor-pointer transition-colors hover:text-white"
              >
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
