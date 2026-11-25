import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug, type BlogPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo"; // adjust path if your helper lives elsewhere

const SITE_URL = "https://www.nordviaexports.store";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function absoluteImageUrl(p?: string) {
  if (!p) return undefined;
  return p.startsWith("http") ? p : `${SITE_URL}${p}`;
}

/** True when a local /public asset exists (remote URLs are assumed fine). */
function imageExists(p?: string): p is string {
  if (!p) return false;
  if (p.startsWith("http")) return true;
  return fs.existsSync(path.join(process.cwd(), "public", p));
}

/**
 * Picks the hero/OG image. Falls back from banner to cover when the banner
 * file is missing from /public, so the hero never renders a broken image.
 */
function resolveHero(post: BlogPost) {
  if (imageExists(post.bannerImage)) {
    return {
      src: post.bannerImage,
      alt: post.bannerImageAlt || post.title,
      isBanner: true,
    };
  }

  if (imageExists(post.coverImage)) {
    return {
      src: post.coverImage,
      alt: post.coverImageAlt || post.title,
      isBanner: false,
    };
  }

  return null;
}

/**
 * Explicit MDX element styling. This replaces the Tailwind `prose` classes,
 * which only work if @tailwindcss/typography is installed and enabled.
 */
const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mb-5 mt-14 text-2xl font-semibold uppercase leading-tight tracking-tight text-[#111]"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mb-3 mt-10 text-xl font-semibold uppercase leading-snug tracking-tight text-[#111]"
      {...props}
    />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="my-5 text-[15px] leading-8 text-black/70" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-black" {...props} />
  ),
  a: ({
    href = "",
    children,
    ...rest
  }: React.ComponentPropsWithoutRef<"a">) =>
    href.startsWith("/") ? (
      <Link
        href={href}
        className="font-medium text-black underline underline-offset-4 transition-opacity hover:opacity-60"
      >
        {children}
      </Link>
    ) : (
      <a
        href={href}
        className="font-medium text-black underline underline-offset-4 transition-opacity hover:opacity-60"
        {...rest}
      >
        {children}
      </a>
    ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-6 list-disc space-y-3 pl-6 marker:text-black/40"
      {...props}
    />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-6 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-black/50"
      {...props}
    />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li className="text-[15px] leading-8 text-black/70" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-8 border-l-2 border-black pl-6 italic text-black/60"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-black/10" />,
  img: ({ src, alt }: React.ComponentPropsWithoutRef<"img">) =>
    typeof src === "string" ? (
      <span className="relative my-10 block aspect-[16/9] w-full overflow-hidden bg-[#090909]">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          sizes="(max-width: 1024px) 100vw, 900px"
          className="object-cover"
        />
      </span>
    ) : null,
  table: (props: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-10 overflow-x-auto border border-black/10 bg-white">
      <table className="w-full min-w-[520px] border-collapse text-left" {...props} />
    </div>
  ),
  thead: (props: React.ComponentPropsWithoutRef<"thead">) => (
    <thead className="bg-black/[0.04]" {...props} />
  ),
  th: (props: React.ComponentPropsWithoutRef<"th">) => (
    <th
      className="border-b border-black/10 px-5 py-4 text-[11px] font-semibold uppercase tracking-wider text-black/60"
      {...props}
    />
  ),
  td: (props: React.ComponentPropsWithoutRef<"td">) => (
    <td
      className="border-b border-black/5 px-5 py-4 text-sm leading-6 text-black/70"
      {...props}
    />
  ),
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | NORDVIA EXPORTS",
      robots: { index: false, follow: false },
    };
  }

  const hero = resolveHero(post);

  return buildMetadata({
    title: `${post.title} | NORDVIA EXPORTS`,
    description: post.description,
    path: `/resources/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt || post.publishedAt,
    authors: [post.author || "NORDVIA EXPORTS"],
    // Prefer the dedicated 1200x630 sharing image (ogImage in frontmatter),
    // then the banner (1920x800), then the cover.
    ...(imageExists(post.ogImage)
      ? { image: post.ogImage, imageAlt: post.title }
      : hero
        ? {
            image: hero.src,
            imageAlt: hero.alt,
            ...(hero.isBanner ? { imageWidth: 1920, imageHeight: 800 } : {}),
          }
        : {}),
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(
    (item) => item.slug === post.slug
  );
  const nextPost =
    currentIndex >= 0 ? allPosts[currentIndex + 1] : undefined;

  const hero = resolveHero(post);
  const articleImage = absoluteImageUrl(hero?.src);
  const articleUrl = `${SITE_URL}/resources/blog/${post.slug}`;
  const faqs = post.faqs ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || "NORDVIA EXPORTS",
    },
    publisher: {
      "@type": "Organization",
      name: "NORDVIA EXPORTS",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    ...(articleImage ? { image: articleImage } : {}),
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const serialize = (data: unknown) =>
    JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(faqJsonLd) }}
        />
      )}

      {/* Article Hero */}
      {/* The banner artwork contains its own headline text, so it is shown as a
          figure below the title instead of behind it (avoids overlapping text). */}
      <section className="relative flex items-end overflow-hidden bg-[#090909] px-6 pb-16 pt-36 text-white md:px-12 md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(255,255,255,0.10),transparent_45%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Link
            href="/resources/blog"
            className="mb-12 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 transition-colors hover:text-white"
          >
            <span>←</span> Back to Journal
          </Link>

          <div className="max-w-4xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
              NORDVIA EXPORTS / Journal
            </p>

            <h1 className="break-words text-3xl font-semibold uppercase leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              {post.title}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-medium uppercase tracking-[0.17em] text-white/55">
              <span>{post.date}</span>
              {post.updatedAt && post.updatedAt !== post.date && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>Updated {post.updatedAt}</span>
                </>
              )}
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{post.author || "NORDVIA EXPORTS"}</span>
              {post.readTime && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>{post.readTime}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0">
            {hero && (
              <figure className="relative mb-10 aspect-[3/2] w-full overflow-hidden bg-[#090909] sm:aspect-[16/9] md:mb-12 md:aspect-[1920/800]">
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  fill
                  priority
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                  className="object-cover object-[75%_center] md:object-center"
                />
              </figure>
            )}

            <div className="max-w-none">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>

            {/* Visible FAQ (matches the FAQPage JSON-LD above) */}
            {faqs.length > 0 && (
              <section
                aria-labelledby="blog-faq-heading"
                className="mt-16 border-t border-black/10 pt-12"
              >
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                  FAQ
                </p>
                <h2
                  id="blog-faq-heading"
                  className="text-2xl font-semibold uppercase tracking-tight"
                >
                  Frequently Asked Questions
                </h2>

                <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
                  {faqs.map((faq, index) => (
                    <details key={faq.question} className="group py-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                        <span className="flex gap-4 text-base font-semibold leading-7">
                          <span className="shrink-0 text-xs text-black/35">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-xl text-black/40 transition group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>

                      <p className="ml-8 mt-4 max-w-3xl text-[15px] leading-8 text-black/65">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-16 border-t border-black/10 pt-8">
              <Link
                href="/resources/blog"
                className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-50"
              >
                ← Back to All Articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="h-fit border-t border-black/10 pt-8 lg:sticky lg:top-28 lg:border-t-0 lg:pt-0">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/40">
              About NORDVIA
            </p>

            <h2 className="text-2xl font-semibold uppercase leading-tight tracking-tight">
              Apparel Manufacturing & Export
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/55">
              NORDVIA EXPORTS works with manufacturing partners in Sialkot,
              Pakistan, supporting brands with custom apparel manufacturing
              and private label development.
            </p>

            <Link
              href="/request-a-quote"
              className="mt-8 inline-flex w-full items-center justify-between bg-[#090909] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-black/70"
            >
              Discuss Your Project <span>→</span>
            </Link>

            {nextPost && (
              <div className="mt-12 border-t border-black/10 pt-8">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Next Article
                </p>

                <Link
                  href={`/resources/blog/${nextPost.slug}`}
                  className="group"
                >
                  <h3 className="text-lg font-semibold leading-snug transition-opacity group-hover:opacity-50">
                    {nextPost.title}
                  </h3>
                  <span className="mt-4 inline-block text-[10px] font-bold uppercase tracking-[0.18em]">
                    Read Next →
                  </span>
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}