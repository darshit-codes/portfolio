"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Panel } from "@/components/portfolio/panel";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SectionShell } from "@/components/portfolio/section-shell";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TABS = ["All", "AI/ML", "Web"];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeTab === "All" ? true : project.category === activeTab
  );

  const featured = filteredProjects.find((p) => p.featured);
  const rest = filteredProjects.filter((p) => p !== featured);

  return (
    <SectionShell id="projects">
      <SectionHeader
        label="Work"
        title="Projects that shipped"
        description="Selected work across ML systems and product engineering."
      />

      <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-500 ease-out",
              activeTab === tab
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105"
                : "bg-white/[0.03] text-white/50 hover:bg-white/[0.08] hover:text-white"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {featured ? (
            <Reveal key={`featured-${featured.title}`} className="md:col-span-2">
              <ProjectCard project={featured} featured />
            </Reveal>
          ) : null}

          {rest.map((project, i) => (
            <Reveal key={project.title} delay={0.06 + i * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center rounded-3xl border border-white/[0.04] bg-white/[0.01]">
          <p className="text-white/40 font-mono text-sm">No projects found for {activeTab}.</p>
        </div>
      )}
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
        "group flex h-full flex-col bg-[#050505]",
        featured && "md:min-h-[360px]"
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-[#0a0a0a] transition-all duration-700 group-hover:bg-[#0c0c0c]",
          featured ? "h-64 sm:h-80" : "h-48"
        )}
      >
        {/* Abstract Pattern / Cool Visual instead of image */}
        <div className="absolute inset-0 opacity-[0.15] transition-opacity duration-700 group-hover:opacity-30" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
               backgroundSize: '24px 24px' 
             }} 
        />
        
        {/* Animated Glow */}
        <div className="absolute -inset-[100%] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"
             style={{
               background: `radial-gradient(circle at 50% 50%, #8B5CF6 0%, transparent 50%)`,
               transform: 'scale(0.5)'
             }}
        />

        <div className="relative h-full w-full flex items-center justify-center p-8">
          {/* Large Stylized Background Letter */}
          <div className="absolute left-6 bottom-0 text-[10rem] sm:text-[14rem] font-bold tracking-tighter text-white/[0.02] transition-all duration-1000 group-hover:text-white/[0.05] group-hover:translate-x-4 leading-none select-none z-0">
            {project.title.charAt(0)}
          </div>

          {/* Project Tagline/Title in Header */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20 mb-3 block transform transition-transform duration-700 group-hover:-translate-y-1">
              {project.category}
            </span>
            <div className="h-px w-8 bg-white/10 mb-4 transform transition-all duration-700 group-hover:w-16 group-hover:bg-[#8B5CF6]/40" />
            <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-white/10 group-hover:text-white/40 transition-colors duration-700">
              {project.title}
            </span>
          </div>
        </div>

        {/* Category Badge - Top Right */}
        <div className="absolute right-6 top-6 sm:right-8 sm:top-8 z-20">
          <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 font-medium bg-white/[0.03] backdrop-blur-md px-3 py-1 rounded-full border border-white/10 transition-colors group-hover:border-white/20 group-hover:text-white/80">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8 relative z-30 border-t border-white/[0.03]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-xs font-mono tracking-widest text-white/40">
                {project.year}
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <h3
              className={cn(
                "font-normal tracking-tight text-white/90 group-hover:text-white transition-colors duration-500",
                featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"
              )}
            >
              {project.title}
            </h3>
          </div>
          <Link
            href={project.href}
            className="group/link flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full bg-white/[0.02] text-white/40 border border-white/[0.04] backdrop-blur-md transition-all duration-500 hover:bg-[#8B5CF6]/70 hover:text-white hover:scale-105"
            aria-label={`View ${project.title}`}
          >
            <ArrowUpRight className="size-5 transition-transform duration-500 group-hover/link:rotate-45" />
          </Link>
        </div>

        <p className="mt-6 flex-1 text-sm font-light leading-relaxed text-white/40 sm:text-base max-w-xl group-hover:text-white/60 transition-colors duration-500">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/[0.03]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/[0.02] border border-white/[0.04] px-4 py-1.5 text-[11px] font-medium tracking-wide text-white/50 transition-all duration-500 group-hover:bg-white/[0.06] group-hover:text-white/80 group-hover:border-white/[0.08]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}
