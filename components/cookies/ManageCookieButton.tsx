
"use client";

import { FaArrowRight } from "react-icons/fa";

export default function ManageCookieButton() {
  const openCookieSettings = () => {
    window.dispatchEvent(
      new Event("nordvia:open-cookie-settings")
    );
  };

  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className="mt-7 inline-flex cursor-pointer items-center gap-3 border border-white/20 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-black"
    >
      Manage cookie preferences
      <FaArrowRight size={10} />
    </button>
  );
}
