"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ModeSwitch() {
  const path = usePathname() || "/";
  const isPro = path.startsWith("/professional");
  const base =
    "px-3 py-1.5 rounded-lg text-sm font-medium transition";
  return (
    <div className="inline-flex gap-1 rounded-xl bg-slate-100 p-1 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
      <Link
        href="/professional"
        className={
          base +
          (isPro
            ? " bg-white text-slate-900 shadow dark:bg-slate-900 dark:text-white"
            : " text-slate-700 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-slate-700")
        }
      >
        Professional
      </Link>
      <Link
        href="/personal"
        className={
          base +
          (!isPro
            ? " bg-white text-slate-900 shadow dark:bg-slate-900 dark:text-white"
            : " text-slate-700 hover:bg-white/60 dark:text-slate-300 dark:hover:bg-slate-700")
        }
      >
        Personal
      </Link>
    </div>
  );
}
