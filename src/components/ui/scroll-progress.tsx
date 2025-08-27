'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollProgressBarProps {
  heightClassName?: string;
}

export function ScrollProgressBar({
  heightClassName = 'h-0.5',
}: ScrollProgressBarProps) {
  const [progressPercent, setProgressPercent] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollable = Math.max(docHeight - winHeight, 1);
      const percent = Math.min(
        Math.max((scrollTop / scrollable) * 100, 0),
        100
      );
      setProgressPercent(percent);
    };

    const onScrollOrResize = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calculateProgress);
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);

    calculateProgress();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 ${heightClassName}`}
    >
      <div className="relative h-full">
        <div
          className="absolute left-0 top-0 h-full w-full bg-primary rounded-full transform origin-left will-change-transform"
          style={{ transform: `scaleX(${progressPercent / 100})` }}
        />
      </div>
    </div>
  );
}
