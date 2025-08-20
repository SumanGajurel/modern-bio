import Link from "next/link";
import Projects from "@/components/home/Projects";
import { Button } from "@/components/ui/button";
import ProTabs from "@/components/ProTabs";
import AwardsSection from "@/components/AwardsSection";
import PublicationsSection from "@/components/PublicationsSection";

export const metadata = { title: "Professional — Suman Gajurel" };

export default function ProfessionalPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="text-3xl font-semibold">Professional</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
      </p>

      {/* Tabs (sticky) */}
      <ProTabs />

      {/* PROJECTS */}
      <section id="projects" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Projects /> {/* <- aligned with Research now */}
      </section>

      {/* RESEARCH */}
      <section id="research" className="scroll-mt-24 py-12">
        <h2 className="text-2xl font-semibold">Research</h2>
        <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
          Prediction of PAWC
        </p>
        <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
          <li>• Cost-effective way to predict PAWC (Geoderma, 2024)</li>
          <li>• Future crop yield prediction (Journal, 2025)</li>
        </ul>
        <div className="mt-4 text-sm">
          <Link className="underline" href="/blog">See related posts</Link>
        </div>
      </section>

      {/* PUBLICATIONS (renders its own <section id="publications">) */}
      <PublicationsSection />

      {/* TALKS */}
      <section id="talks" className="scroll-mt-24 py-12 min-h-[40vh]">
        <h2 className="text-2xl font-semibold">Talks</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <div className="text-sm text-slate-500">Aug 1, 2025 — Perth, AU</div>
            <div className="mt-1 font-medium">
              Simulating change in the crop yield due to different Nitrogen rate
            </div>
          </div>
          <div className="rounded-2xl border p-5">
            <div className="text-sm text-slate-500">Jun 29, 2025 — Toowoomba, AU</div>
            <div className="mt-1 font-medium">
              Quantifying wheat yield in the changing weather and climatic pattern
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS (renders its own <section id="awards">) */}
      <AwardsSection />

      {/* MEDIA */}
      <section id="media" className="scroll-mt-24 py-12 min-h-[40vh]">
        <h2 className="text-2xl font-semibold">Media</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-2xl border p-5">
            <div className="text-xs text-slate-500">Example Outlet · 2025</div>
            <div className="mt-1 font-medium">
              Clay and lime incorporation to improve subsoil constraints
            </div>
            <Link href="#" className="text-sm underline">Read more</Link>
          </div>
          <div className="rounded-2xl border p-5">
            <div className="text-xs text-slate-500">Podcast Name · 2025</div>
            <div className="mt-1 font-medium">Data-driven tools in agriculture</div>
            <Link href="#" className="text-sm underline">Listen</Link>
          </div>
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="scroll-mt-24 py-12 min-h-[40vh]">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <p className="mt-3 max-w-3xl text-slate-700 dark:text-slate-300">
          A concise overview of roles, grants, publications, and talks.
        </p>
        <div className="mt-4 flex gap-3">
          <Button asChild>
            <Link href="/uploads/CV.pdf" target="_blank">Download Resume (PDF)</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
