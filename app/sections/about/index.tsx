import { Code2, MapPin, Route, Target, Users } from "lucide-react";

import { Panel } from "@/components/portfolio/panel";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SectionShell } from "@/components/portfolio/section-shell";
import { about, site } from "@/lib/portfolio-data";
import ProfileCard  from "@/components/ProfileCard"; 
import GlassIcons from '@/components/GlassIcons'



const highlightIcons = {
  target: Target,
  route: Route,
  users: Users,
} as const;

export default function AboutSection() {
  return (
    <SectionShell id="about">
      <SectionHeader
        label="About"
        title="Building at the intersection of ML & code"
        description="Research instinct. Production discipline."
      />

      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Profile card */}
        <div className="lg:col-span-4">
       <ProfileCard
          name="Darshit A. Mistry"
          title="AI/ML & Software Engineer"
          handle="darshit02"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/profile.png"
          showUserInfo={false}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => console.log('Contact clicked')}
          behindGlowColor="rgba(125, 190, 255, 0.67)"
          iconUrl="/mouse-pointer-click.svg"
          behindGlowEnabled={true}
          innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)" behindGlowSize={undefined} miniAvatarUrl={undefined} />
        </div>

        {/* Story */}
        <Reveal delay={0.08} className="lg:col-span-8">
          <Panel className="relative h-full overflow-hidden p-8 sm:p-10">
            <div
              className="pointer-events-none absolute top-0 right-0 h-px w-2/3 bg-linear-to-l from-[#8B5CF6]/50 to-transparent"
              aria-hidden
            />
            <p className="text-xl font-medium leading-snug tracking-tight text-white sm:text-2xl lg:text-[2rem] lg:leading-snug">
              {about.headline.split(" ").map((word, i, arr) => {
                const isAccent =
                  word.toLowerCase().includes("intelligence") ||
                  word.toLowerCase().includes("stack");
                return (
                  <span key={`${word}-${i}`}>
                    {isAccent ? (
                      <span className="bg-linear-to-r from-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {i < arr.length - 1 ? " " : ""}
                  </span>
                );
              })}
            </p>

            <div className="mt-4 space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-[1.75] text-[#6B7280]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {about.interests.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/8 px-3.5 py-1.5 text-xs font-medium text-[#C4B5FD]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Panel>
        </Reveal>
      </div>

      {/* Highlights */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {about.highlights.map((item, i) => {
  const Icon = highlightIcons[item.icon];
  return (
    <Reveal key={item.label} delay={0.1 + i * 0.06}>
      <Panel hover className="group p-6">
        {/* Simple icon rendering - no wrapper needed */}
        <div className="flex size-10 items-center justify-center rounded-xl bg-white/4 text-[#8B5CF6] ring-1 ring-white/6 transition-colors group-hover:bg-[#8B5CF6]/10">
          <Icon className="size-5" strokeWidth={1.5} />
        </div>
        
        <p className="mt-4 text-[10px] font-medium tracking-[0.2em] text-[#8B5CF6] uppercase">
          {item.label}
        </p>
        <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">
          {item.value}
        </p>
      </Panel>
    </Reveal>
  );
})}
      </div>
    </SectionShell>
  );
}
