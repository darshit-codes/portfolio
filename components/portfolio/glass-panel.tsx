import { cn } from "@/lib/utils";

type GlassPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_-24px_rgba(0,0,0,0.75)] backdrop-blur-sm",
        "ring-1 ring-inset ring-white/[0.06]",
        className
      )}
    >
      {children}
    </div>
  );
}
