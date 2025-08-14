"use client";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.title} className="rounded-2xl border p-6 bg-white dark:bg-slate-900/70 backdrop-blur">
            <h3 className="font-medium">{p.title}</h3>
            <p className="mt-1 text-xs text-slate-500">{p.period}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{p.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
