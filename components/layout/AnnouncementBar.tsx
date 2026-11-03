
import Link from "next/link";
import { FaArrowRight, FaGlobe, FaPhoneAlt } from "react-icons/fa";

const PHONE_NUMBER = "+92 324 8548680";
const PHONE_LINK = "tel:+923248548680";

export default function AnnouncementBar() {
  return (
    
<div className="relative z-[60] w-full border-b border-white/10 bg-black text-white">
  <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-2 sm:grid-cols-[1fr_auto_1fr] sm:px-6 lg:px-8">

    {/* Left: MOQ */}
    <div className="hidden items-center text-xs font-medium tracking-wide text-white/80 sm:flex">
      Flexible MOQ Available
    </div>

    {/* Center: Announcement */}
    <div className="flex min-w-0 items-center justify-center gap-2 whitespace-nowrap text-[10px] font-medium sm:text-xs">
      <FaGlobe className="hidden shrink-0 text-white/70 sm:block" />

      <span className="truncate">
        Your Global Partner for Custom Apparel Manufacturing
      </span>

      <Link
        href="/request-a-quote"
        className="hidden shrink-0 items-center gap-1 font-semibold underline underline-offset-4 transition-opacity hover:opacity-60 sm:inline-flex"
      >
        Enquire Now
        <FaArrowRight className="text-[9px]" />
      </Link>
    </div>

    {/* Right: Phone */}
    <div className="flex items-center justify-end">
      <a
        href="tel:+923248548680"
        aria-label="Call NORDVIA EXPORTS"
        className="inline-flex items-center gap-2 text-xs text-white transition-opacity hover:opacity-70"
      >
        <FaPhoneAlt className="text-xs" />

        <span className="hidden sm:inline">
          +92 324 8548680
        </span>
      </a>
    </div>

  </div>
</div>

  );
}
