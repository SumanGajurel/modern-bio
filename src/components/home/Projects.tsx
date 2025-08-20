// src/components/home/Projects.tsx
"use client";
import { projects } from "@/data/projects";

type Props = {
  className?: string;
  /** Tailwind grid cols classes for this list when embedded in layouts */
  cols?: string;               // e.g. "grid-cols-1" or "grid-cols-2"
  limit?: number;              // show only first N projects
};

export default function Projects({ className = "", cols = "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3", limit }: Props) {
  const items = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <div className={`grid ${cols} gap-6 ${className}`}>
      {items.map((p) => (
        <div
          key={p.title}
          className="h-full rounded-2xl border p-6 bg-white dark:bg-slate-900/70"
        >
          <h3 className="font-medium">{p.title}</h3>
          <p className="mt-1 text-xs text-slate-500">{p.period}</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{p.blurb}</p>
        </div>
      ))}
    </div>
  );
}
