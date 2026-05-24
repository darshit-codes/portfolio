import { Brain, Cloud, Code2, type LucideIcon } from "lucide-react";

import { Panel } from "@/components/portfolio/panel";
import { cn } from "@/lib/utils";

const icons = {
  ml: Brain,
  software: Code2,
  ops: Cloud,
} as const;

const accents = {
  ml: "from-[#8B5CF6] via-[#A78BFA] to-transparent",
  software: "from-[#6366F1] via-[#8B5CF6] to-transparent",
  ops: "from-[#7C3AED] via-[#8B5CF6] to-transparent",
} as const;

type StackCardProps = {
  id: keyof typeof icons;
  index: string;
  title: string;
  description: string;
  technologies: readonly string[];
  className?: string;
  featured?: boolean;
};

export function StackCard({
  id,
  index,
  title,
  description,
  technologies,
  className,
  featured = false,
}: StackCardProps) {
  const accent = accents[id];

  return (
    <Panel
      hover
      className={cn(
        "group relative flex h-full flex-col overflow-hidden",
        featured && "md:min-h-[320px]",
        className
      )}
    >
      <div
        className={cn(
          "h-px w-full bg-linear-to-r",
          accent
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -top-16 -right-16 size-32 rounded-full bg-linear-to-br opacity-10 blur-2xl transition-opacity group-hover:opacity-25",
          accent
        )}
        aria-hidden
      />

      <div className={cn("relative flex flex-1 flex-col p-6 sm:p-8", featured && "sm:p-10")}>
        

        <h3
          className={cn(
            "mt-5 font-semibold tracking-tight text-white",
            featured ? "text-xl sm:text-2xl" : "text-lg"
          )}
        >
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B7280]">
          {description}
        </p>

        <div className="mt-6 border-t border-white/[0.06] pt-6">
          <p className="mb-3 text-[10px] font-medium tracking-[0.18em] text-[#6B7280] uppercase">
            Toolkit
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-[#6B7280] transition-colors group-hover:border-[#8B5CF6]/20 group-hover:text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
