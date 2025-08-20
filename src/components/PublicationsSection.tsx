"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import publications from "@/data/publications";

export default function PublicationsSection() {
  return (
    <section id="publications" className="scroll-mt-24 py-12 min-h-[40vh]">
      <h2 className="text-2xl font-semibold">Papers</h2>

      <ul className="mt-6 space-y-4">
        {publications.map((p, i) => (
          <li
            key={i}
            className="rounded-2xl border p-5 bg-white/60 dark:bg-slate-900/40"
          >
            <div className="font-medium">{p.title}</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              {p.authors} · <i>{p.venue}</i> ({p.year})
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <Badge key={t} variant="secondary" className="bg-slate-100 dark:bg-slate-800">
                  {t}
                </Badge>
              ))}
              {p.link && (
                <Link href={p.link} target="_blank" className="text-sm underline">
                  View
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
