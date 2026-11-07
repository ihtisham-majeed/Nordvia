
export default function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-[#090909] text-white">

      {/* DESKTOP ANNOUNCEMENT */}
      <div className="mx-auto hidden max-w-[1600px] items-center justify-center gap-5 px-6 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] sm:flex sm:gap-8 sm:text-[10px] lg:gap-12">

        <span>Custom Apparel Manufacturing</span>

        <span className="text-white/60">/</span>

        <span>Private Label Development</span>

        <span className="text-white/60">/</span>

        <span>Flexible MOQ</span>

      </div>

      {/* MOBILE ANNOUNCEMENT */}
      <div className="flex items-center justify-center gap-3 px-3 py-2.5 text-[9px] font-semibold uppercase tracking-[0.12em] sm:hidden">

        <span className="whitespace-nowrap">
          Flexible MOQ
        </span>

        <span className="text-white/60">/</span>

        <span className="whitespace-nowrap">
          Efficient Production
        </span>

      </div>

    </div>
  );
}
