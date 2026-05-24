"use client"
import Hero from "@/app/hero-section";
import AboutSection from "@/app/sections/about";
import ContactSection from "@/app/sections/contact";
import ExperienceSection from "@/app/sections/experience";
import ProjectsSection from "@/app/sections/projects";
import TechStackSection from "@/app/sections/tech-stack";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageAmbient } from "@/components/portfolio/page-ambient";
import CaseStudy from "./sections/case-study";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black font-(family-name:--font-geist-sans) text-white">
      <PageAmbient />
      <SiteHeader />

      <div className="px-10 pb-4 pt-16 py-10">
        <Hero />
      </div>
      <main className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        {/* Hero — Silk section, standalone */}
        {/* Content — same visual language as hero */}
        <AboutSection />
        <CaseStudy/>
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
