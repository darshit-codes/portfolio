import { Panel } from "@/components/portfolio/panel";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SectionShell } from "@/components/portfolio/section-shell";
import { experience } from "@/lib/portfolio-data";

export default function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <SectionHeader
        label="Experience"
        title="Professional journey"
        description="Where I've shipped models and software."
      />

      <div className="space-y-4">
        {experience.map((item, i) => (
          <Reveal key={item.company} delay={i * 0.08}>
            <Panel className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="shrink-0 space-y-1 sm:w-48">
                  <p className="text-sm font-medium text-[#8B5CF6]">
                    {item.period}
                  </p>
                  <p className="text-lg font-semibold text-white">
                    {item.company}
                  </p>
                </div>
                <div className="flex-1 border-t border-white/[0.06] pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-8">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {item.role}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B7280] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
