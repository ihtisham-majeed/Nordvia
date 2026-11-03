
"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

function RouteScrollManager() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    let firstFrame = 0;
    let secondFrame = 0;

    const scrollToCurrentLocation = () => {
      const hash = window.location.hash;

      if (hash) {
        let targetId = hash.slice(1);

        try {
          targetId = decodeURIComponent(targetId);
        } catch {
          // Keep the original hash if decoding fails.
        }

        const target = document.getElementById(targetId);

        if (target) {
          lenis.scrollTo(target, {
            offset: -110,
            duration: 1.2,
            force: true,
          });
        }

        return;
      }

      // Start every newly visited page at the top.
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    };

    // Wait for Next.js to render the new route before scrolling.
    firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(scrollToCurrentLocation);
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [pathname, lenis]);

  // Also handle anchor links clicked on the current page.
  useEffect(() => {
    const handleHashChange = () => {
      if (!lenis) return;

      const hash = window.location.hash;
      if (!hash) return;

      let targetId = hash.slice(1);

      try {
        targetId = decodeURIComponent(targetId);
      } catch {
        // Keep the original hash.
      }

      requestAnimationFrame(() => {
        const target = document.getElementById(targetId);

        if (target) {
          lenis.scrollTo(target, {
            offset: -110,
            duration: 1.2,
            force: true,
          });
        }
      });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScrolling({
  children,
}: SmoothScrollingProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        infinite: false,
        autoResize: true,
        syncTouch: false,
      }}
    >
      <RouteScrollManager />
      {children}
    </ReactLenis>
  );
}
