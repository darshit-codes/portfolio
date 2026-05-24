import { cn } from "@/lib/utils";

type ContentCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function ContentCard({
  children,
  className,
  hover = false,
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8",
        hover &&
          "transition-shadow duration-300 hover:border-[#8B5CF6]/30 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
