import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-20 md:py-28", className)}>
      {children}
    </section>
  );
}
