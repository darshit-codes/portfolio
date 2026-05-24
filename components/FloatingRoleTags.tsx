"use client";

import { motion } from "motion/react";
import {
  Brain,
  BrainCog,
  Code2,
  Cpu,
  Rocket,
  SquareMousePointer,
  SquareTerminal,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type RoleTag = {
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  floatDuration: number;
  floatDelay: number;
};

type FloatingRoleTagsProps = {
  roles: RoleTag[];
  className?: string;
  /** Cover full parent (hero silk area) */
  fullBleed?: boolean;
};

export function FloatingRoleTags({
  roles,
  className,
  fullBleed = false,
}: FloatingRoleTagsProps) {
  return (
    <div
      className={cn(
        fullBleed
          ? "pointer-events-none absolute inset-0 z-[5] overflow-hidden"
          : "relative mx-auto h-[168px] w-full max-w-xl sm:h-[180px] sm:max-w-2xl",
        className
      )}
      aria-label="Areas I craft"
      aria-hidden={fullBleed}
    >
      {roles.map((role) => {
        const Icon = role.icon;
        return (
          <motion.div
            key={role.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
            style={{ left: `${role.x}%`, top: `${role.y}%` }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.65, 0.9, 0.65],
              scale: 1,
              y: [0, -14, 4, -8, 0],
              x: [0, 10, -8, 5, 0],
              rotate: [0, 2, -1.5, 1, 0],
            }}
            transition={{
              opacity: {
                duration: role.floatDuration + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: role.floatDelay,
              },
              scale: { duration: 0.7, delay: role.floatDelay },
              y: {
                duration: role.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: role.floatDelay,
              },
              x: {
                duration: role.floatDuration + 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: role.floatDelay + 0.4,
              },
              rotate: {
                duration: role.floatDuration + 1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: role.floatDelay,
              },
            }}
          >
            <motion.div
              className="flex size-9 items-center justify-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/12 text-white shadow-[0_4px_12px_-4px_rgba(139,92,246,0.3)] backdrop-blur-md sm:size-10"
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: role.floatDelay,
              }}
            >
              <Icon className="size-4" strokeWidth={1.75} />
            </motion.div>

            <span className="whitespace-nowrap rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-md sm:text-[11px]">
              {role.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/** Spread across full hero silk — edges & corners, clear of center copy */
export const HERO_ROLE_TAGS: RoleTag[] = [
  {
    label: "intelligent systems",
    icon: BrainCog,
    x: 12,
    y: 18,
    floatDuration: 6,
    floatDelay: 0,
  },
  {
    label: "production ML pipelines",
    icon: Cpu,
    x: 88,
    y: 14,
    floatDuration: 7,
    floatDelay: 0.5,
  },
  {
    label: "scalable software",
    icon: SquareTerminal,
    x: 8,
    y: 82,
    floatDuration: 5.5,
    floatDelay: 0.25,
  },
  {
    label: "end-to-end AI products",
    icon: SquareMousePointer,
    x: 92,
    y: 78,
    floatDuration: 6.5,
    floatDelay: 0.7,
  },
];
