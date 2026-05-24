import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 md:mb-12", className)} >
      <p className="text-[11px] font-medium tracking-[0.22em] text-[#8B5CF6] uppercase">
        {label}
      </p>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05] " style={{ fontFamily: "var(--font-caveat), cursive" }}>
          {title}
        </h2>
        {description ? (
          <p className="max-w-sm text-sm leading-relaxed text-[#6B7280] lg:text-base lg:text-right">
            {description}
          </p>
        ) : null}
      </div>
      <div className="mt-8 h-px w-full bg-linear-to-r from-[#8B5CF6]/50 via-white/10 to-transparent" />
    </div>
  );
}
