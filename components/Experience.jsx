"use client";
import { useState } from "react";
import site from "../data/site";
import { BriefcaseIcon, CheckIcon } from "./Icons";

export default function Experience() {
  const items = site.experience || [];
  const [expanded, setExpanded] = useState(() => new Set());
  const toggle = (idx) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">Experience</h2>
      </div>
      <div className="relative mt-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-[--card-border]" aria-hidden />
        <ul className="space-y-4">
          {items.map((item, idx) => {
            const list = item.categories?.length
              ? item.categories
              : [
                  {
                    title: "Highlights",
                    bullets: item.bullets || [],
                  },
                ];
            const totalBullets = list.reduce(
              (sum, cat) => sum + (cat.bullets?.length || 0),
              0,
            );
            let remaining = 4;
            const isExpanded = expanded.has(idx);
            return (
              <li key={`${item.company}-${item.period}`} className="relative pl-10">
              <span
                className="absolute left-0 top-6 inline-flex items-center justify-center w-6 h-6 rounded-full border border-[--card-border]"
                style={{ background: "linear-gradient(135deg, var(--primary), #22c55e)" }}
                aria-hidden
              />
              <article className="glass rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                {/* top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, color-mix(in oklab, var(--primary) 60%, transparent), transparent 60%)",
                  }}
                />
                {/* soft decorative blob */}
                <div
                  className="pointer-events-none absolute -right-20 -top-24 w-64 h-64 rounded-full opacity-25 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(closest-side, color(display-p3 0.49 0.4 1 / 0.25), transparent 70%)",
                  }}
                  aria-hidden
                />

                <header className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, var(--primary), #22c55e)" }}
                      aria-hidden
                    >
                      <BriefcaseIcon />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                      <p className="text-[13px] text-[color:var(--muted)]">{item.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                   
                    <span className="chip whitespace-nowrap">{item.period}</span>
                  </div>
                </header>
                {item.metrics?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.metrics.map((m) => (
                      <span key={m.label} className="pill">
                        {m.label}: {m.value}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 space-y-4 text-sm leading-6 text-[color:var(--foreground)]/90">
                  {list.map((cat) => {
                    const bullets = cat.bullets || [];
                    const display = isExpanded
                      ? bullets
                      : bullets.slice(
                          0,
                          Math.max(0, remaining),
                        );
                    if (!display.length) {
                      if (!isExpanded) remaining = Math.max(0, remaining - bullets.length);
                      return null;
                    }
                    if (!isExpanded) remaining = Math.max(0, remaining - display.length);
                    return (
                      <div key={cat.title}>
                        <div className="font-medium mb-1">{cat.title}</div>
                        <ul className="space-y-2">
                          {display.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="mt-0.5 text-[color:var(--muted)]">
                                <CheckIcon />
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                {totalBullets > 4 && (
                  <div className="mt-4">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => toggle(idx)}
                      className="pill"
                    >
                      {isExpanded ? "Show less" : `Show more (+${totalBullets - 4})`}
                    </button>
                  </div>
                )}
              </article>
            </li>
            );
          }
          )}
        </ul>
      </div>
    </section>
  );
}
