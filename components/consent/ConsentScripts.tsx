"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const GA_ID = "G-YZ8QKKHJX1";
const PINTEREST_ID = "2612924698071";

export type ConsentScriptPreferences = {
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

const deniedGoogleConsent = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

export default function ConsentScripts({
  consent,
  pathname,
}: {
  consent: ConsentScriptPreferences | null;
  pathname: string;
}) {
  const lastGaPath = useRef("");
  const lastPinterestPath = useRef("");

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

      window.gtag("consent", "default", deniedGoogleConsent);
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, {
        send_page_view: false,
      });

      window.__nordviaGaInitialized = true;
    } else {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }

    if (lastGaPath.current !== pathname) {
      window.gtag?.("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });

      lastGaPath.current = pathname;
    }
  }, [consent, pathname]);

  useEffect(() => {
    if (!consent) return;

    if (!consent.marketing) {
      if (window.__nordviaPinterestInitialized && window.pintrk) {
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
      window.pintrk("load", PINTEREST_ID);
      window.pintrk("setconsent", true);
      window.__nordviaPinterestInitialized = true;
    } else {
      window.pintrk?.("setconsent", true);
    }

    if (lastPinterestPath.current !== pathname) {
      window.pintrk?.("page");
      lastPinterestPath.current = pathname;
    }
  }, [consent, pathname]);

  return (
    <>
      {consent?.analytics && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
      )}
      {consent?.marketing && (
        <Script
          src="https://s.pinimg.com/ct/core.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
