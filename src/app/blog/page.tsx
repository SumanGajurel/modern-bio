import Image from "next/image";
import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = { title: "Blog — Suman Gajurel" };

export default function BlogPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map(p => (
          <article key={p.slug} className="overflow-hidden rounded-2xl border bg-white dark:bg-slate-900/70 backdrop-blur">
            <Image src={p.image} alt="" width={800} height={600} className="h-44 w-full object-cover" />
            <div className="p-5">
              <div className="text-xs text-slate-500">{p.date}</div>
              <Link href="#" className="mt-1 font-medium block hover:underline">{p.title}</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
