"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";
import LOGO from "@/public/LOGO.svg";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/80 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.5)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center  text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-80"
        >
          <Image src={LOGO} alt="LOGO" width={32} height={32} />
        </Link>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-[#8B5CF6] px-4 py-2 text-[13px] font-medium text-white shadow-[0_4px_12px_-4px_rgba(139,92,246,0.4)] transition-all hover:bg-[#7C3AED]"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
