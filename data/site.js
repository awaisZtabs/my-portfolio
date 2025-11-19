export const site = {
  name: "Awais",
  role: "Full‑Stack Developer",
  location: "Fulda, Germany",
  avatar: "/avatar.svg",
  phone: "+49 157 5706 0052",
  summary:
    "I design, build, and scale delightful web apps — from pixel‑perfect frontends to robust APIs and cloud infrastructure.",
  email: "awaisali11159@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/awaisZtabs" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/awais-abbasi-569635150" }
  ],
  experience: [
    {
      company: "Apimio Inc",
      role: "Technical Lead",
      period: "07/2023 — 03/2025",
      leadership: "Mentored 6 engineers; led 2 cross-functional pods",
      metrics: [
        { label: "Latency", value: "P95 ↓35%" },
        { label: "Core Web Vitals", value: "CLS/LCP pass" },
        { label: "Automations", value: "50+ workflows" },
      ],
      categories: [
        {
          title: "Accounting & Finance",
          bullets: [
            "Led the accounting system end-to-end (journals, ledgers, reconciliations, reporting, approvals).",
            "Shipped dashboards (P&L, balance sheet, cash flow) with drill-downs/export.",
            "Maintained RBAC + audit trails for compliant financial operations.",
          ],
        },
        {
          title: "Platform & Performance",
          bullets: [
            "Designed REST APIs and schemas (MySQL/PostgreSQL) with ACID flows, indexes, migrations.",
            "Reduced P95 API latency ~35% via query tuning, background jobs, caching.",
            "Boosted SEO/Core Web Vitals; added Elasticsearch/OpenSearch for products.",
            "Delivered multi-checkout (Stripe, PayPal) with resilient webhooks/retries.",
          ],
        },
        {
          title: "Automation & AI",
          bullets: [
            "Built workflow runners, internal wikis, and orchestration tooling.",
            "Developed Python OCR + annotation pipeline; GPT-powered content enrichment.",
            "Integrated security devices via vendor APIs; normalized telemetry streams.",
            "Hardened security (validation, rate limits, secret rotation) and observability.",
            "Introduced CI/CD with GitHub Actions; authored RFCs/design docs.",
          ],
        },
      ],
    },
    {
      company: "iOptime Pvt LTD",
      role: "Full‑Stack Developer",
      period: "01/2022 — 06/2023",
      leadership: "Rotating lead for 4 engineers; onboarded 6 new hires",
      metrics: [
        { label: "Load time", value: "↓25%" },
        { label: "PayOps errors", value: "↓40%" },
      ],
      categories: [
        {
          title: "Accounting & Finance",
          bullets: [
            "Delivered dashboards + account modules with real-time balances and drill-downs.",
            "Implemented GL features (journals, reconciliation, closing) with integrity constraints.",
            "Built migration tools to import legacy accounting data with validation and rollbacks.",
          ],
        },
        {
          title: "Platform & Performance",
          bullets: [
            "Built multi-tenant apps (React/Vue/Node); improved initial load ~25% via code-splitting/RSC.",
            "Added Redis caching, pagination, and DB indexes to stabilize heavy reports.",
            "Set up S3-style storage and signed URLs for documents.",
            "Improved AuthZ/AuthN with granular scopes; introduced feature flags for gradual rollouts.",
          ],
        },
        {
          title: "Quality & Payments",
          bullets: [
            "Integrated Stripe/PayPal flows with retries, secure APIs, and monitoring.",
            "Created UI/API test suites (Jest/Cypress) for accounting flows and permissions.",
            "Wrote developer docs/onboarding guides; reduced ramp-up time for new engineers.",
          ],
        },
      ],
    },
    {
      company: "National Center of Artificial Intelligence",
      role: "AI Research Assistant",
      period: "08/2020 — 12/2021",
      leadership: "Supported 3 researchers; led ML ops standards",
      metrics: [
        { label: "Accuracy", value: "+20% field precision" },
      ],
      categories: [
        {
          title: "Automation & AI",
          bullets: [
            "Developed AI-assisted extraction prototypes (Python/Django/Node) for financial docs.",
            "Researched NLP models for invoices/receipts; iterated on entity accuracy.",
            "Built ETL pipelines for dataset cleaning/labeling; standardized schemas and quality checks.",
            "Improved field-level accuracy ~20% via preprocessing, layout cues, post-rules.",
          ],
        },
        {
          title: "Platform & Ops",
          bullets: [
            "Dockerized services; automated training/inference jobs; documented runbooks and metrics.",
            "Integrated models behind REST APIs for real-time field extraction and validation.",
            "Collaborated on evaluation harnesses and ablation studies; presented findings to stakeholders.",
          ],
        },
      ],
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "AWS",
    "Docker",
    "CI/CD",
  ],
  skillsByCategory: {
    "Languages": [
      "JavaScript (ES6+)",
      "TypeScript",
      "PHP",
      "Python",
      "SQL",
    ],
    "Frontend": [
      "React",
      "Next.js",
      "Vue.js",
      "Svelte",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "MUI (Material UI)",
    ],
    "Backend": [
      "Node.js",
      "Express.js",
      "NestJS",
      "Django",
      "Laravel",
    ],
    "APIs & Architecture": [
      "REST",
      "GraphQL",
      "Microservices",
      "gRPC",
      "WebSockets",
      "Serverless",
      "Webhooks",
      "FAST API",
    ],
    "Testing": [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Selenium",
      "Puppeteer",
      "PHPUnit",
    ],
    "DevOps & Cloud": [
      "Docker",
      "Kubernetes",
      "AWS",
      "Vercel",
      "Netlify",
      "Heroku",
      "Firebase",
      "GitHub Actions",
      "GitLab CI/CD",
    ],
    "Databases & Caching": [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "SQLite",
      "Firebase Firestore",
    ],
    "Tools": ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence"],
  },
  projects: [
    {
      title: "Digital Commerce",
      tagline: "Multi‑tenant e‑commerce at national scale",
      description:
        "A multi‑tenant e‑commerce platform powering 2,000+ US stores/users. Migrated from a React SPA to Svelte with SSR for better SEO visibility and performance. Vue/React admin dashboards, PHP backend, and Elasticsearch product discovery — deployed on GCP with MySQL and Redis.",
      tech: [
        "Multi‑tenant",
        "Svelte (SSR)",
        "Vue.js (Admin)",
        "React (Admin)",
        "PHP (Backend)",
        "Python",
        "MySQL",
        "Redis",
        "Elasticsearch",
        "GCP",
        "SEO",
        "GPT‑4 (content generation)",
      ],
      links: [
        { label: "Live", href: "https://doitbestbarbados.com/" }
      ],
    },
    {
      title: "Agiled",
      tagline: "All-in-one business management platform",
      description:
        "Business management platform serving 25k customers worldwide. Laravel backend hosted on AWS with multi-tenant infrastructure. Built accounting system (ledgers, reports, chart of accounts), integrated multiple payment methods (Stripe, PayPal, Razorpay), and enhanced product catalog with Python scripts that auto-generate product descriptions and tags for 100k+ SKUs. Scraped Google reviews for social proof on site.",
      tech: [
        "Laravel",
        "Vue.js",
        "PHP",
        "AWS",
        "Multi-tenant",
        "Stripe",
        "PayPal",
        "Razorpay",
        "MySQL",
        "Redis",
        "Python",
        "AI (GPT) workflows",
      ],
      links: [
        { label: "Live", href: "https://agiled.app/" }
      ],
    },
    {
      title: "PlaybookAI",
      tagline: "AI-powered playbook & ops automation",
      description:
        "PlaybookAI (IC360) digitizes operational playbooks with AI. Angular frontend for client-facing flows, Vue + Livewire dashboard, and PHP backend with MySQL on GCP. Python + FastAPI services perform OCR on PDFs to auto-build SOPs and checklists, while AWS hosts the backend and CDN serves the SPA. Supports multi-tenant clients, real-time collaboration, and automated task assignments.",
      tech: [
        "Angular",
        "Vue.js",
        "Livewire",
        "PHP",
        "Python",
        "FastAPI",
        "MySQL",
        "AWS",
        "GCP CDN",
        "OCR",
        "AI"
      ],
      links: [
        { label: "Live", href: "https://ic360.io/playbookai" }
      ],
    },
    {
      title: "Apimio PIM Platform",
      tagline: "Multi‑tenant PIM with React FE and AWS",
      description:
        "Product Information Management (PIM) platform that centralizes product data, enrichment, and syndication across channels. Migrated a legacy stack to a React front‑end with CDN delivery on AWS, backed by Node.js services on MongoDB/Redis for multi‑tenant scale. Supports bulk import/export, attribute schemas, validation rules, approval workflows, and API/webhook integrations to ecommerce and marketplaces.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Redis",
        "Multi‑tenant",
        "Docker",
        "AWS",
        "CDN",
        "Webhooks",
        "Bulk import/export",
      ],
      links: [
        { label: "About PIM", href: "https://apimio.com/what-is-pim/" }
      ],
    },
  
    
  ],
  education: [
    {
      school: "Hochschule Fulda",
      degree: "Master of Science in Data Science",
      period: "04/2025 — Present",
      status: "Ongoing",
      location: "Fulda, Germany",
    },
    {
      school: "Comsats University Islamabad",
      degree: "Bachelor of Computer Science in Software Engineering",
      period: "09/2016 — 08/2020",
      status: "Completed",
      location: "Islamabad, Pakistan",
      gpa: "3.23/4.00",
    },
  ],
  languages: [
    { name: "English", level: "C1" },
    { name: "German", level: "A2" },
    { name: "Urdu", level: "Native" },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "HTML5",
    "CSS3",
    "Tailwind",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "NestJS",
    "Django",
    "Laravel",
    "REST",
    "GraphQL",
    "Microservices",
    "Jest",
    "React Testing Library",
    "PHPUnit",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "GitHub Actions",
    "GitLab CI/CD",
    "Docker",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "Jira",
    "Confluence",
    "Scrum",
  ],
};

export default site;
