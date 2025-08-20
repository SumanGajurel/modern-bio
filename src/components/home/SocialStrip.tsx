"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

// TODO: set these to YOUR handles
const TWITTER_HANDLE = "soil_suman";
const LINKEDIN_HANDLE = "suman-gajurel-phd-41006383";
const INSTAGRAM_HANDLE = "Suman Gajurel"; // or your IG (or remove IG section)

export default function SocialStrip() {
  const igThumbs = [
    "/images/ig/1.jpg",
    "/images/ig/2.jpg",
    "/images/ig/3.jpg",
    "/images/ig/4.jpg",
    "/images/ig/5.jpg",
    "/images/ig/6.jpg",
  ];

  return (
    <section className="mt-16 bg-teal-800 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 md:grid-cols-3">
        {/* Column 1: Connect on Social */}
        <div>
          <h3 className="text-lg font-semibold">Connect on Social</h3>

          <div className="mt-5 flex items-center gap-4">
            <Link
              href={`https://twitter.com/${TWITTER_HANDLE}`}
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition hover:bg-white/20"
            >
              <Twitter className="h-4 w-4" />
            </Link>

            <Link
              href={`https://www.linkedin.com/in/${LINKEDIN_HANDLE}/`}
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25 transition hover:bg-white/20"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            <Link
              href="https://scholar.google.com.au/citations?user=g6l6dkoAAAAJ&hl=en"
              target="_blank"
              className="block rounded-md border border-white/40 px-4 py-2 text-center text-sm font-semibold transition hover:bg-white hover:text-teal-900"
            >
              GOOGLE SCHOLAR
            </Link>
            <Link
              href="https://orcid.org/0009-0001-1988-493X"
              target="_blank"
              className="block rounded-md border border-white/40 px-4 py-2 text-center text-sm font-semibold transition hover:bg-white hover:text-teal-900"
            >
              ORCID
            </Link>
          </div>
        </div>

        {/* Column 2: Latest Tweets */}
        <div>
          <h3 className="text-lg font-semibold">Latest Tweets</h3>
          <div className="mt-4 rounded-lg bg-white/5 p-2">
            <a
              className="twitter-timeline"
              data-theme="dark"
              data-dnt="true"
              data-height="260"
              href={`https://twitter.com/${TWITTER_HANDLE}`}
            >
              X 
            </a>
          </div>
          <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
        </div>

        {/* Column 3: Latest Instagram Posts */}
        <div>
          <h3 className="text-lg font-semibold">Latest Instagram Posts</h3>

          <div className="mt-4 flex items-center gap-3 text-sm">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25">
              <Instagram className="h-4 w-4" />
            </div>
            <Link
              className="underline"
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
            >
              {INSTAGRAM_HANDLE}
            </Link>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {igThumbs.map((src) => (
              <Link
                key={src}
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
                target="_blank"
                className="block overflow-hidden rounded-md ring-1 ring-white/20"
              >
                <Image
                  src={src}
                  alt=""
                  width={200}
                  height={200}
                  className="h-20 w-full object-cover transition duration-200 hover:scale-105"
                />
              </Link>
            ))}
          </div>

          <div className="mt-4">
            <Link
              href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-white/25 transition hover:bg-white hover:text-teal-900"
            >
              Follow on Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
