import { cn } from "@/lib/utils";

type PanelProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Panel({ children, className, hover = false }: PanelProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5)] backdrop-blur-md",
        "ring-1 ring-inset ring-white/[0.05]",
        hover &&
          "transition-all duration-500 hover:border-[#8B5CF6]/30 hover:bg-white/[0.05] hover:shadow-[0_6px_20px_-6px_rgba(139,92,246,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}
