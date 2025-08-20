// src/components/navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/professional", label: "Professional" },
    { href: "/personal", label: "Personal" },
    { href: "/blog", label: "Blog" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Me" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
  <div className="mx-auto flex h-15 max-w-6xl items-center justify-between px-6 text-white">
    {/* Name / Brand */}
    <Link href="/" className="font-semibold tracking-wide text-2xl md:text-3xl">
      Suman&nbsp;Gajurel
    </Link>

    {/* Nav links */}
    <nav className="flex items-center gap-6">
      {[
        { href: "/", label: "Home" },
        { href: "/professional", label: "Professional" },
        { href: "/personal", label: "Personal" },
        { href: "/blog", label: "Blog" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact Me" },
      ].map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-lg md:text-xl font-medium opacity-95 hover:opacity-100"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  </div>
</header>
  );
}
