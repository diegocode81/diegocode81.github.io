import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio.js";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3 font-semibold text-ink">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
            DM
          </span>
          <span className="hidden text-sm sm:inline">Diego Molina</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-steel md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-signal">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="icon-link"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="icon-link"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
