
import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = "https://nordviaexports.store";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | NORDVIA EXPORTS",
  },
  description:
    "Read the NORDVIA EXPORTS Privacy Policy to understand how we collect, use, protect and manage information submitted through our website.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | NORDVIA EXPORTS",
    description:
      "Learn how NORDVIA EXPORTS handles personal information and website data.",
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
    title: "1. Introduction",
    content: (
      <>
        <p>
          NORDVIA EXPORTS respects your privacy and is committed to
          handling your information responsibly. This Privacy Policy
          explains how information may be collected, used, stored and
          shared when you visit{" "}
          <Link href="/" className="text-white underline underline-offset-4">
            nordviaexports.store
          </Link>{" "}
          or contact us through our website.
        </p>
        <p>
          By using this website, you acknowledge that you have read
          this policy. Where applicable law requires consent for a
          particular use of information, we will seek that consent.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you voluntarily provide
          when contacting us or submitting a business inquiry,
          including:
        </p>
        <ul>
          <li>Your name and business name.</li>
          <li>Your business email address and contact details.</li>
          <li>Your country or business location.</li>
          <li>Product interests and requested quantities.</li>
          <li>Customization, branding and development requirements.</li>
          <li>Estimated timelines and messages you send us.</li>
        </ul>
        <p>
          We may also receive basic technical and usage information
          when you visit our website, such as browser type, device
          information, pages visited, referral information and
          interactions with website content.
        </p>
        <p>
          Please do not submit passwords, payment card information
          or other highly sensitive personal information through
          our general contact or quotation forms.
        </p>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    content: (
      <>
        <p>We may use submitted information to:</p>
        <ul>
          <li>Respond to questions and business inquiries.</li>
          <li>Prepare and communicate quotations.</li>
          <li>Discuss apparel products and customization requirements.</li>
          <li>Coordinate potential product development and orders.</li>
          <li>Improve our website, services and user experience.</li>
          <li>Maintain website security and prevent misuse.</li>
          <li>Meet applicable legal and administrative obligations.</li>
        </ul>
        <p>
          We do not use information submitted through our inquiry
          forms for unrelated marketing communications without an
          appropriate legal basis or consent where required.
        </p>
      </>
    ),
  },
  {
    title: "4. Analytics, Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our website may use analytics and tracking technologies
          to understand website performance, visitor interactions
          and the effectiveness of our online presence.
        </p>
        <p>These technologies may include:</p>
        <ul>
          <li>
            <strong>Vercel Analytics:</strong> to understand website
            traffic and performance.
          </li>
          <li>
            <strong>Pinterest Tag:</strong> to measure activity
            associated with our Pinterest presence and advertising
            where applicable.
          </li>
          <li>
            <strong>Cookies or similar technologies:</strong> where
            used by the website or its third-party services.
          </li>
        </ul>
        <p>
          Your browser may allow you to manage or block cookies.
          Blocking certain technologies may affect some website
          functionality. Where required by applicable law, we will
          obtain consent before using non-essential tracking
          technologies.
        </p>
      </>
    ),
  },
  {
    title: "5. Sharing Information with Third Parties",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share
          relevant information with service providers when
          reasonably necessary to operate our website and respond
          to your inquiries.
        </p>
        <p>These providers may include:</p>
        <ul>
          <li>
            <strong>Website hosting and infrastructure providers:</strong>{" "}
            to host and maintain our website.
          </li>
          <li>
            <strong>Email and communication providers:</strong>{" "}
            to receive, process and deliver your inquiries.
          </li>
          <li>
            <strong>Analytics and advertising providers:</strong>{" "}
            to measure website usage and marketing performance.
          </li>
          <li>
            <strong>Manufacturing or business partners:</strong>{" "}
            where sharing relevant project information is necessary
            to evaluate or coordinate a requested apparel project.
          </li>
        </ul>
        <p>
          Information may also be disclosed when required by law,
          to protect legitimate rights or to address security
          concerns.
        </p>
      </>
    ),
  },
  {
    title: "6. International Data Transfers",
    content: (
      <p>
        NORDVIA EXPORTS is based in Sialkot, Pakistan, and may
        communicate with businesses and service providers in
        different countries. Your information may therefore be
        processed or stored outside your country of residence.
        Where required, appropriate safeguards will be applied
        to such transfers in accordance with applicable law.
      </p>
    ),
  },
  {
    title: "7. Data Retention and Security",
    content: (
      <p>
        We retain information for as long as reasonably necessary
        to respond to inquiries, manage business relationships,
        maintain records, resolve disputes and meet legal
        obligations. We take reasonable measures to protect
        information against unauthorized access, loss, misuse or
        disclosure. However, no method of transmission or
        electronic storage can be guaranteed to be completely
        secure.
      </p>
    ),
  },
  {
    title: "8. Your Privacy Choices and Rights",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may
          have rights to request access to, correction of or
          deletion of personal information, or to object to or
          restrict certain processing.
        </p>
        <p>
          You may contact us to make a privacy-related request.
          We may need to verify your identity before responding.
          Certain information may need to be retained where
          required or permitted by law.
        </p>
      </>
    ),
  },
  {
    title: "9. Third-Party Websites",
    content: (
      <p>
        Our website may contain links to external websites or
        services, including social media platforms. Those
        websites operate under their own privacy policies and
        practices. We are not responsible for the privacy
        practices or content of external websites.
      </p>
    ),
  },
  {
    title: "10. Children's Privacy",
    content: (
      <p>
        Our website and business services are intended for
        business and general audiences, not specifically for
        children. We do not knowingly seek to collect personal
        information from children in violation of applicable
        law. If you believe a child has provided us with
        personal information, please contact us.
      </p>
    ),
  },
  {
    title: "11. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy when our website,
        services or legal obligations change. Any revised
        version will be published on this page with an updated
        revision date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <section className="border-b border-white/10 px-5 pb-16 pt-36 sm:px-8 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            Legal / Privacy
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Privacy <span className="text-white/40">Policy.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            How we collect, use and protect information when you
            interact with NORDVIA EXPORTS.
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/35">
            Last updated: November 4, 2026
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[240px_1fr] lg:gap-24">
          <aside className="h-fit lg:sticky lg:top-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
              On this page
            </p>
            <nav className="flex flex-wrap gap-x-5 gap-y-3 lg:flex-col">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#privacy-${index + 1}`}
                  className="text-xs text-white/45 transition-colors hover:text-white"
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
                  id={`privacy-${index + 1}`}
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
              <p className="text-xs uppercase tracking-[0.22em] text-white/40">
                Privacy enquiries
              </p>
              <p className="mt-4 text-lg font-medium">
                Need to contact us about your information?
              </p>
              <a
                href="mailto:nordvia.exports@gmail.com"
                className="mt-3 inline-block text-sm text-white/60 underline underline-offset-4 transition hover:text-white"
              >
                nordvia.exports@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
