"use client";

import CtaTabs from "@/components/home/CtaTabs";
import AvatarIntro from "@/components/home/AvatarIntro";

export default function Hero() {
  return (
    <section
      className="relative isolate flex items-center justify-center"
      style={{ minHeight: "72vh" }} // a bit taller for the larger avatar
    >
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('/images/hero.png')",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 text-center text-white">
        {/* Avatar + talking slideshow */}
        <div className="mt-2">
          <AvatarIntro />
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight">
          Suman Gajurel
        </h1>
        <p className="mt-2 opacity-95">Research Scientist</p>

        <p className="mt-4 text-lg opacity-95">
          I develop practical, data-driven tools for spatially explicit farm
          management by modelling soil–plant–climate interactions.
        </p>

        {/* Tab-style CTAs */}
        <CtaTabs />
      </div>
    </section>
  );
}
