'use client';

import { ReactNode } from 'react';
import { Transition } from 'motion/react';
import { InView, InViewProps } from './in-view';

export type BlurInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  blur?: string;
  className?: string;
  yOffset?: number;
  once?: boolean;
} & Omit<InViewProps, 'variants' | 'transition' | 'children'>;

export function BlurIn({
  children,
  delay = 0,
  duration = 0.4,
  blur = '6px',
  className,
  yOffset = 20,
  once = true,
  ...props
}: BlurInProps) {
  const variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      y: yOffset,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
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
      viewOptions={{ amount: 0.1, margin: '0px 0px -50px 0px' }}
      once={once}
      {...props}
    >
      <div className={className}>
        {children}
      </div>
    </InView>
  );
}