// src/app/page.tsx
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import RecentBlogs from "@/components/home/RecentBlogs";
import SocialStrip from "@/components/home/SocialStrip";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Shared container */}
      <section className="mx-auto max-w-6xl px-6 mt-16 lg:mt-24 space-y-16">

        {/* Projects — same layout as blog */}
        <div>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <Link href="/professional#projects" className="text-sm underline">View all</Link>
          </div>

          {/* 3-card grid (no scroll). Adjust limit if you want more */}
          <Projects className="mt-6"
                    cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    limit={3} />
          {/* If your Projects component doesn't accept cols/limit:
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Projects />
          </div>
          */}
        </div>

        {/* Recent Blog Posts — same grid */}
<div>
  <RecentBlogs
    className="mt-6"
    cols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    limit={3}
  />
</div>
      </section>

      <SocialStrip />
    </main>
  );
}

