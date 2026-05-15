import { Layers3 } from "lucide-react";
import { projects } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <SectionHeader eyebrow="Featured Projects" title="Selected work across automation, API, mobile, and AI-assisted QA." />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card group">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal transition group-hover:bg-signal group-hover:text-white">
                <Layers3 size={22} />
              </div>
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span key={item} className="tech-pill">
                    {item}
                  </span>
                ))}
              </div>
              <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-signal transition hover:text-ink">
                View details
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
