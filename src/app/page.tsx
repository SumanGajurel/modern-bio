"use client";

import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import RecentBlogs from "@/components/home/RecentBlogs";
import SocialStrip from "@/components/home/SocialStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <Hero />
      <Projects />
      <RecentBlogs />
      <SocialStrip />
    </main>
  );
}
