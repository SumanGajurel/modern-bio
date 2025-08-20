"use client";

import Image from "next/image";
import Link from "next/link";
import { Award as AwardIcon, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import awards from "@/data/awards";

export default function AwardsSection() {
  return (
    <section id="awards" className="scroll-mt-24 py-12">
      <h2 className="text-2xl font-semibold">Awards</h2>

      <div className="mt-6 space-y-4">
        {awards.map((a, i) => (
          <article
            key={`${a.title}-${i}`}
            className="rounded-2xl border p-5 bg-white/60 dark:bg-slate-900/40 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              {/* left icon / logo */}
              <div className="shrink-0">
                {a.logo ? (
                  <Image
                    src={a.logo}
                    alt={`${a.issuer} logo`}
                    width={48}
                    height={48}
                    className="rounded-md object-contain"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-200">
                    <AwardIcon className="h-6 w-6" />
                  </div>
                )}
              </div>

              {/* content */}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <span className="text-slate-500">· {a.issuer}</span>
                </div>

                {a.description && (
                  <p className="mt-1 text-slate-700 dark:text-slate-300">
                    {a.description}
                  </p>
                )}

                {a.tags && a.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-slate-100 dark:bg-slate-800">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {/* date + link */}
              <div className="text-right shrink-0">
                <div className="text-sm text-slate-500">{a.date}</div>
                {a.link && (
                  <Link
                    href={a.link}
                    target="_blank"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-teal-700 underline hover:opacity-90 dark:text-teal-300"
                  >
                    Details <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Optional footer CTA (delete if not used) */}
      {/* <div className="mt-6">
        <Link href="/uploads/awards.pdf" target="_blank" className="underline">
          Download full awards list (PDF)
        </Link>
      </div> */}
    </section>
  );
}
