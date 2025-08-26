"use client";

import { ReactNode, useEffect, useState } from "react";
import { Transition } from "motion/react";
import { InView, InViewProps } from "./in-view";

export type BlurInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
  className?: string;
  yOffset?: number;
  once?: boolean;
} & Omit<InViewProps, "variants" | "transition" | "children">;

export function BlurIn({
  children,
  delay = 0,
  duration = 0.3,
  blur = "6px",
  className,
  yOffset = 20,
  once = true,
  ...props
}: BlurInProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // If user prefers reduced motion, render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const transition: Transition = {
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94],
  };

  return (
    <InView
      variants={variants}
      transition={transition}
      viewOptions={{ amount: 0.3, margin: "0px 0px -100px 0px" }}
      once={once}
      {...props}
    >
      <div className={className}>{children}</div>
    </InView>
  );
}
