import { skills } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-shell">
        <SectionHeader eyebrow="Technical Skills" title="Capabilities grouped for fast technical screening." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="card">
              <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
