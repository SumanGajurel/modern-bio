// src/components/home/Projects.tsx
type Props = {
  id?: string;            // anchor id for tabs/scroll
  title?: string;         // heading text
  className?: string;
};

export default function Projects({
  id = "projects",
  title = "Projects",
  className = "",
}: Props) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* ... your cards ... */}
      </div>
    </section>
  );
}
