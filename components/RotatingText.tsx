"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

type RotatingTextProps = {
  words: string[];
  className?: string;
  intervalMs?: number;
};

export function RotatingText({
  words,
  className,
  intervalMs = 3200,
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [words.length, intervalMs]);

  const current = words[index] ?? words[0];
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), words[0]);

  return (
    <span
      className={cn(
        "relative inline-grid min-h-[1.1em] overflow-hidden align-bottom",
        className
      )}
      aria-live="polite"
    >
      <span
        className="invisible col-start-1 row-start-1 inline-block whitespace-nowrap"
        aria-hidden
      >
        {longest}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="col-start-1 row-start-1 inline-block whitespace-nowrap bg-linear-to-r from-[#C4B5FD] via-white to-[#8B5CF6] bg-clip-text text-transparent"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
