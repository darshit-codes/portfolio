import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Panel } from "@/components/portfolio/panel";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SectionShell } from "@/components/portfolio/section-shell";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <SectionShell id="projects">
      <SectionHeader
        label="Work"
        title="Projects that shipped"
        description="Selected work across ML systems and product engineering."
      />

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {featured ? (
          <Reveal className="md:col-span-2">
            <ProjectCard project={featured} featured />
          </Reveal>
        ) : null}

        {rest.map((project, i) => (
          <Reveal key={project.title} delay={0.06 + i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[number];
  featured?: boolean;
}) {
  return (
    <Panel
      hover
      className={cn(
        "group flex h-full flex-col",
        featured && "md:min-h-[320px]"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-white/[0.06] bg-linear-to-br from-[#8B5CF6]/20 via-black to-black",
          featured ? "h-48 sm:h-56" : "h-36"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.35),transparent_50%)]" />
        <div className="absolute right-6 bottom-6 text-6xl font-bold tracking-tighter text-white/[0.06] sm:text-7xl">
          {project.title.charAt(0)}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-medium tracking-wide text-[#8B5CF6]">
              {project.year}
            </span>
            <h3
              className={cn(
                "mt-2 font-semibold tracking-tight text-white",
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              )}
            >
              {project.title}
            </h3>
          </div>
          <Link
            href={project.href}
            className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/10 group-hover:text-white"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#6B7280] sm:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-[#6B7280]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}
