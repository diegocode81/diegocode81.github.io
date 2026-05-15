import { projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeader from "./SectionHeader.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <SectionHeader eyebrow="Featured Projects" title="Selected work across automation, API, mobile, and AI-assisted QA." />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
