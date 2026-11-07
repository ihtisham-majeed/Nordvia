
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCookieBite,
  FaShieldAlt,
} from "react-icons/fa";

import ManageCookieButton from "@/components/cookies/ManageCookieButton";

export const metadata: Metadata = buildMetadata({
  title: "Nordvia Exports Cookie Policy and Preferences",
  description: "Learn how Nordvia Exports uses essential storage and optional analytics technologies, and manage your cookie preferences on this website.",
  path: "/cookie-policy",
});

const sections = [
  {
    number: "01",
    title: "What are cookies and similar technologies?",
    paragraphs: [
      "Cookies are small text files that websites may store on your device when you visit them. Similar technologies can include scripts, tags and browser storage mechanisms used to support website functionality, understand visitor activity or measure advertising performance.",
      "NORDVIA EXPORTS uses essential browser storage and, where you give permission, optional analytics and marketing technologies.",
    ],
  },
  {
    number: "02",
    title: "How we use these technologies",
    paragraphs: [
      "We use these technologies to operate our website, remember your privacy preferences and better understand how visitors interact with our pages.",
      "Optional tracking is controlled through our cookie consent interface. Analytics and marketing technologies are not intentionally loaded by our consent system until you enable their respective categories.",
    ],
  },
  {
    number: "03",
    title: "Essential storage",
    paragraphs: [
      "Essential storage supports basic website functionality and remembers the privacy choices you make.",
      "Our consent system uses browser local storage to save your preferences under the key nordvia-cookie-consent. This allows the website to remember whether you accepted or rejected optional tracking when you return.",
      "Essential storage cannot be disabled through our cookie preference controls because it is needed to remember those choices and operate the consent experience.",
    ],
  },
  {
    number: "04",
    title: "Analytics technologies",
    paragraphs: [
      "If you enable Analytics, we use Google Analytics 4 to understand how visitors use our website.",
      "This may help us understand website visits, popular pages, traffic sources, device categories and general website performance.",
      "Our Google Analytics Measurement ID is G-YZ8QKKHJX1. The Google tag is loaded only after Analytics consent is enabled through our cookie preference interface.",
      "We do not intentionally send contact form messages, quotation details, names or email addresses to Google Analytics through our current page-view tracking implementation.",
    ],
  },
  {
    number: "05",
    title: "Marketing technologies",
    paragraphs: [
      "If you enable Marketing, we use the Pinterest Tag to support advertising measurement and understand interactions with our website.",
      "This may help us measure visits associated with Pinterest campaigns and evaluate advertising performance.",
      "Our Pinterest Tag ID is 2612924698071. Pinterest tracking is loaded only after Marketing consent is enabled through our cookie preference interface.",
      "If you reject Marketing or later withdraw your consent, our consent system instructs the Pinterest tag to disable consent-based tracking.",
    ],
  },
  {
    number: "06",
    title: "Managing your preferences",
    paragraphs: [
      "When you first visit our website, you can accept all optional technologies, reject optional technologies or customize your choices.",
      "You can enable or disable Analytics and Marketing independently. Essential storage remains active.",
      "You can reopen the Privacy Settings control displayed on the website to review or change your preferences at any time.",
      "Changes apply to subsequent tracking activity. They do not necessarily remove information that may already have been collected by a third-party provider.",
    ],
  },
  {
    number: "07",
    title: "Third-party providers",
    paragraphs: [
      "Google and Pinterest operate their own services and may process information according to their respective privacy policies and terms.",
      "Their technologies may involve processing information outside your country. The information collected and the applicable retention periods are subject to the providers' settings and policies.",
      "For more information, please review their privacy resources:",
    ],
    links: [
      {
        label: "Google Privacy Policy",
        href: "https://policies.google.com/privacy",
      },
      {
        label: "Google Analytics information",
        href: "https://support.google.com/analytics/answer/6004245",
      },
      {
        label: "Pinterest Privacy Policy",
        href: "https://policy.pinterest.com/en/privacy-policy",
      },
    ],
  },
  {
    number: "08",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Cookie Policy when our website, tracking technologies or applicable requirements change.",
      "The latest version will be published on this page. We encourage visitors to review it periodically.",
    ],
  },
];

const consentCategories = [
  {
    title: "Essential",
    status: "Always active",
    description:
      "Supports core website functionality and remembers your consent preferences.",
  },
  {
    title: "Analytics",
    status: "Your choice",
    description:
      "Google Analytics helps us understand general website activity and performance.",
  },
  {
    title: "Marketing",
    status: "Your choice",
    description:
      "Pinterest Tag helps measure advertising activity and campaign performance.",
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Cookie Policy", path: "/cookie-policy" },
        ]}
      />
      <main className="min-h-screen bg-[#090909] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-12 inline-flex cursor-pointer items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
          >
            <FaArrowLeft size={10} />
            Back to homepage
          </Link>

          <div className="mb-8 flex items-center gap-3">
            <FaCookieBite className="text-neutral-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              NORDVIA EXPORTS / Legal
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Cookie{" "}
            <span className="text-neutral-400">Policy.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-neutral-400 sm:text-base">
              Transparency matters. Learn how we use essential
              website storage, analytics and marketing technologies
              and how you remain in control of your preferences.
            </p>

            <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Last updated: November 2026
            </span>
          </div>
        </div>
      </section>

      {/* Consent summary */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-3">
            <FaShieldAlt className="text-neutral-400" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              Your privacy choices
            </p>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {consentCategories.map((item) => (
              <div
                key={item.title}
                className="bg-[#101010] p-7 sm:p-9"
              >
                <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                  {item.status}
                </p>

                <h2 className="mb-3 text-2xl font-medium tracking-tight">
                  {item.title}
                </h2>

                <p className="text-sm leading-7 text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Client-side cookie settings button */}
          <ManageCookieButton />
        </div>
      </section>

      {/* Policy content */}
      <section className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[260px_1fr] lg:gap-24">
          {/* Table of contents */}
          <aside className="h-fit lg:sticky lg:top-32">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
              On this page
            </p>

            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section.number}
                  href={`#section-${section.number}`}
                  className="cursor-pointer text-xs text-neutral-400 transition-colors hover:text-white"
                >
                  {section.number} / {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy sections */}
          <div>
            {sections.map((section) => (
              <article
                key={section.number}
                id={`section-${section.number}`}
                className="scroll-mt-32 border-b border-white/10 py-10 first:pt-0 sm:py-12"
              >
                <p className="mb-5 text-[10px] font-semibold tracking-[0.2em] text-neutral-400">
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

                  {"links" in section &&
                    section.links?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-fit cursor-pointer text-sm text-neutral-300 underline underline-offset-4 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                </div>
              </article>
            ))}

            {/* Contact */}
            <div className="mt-14 border border-white/10 bg-white/[0.025] p-7 sm:p-10">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Questions about privacy?
              </p>

              <h2 className="mb-4 text-2xl font-medium tracking-tight">
                Contact NORDVIA EXPORTS.
              </h2>

              <p className="mb-7 max-w-xl text-sm leading-7 text-neutral-400">
                If you have questions about this policy or your
                privacy preferences, contact our team.
              </p>

              <a
                href="mailto:nordvia.exports@gmail.com"
                className="inline-flex cursor-pointer items-center gap-3 text-sm text-white transition-colors hover:text-neutral-400"
              >
                nordvia.exports@gmail.com
                <FaArrowRight size={11} />
              </a>
            </div>

            {/* Related links */}
            <div className="mt-12 flex flex-wrap gap-6 text-xs text-neutral-400">
              <Link
                href="/privacy-policy"
                className="cursor-pointer transition-colors hover:text-white"
              >
                Privacy Policy
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
    </>
  );
}
