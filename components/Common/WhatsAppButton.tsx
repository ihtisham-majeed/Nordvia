
"use client";

import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";

const PHONE_NUMBER = "923248548680";

const topics = [
  {
    label: "Get a quote",
    message:
      "Hello NORDVIA EXPORTS! I would like to request a quotation for custom apparel manufacturing.",
  },
  {
    label: "Free mockup",
    message:
      "Hello NORDVIA EXPORTS! I am interested in discussing a custom apparel design mockup.",
  },
  {
    label: "Sizing help",
    message:
      "Hello NORDVIA EXPORTS! I need help with garment sizing and measurements.",
  },
  {
    label: "Order status",
    message:
      "Hello NORDVIA EXPORTS! I would like to discuss an order or production status enquiry.",
  },
];

const DEFAULT_MESSAGE =
  "Hello NORDVIA EXPORTS! I would like to discuss an apparel manufacturing enquiry.";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] =
    useState(DEFAULT_MESSAGE);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  const startChat = () => {
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      selectedMessage
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* WHATSAPP POPUP */}
      <div
        className={`fixed bottom-[82px] right-4 z-[90] w-[calc(100%-32px)] max-w-[360px] origin-bottom-right transition-all duration-300 sm:right-6 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "pointer-events-none invisible translate-y-4 scale-95 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden border border-neutral-200 bg-white shadow-[0_12px_45px_rgba(0,0,0,0.20)]">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">

            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white">
                <span className="text-sm font-bold tracking-tight">
                  N
                </span>
              </div>

              <div className="min-w-0">
                <h3 className="text-[14px] font-bold text-neutral-900">
                  NORDVIA EXPORTS
                </h3>

                <p className="mt-1 text-[11px] text-neutral-500">
                  Custom apparel · Private label
                </p>
              </div>

            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp popup"
              className="ml-2 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center text-neutral-500 transition hover:text-black"
            >
              <FaTimes size={16} />
            </button>

          </div>

          {/* BODY */}
          <div className="px-4 py-4">

            {/* WELCOME MESSAGE */}
            <div className="rounded-[17px] rounded-tl-sm bg-[#ededed] px-4 py-3">

              <p className="text-[14px] leading-[1.6] text-neutral-800">
                Hi! Need a quote, custom design or help with your
                apparel project? Message us on WhatsApp — pick
                a topic to start.
              </p>

            </div>

            {/* TOPICS */}
            <div className="mt-3 grid grid-cols-2 gap-2">

              {topics.map((topic) => {
                const isSelected =
                  selectedMessage === topic.message;

                return (
                  <button
                    key={topic.label}
                    type="button"
                    onClick={() =>
                      setSelectedMessage(topic.message)
                    }
                    aria-pressed={isSelected}
                    className={`flex min-h-[42px] cursor-pointer items-center justify-center border px-2 py-2 text-center text-[12px] font-semibold transition sm:text-[13px] ${
                      isSelected
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 bg-white text-neutral-900 hover:border-black hover:bg-neutral-100"
                    }`}
                  >
                    {topic.label}
                  </button>
                );
              })}

            </div>

            {/* START CHAT */}
            <button
              type="button"
              onClick={startChat}
              className="mt-4 flex min-h-[49px] w-full cursor-pointer items-center justify-center gap-3 bg-[#111] px-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              <FaWhatsapp size={18} />
              Start Chat
              <FaArrowRight size={11} />
            </button>

            {/* PHONE NUMBER */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-[12px] text-neutral-500 transition hover:text-black"
            >
              WhatsApp +92 324 8548680
            </a>

          </div>
        </div>
      </div>

      {/* FLOATING BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen ? "Close WhatsApp popup" : "Open WhatsApp popup"
        }
        aria-expanded={isOpen}
        className={`fixed bottom-5 right-5 z-[95] flex h-[50px] cursor-pointer items-center justify-center gap-2.5 px-4 text-white shadow-xl transition-all duration-300 sm:bottom-6 sm:right-6 ${
          isOpen
            ? "border border-white/30 bg-[#111] hover:bg-neutral-800"
            : "bg-[#111] hover:bg-neutral-800"
        }`}
      >
        {isOpen ? (
          <>
            <FaTimes size={15} />
            <span className="text-[10px] font-bold uppercase tracking-[0.17em]">
              Close
            </span>
          </>
        ) : (
          <>
            <FaWhatsapp size={20} />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
              WhatsApp
            </span>
          </>
        )}
      </button>
    </>
  );
}
