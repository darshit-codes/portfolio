import Link from "next/link";
import { ArrowUpRight, Code2, Globe, Mail, Network } from "lucide-react";

import { Panel } from "@/components/portfolio/panel";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeader } from "@/components/portfolio/section-header";
import { SectionShell } from "@/components/portfolio/section-shell";
import { Button } from "@/components/ui/button";
import { contact, site } from "@/lib/portfolio-data";
import Image from "next/image";
import LinkedIN from "@/public/icons/linkedin.svg"
import Github from "@/public/icons/github.svg"



export default function ContactSection() {
  return (
    <SectionShell id="contact">
      <Reveal>
        <Panel className="relative overflow-hidden p-8 sm:p-12 md:p-16">
          <div
            className="pointer-events-none absolute -top-24 right-0 size-48 rounded-full bg-[#8B5CF6]/15 blur-[60px]"
            aria-hidden
          />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-[11px] font-medium tracking-[0.22em] text-[#8B5CF6] uppercase">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1] font" style={{ fontFamily: "var(--font-caveat), cursive" }}>
                {contact.headline}
              </h2>
              <p className="max-w-md text-base leading-relaxed text-[#6B7280]">
                {contact.subtext}
              </p>
              <div

                className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
              >
              </div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href={"https://github.com/Darshit02"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-all hover:border-[#8B5CF6]/30 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-white/85">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition-all group-hover:bg-white/20">
                      <Image
                      src={Github}
                      alt="github"
                      height={18}
                      width={18}
                      />
                    </span>
                    Git Hub
                  </span>
                  <ArrowUpRight className="size-4 text-[#6B7280] transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-white" />
                </Link>
              </li>
              <li>
                <Link
                  href={"www.linkedin.com/in/darshit-mistry"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4 transition-all hover:border-[#8B5CF6]/30 hover:bg-white/[0.06]"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-white/85">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white transition-all group-hover:bg-white/20">
                      <Image
                      src={LinkedIN}
                      alt="linked in"
                      height={18}
                      width={18}
                      />
                    </span>
                    Linked In
                  </span>
                  <ArrowUpRight className="size-4 text-[#6B7280] transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-white" />
                </Link>
              </li>
              
            </ul>
          </div>
        </Panel>
      </Reveal>
    </SectionShell>
  );
}
