import { ArrowRight, Layers3 } from "lucide-react";

const detailItems = [
  ["Problem", "problem"],
  ["Solution", "solution"],
  ["Outcome", "outcome"],
];

export default function ProjectCard({ project }) {
  return (
    <article className="card group flex h-full flex-col">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal transition group-hover:bg-signal group-hover:text-white">
          <Layers3 size={22} />
        </div>
        <a
          href={project.href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-signal transition hover:text-ink"
        >
          {project.ctaLabel}
          <ArrowRight size={16} />
        </a>
      </div>

      <h3 className="text-xl font-semibold text-ink">{project.title}</h3>

      <div className="mt-5 grid gap-4">
        {detailItems.map(([label, key]) => (
          <div key={label} className="rounded-md border border-line bg-slate-50 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-quality">{label}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{project[key]}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-quality">Tech Stack</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="tech-pill">
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
