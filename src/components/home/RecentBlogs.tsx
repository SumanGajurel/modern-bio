"use client";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";

export default function RecentBlogs() {
  return (
    <section id="recent-blogs" className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Recent Blog Posts</h2>
        <Link href="/blog" className="text-sm underline">View all</Link>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.slice(0, 3).map(p => (
          <article key={p.slug} className="overflow-hidden rounded-2xl border bg-white dark:bg-slate-900/70 backdrop-blur">
            <Image src={p.image} alt="" width={800} height={600} className="h-40 w-full object-cover" />
            <div className="p-5">
              <div className="text-xs text-slate-500">{p.date}</div>
              <div className="mt-1 font-medium">{p.title}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
