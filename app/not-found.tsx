import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Nordvia Exports page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-[#090909] px-5 py-24 text-white">
      <div className="max-w-2xl text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
          Page not found
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">
          Let&apos;s get you back on track.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
          Explore our apparel categories, manufacturing services, or contact
          the Nordvia Exports team about your project.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-white px-5 py-3 text-xs font-semibold text-black">
            Home
          </Link>
          <Link href="/products" className="border border-white/30 px-5 py-3 text-xs font-semibold">
            Products
          </Link>
          <Link href="/manufacturing" className="border border-white/30 px-5 py-3 text-xs font-semibold">
            Manufacturing Services
          </Link>
          <Link href="/request-a-quote" className="border border-white/30 px-5 py-3 text-xs font-semibold">
            Request a Quote
          </Link>
          <Link href="/contact" className="border border-white/30 px-5 py-3 text-xs font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
