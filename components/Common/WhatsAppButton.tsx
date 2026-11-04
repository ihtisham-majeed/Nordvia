
"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaTimes,
  FaArrowRight,
  FaCheck,
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

  const startChat = () => {
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      selectedMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* BACKDROP - MOBILE */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[89] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 sm:hidden ${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* WHATSAPP POPUP */}
      <div
        className={`
          fixed z-[90]
          bottom-[calc(88px+env(safe-area-inset-bottom))]
          left-3 right-3
          mx-auto w-auto max-w-[390px]
          origin-bottom-right
          transition-all duration-300
          sm:bottom-24 sm:left-auto sm:right-6
          sm:mx-0 sm:w-[360px]
          ${
            isOpen
              ? "visible translate-y-0 scale-100 opacity-100"
              : "pointer-events-none invisible translate-y-5 scale-[0.97] opacity-0"
          }
        `}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.22)]">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-neutral-100 bg-white px-4 py-3.5 sm:px-5">

            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] text-white">
                <span className="text-base font-bold">N</span>
              </div>

              <div className="min-w-0">
                <h3 className="text-[13px] font-bold tracking-[0.04em] text-neutral-950">
                  NORDVIA EXPORTS
                </h3>

                <div className="mt-1 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  <p className="text-[10px] text-neutral-500">
                    Apparel enquiries
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp popup"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neutral-500 transition hover:bg-neutral-100 hover:text-black"
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* BODY */}
          <div className="bg-[#f8f8f7] p-4 sm:p-5">

            {/* INTRODUCTION */}
            <div className="rounded-xl rounded-tl-sm border border-neutral-200 bg-white px-4 py-3.5 shadow-sm">
              <p className="text-[13px] leading-[1.7] text-neutral-700">
                Hello! How can we help with your apparel project?
                Select a topic below to start a conversation.
              </p>
            </div>

            {/* TOPIC SELECTION */}
            <div className="mt-4">
              <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Choose an enquiry
              </p>

              <div className="grid grid-cols-2 gap-2">
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
                      className={`
                        flex min-h-[43px] items-center justify-between
                        gap-2 rounded-lg border px-3 py-2.5
                        text-left text-[11px] font-semibold
                        transition-all duration-200
                        ${
                          isSelected
                            ? "border-black bg-black text-white"
                            : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400"
                        }
                      `}
                    >
                      <span>{topic.label}</span>

                      {isSelected && (
                        <FaCheck className="shrink-0 text-[10px]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CHAT BUTTON */}
            <button
              type="button"
              onClick={startChat}
              className="
                mt-4 flex min-h-[48px] w-full
                items-center justify-center gap-3
                rounded-lg bg-[#111] px-4
                text-[10px] font-bold uppercase
                tracking-[0.17em] text-white
                transition duration-300
                hover:bg-neutral-800
                active:scale-[0.98]
              "
            >
              <FaWhatsapp size={17} />
              Continue to WhatsApp
              <FaArrowRight size={11} />
            </button>

            {/* CONTACT */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center text-[11px] text-neutral-500 transition hover:text-black"
            >
              +92 324 8548680
            </a>
          </div>

          {/* FOOTER */}
          <div className="border-t border-neutral-100 bg-white px-4 py-2.5 text-center">
            <p className="text-[9px] tracking-wide text-neutral-400">
              NORDVIA EXPORTS · CUSTOM APPAREL
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={
          isOpen ? "Close WhatsApp popup" : "Open WhatsApp popup"
        }
        aria-expanded={isOpen}
        aria-controls="whatsapp-contact-popup"
        className={`
          fixed z-[95]
          bottom-[calc(18px+env(safe-area-inset-bottom))]
          right-4
          flex h-[52px] w-[52px]
          items-center justify-center
          rounded-full
          border border-white/15
          bg-[#111] text-white
          shadow-[0_5px_25px_rgba(0,0,0,0.25)]
          transition-all duration-300
          hover:bg-neutral-800
          active:scale-95
          sm:bottom-6 sm:right-6
          sm:h-[54px] sm:w-auto
          sm:rounded-none sm:px-5
          ${
            isOpen
              ? "rotate-0"
              : ""
          }
        `}
      >
        {isOpen ? (
          <>
            <FaTimes size={17} />
            <span className="ml-2 hidden text-[10px] font-bold uppercase tracking-[0.15em] sm:inline">
              Close
            </span>
          </>
        ) : (
          <>
            <FaWhatsapp size={23} />
            <span className="ml-2 hidden text-[10px] font-bold uppercase tracking-[0.15em] sm:inline">
              WhatsApp
            </span>
          </>
        )}
      </button>
    </>
  );
}
