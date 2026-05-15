import SectionHeader from "./SectionHeader.jsx";
import { focusAreas, profile } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-shell">
        <SectionHeader eyebrow="About Me" title="Quality strategy built for delivery." />
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-line bg-white p-7 shadow-sm">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="compact-card">
            <h3 className="text-lg font-semibold text-ink">Focus Areas</h3>
            <div className="mt-5 grid gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="chip">
                  {area}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
