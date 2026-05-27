import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Layout, Zap, CheckCircle2, Target, ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/portfolio/reveal";
import { ArchitectureDiagram } from "@/components/portfolio/architecture-diagram";
import Image from "next/image";
import github from "@/public/icons/github.svg";



export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  // Cast details to a safe type if they exist
  const details = "details" in project ? project.details as any : null;

  return (
    <main className="min-h-screen bg-[#020202] text-white selection:bg-white/20 pb-32">
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:px-12 sm:py-32">

        {/* Navigation */}
        <Reveal delay={0.1}>
          <nav className="mb-20 sm:mb-32 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="group flex items-center gap-3 text-sm font-medium tracking-wide text-white/50 transition-colors hover:text-white"
            >
              <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md transition-transform group-hover:-translate-x-1">
                <ArrowLeft className="size-4" />
              </div>
              Back to Projects
            </Link>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-white/30">
              <span>Work</span>
              <ChevronRight className="size-3" />
              <span className="text-white/70">{project.category}</span>
            </div>
          </nav>
        </Reveal>

        {/* Hero Section */}
        <header className="mb-20">
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8B5CF6]">
                {project.year}
              </span>
              <span className="h-px w-20 bg-gradient-to-r from-[#8B5CF6]/50 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-10">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-normal tracking-tighter text-white/90 leading-[1.05] max-w-5xl" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                {project.title}
              </h1>
              
              {"githubUrl" in project && project.githubUrl && (
                <a 
                  href={project.githubUrl as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/10 text-white/70 transition-all hover:bg-white/10 hover:text-white hover:border-white/20 w-fit shrink-0"
                >
                  <Image src={github} alt="GitHub" width={20} height={20} />
                  <span className="text-sm font-medium tracking-wide">View on GitHub</span>
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/40 max-w-4xl mb-16">
              {project.description}
            </p>
          </Reveal>

          {/* Metadata Grid */}
          <Reveal delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
              <div>
                <h4 className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">Category</h4>
                <p className="text-white/80 font-medium">{project.category}</p>
              </div>
              {details?.role && (
                <div>
                  <h4 className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">Role</h4>
                  <p className="text-white/80 font-medium">{details.role}</p>
                </div>
              )}
              {details?.timeline && (
                <div>
                  <h4 className="text-white/30 text-xs font-mono uppercase tracking-widest mb-2">Timeline</h4>
                  <p className="text-white/80 font-medium">{details.timeline}</p>
                </div>
              )}
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-white/30 text-xs font-mono uppercase tracking-widest mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-white/60 bg-white/[0.03] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </header>

        {/* Visual Showcase Header */}
        <Reveal delay={0.6} className="mb-24 sm:mb-40">
          <div className="relative aspect-[16/10] sm:aspect-[16/8] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] flex items-center justify-center group">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-20" 
                 style={{ 
                   backgroundImage: `linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)`,
                   backgroundSize: '40px 40px' 
                 }} 
            />
            
            {/* Floating category badge */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
              <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">
                {project.category}
              </span>
            </div>

            {/* Large Stylized Title */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <span className="text-[8px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-white/30 mb-4 sm:mb-6 block">
                Project Showcase
              </span>
              <h2 className="text-5xl sm:text-9xl md:text-[12rem] font-bold tracking-tighter leading-none select-none">
                <span className="inline-block bg-gradient-to-b from-white/20 via-white/5 to-transparent bg-clip-text text-transparent transform transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                  {project.title}
                </span>
              </h2>
              <div className="absolute inset-0 blur-[60px] sm:blur-[100px] bg-[#8B5CF6]/10 rounded-full scale-150 -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 flex items-center gap-3 sm:gap-4">
              <div className="size-1 sm:size-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
              <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-white/20">System Active</span>
            </div>
          </div>
        </Reveal>

        {/* Content Details */}
        {details && (
          <div className="space-y-24 sm:space-y-40">
            {/* Architecture Section - Moved to top and made more prominent */}
            {details.architecture && (
              <Reveal delay={0.1}>
                <section>
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                      <h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-white/90 mb-6" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                        System Architecture
                      </h2>
                      <p className="text-lg text-white/40 font-light leading-relaxed">
                        A high-level overview of the technical components and data flow that power {project.title}.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-white/20 uppercase bg-white/[0.02] px-6 py-3 rounded-full border border-white/5">
                      <div className="size-2 rounded-full bg-[#8B5CF6] animate-pulse" />
                      Interactive Diagram
                    </div>
                  </div>

                  <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-4 sm:p-8 backdrop-blur-md overflow-hidden relative group">
                    {/* Background glow */}
                    <div className="absolute -top-24 -right-24 size-96 bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 size-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                    {details.diagram ? (
                      <ArchitectureDiagram 
                        nodes={details.diagram.nodes} 
                        edges={details.diagram.edges} 
                      />
                    ) : (
                      <div className="p-8 rounded-[2rem] bg-black/40 border border-white/5">
                        <pre className="text-white/60 text-xs leading-relaxed font-mono whitespace-pre overflow-x-auto">
                          {details.architecture}
                        </pre>
                      </div>
                    )}
                  </div>
                </section>
              </Reveal>
            )}

            <div className="grid gap-16 md:grid-cols-12">
              {/* Main Content Column */}
              <div className="md:col-span-12 lg:col-span-12 space-y-24">
                {/* Approach */}
                {details.approach && (
                  <Reveal delay={0.1}>
                    <section className="max-w-4xl">
                      <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white/90 mb-8 flex items-center gap-4" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                        <Layout className="size-8 text-white/20" />
                        The Approach
                      </h2>
                      <div className="text-lg text-white/50 font-light leading-relaxed space-y-6" >
                        <p className="leading-relaxed">{details.approach}</p>
                      </div>
                    </section>
                  </Reveal>
                )}

                {/* Challenges */}
                {details.challenges && details.challenges.length > 0 && (
                  <Reveal delay={0.2}>
                    <section className="max-w-5xl">
                      <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-white/90 mb-8 flex items-center gap-4" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                        <Target className="size-8 text-white/20" />
                        Key Challenges
                      </h2>
                      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {details.challenges.map((challenge: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] transition-colors hover:bg-white/[0.04]">
                            <Zap className="size-5 shrink-0 text-[#8B5CF6] mt-1" />
                            <span className="text-base text-white/60 font-light leading-relaxed">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </Reveal>
                )}
              </div>

              {/* Sidebar Column */}
              <aside className="md:col-span-12 lg:col-span-12">
                {/* Impact Metrics */}
                 {details.impact && (
                   <Reveal delay={0.3}>
                     <div className="rounded-[2.5rem] border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.02] p-8 sm:p-10 backdrop-blur-md relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                      <h3 className="text-xs font-mono tracking-widest text-[#8B5CF6] uppercase mb-6 sm:mb-8 flex items-center gap-2">
                        <CheckCircle2 className="size-4" />
                        Impact & Results
                      </h3>
                      <p className="text-white/80 text-lg sm:text-xl leading-relaxed font-light relative z-10">
                        {details.impact}
                      </p>
                    </div>
                  </Reveal>
                )}
              </aside>
            </div>
          </div>
        )}

        {/* Call To Action */}
        <Reveal delay={0.1} className="mt-32 sm:mt-48 pt-20 border-t border-white/5 flex flex-col items-center justify-center text-center">
          <Link
            href="/#contact"
            className="group relative inline-flex flex-col items-center"
          >
            <div className="absolute inset-0 bg-[#8B5CF6] opacity-0 blur-[120px] transition-opacity duration-1000 group-hover:opacity-20" />

            <h2 className="text-3xl sm:text-6xl md:text-8xl font-normal tracking-tighter text-white/50 group-hover:text-white transition-colors duration-700 relative z-10 mb-8 max-w-4xl leading-[1.1]">
              Let's build something <br className="hidden sm:block" /> intelligent together.
            </h2>

            <div className="flex items-center gap-3 text-white opacity-60 group-hover:opacity-100 group-hover:gap-6 transition-all duration-500 ease-out relative z-10 bg-white/[0.03] px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/10   shadow-2xl">
              <span className="text-xs sm:text-sm font-medium tracking-[0.1em] uppercase">Get in touch</span>
              <ArrowRight className="size-4 sm:size-5" />
            </div>
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
