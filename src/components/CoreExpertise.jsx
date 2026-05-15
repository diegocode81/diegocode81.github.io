import { Bot, ClipboardCheck, GitBranch, Smartphone } from "lucide-react";
import { expertise } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

const icons = [ClipboardCheck, GitBranch, Smartphone, Bot];

export default function CoreExpertise() {
  return (
    <section id="expertise" className="section bg-white">
      <div className="section-shell">
        <SectionHeader eyebrow="Core Expertise" title="Focused areas of quality engineering value." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, index) => {
            const Icon = icons[index];
            return (
              <article key={item.title} className="card">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold leading-7 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
