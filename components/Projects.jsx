"use client";
import { useEffect, useRef, useState } from "react";
import site from "../data/site";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
  ExternalIcon,
  CheckIcon,
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
  ReactIcon,
  NextIcon,
  VueIcon,
  NodeIcon,
  DockerIcon,
} from "./Icons";

const heroBackgrounds = {
  "digital-commerce": "linear-gradient(135deg, #0f172a, #334155)",
  "apimio-pim-platform": "linear-gradient(135deg, #312e81, #7c3aed)",
  agiled: "linear-gradient(135deg, #0f766e, #14b8a6)",
  playbookai: "linear-gradient(135deg, #7c2d12, #f97316)",
};

const iconForTech = (name) => {
  const s = String(name).toLowerCase();
  if (s.includes("aws")) return AWSIcon;
  if (s.includes("kubernetes")) return KubernetesIcon;
  if (s.includes("redis")) return RedisIcon;
  if (s.includes("stripe")) return StripeIcon;
  if (s.includes("paypal")) return PayPalIcon;
  if (s.includes("razorpay")) return RazorpayIcon;
  if (s.includes("python")) return PythonIcon;
  if (s.includes("fastapi")) return FastAPIIcon;
  if (s.includes("elasticsearch")) return ElasticsearchIcon;
  if (s.includes("svelte")) return SvelteIcon;
  if (s.includes("angular")) return AngularIcon;
  if (s.includes("laravel")) return LaravelIcon;
  if (s.includes("react")) return ReactIcon;
  if (s.includes("next")) return NextIcon;
  if (s.includes("vue")) return VueIcon;
  if (s.includes("node")) return NodeIcon;
  if (s.includes("docker")) return DockerIcon;
  if (s.includes("postgres")) return DatabaseIcon;
  if (s.includes("mysql")) return DatabaseIcon;
  if (s.includes("mongodb")) return DatabaseIcon;
  return CodeIcon;
};

function Card({ project, onClick }) {
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };
  return (
    <div
      id={`project-${slug}`}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKey}
      className="glass text-left rounded-2xl p-5 sm:p-6 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[--card-border]"
    >
      <div
        className="mb-4 h-28 rounded-xl flex items-center justify-center text-xs uppercase tracking-wider text-white/80"
        style={{ background: heroBackgrounds[slug] || "linear-gradient(135deg, #1f2937, #4b5563)" }}
      >
        {project.title}
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <p className="text-[13px] text-[color:var(--muted)]">{project.tagline}</p>
        </div>
        <div className="w-10 h-10 rounded-lg" style={{ background: "linear-gradient(135deg, var(--primary), #22c55e)" }} />
      </div>
      <p className="mt-4 text-sm leading-6 text-[color:var(--foreground)]/90">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="pill">{t}</span>
        ))}
      </div>
      {project.links?.[0] && (
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noreferrer"
            className="btn h-10"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            {project.links[0].label || "Live"}
          </a>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [active, setActive] = useState(null);
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  // Lock body scroll and focus initial control when modal opens
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => closeRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [active]);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  const openModal = (project) => setActive(project);
  const closeModal = () => setActive(null);

  // Close on Escape
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const getDetails = (p) => {
    // Dummy details; customize per project if desired
    const base = {
      frontend: ["Blade", "Vue.js", "Tailwind CSS"],
      backend: ["Laravel", "REST APIs", "Worker queues","PHP"],
      database: ["MySQL", "Redis", "Elasticsearch","DynamoDB"],
      deployment: ["AWS", "CloudFront (CDN)", "CI/CD"],
      tasks: [
        "Integrated multiple payment gateways (Stripe, PayPal, Razorpay)",
        "Built accounting modules: ledgers, reports, chart of accounts",
        "Developed invoicing system with customizable templates",
        "Implemented CRM features for customer management",
        "Created HTML wiki page builder for documentation",
        "Designed onboarding workflow for new users",
        "Automation for workflows and notifications",
      ],
      role: "Full‑stack Developer",
      duration: "3 months",
      team: "Team of 6",
      challenges: [
        {
          challenge: "Complex multi-tenant architecture",
          solution: "Designed a scalable multi-tenant data model with strict access controls to ensure data isolation and security.",
          challenge: "Integrating diverse payment gateways",
          solution: "Abstracted payment processing logic to handle different APIs and workflows seamlessly.",
          challenge: "Generating financial reports",
          solution: "Built a flexible reporting engine that could aggregate data across tenants and present it in various formats.",
        },
      ],
    };
    if (!p) return base;
    switch (p.title) {
      case "Digital Commerce":
        return {
          frontend: ["Svelte (SSR)", "Vue.js (Admin)", "React (Admin)"],
          backend: ["PHP (REST APIs)", "Workers for review scraping"],
          database: ["MySQL", "Redis cache", "Elasticsearch (search)"] ,
          deployment: ["GCP", "Cloud CDN", "CI/CD"],
          tasks: [
            "Multi‑tenant architecture serving 2,000+ US stores/users",
            "Migrated React SPA ' Svelte SSR to improve SEO visibility and performance",
            "Elasticsearch product search: facets, autosuggest, synonyms",
            "Python scripts to generate descriptions/tags for 100k+ SKUs (GPT‑4 prompts)",
            "Scraped Google reviews and rendered them on site",
            "SSR for fast first paint and better crawlability",
          ],
          challenges: [
            {
              challenge: "Low Google visibility due to CSR and slow vitals",
              solution: "Moved frontend from React SPA to Svelte with SSR, fixed CLS/LCP/INP, added sitemaps + JSON‑LD.",
            },
            {
              challenge: "Product discovery at scale",
              solution: "Implemented Elasticsearch with facets, autosuggest, synonyms, and relevance tuning.",
            },
            {
              challenge: "Content for 100k+ SKUs",
              solution: "Wrote Python pipelines using GPT‑4 prompts to auto‑generate descriptions and tags.",
            },
          ],
          role: "Full‑stack Developer",
          duration: "Ongoing",
          team: "Distributed team",
        };
      case "Apimio PIM Platform":
        return {
          frontend: ["React", "CDN-optimized assets"],
          backend: ["Node.js services", "Multi-tenant APIs", "Webhooks/queues"],
          database: ["MongoDB (tenant data)", "Redis (cache)"],
          deployment: ["AWS", "Cloud CDN", "CI/CD"],
          tasks: [
            "Migrated legacy PIM to React with modern patterns and code-splitting",
            "Implemented multi-tenant modeling and access controls",
            "Added CDN caching and image optimizations for global performance",
            "Introduced Redis caching for hot product data and sessions",
            "Built product enrichment workflows: attribute schemas, validation rules, approvals",
            "Bulk import/export (CSV/Excel) with progress, dedupe, and rollback",
            "Channel mappings and syndication to ecommerce/marketplaces",
          ],
          metrics: [
            { k: "Users", v: "1500+" },
            { k: "SKUs", v: "50k+" },
            { k: "Tenancy", v: "Multi-tenant" },
          ],
          challenges: [
            {
              challenge: "PIM performance and tenant isolation",
              solution: "Introduced per-tenant data models, Redis cache, and CDN to reduce latency and avoid cross-tenant impact.",
            },
            {
              challenge: "Legacy migration without downtime",
              solution: "Feature-flagged rollout, parallel reads/writes, and stepwise cutover for a safe migration.",
            },
            {
              challenge: "Data quality and consistency across channels",
              solution: "Validation rules, schema governance, and approval workflows before syndication.",
            },
          ],
          role: "Full-stack Developer",
          duration: "Multi-quarter",
          team: "Cross-functional",
        };
      case "Agiled":
        return {
          frontend: ["React SPA", "CDN assets"],
          backend: ["Laravel (PHP)", "Node workers"],
          database: ["MySQL", "Redis"],
          deployment: ["AWS", "CloudFront CDN"],
          tasks: [
            "Built multi-tenant business management modules (CRM, projects, tasks, time tracking)",
            "Architected accounting system with ledgers, chart of accounts, and financial reports",
            "Integrated multiple payment methods (Stripe, PayPal, Razorpay) with robust webhooks",
            "Automated invoice reminders, contract signatures, and workflows",
            "Python services for catalog enrichment (tags/descriptions) using GPT prompts",
            "Scraped Google reviews to surface social proof on site",
          ],
          metrics: [
            { k: "Users", v: "25k+" },
            { k: "SKUs", v: "100k+" },
            { k: "Regions", v: "Global" },
          ],
          challenges: [
            {
              challenge: "Scale accounting + billing for thousands of tenants",
              solution: "Sharded MySQL per tenant groups, Redis cache, and background jobs for heavy reports.",
            },
            {
              challenge: "Unify payments across markets",
              solution: "Modular adapters (Stripe/PayPal/Razorpay) with retries, reconciliation, and alerts.",
            },
          ],
          role: "Full-stack Developer",
          duration: "Ongoing",
          team: "25k customers",
        };
      case "PlaybookAI":
        return {
          frontend: ["Angular SPA", "Vue", "Livewire", "Tailwind CSS",],
          backend: ["PHP services", "FastAPI microservices (Python OCR)", "GPT integrations", "Webhooks"],
          database: ["MySQL", "Redis","Google Cloud Storage"],
          deployment: ["AWS backend", "GCP CDN","Docker","Kubernetes"],
          tasks: [
            "Built multi-tenant playbook authoring with templates, approvals, and assignments",
            "Angular frontend for client workflows; Vue/Livewire dashboards for admins",
            "Python + FastAPI services performing OCR on PDFs and extracting structured SOP data",
            "Integrated GPT-powered summarization to create action items and checklists",
            "Real-time alerts, notifications, and automated task routing",
            "Secured APIs, tenant isolation, and usage analytics",
          ],
          challenges: [
            {
              challenge: "Digitize messy PDFs into structured playbooks",
              solution: "FastAPI OCR pipelines + GPT prompts to convert documents into tasks, steps, and SOP metadata.",
            },
            {
              challenge: "Multi-tenant performance across AWS + CDN",
              solution: "Split Angular app via CDN, kept PHP APIs on AWS, and tuned caching + MySQL partitions.",
            },
          ],
          role: "Full-stack Developer",
          duration: "Ongoing",
          team: "Product + AI squad",
        };
      case "Project Alpha":
        return { ...base, backend: ["Realtime CRDT service", "WebSockets", "Next.js server actions"], deployment: ["Vercel", "WebSocket gateway"], tasks: ["Built CRDT sync", "Role-based access", "Live cursors"], duration: "5 months", team: "Team of 4" };
      case "Vision Board":
        return { ...base, backend: ["Vector search", "Embeddings", "Next.js API"], database: ["Pinecone / pgvector"], tasks: ["Semantic search", "Ranking & caching", "Upload pipeline"], duration: "2 months" };
      case "ShopKit":
        return { ...base, backend: ["Stripe payments", "Admin dashboard", "Webhooks"], tasks: ["Checkout flow", "Admin CRUD", "RSC pages"], duration: "1.5 months" };
      case "OpsDash":
        return { ...base, backend: ["GraphQL gateway", "Ingest workers", "Alerts"], database: ["ClickHouse", "Postgres"], tasks: ["SLO burn rate", "Unified logs/metrics", "Dashboards"], duration: "4 months", team: "Team of 5" };
      default:
        return base;
    }
  };

  // Modal navigation helpers
  const currentIndex = active ? site.projects.findIndex((p) => p.title === active.title) : -1;
  const canPrevProject = currentIndex > 0;
  const canNextProject = currentIndex >= 0 && currentIndex < site.projects.length - 1;
  const prevProject = () => { if (canPrevProject) setActive(site.projects[currentIndex - 1]); };
  const nextProject = () => { if (canNextProject) setActive(site.projects[currentIndex + 1]); };

  return (
    <section id="projects" suppressHydrationWarning className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl sm:text-3xl font-semibold">Featured Projects</h2>
        <a href="https://github.com" target="_blank" className="pill" rel="noreferrer">See all</a>
      </div>
      <div className="relative mt-6">
        {/* Left arrow */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
          disabled={!canLeft}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full glass border border-[--card-border] disabled:opacity-40"
        >
          <ChevronLeftIcon />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
          disabled={!canRight}
          className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full glass border border-[--card-border] disabled:opacity-40"
        >
          <ChevronRightIcon />
        </button>

        {/* Carousel */}
        <div
          ref={scrollerRef}
          className="-mx-4 px-4 overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory"
          aria-label="Project carousel"
        >
          <div className="flex gap-4 pr-6">
            {site.projects.map((p) => (
              <div key={p.title} className="min-w-[280px] sm:min-w-[360px] lg:min-w-[420px] snap-start">
                <Card project={p} onClick={() => openModal(p)} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <article
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            ref={modalRef}
            className="relative glass rounded-2xl border border-[--card-border] max-w-3xl w-full max-h-[90vh] p-0 z-10 overflow-hidden flex flex-col"
            onKeyDown={(e) => {
              if (e.key === "Tab") {
                const focusable = modalRef.current?.querySelectorAll(
                  'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                if (!focusable || focusable.length === 0) return;
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                  e.preventDefault();
                  last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                  e.preventDefault();
                  first.focus();
                }
              } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                const idx = site.projects.findIndex((p) => p.title === active.title);
                const nextIdx = e.key === "ArrowRight" ? Math.min(idx + 1, site.projects.length - 1) : Math.max(idx - 1, 0);
                const next = site.projects[nextIdx];
                if (next && next !== active) setActive(next);
              }
            }}
          >
            <header className="relative sticky top-0 z-10 p-4 sm:p-6 md:p-8 pb-3 md:pb-4 flex flex-col md:flex-row items-start md:items-start justify-between gap-3 md:gap-4 border-b border-[--card-border]" style={{ background: "color-mix(in oklab, var(--card) 92%, #0000 8%)" }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl" style={{ background: "linear-gradient(135deg, var(--primary), #22c55e)" }} />
                <div>
                  <h3 id="project-title" className="text-xl sm:text-2xl font-semibold tracking-tight">{active.title}</h3>
                  <p className="text-[13px] text-[color:var(--muted)] mt-1">{active.tagline}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="chip">{getDetails(active).role}</span>
                    <span className="chip">{getDetails(active).duration}</span>
                    <span className="chip">{getDetails(active).team}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-0">
                <button type="button" onClick={prevProject} disabled={!canPrevProject} className="btn h-9 disabled:opacity-50" aria-label="Previous project">
                  <ChevronLeftIcon /> Prev
                </button>
                <button type="button" onClick={nextProject} disabled={!canNextProject} className="btn h-9 disabled:opacity-50" aria-label="Next project">
                  Next <ChevronRightIcon />
                </button>
                {active.links?.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="pill inline-flex items-center gap-2">
                    <ExternalIcon /> {l.label}
                  </a>
                ))}
              </div>
              <button ref={closeRef} aria-label="Close" onClick={closeModal} className="pill inline-flex items-center justify-center absolute top-3 right-3"><CloseIcon /></button>
            </header>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 pt-3">
              <p className="text-sm leading-6 text-[color:var(--foreground)]/90">{active.description}</p>
              {(() => {
                const d = getDetails(active);
                const highlights = Array.from(
                  new Set([...(d.frontend || []), ...(d.backend || []), ...(d.database || []), ...(d.deployment || [])]),
                ).slice(0, 6);
                if (!highlights.length) return null;
                return (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {highlights.map((name) => {
                      const Icon = iconForTech(name);
                      return (
                        <span key={name} className="pill inline-flex items-center gap-2">
                          <Icon /> {name}
                        </span>
                      );
                    })}
                  </div>
                );
              })()}

            {(() => {
              const d = getDetails(active);
              return (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <section className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 font-medium"><CodeIcon /> Frontend</div>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {d.frontend.map((t) => (
                        <li key={t} className="pill">{t}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 font-medium"><ServerIcon /> Backend</div>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {d.backend.map((t) => (
                        <li key={t} className="pill">{t}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 font-medium"><DatabaseIcon /> Database</div>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {d.database.map((t) => (
                        <li key={t} className="pill">{t}</li>
                      ))}
                    </ul>
                  </section>
                  <section className="glass rounded-xl p-4">
                    <div className="flex items-center gap-2 font-medium"><CloudIcon /> Deployment</div>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {d.deployment.map((t) => (
                        <li key={t} className="pill">{t}</li>
                      ))}
                    </ul>
                  </section>
                </div>
              );
            })()}

            <section className="mt-6">
              <div className="font-medium mb-2">Key responsibilities</div>
              <ul className="space-y-2">
                {getDetails(active).tasks.map((task) => (
                  <li key={task} className="flex items-start gap-2 text-sm leading-6">
                    <span className="mt-1"><CheckIcon /></span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick metrics */}
            <section className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {(() => {
                const d = getDetails(active);
                let metrics = d.metrics;
                if (!metrics || !metrics.length) {
                  if (active.title === "Digital Commerce") {
                    metrics = [
                      { k: "Tenants", v: "2000+" },
                      { k: "SKUs", v: "100k+" },
                      { k: "Core Web Vitals", v: "Pass" },
                    ];
                  } else if (active.title === "Apimio PIM Platform") {
                    metrics = [
                      { k: "Users", v: "1500+" },
                      { k: "SKUs", v: "50k+" },
                      { k: "Tenancy", v: "Multi‑tenant" },
                    ];
                  } else if (active.title === "Agiled") {
                    metrics = [
                      { k: "Active Businesses", v: "10k+" },
                 
                    ];
                  } else {
                    return null;
                  }
                }
                return metrics.map((m) => (
                  <div key={m.k} className="glass rounded-xl p-4 text-center">
                    <div className="text-2xl font-semibold tracking-tight">{m.v}</div>
                    <div className="text-[12px] text-[color:var(--muted)] mt-1">{m.k}</div>
                  </div>
                ));
              })()}
            </section>

            {/* Challenges */}
            <section className="mt-6">
              <div className="font-medium mb-2">Challenges & solutions</div>
              {(() => {
                const d = getDetails(active);
                const list = d.challenges || [];
                if (!list.length) return null;
                return (
                  <ul className="space-y-2 text-sm leading-6">
                    {list.map((c, i) => (
                      <li key={i}>
                        <span className="chip">Challenge</span> {c.challenge}<br />
                        <span className="chip">Solution</span> {c.solution}
                      </li>
                    ))}
                  </ul>
                );
              })()}
            </section>
            </div>

            {/* Footer removed — actions moved to header */}
          </article>
        </div>
      )}
    </section>
  );
}
