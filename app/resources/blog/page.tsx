import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo"; // adjust path if your helper lives elsewhere

export const metadata = buildMetadata({
  title: "Apparel Manufacturing Blog | NORDVIA EXPORTS",
  description:
    "Explore apparel manufacturing insights, fabric guides, hoodie production tips, and private label clothing resources from NORDVIA EXPORTS.",
  path: "/resources/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111]">
      {/* Hero */}
      <section className="bg-[#090909] px-6 py-24 text-white md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
            NORDVIA EXPORTS / Resources
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold uppercase leading-[1.08] tracking-tight md:text-7xl">
            Insights for
            <br />
            Better Apparel.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Explore apparel manufacturing knowledge, fabric guides, product
            development insights, and practical resources for clothing brands.
          </p>
        </div>
      </section>

      {/* Blog listing */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                The Journal
              </p>
              <h2 className="text-3xl font-semibold uppercase tracking-tight md:text-4xl">
                Latest Articles
              </h2>
            </div>

            <p className="text-xs uppercase tracking-wider text-black/45">
              {posts.length} {posts.length === 1 ? "Article" : "Articles"}
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="block"
                  >
                    {/* 16:9 + object-contain so the full cover artwork is visible */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#090909]">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={
                            post.coverImageAlt ||
                            post.title ||
                            "NORDVIA EXPORTS blog article"
                          }
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#242424] to-[#777]">
                          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                            NORDVIA
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6">
                      <div className="mb-4 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-black/45">
                        <span>{post.date}</span>
                        <span className="h-1 w-1 rounded-full bg-black/30" />
                        <span>{post.author || "NORDVIA EXPORTS"}</span>
                      </div>

                      <h3 className="text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-black/55 md:text-2xl">
                        {post.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-black/55">
                        {post.description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em]">
                        Read Article
                        <span className="transition-transform duration-300 group-hover:translate-x-2">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-black/10 px-6 py-20 text-center">
              <h3 className="text-xl font-semibold uppercase tracking-tight">
                No Articles Yet
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-black/50">
                Our latest apparel manufacturing insights and resources will
                appear here soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#090909] px-6 py-20 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
              Have a project in mind?
            </p>
            <h2 className="max-w-xl text-3xl font-semibold uppercase tracking-tight md:text-5xl">
              Let&apos;s Build Your Collection.
            </h2>
          </div>

          <Link
            href="/request-a-quote"
            className="inline-flex w-fit items-center gap-5 border border-white/30 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
          >
            Request a Quote <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}