import Image from "next/image";
import ModeSwitch from "@/components/ModeSwitch";

export const metadata = { title: "Personal — Suman Gajurel" };

export default function PersonalPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Personal</h1>
        <ModeSwitch />
      </div>

      <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold">A bit about me</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Curious, outdoorsy, and happiest when building helpful tools.
            I enjoy hiking, photography, and learning from communities on the land.
          </p>

          <h3 className="mt-6 font-medium">Interests</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 dark:text-slate-300">
            <li>Field trips and soil pit days</li>
            <li>Maps & data viz experiments</li>
            <li>Reading agronomy & ecology</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-4 bg-white/70 dark:bg-slate-900/60">
          <Image src="/images/avatar.png" alt="" width={400} height={400} className="rounded-xl object-cover"/>
        </div>
      </section>
    </main>
  );
}
