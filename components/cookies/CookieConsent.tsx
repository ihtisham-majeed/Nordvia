"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ConsentScripts, {
  type ConsentScriptPreferences,
} from "@/components/consent/ConsentScripts";
import {
  FaCheck,
  FaChevronRight,
  FaTimes,
  FaSlidersH,
} from "react-icons/fa";

const STORAGE_KEY = "nordvia-cookie-consent";
const HIDE_SETTINGS_KEY = "nordvia-hide-privacy-settings";

type Consent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

const defaultConsent: Consent = {
  essential: true,
  analytics: false,
  marketing: false,
};

export default function CookieConsent() {
  const pathname = usePathname();

  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  // The floating settings control can be dismissed independently.
  const [showPrivacyButton, setShowPrivacyButton] = useState(false);

  // Restore saved consent and floating-button visibility.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      const buttonHidden =
        localStorage.getItem(HIDE_SETTINGS_KEY) === "true";

      setShowPrivacyButton(!buttonHidden);

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
      setShowPrivacyButton(true);
    }
  }, []);

  // Allow the footer and policy page to reopen preferences.
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

  // Close preferences with Escape.
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

    try {
      const buttonHidden =
        localStorage.getItem(HIDE_SETTINGS_KEY) === "true";

      setShowPrivacyButton(!buttonHidden);
    } catch {
      setShowPrivacyButton(true);
    }
  }

  // The main banner button enables analytics only.
  function allowAnalytics() {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: false,
    });
  }

  function rejectOptional() {
    saveConsent(defaultConsent);
  }

  function acceptAll() {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  }

  function savePreferences() {
    saveConsent({
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
  }

  function hidePrivacyButton() {
    try {
      localStorage.setItem(HIDE_SETTINGS_KEY, "true");
    } catch {
      // Hide for the current session if storage is unavailable.
    }

    setShowPrivacyButton(false);
  }

  function openPreferences() {
    setAnalyticsEnabled(consent?.analytics ?? false);
    setMarketingEnabled(consent?.marketing ?? false);
    setShowSettings(true);
  }

  const switchClass = (enabled: boolean) =>
    `relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
      enabled ? "bg-black" : "bg-neutral-300"
    }`;

  const switchKnobClass = (enabled: boolean) =>
    `absolute top-1 h-4 w-4 rounded-full transition-all ${
      enabled ? "left-6 bg-white" : "left-1 bg-white"
    }`;

  return (
    <>
      <ConsentScripts
        consent={consent as ConsentScriptPreferences | null}
        pathname={pathname}
      />

      {/* Compact first-visit cookie notice */}
      {showBanner && (
        <div className="fixed bottom-5 left-5 z-[9998] w-[calc(100%-40px)] max-w-[525px] border border-neutral-200 bg-[#f8f8f8] p-5 text-[#333] shadow-[0_10px_45px_rgba(0,0,0,0.3)] sm:p-6">
          <p className="mb-5 text-sm leading-7 sm:text-base">
            Can we measure how the site is used? Google Analytics and
            Pinterest only load if you say yes.{" "}
            <Link
              href="/privacy-policy"
              className="cursor-pointer underline underline-offset-2 transition-colors hover:text-black"
            >
              Privacy policy
            </Link>
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={allowAnalytics}
              className="flex min-h-[54px] cursor-pointer items-center justify-center gap-2 bg-[#111] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-neutral-700 sm:text-xs"
            >
              <FaCheck size={10} />
              Allow analytics
            </button>

            <button
              type="button"
              onClick={rejectOptional}
              className="min-h-[54px] cursor-pointer border border-[#111] bg-transparent px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#111] transition-colors hover:bg-[#111] hover:text-white sm:text-xs"
            >
              No thanks
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowSettings(true)}
            className="mt-4 cursor-pointer text-[11px] text-neutral-600 underline underline-offset-4 transition-colors hover:text-black"
          >
            Customize preferences
          </button>
        </div>
      )}

      {/* Dismissible floating privacy settings control */}
      {!showBanner && consent && showPrivacyButton && (
        <div className="fixed bottom-4 left-4 z-[9997] flex items-center border border-neutral-300 bg-[#f8f8f8] text-[#222] shadow-lg">
          <button
            type="button"
            onClick={openPreferences}
            className="flex cursor-pointer items-center gap-2 px-3 py-3 text-[10px] font-semibold uppercase tracking-wider transition-colors hover:bg-neutral-200"
            aria-label="Privacy settings, open cookie preferences"
          >
            <FaSlidersH size={12} />
            Privacy settings
          </button>

          <button
            type="button"
            onClick={hidePrivacyButton}
            className="flex h-full min-h-[42px] cursor-pointer items-center justify-center border-l border-neutral-300 px-3 text-neutral-500 transition-colors hover:bg-neutral-200 hover:text-black"
            aria-label="Hide privacy settings button"
            title="Hide privacy settings button"
          >
            <FaTimes size={11} />
          </button>
        </div>
      )}

      {/* Cookie preferences dialog */}
      {showSettings && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-8"
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
            className="relative my-auto w-full max-w-xl bg-[#f8f8f8] p-6 text-[#222] shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setShowSettings(false)}
              aria-label="Close cookie settings"
              className="absolute right-5 top-5 cursor-pointer text-neutral-500 transition-colors hover:text-black"
            >
              <FaTimes size={16} />
            </button>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              NORDVIA EXPORTS / Privacy
            </p>

            <h2
              id="cookie-settings-title"
              className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl"
            >
              Manage your preferences.
            </h2>

            <p className="mb-7 text-sm leading-7 text-neutral-600">
              Choose which optional technologies we may use.
              You can change your choices at any time.
            </p>

            {/* Essential */}
            <div className="flex items-center justify-between border-t border-neutral-200 py-5">
              <div className="pr-5">
                <h3 className="mb-1 text-sm font-semibold">
                  Essential storage
                </h3>
                <p className="text-xs leading-5 text-neutral-500">
                  Required for basic website functionality and
                  remembering your privacy choices.
                </p>
              </div>

              <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Always on
              </span>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between border-t border-neutral-200 py-5">
              <div className="pr-5">
                <h3 className="mb-1 text-sm font-semibold">
                  Analytics
                </h3>
                <p className="text-xs leading-5 text-neutral-500">
                  Google Analytics helps us understand visits,
                  popular pages and website performance.
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-label="Enable analytics"
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
            <div className="flex items-center justify-between border-t border-neutral-200 py-5">
              <div className="pr-5">
                <h3 className="mb-1 text-sm font-semibold">
                  Marketing
                </h3>
                <p className="text-xs leading-5 text-neutral-500">
                  Pinterest tracking helps measure advertising
                  activity and campaign performance.
                </p>
              </div>

              <button
                type="button"
                role="switch"
                aria-label="Enable marketing"
                aria-checked={marketingEnabled}
                onClick={() =>
                  setMarketingEnabled((previous) => !previous)
                }
                className={switchClass(marketingEnabled)}
              >
                <span className={switchKnobClass(marketingEnabled)} />
              </button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={rejectOptional}
                className="min-h-[50px] cursor-pointer border border-neutral-300 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors hover:bg-neutral-200"
              >
                Reject optional
              </button>

              <button
                type="button"
                onClick={savePreferences}
                className="flex min-h-[50px] cursor-pointer items-center justify-center gap-2 bg-[#111] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-neutral-700"
              >
                Save preferences
                <FaChevronRight size={9} />
              </button>
            </div>

            <button
              type="button"
              onClick={acceptAll}
              className="mt-3 w-full cursor-pointer py-2 text-[11px] font-semibold text-neutral-600 underline underline-offset-4 transition-colors hover:text-black"
            >
              Accept all cookies
            </button>

            <p className="mt-5 text-[10px] leading-5 text-neutral-500">
              Read our{" "}
              <Link
                href="/privacy-policy"
                className="cursor-pointer underline underline-offset-2 hover:text-black"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/cookie-policy"
                className="cursor-pointer underline underline-offset-2 hover:text-black"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}