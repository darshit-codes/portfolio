import { Panel } from "@/components/portfolio/panel";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SectionShell } from "@/components/portfolio/section-shell";
import { StackCard } from "@/components/portfolio/stack-card";
import { teakstack, techStack } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Icon } from "lucide-react";

export default function TechStackSection() {
  const [ml, software, ops] = techStack;

  return (
    <SectionShell id="stack">
      <SectionHeader
        label="Tech Stack"
        title="What I do & what I use"
        description="AI/ML engineering and software development — end to end."
      />

      {/* Bento grid */}
      <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {ml ? (
          <Reveal className="md:col-span-2 lg:col-span-2">
            <StackCard
              id="ml"
              index="01"
              title={ml.title}
              description={ml.description}
              technologies={ml.technologies}
              featured
            />
          </Reveal>
        ) : null}

        {software ? (
          <Reveal delay={0.06} className="lg:col-span-1">
            <StackCard
              id="software"
              index="02"
              title={software.title}
              description={software.description}
              technologies={software.technologies}
            />
          </Reveal>
        ) : null}

        {ops ? (
          <Reveal delay={0.1} className="md:col-span-1 lg:col-span-1">
            <StackCard
              id="ops"
              index="03"
              title={ops.title}
              description={ops.description}
              technologies={ops.technologies}
            />
          </Reveal>
        ) : null}

        {/* Full toolkit overview */}
        <Reveal delay={0.14} className="md:col-span-2 lg:col-span-2">
          <Panel className="relative overflow-hidden p-6 sm:p-8">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.12),transparent_55%)]"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#8B5CF6] uppercase">
                Complete toolkit
              </p>
              <p className="mt-2 text-sm text-[#6B7280]">
                Technologies across the stack I use to ship production systems.
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {techStack.map((group) => (
                  <div key={group.id}>
                    <h4 className="text-xs font-semibold tracking-wide text-white/80">
                      {group.title}
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {group.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="flex items-center gap-2 text-sm text-[#6B7280]"
                        >
                          <span className="size-1 shrink-0 rounded-full bg-[#8B5CF6]" />
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </Reveal>
      </div>

      {/* Marquee */}
      <Reveal delay={0.18} className="mt-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-black to-transparent" />
          <div className="flex w-max animate-marquee gap-3 px-4 hover:[animation-play-state:paused]">
            {teakstack.map((tech, i) => (
              <span
                key={`${tech.icon}-${i}`}
                className={cn(
                  "flex items-center gap-2 shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm font-medium text-[#6B7280] transition-colors hover:border-[#8B5CF6]/30 hover:text-white"
                )}
              >
                <img src={tech.icon} alt="" height={22} width={22} className="mr-2" />
                {tech.tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
