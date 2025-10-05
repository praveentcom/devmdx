"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * ScrollRestoration component that automatically scrolls
 * to the top when navigating between pages
 */
export function ScrollRestoration() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });
  }, [pathname]);

  return null;
}
