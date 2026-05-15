import { CheckCircle2 } from "lucide-react";
import { experienceHighlights } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function ExperienceHighlights() {
  return (
    <section id="experience" className="section bg-white">
      <div className="section-shell">
        <SectionHeader eyebrow="Experience Highlights" title="Practical impact in secure and regulated delivery contexts." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {experienceHighlights.map((highlight) => (
            <article key={highlight} className="compact-card">
              <div className="flex gap-3">
                <CheckCircle2 className="mt-1 shrink-0 text-quality" size={19} />
                <p className="text-sm leading-6 text-slate-600">{highlight}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
