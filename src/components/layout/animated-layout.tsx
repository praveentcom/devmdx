"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedLayoutProps {
  children: ReactNode;
}

export function AnimatedLayout({ children }: AnimatedLayoutProps) {
  const pathname = usePathname();
  const hasMountedRef = useRef(false);
  const [initialState, setInitialState] = useState<
    false | { opacity: number; y: number }
  >(false);

  useEffect(() => {
    if (hasMountedRef.current) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
      setInitialState({ opacity: 0, y: 2 });
    } else {
      hasMountedRef.current = true;
      setInitialState(false);
    }
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={initialState}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
