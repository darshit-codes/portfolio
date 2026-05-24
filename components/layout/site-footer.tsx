import Link from "next/link";

import { navLinks, site } from "@/lib/portfolio-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-[#6B7280]">
            {site.title} · {site.location}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#6B7280] transition-colors hover:text-[#8B5CF6]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-sm text-[#6B7280]/80">© {year}</p>
      </div>
    </footer>
  );
}
