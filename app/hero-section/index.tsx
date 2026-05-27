import { FloatingRoleTags, HERO_ROLE_TAGS } from "@/components/FloatingRoleTags";
import Silk from "@/components/Silk";

import { HeroContent } from "./hero-content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate h-[min(92vh,900px)] w-full  overflow-hidden rounded-[1.75rem] border border-white/[0.08] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)]"
    >
      {/* Silk background */}
      <div className="absolute inset-0 z-0">
        <Silk
          className="size-full"
          speed={4}
          scale={1.15}
          color="#8B5CF6"
          noiseIntensity={0.8}
          rotation={0.12}
        />
      </div>

      {/* Depth & readability overlays — silk stays visible */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_80%_70%_at_20%_40%,rgba(139,92,246,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-black/75 via-black/45 to-black/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/60 via-transparent to-black/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 opacity-[0.35] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-1 ring-1 ring-inset ring-white/10"
        aria-hidden
      />

      <FloatingRoleTags roles={HERO_ROLE_TAGS} fullBleed />
      <HeroContent />
    </section>
  );
}
