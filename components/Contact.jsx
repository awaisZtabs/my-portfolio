"use client";
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon, PhoneIcon, SendIcon } from "./Icons";
import site from "../data/site";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("");
  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1500);
    } catch {}
  };
  return (
    <section id="contact" suppressHydrationWarning className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <div className="relative glass rounded-2xl p-6 sm:p-8 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
             style={{ background: "radial-gradient(closest-side, color(display-p3 0.49 0.4 1 / 0.25), transparent 70%)" }}
             aria-hidden />
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 pill">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
              Available working student, intern & part-time roles
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something great</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
              I’m open to roles, projects, and collaborations. Prefer email? Use the button below, or connect via socials.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn" href={`mailto:${site.email}`}><SendIcon /> Email me</a>
           
            </div>
          </div>

          <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-5">
            <div className="glass rounded-xl p-4 min-w-[260px]">
              <div className="text-sm font-medium">Direct</div>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-[color:var(--foreground)]/90">
                    <MailIcon /> {site.email}
                  </div>
                  <button className="pill" onClick={() => copy(site.email, "email")}>{copied === "email" ? "Copied" : "Copy"}</button>
                </div>
                {site.phone && (
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex items-center gap-2 text-[color:var(--foreground)]/90">
                      <PhoneIcon /> {site.phone}
                    </div>
                    <a className="pill" href={`tel:${site.phone.replace(/\s+/g, "")}`}>Call</a>
                  </div>
                )}
              </div>
            </div>

            <div className="glass rounded-xl p-4 min-w-[260px]">
              <div className="text-sm font-medium">Social</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {site.socials.map((s) => {
                  const Icon = s.label === "GitHub" ? GitHubIcon : s.label === "LinkedIn" ? LinkedInIcon : XIcon;
                  return (
                    <a key={s.href} className="pill inline-flex items-center gap-2" href={s.href} target="_blank" rel="noreferrer">
                      <Icon /> {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
