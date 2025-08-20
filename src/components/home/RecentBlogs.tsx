"use client";
import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";

type RecentBlogsProps = {
  className?: string;
  /** Tailwind grid columns, e.g. "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" */
  cols?: string;
  /** Number of posts to show */
  limit?: number;
  /** Where "View all" should point to */
  basePath?: string; // e.g. "/about/personal/blog"
};

export default function RecentBlogs({
  className = "",
  cols = "grid-cols-1 md:grid-cols-3",
  limit = 3,
  basePath = "/blog",
}: RecentBlogsProps) {
  const items = posts.slice(0, limit);

  return (
    <section id="recent-blogs" className={`max-w-6xl mx-auto px-6 py-16 ${className}`}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Recent Blog Posts</h2>
        <Link href={basePath} className="text-sm underline">
          View all
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">No posts yet — check back soon.</p>
      ) : (
        <div className={`mt-6 grid ${cols} gap-6`}>
          {items.map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-2xl border bg-white dark:bg-slate-900/70 backdrop-blur"
            >
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title || "Blog cover"}
                  width={800}
                  height={600}
                  className="h-40 w-full object-cover"
                />
              ) : null}
              <div className="p-5">
                {p.date ? <div className="text-xs text-slate-500">{p.date}</div> : null}
                <div className="mt-1 font-medium">{p.title}</div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
