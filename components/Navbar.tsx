"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/architecture", label: "Architecture" },
  { href: "/sre", label: "SRE" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-sky-500 via-emerald-400 to-violet-500" />
          <span className="text-sm font-semibold tracking-wide text-slate-100">
            Cloud Architect
          </span>
        </Link>
        <div className="flex gap-4 text-xs font-medium">
          {links.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1 transition ${
                  active
                    ? "bg-sky-500/20 text-sky-300"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-slate-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
