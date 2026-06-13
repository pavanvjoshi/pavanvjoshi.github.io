"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

/**
 * Anchor that gently pulls toward the cursor (magnetic hover physics).
 * Runs entirely on motion values — no React re-renders on pointer move.
 * Collapses to a plain anchor under prefers-reduced-motion.
 */
export function MagneticButton({
  href,
  className,
  children,
  strength = 0.35,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouse(e: MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  if (reduce) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
