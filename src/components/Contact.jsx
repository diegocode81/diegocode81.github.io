import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="section-shell">
        <SectionHeader eyebrow="Let’s Connect" title="Let’s connect and build better quality engineering solutions." />
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
            <Linkedin size={19} />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
            <Github size={19} />
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className="contact-link">
            <Mail size={19} />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
