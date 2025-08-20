// src/components/home/ProjectsHomeBlock.tsx
"use client";

import { projects } from "@/data/projects";

export default function ProjectsHomeBlock() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>

      {/* Horizontal row (one line) with scroll */}
      <div
        className="-mx-6 mt-6 overflow-x-auto overflow-y-hidden py-1"
        style={{ scrollbarWidth: "thin" }} // Firefox (optional)
      >
        <div className="px-6 flex gap-4 snap-x snap-mandatory">
          {projects.map((p) => (
            <article
              key={p.title}
              className="snap-start min-w-[340px] md:min-w-[420px] rounded-2xl border p-6 bg-white/80 backdrop-blur
                         dark:bg-slate-900/70"
            >
              <h3 className="font-medium">{p.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{p.period}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{p.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
