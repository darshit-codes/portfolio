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
        "relative overflow-hidden rounded-[2rem] border border-white/[0.04] bg-[#050505] shadow-sm",
        "ring-1 ring-inset ring-white/[0.01]",
        hover &&
          "transition-all duration-700 hover:border-white/[0.12] hover:bg-[#0a0a0a] hover:shadow-2xl hover:shadow-white/[0.02]",
        className
      )}
    >
      {children}
    </div>
  );
}
