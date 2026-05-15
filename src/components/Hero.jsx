import { ArrowDown, Github, Linkedin } from "lucide-react";
import { heroTags, profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section id="home" className="border-b border-line bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-line bg-mist px-4 py-2 text-sm font-semibold text-signal">
            Quality Engineering, Automation, and AI-assisted QA
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-steel sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {profile.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-ink">
            {profile.heroCta}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="secondary-button">
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="secondary-button">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-line bg-mist p-4 shadow-soft">
            <div className="rounded-md border border-line bg-white p-5">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Quality Engineering Focus</p>
                  <p className="text-xs text-slate-500">Architecture, automation, and delivery confidence</p>
                </div>
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink text-xl font-bold text-white shadow-soft">
                  DM
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {heroTags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  ["API", "Backend Quality"],
                  ["Mobile", "Android Automation"],
                  ["AI", "Secure QA Workflows"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md border border-line bg-white p-3">
                    <p className="text-base font-bold text-ink">{value}</p>
                    <p className="text-xs text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
