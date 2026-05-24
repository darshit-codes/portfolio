import { cn } from "@/lib/utils";

type TechBadgeProps = {
  name: string;
  className?: string;
};

export function TechBadge({ name, className }: TechBadgeProps) {
  const abbr = name.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase() || "TS";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-[#6B7280] transition-colors hover:border-[#8B5CF6]/30 hover:text-white",
        className
      )}
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#8B5CF6]/10 text-[10px] font-semibold text-[#8B5CF6]">
        {abbr}
      </span>
      {name}
    </span>
  );
}
