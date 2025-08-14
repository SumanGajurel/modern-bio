"use client";
import Link from "next/link";

export default function CtaTabs() {
  return (
    <div className="mt-6 flex justify-center">
      {/* segmented tab bar */}
      <div className="inline-flex items-center gap-1 rounded-xl bg-teal-50 ring-1 ring-teal-200 px-1 py-1 shadow-sm
                      dark:bg-teal-900/20 dark:ring-teal-800">
        <a
          href="/uploads/CV.pdf"
          target="_blank"
          rel="noopener"
          className="px-4 py-2 rounded-lg text-sm font-medium text-teal-800 hover:bg-teal-100
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500
                     dark:text-teal-100 dark:hover:bg-teal-800/40"
        >
          Download CV
        </a>

        <Link
          href="#projects"
          className="px-4 py-2 rounded-lg text-sm font-medium text-teal-800 hover:bg-teal-100
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500
                     dark:text-teal-100 dark:hover:bg-teal-800/40"
        >
          View Projects
        </Link>

        <Link
          href="/blog"
          className="px-4 py-2 rounded-lg text-sm font-medium text-teal-800 hover:bg-teal-100
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500
                     dark:text-teal-100 dark:hover:bg-teal-800/40"
        >
          Recent Blogs
        </Link>
      </div>
    </div>
  );
}
