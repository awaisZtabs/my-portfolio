"use client";
import { useCallback } from "react";
import site from "../data/site";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  CheckIcon,
  SparklesIcon,
  GitHubIcon,
  JSIcon,
  TSIcon,
  ReactIcon,
  NextIcon,
  VueIcon,
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  NodeIcon,
  DockerIcon,
  PostgresIcon,
  MySQLIcon,
  MongoIcon,
  GraphQLIcon,
  GitIcon,
  JiraIcon,
  AWSIcon,
  KubernetesIcon,
  RedisIcon,
  StripeIcon,
  PayPalIcon,
  RazorpayIcon,
  PythonIcon,
  ElasticsearchIcon,
  SvelteIcon,
  AngularIcon,
  LaravelIcon,
  FastAPIIcon,
} from "./Icons";

const ICONS = {
  Languages: SparklesIcon,
  Frontend: CodeIcon,
  Backend: ServerIcon,
  Databases: DatabaseIcon,
  "Databases & Caching": DatabaseIcon,
  DevOps: CloudIcon,
  "DevOps & Cloud": CloudIcon,
  Testing: CheckIcon,
  Tools: GitHubIcon,
  "APIs & Architecture": ServerIcon,
};

export default function Skills() {
  const cats = site.skillsByCategory || {};
  const entries = Object.entries(cats);
  const hasCategories = entries.length > 0;
  const projectAnchors = {
    elasticsearch: "project-digital-commerce",
    "multi-tenant": "project-apimio-pim-platform",
    stripe: "project-agiled",
    paypal: "project-agiled",
    razorpay: "project-agiled",
    redis: "project-apimio-pim-platform",
    graphql: "project-vision-board",
    mongodb: "project-apimio-pim-platform",
    mysql: "project-agiled",
    angular: "project-playbookai",
    vue: "project-apimio-pim-platform",
    aws: "project-apimio-pim-platform",
    gcp: "project-digital-commerce",
    svelte: "project-digital-commerce",
    fastapi: "project-playbookai",
    python: "project-digital-commerce",
  };
  const iconFor = (name) => {
    const s = String(name).toLowerCase();
    if (s.includes("typescript") || s === "ts") return TSIcon;
    if (s.includes("javascript") || s === "js") return JSIcon;
    if (s.includes("react")) return ReactIcon;
    if (s.includes("next")) return NextIcon;
    if (s.includes("vue")) return VueIcon;
    if (s.includes("svelte")) return SvelteIcon;
    if (s.includes("angular")) return AngularIcon;
    if (s.includes("html")) return HTMLIcon;
    if (s.includes("css")) return CSSIcon;
    if (s.includes("tailwind")) return TailwindIcon;
    if (s.includes("node")) return NodeIcon;
    if (s.includes("docker")) return DockerIcon;
    if (s.includes("kubernetes")) return KubernetesIcon;
    if (s.includes("postgres")) return PostgresIcon;
    if (s.includes("mysql")) return MySQLIcon;
    if (s.includes("mongo")) return MongoIcon;
    if (s.includes("redis")) return RedisIcon;
    if (s.includes("graphql")) return GraphQLIcon;
    if (s.includes("aws")) return AWSIcon;
    if (s.includes("gcp")) return CloudIcon;
    if (s.includes("stripe")) return StripeIcon;
    if (s.includes("paypal")) return PayPalIcon;
    if (s.includes("razorpay")) return RazorpayIcon;
    if (s.includes("python")) return PythonIcon;
    if (s.includes("fastapi")) return FastAPIIcon;
    if (s.includes("elasticsearch")) return ElasticsearchIcon;
    if (s.includes("laravel")) return LaravelIcon;
    if (s.includes("gitlab") || s.includes("github") || s.includes("bitbucket") || s === "git") return GitIcon;
    if (s.includes("jira")) return JiraIcon;
    return CodeIcon;
  };
  const handleClick = useCallback((skill) => {
    const anchor = projectAnchors[String(skill).toLowerCase()];
    if (!anchor) return;
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-[color:var(--primary)]");
      setTimeout(() => el.classList.remove("ring-2", "ring-[color:var(--primary)]"), 1200);
    }
  }, []);
  return (
    <section id="skills" suppressHydrationWarning className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
      {hasCategories ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {entries.map(([cat, items]) => {
            const Icon = ICONS[cat] || CodeIcon;
            return (
              <article key={cat} className="glass rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px" style={{
                  background: "linear-gradient(90deg, color-mix(in oklab, var(--primary) 60%, transparent), transparent 60%)",
                }} />
                <header className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
                      background: "linear-gradient(135deg, var(--primary), #22c55e)",
                    }}>
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{cat}</h3>
                  </div>
                  <span className="chip">{items.length} skills</span>
                </header>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {items.map((s) => {
                    const Icon = iconFor(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        className="tag inline-flex items-center gap-2 transition hover:translate-y-[-1px]"
                        onClick={() => handleClick(s)}
                        aria-label={`See projects using ${s}`}
                      >
                        <Icon />
                        <span>{s}</span>
                      </button>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {site.skills.map((s) => (
            <div key={s} className="glass rounded-xl px-4 py-3 text-sm flex items-center justify-between">
              <span>{s}</span>
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--primary)" }} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
