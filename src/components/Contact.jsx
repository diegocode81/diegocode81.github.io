import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio.js";
import SectionHeader from "./SectionHeader.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="section-shell">
        <SectionHeader eyebrow="Let’s Connect" title={profile.contactText} />
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

        <div className="mt-5 flex flex-col gap-3 rounded-lg border border-line bg-mist p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-steel">{profile.email}</p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-md border border-line bg-white px-3 py-2 text-sm font-semibold text-ink transition hover:border-signal hover:text-signal focus:outline-none focus:ring-4 focus:ring-signal/20"
            >
              Copy Email
            </button>
            <span className="min-w-24 text-sm font-semibold text-quality" aria-live="polite">
              {copied ? "Email copied!" : ""}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
