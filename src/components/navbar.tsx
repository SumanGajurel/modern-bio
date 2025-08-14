"use client";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/research", label: "Research" },
    { href: "/study", label: "Study Abroad" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact Me" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b bg-sky-50/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-wide">Suman&nbsp;Gajurel</Link>
        <nav className="flex items-center gap-5 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:underline">{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
