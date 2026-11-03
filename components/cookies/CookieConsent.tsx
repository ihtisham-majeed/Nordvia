
"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaCheck,
  FaChevronRight,
  FaCookieBite,
  FaSlidersH,
  FaTimes,
} from "react-icons/fa";

const GA_ID = "G-YZ8QKKHJX1";
const PINTEREST_ID = "2612924698071";
const STORAGE_KEY = "nordvia-cookie-consent";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

type PinterestTracker = ((...args: unknown[]) => void) & {
  queue?: unknown[][];
  version?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    pintrk?: PinterestTracker;
    __nordviaGaInitialized?: boolean;
    __nordviaPinterestInitialized?: boolean;
  }
}

const defaultConsent: Consent = {
  essential: true,
  analytics: false,
  marketing: false,
};

const deniedGoogleConsent = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

export default function CookieConsent() {
  const pathname = usePathname();

  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const lastGaPath = useRef("");
  const lastPinterestPath = useRef("");

  // Restore previously saved preferences.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        setShowBanner(true);
        return;
      }

      const parsed: unknown = JSON.parse(saved);

      if (!parsed || typeof parsed !== "object") {
        setShowBanner(true);
        return;
      }

      const preferences = parsed as Record<string, unknown>;

      const restored: Consent = {
        essential: true,
        analytics: preferences.analytics === true,
        marketing: preferences.marketing === true,
      };

      setConsent(restored);
      setAnalyticsEnabled(restored.analytics);
      setMarketingEnabled(restored.marketing);
    } catch {
      setShowBanner(true);
    }
  }, []);

  // Allow the footer to open cookie settings.
  useEffect(() => {
    function openSettings() {
      setAnalyticsEnabled(consent?.analytics ?? false);
      setMarketingEnabled(consent?.marketing ?? false);
      setShowSettings(true);
    }

    window.addEventListener("nordvia:open-cookie-settings", openSettings);

    return () => {
      window.removeEventListener(
        "nordvia:open-cookie-settings",
        openSettings
      );
    };
  }, [consent]);

  // Close the preferences dialog with Escape.
  useEffect(() => {
    if (!showSettings) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setShowSettings(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showSettings]);

  // Save visitor preferences.
  function saveConsent(nextConsent: Consent) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...nextConsent,
          updatedAt: new Date().toISOString(),
        })
      );
    } catch {
      // Preferences still apply for the current page session.
    }

    setConsent(nextConsent);
    setAnalyticsEnabled(nextConsent.analytics);
    setMarketingEnabled(nextConsent.marketing);
    setShowBanner(false);
    setShowSettings(false);
  }

  function acceptAll() {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  }

  function rejectOptional() {
    saveConsent(defaultConsent);
  }

  function savePreferences() {
    saveConsent({
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  }

  // Google Analytics: load only after analytics consent.
  // Update consent immediately if the visitor changes their choice.
  useEffect(() => {
    if (!consent) return;

    if (!consent.analytics) {
      if (window.__nordviaGaInitialized && window.gtag) {
        window.gtag("consent", "update", deniedGoogleConsent);
      }

      lastGaPath.current = "";
      return;
    }

    if (!window.__nordviaGaInitialized) {
      window.dataLayer = window.dataLayer || [];

      window.gtag = function (...args: unknown[]) {
        window.dataLayer?.push(args);
      };

      // Set denied defaults before loading the Google tag.
      window.gtag("consent", "default", deniedGoogleConsent);

      // Grant analytics only. Advertising consent remains denied.
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });

      window.gtag("js", new Date());

      window.gtag("config", GA_ID, {
        send_page_view: false,
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.dataset.nordviaAnalytics = "true";

      document.head.appendChild(script);

      window.__nordviaGaInitialized = true;
    } else {
      // Re-grant analytics if the visitor enables it again.
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }

    // Send one page view per route after consent.
    if (lastGaPath.current !== pathname) {
      window.gtag?.("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });

      lastGaPath.current = pathname;
    }
  }, [consent, pathname]);

  // Pinterest: load only after marketing consent.
  // Revoke consent immediately when marketing is disabled.
  useEffect(() => {
    if (!consent) return;

    if (!consent.marketing) {
      if (
        window.__nordviaPinterestInitialized &&
        window.pintrk
      ) {
        window.pintrk("setconsent", false);
      }

      lastPinterestPath.current = "";
      return;
    }

    if (!window.__nordviaPinterestInitialized) {
      const pintrk: PinterestTracker = (...args: unknown[]) => {
        pintrk.queue = pintrk.queue || [];
        pintrk.queue.push(args);
      };

      pintrk.queue = [];
      pintrk.version = "3.0";

      window.pintrk = pintrk;

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://s.pinimg.com/ct/core.js";
      script.dataset.nordviaPinterest = "true";

      document.head.appendChild(script);

      window.pintrk("load", PINTEREST_ID);
      window.pintrk("setconsent", true);

      window.__nordviaPinterestInitialized = true;
    } else {
      // Re-enable Pinterest consent if the visitor opts in again.
      window.pintrk?.("setconsent", true);
    }

    // Send a page event after marketing consent.
    if (lastPinterestPath.current !== pathname) {
      window.pintrk?.("page");
      lastPinterestPath.current = pathname;
    }
  }, [consent, pathname]);

  const switchClass = (enabled: boolean) =>
    `relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
      enabled ? "bg-white" : "bg-neutral-700"
    }`;

  const switchKnobClass = (enabled: boolean) =>
    `absolute top-1 h-4 w-4 rounded-full transition-all ${
      enabled ? "left-6 bg-black" : "left-1 bg-white"
    }`;

  return (
    <>
      {/* First-visit cookie banner */}
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[9998] border-t border-white/15 bg-[#101010] px-5 py-7 text-white shadow-[0_-15px_60px_rgba(0,0,0,0.45)] sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-3">
                <FaCookieBite className="text-neutral-300" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  NORDVIA EXPORTS / Privacy
                </p>
              </div>

              <h2 className="mb-2 text-xl font-medium tracking-tight sm:text-2xl">
                Your privacy matters.
              </h2>

              <p className="text-xs leading-6 text-neutral-400 sm:text-sm">
                We use essential storage to operate this website.
                With your permission, we also use analytics and
                marketing technologies to understand website
                activity and improve our services. You can accept,
                reject or customize optional tracking.
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-[11px] text-neutral-500">
                <a
                  href="/privacy-policy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>

                <a
                  href="/cookie-policy"
                  className="transition-colors hover:text-white"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:min-w-[390px]">
              <button
                type="button"
                onClick={acceptAll}
                className="flex cursor-pointer items-center justify-center gap-2 bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-neutral-200"
              >
                <FaCheck size={10} />
                Accept all
              </button>

              <button
                type="button"
                onClick={rejectOptional}
                className="cursor-pointer border border-white/20 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
              >
                Reject optional
              </button>

              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="cursor-pointer border border-white/20 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-300 transition-colors hover:border-white hover:text-white"
              >
                Customize
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Persistent privacy settings button */}
      {!showBanner && consent && (
        <button
          type="button"
          onClick={() => {
            setAnalyticsEnabled(consent.analytics);
            setMarketingEnabled(consent.marketing);
            setShowSettings(true);
          }}
          className="fixed bottom-4 left-4 z-[9997] flex cursor-pointer items-center gap-2 border border-white/15 bg-[#111111] px-3 py-3 text-[10px] font-semibold uppercase tracking-wider text-neutral-300 shadow-xl transition-colors hover:border-white hover:text-white"
          aria-label="Open cookie preferences"
        >
          <FaSlidersH size={12} />
          Privacy settings
        </button>
      )}

      {/* Cookie preferences modal */}
      {showSettings && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowSettings(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-settings-title"
            className="relative my-auto w-full max-w-xl border border-white/15 bg-[#111111] p-6 text-white shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              aria-label="Close cookie settings"
              className="absolute right-5 top-5 cursor-pointer text-neutral-500 transition-colors hover:text-white"
            >
              <FaTimes size={16} />
            </button>

            <div className="mb-7 flex items-center gap-3">
              <FaCookieBite className="text-neutral-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Privacy preferences
              </span>
            </div>

            <h2
              id="cookie-settings-title"
              className="mb-3 text-3xl font-medium tracking-tight"
            >
              Manage your choices.
            </h2>

            <p className="mb-8 text-sm leading-7 text-neutral-400">
              Choose which optional technologies NORDVIA EXPORTS
              may use. You can change these choices at any time.
            </p>

            {/* Essential storage */}
            <div className="flex items-center justify-between border-b border-white/10 py-5">
              <div className="pr-5">
                <h3 className="mb-1 text-sm font-semibold">
                  Essential storage
                </h3>

                <p className="text-xs leading-5 text-neutral-500">
                  Required for basic website functionality and
                  remembering your privacy preferences.
                </p>
              </div>

              <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                Always on
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between border-b border-white/10 py-5">
              <div className="pr-5">
                <h3 className="mb-1 text-sm font-semibold">
                  Analytics
                </h3>

                <p className="text-xs leading-5 text-neutral-500">
                  Helps us understand visits, popular pages,
                  traffic sources and website performance through
                  Google Analytics.
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-label="Enable analytics cookies"
                aria-checked={analyticsEnabled}
                onClick={() =>
                  setAnalyticsEnabled((previous) => !previous)
                }
                className={switchClass(analyticsEnabled)}
              >
                <span className={switchKnobClass(analyticsEnabled)} />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between border-b border-white/10 py-5">
              <div className="pr-5">
                <h3 className="mb-1 text-sm font-semibold">
                  Marketing
                </h3>

                <p className="text-xs leading-5 text-neutral-500">
                  Allows Pinterest marketing measurement and
                  advertising-related tracking. Pinterest tracking
                  is enabled only when you give permission.
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-label="Enable marketing cookies"
                aria-checked={marketingEnabled}
                onClick={() =>
                  setMarketingEnabled((previous) => !previous)
                }
                className={switchClass(marketingEnabled)}
              >
                <span className={switchKnobClass(marketingEnabled)} />
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={rejectOptional}
                className="cursor-pointer border border-white/20 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
              >
                Reject optional
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="flex cursor-pointer items-center justify-center gap-2 bg-white px-5 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-neutral-200"
              >
                Save preferences
                <FaChevronRight size={9} />
              </button>
            </div>

            <p className="mt-5 text-[10px] leading-5 text-neutral-600">
              For more information, read our{" "}
              <a
                href="/privacy-policy"
                className="text-neutral-300 underline underline-offset-4 hover:text-white"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/cookie-policy"
                className="text-neutral-300 underline underline-offset-4 hover:text-white"
              >
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}
