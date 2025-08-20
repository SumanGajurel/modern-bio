"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** Keep DOM order in sync with these IDs */
const TABS = [
  { id: "projects",      label: "Projects" },
  { id: "research",      label: "Research" },
  { id: "publications",  label: "Papers" },
  { id: "talks",         label: "Talks" },
  { id: "awards",        label: "Awards" },
  { id: "media",         label: "Media" },
  { id: "resume",        label: "Resume" },
];

export default function ProTabs() {
  const [active, setActive] = useState<string>(TABS[0].id);
  const [headerH, setHeaderH] = useState<number>(64);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Measure navbar height
  useLayoutEffect(() => {
    const measureHeader = () => {
      const h = document.querySelector("header") as HTMLElement | null;
      setHeaderH(h?.offsetHeight ?? 64);
    };
    measureHeader();
    window.addEventListener("resize", measureHeader);
    window.addEventListener("load", measureHeader);
    return () => {
      window.removeEventListener("resize", measureHeader);
      window.removeEventListener("load", measureHeader);
    };
  }, []);

  const getEffectiveOffset = () => {
    const tabsH = wrapRef.current?.offsetHeight ?? 0;
    const rect = wrapRef.current?.getBoundingClientRect();
    const pinned = rect ? rect.top <= headerH : true;
    return headerH + (pinned ? tabsH : 0);
  };

  useEffect(() => {
    let sections: HTMLElement[] = [];

    const collect = () => {
      sections = TABS.map(t => document.getElementById(t.id))
        .filter((el): el is HTMLElement => !!el);
    };

    const pickNearest = () => {
      if (!sections.length) return;

      // If at the very bottom, force last tab
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (nearBottom) {
        const lastId = sections[sections.length - 1].id;
        if (active !== lastId) setActive(lastId);
        return;
      }

      const offsetY = getEffectiveOffset();

      // Pick the section whose top is closest to the sticky line
      let bestId = sections[0].id;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const s of sections) {
        const top = s.getBoundingClientRect().top; // viewport coords
        const dist = Math.abs(top - offsetY);
        if (dist < bestDist) {
          bestDist = dist;
          bestId = s.id;
        }
      }
      if (bestId !== active) setActive(bestId);
    };

    const recalc = () => {
      collect();
      pickNearest();
    };

    recalc();

    const onScroll = () => requestAnimationFrame(pickNearest);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", recalc);
    window.addEventListener("load", recalc);

    const ro = new ResizeObserver(recalc);
    ro.observe(document.body);

    const mo = new MutationObserver(recalc);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recalc);
      window.removeEventListener("load", recalc);
      ro.disconnect();
      mo.disconnect();
    };
  }, [headerH, active]);

  const onClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - getEffectiveOffset();
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  const base =
    "px-4 py-2 rounded-lg text-sm md:text-base font-medium text-center whitespace-nowrap transition";

  return (
    <div
      ref={wrapRef}
      className="sticky z-40 mt-4 border-b bg-teal-50/80 px-1 py-3 backdrop-blur dark:bg-teal-900/40 dark:border-teal-800"
      style={{ top: headerH }} // sits right below measured navbar
    >
      <div className="mx-auto max-w-6xl">
        <div className="no-scrollbar flex flex-nowrap items-stretch overflow-x-auto rounded-2xl bg-teal-100/70 p-2 ring-1 ring-teal-200 dark:bg-teal-900/30 dark:ring-teal-800">
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <a
                key={t.id}
                href={`#${t.id}`}
                onClick={onClick(t.id)}
                aria-current={isActive ? "page" : undefined}
                className={
                  "flex-none min-w-[110px] " +
                  base +
                  (isActive
                    ? " bg-white text-teal-900 shadow ring-1 ring-white/60 dark:bg-teal-950 dark:text-white"
                    : " text-teal-800 hover:bg-white/60 ring-1 ring-transparent dark:text-teal-100 dark:hover:bg-teal-800/50")
                }
              >
                {t.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
