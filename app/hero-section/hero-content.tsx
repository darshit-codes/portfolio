"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const STATS = [
  { value: "3+", label: "Years building" },
  { value: "AI/ML", label: "& Software Developer" },
  { value: "India", label: "Based in" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 flex h-full w-full flex-col justify-center items-center px-8 py-14 font-[family-name:var(--font-geist-sans)] sm:px-12 md:px-16 lg:px-20"
    >
      <motion.div variants={item} className="mb-8 flex items-center gap-3">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
        </span>
        <span className="rounded-full border border-white/10 bg-white/6 px-4 py-1.5 text-[11px] font-medium tracking-[0.2em] text-white/80 uppercase backdrop-blur-xl">
          AI/ML Engineer & Software Developer  from India
        </span>
      </motion.div>

      <motion.div variants={item} className="space-y-1">
        <p className="text-xl font-medium tracking-wide text-white/50 sm:text-base">
          Hello, I&apos;m
        </p>
        <h1
          className="text-[clamp(3.25rem,11vw,7rem)] leading-[0.95] font-medium tracking-normal text-white"
          style={{ fontFamily: "var(--font-caveat), cursive" }}
        >
          Darshit Mistry
        </h1>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-5 max-w-4xl text-base text-center leading-relaxed text-white/80 sm:text-lg"
      >
        Bridging machine learning research and software engineering — from model
        training and evaluation to APIs, interfaces, and products people use
        every day.
      </motion.p>

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
      >
        <Button
          size="lg"
          variant="outline"
          asChild
          className="h-12 rounded-full border-white/15 bg-white/4 px-7 text-[15px] font-medium text-white backdrop-blur-md hover:border-white/25 hover:bg-white/[0.08]"
        >
          <Link href="#contact">
            <Mail className="size-4 opacity-80" />
            Start a conversation
          </Link>
        </Button>
      </motion.div>



      <motion.div
        variants={item}
        className="mt-14 grid  grid-cols-3 gap-6 border-t border-white/10 pt-8"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="space-y-1 flex justify-center items-center flex-col">
            <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">
              {stat.value}
            </p>
            <p className="text-xs tracking-wide text-white/45 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={item}
        className="mt-10 flex flex-wrap gap-2"
      >
        <span

          className="rounded-full border border-white/8 bg-white/4 px-3.5 py-1.5 text-sm font-medium tracking-wide text-white/60 backdrop-blur-sm"
        >
          coding is like poetry should be beautiful and sort
        </span>

      </motion.div>
    </motion.div>
  );
}
