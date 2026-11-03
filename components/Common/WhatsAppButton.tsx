"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+923248548680";
  const message = "Hi! I want to Check your Catalog.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-lg transition hover:bg-[#10a848] hover:shadow-xl"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden font-semibold">
        Let&apos;s Talk Now
      </span>
    </a>
  );
}
