"use client";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import site from "../data/site";
import { GitHubIcon, LinkedInIcon, XIcon, GridIcon, BriefcaseIcon, SparklesIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[320px] glass border-r border-[--card-border] p-6">
      <div className="flex flex-col w-full h-full overflow-y-auto pr-2">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden" style={{
            boxShadow: "0 0 0 2px var(--card-border), 0 0 0 6px color-mix(in oklab, var(--primary) 25%, transparent)",
          }}>
            <Image src={site.avatar || "/avatar.svg"} alt={site.name} fill sizes="64px" />
          </div>
          <div>
            <div className="font-semibold leading-tight tracking-tight text-[18px]">{site.name}</div>
            <div className="text-[12px] text-[color:var(--muted)]">{site.role}</div>
          </div>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 text-[12px] text-[color:var(--muted)]">
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
          Available for work
        </div>

        <nav className="mt-8 flex flex-col gap-2 text-sm">
          <a href="#projects" className="pill inline-flex items-center gap-2"><GridIcon /> Projects</a>
          <a href="#experience" className="pill inline-flex items-center gap-2"><BriefcaseIcon /> Experience</a>
          <a href="#skills" className="pill inline-flex items-center gap-2"><SparklesIcon /> Skills</a>
          <a href="#contact" className="pill inline-flex items-center gap-2"><MailIcon /> Contact</a>
        </nav>

        {/* Education */}
        {site.education?.length > 0 && (
          <div className="mt-6">
            <h3 className="text-[11px] uppercase tracking-wide text-[color:var(--muted)] mb-2">Education</h3>
            <div className="flex flex-col gap-2">
              {site.education.map((edu) => (
                <div key={`${edu.school}-${edu.degree}`} className="glass rounded-xl p-3 text-[12px] leading-snug">
                  <div className="font-semibold text-[color:var(--foreground)]/90">{edu.degree}</div>
                  <div className="text-[color:var(--muted)]">{edu.school}</div>
                  <div className="text-[color:var(--muted)] text-[11px]">{edu.period}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {site.languages?.length > 0 && (
          <div className="mt-6">
            <h3 className="text-[11px] uppercase tracking-wide text-[color:var(--muted)] mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {site.languages.map((lang) => (
                <span key={lang.name} className="pill text-[11px]">
                  {lang.name} · {lang.level}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact quick links */}
        <div className="mt-6">
          <h3 className="text-[11px] uppercase tracking-wide text-[color:var(--muted)] mb-2">Contact</h3>
          <div className="flex flex-col gap-2">
            <a className="pill inline-flex items-center gap-2" href={`mailto:${site.email}`}>
              <MailIcon /> {site.email}
            </a>
            {site.phone && (
              <a className="pill inline-flex items-center gap-2" href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                <PhoneIcon /> {site.phone}
              </a>
            )}
          </div>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex gap-2">
            {site.socials?.map((s) => {
              const Icon = s.label === "GitHub" ? GitHubIcon : s.label === "LinkedIn" ? LinkedInIcon : XIcon;
              return (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-2">
                  <Icon />
                  <span className="hidden xl:inline">{s.label}</span>
                </a>
              );
            })}
          </div>
          <div className="mt-3"><ThemeToggle /></div>
        </div>
      </div>
    </aside>
  );
}
