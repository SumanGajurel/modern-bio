"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Texts that rotate in the greeting bubble
const MESSAGES = [
  "Hi — Namaste! I&apos;m Suman Gajurel.",
  "Thank you for visiting my website.",
  "I hope you enjoy exploring my work.",
];

// Place your photo at: /public/images/me.jpg
// Then reference it here. You can change the filename if you want.
const AVATAR_SRC = "/images/me.png";

export default function AvatarIntro() {
  const [i, setI] = useState(0);
  const spokenOnce = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Rotate messages every 3.5s
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setI((p) => (p + 1) % MESSAGES.length);
    }, 3500);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  // Speak the FIRST message automatically ONCE (if supported & allowed)
  useEffect(() => {
    if (spokenOnce.current) return;
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const t = setTimeout(() => {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(MESSAGES[0]);
        u.lang = "en-US"; // change to "ne-NP" if you want Nepali (browser/OS dependent)
        u.rate = 1.0;
        u.pitch = 1.0;
        window.speechSynthesis.speak(u);
        spokenOnce.current = true;
      } catch {
        // ignore if blocked by autoplay policy
      }
    }, 100);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 md:flex-row md:items-center md:gap-6">
      {/* Circular portrait with subtle ring */}
      <div className="relative shrink-0 rounded-full p-[6px] shadow-2xl bg-white">
        <div className="h-[180px] w-[180px] overflow-hidden rounded-full ring-8 ring-white/70 bg-white">
          <Image
            src={AVATAR_SRC}
            alt="Portrait of Suman Gajurel"
            width={180}
            height={180}
            className="h-[180px] w-[180px] object-cover"
            priority
          />
        </div>
      </div>

      {/* Greeting bubble */}
      <div className="relative w-full rounded-2xl bg-white/90 p-4 text-slate-800 shadow-lg backdrop-blur dark:bg-white/10 dark:text-white">
        <p key={i} className="text-base md:text-lg animate-fade">
          {MESSAGES[i]}
        </p>
        <div className="absolute -left-2 top-8 hidden h-4 w-4 rotate-45 bg-white/90 shadow-sm dark:bg-white/10 md:block" />
        <style jsx>{`
          .animate-fade { animation: fade 480ms ease-in-out; }
          @keyframes fade {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
}
