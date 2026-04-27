export const profile = {
  name: "Abhijeet Sakpal",
  role: "Full Stack Developer",
  tagline:
    "Senior full-stack engineer specializing in .NET microservices, Angular, and LLM-powered automation. Available for fixed-scope builds and ongoing engagements.",
  location: "Thane, Maharashtra, India",
  email: "sakpalabhijeet09@gmail.com",
  phone: "+91-9763282164",
  linkedin: "https://linkedin.com/in/abhijeetsakpal",
  github: "https://github.com/abhijeetsakpal/", // TODO: update with your GitHub URL
  resumeUrl: "/Abhijeet_Sakpal_Resume.pdf",
};

export const stats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Production Releases", value: "50+" },
  { label: "Manual Workload Cut", value: "40%" },
  { label: "Post-release Defects ↓", value: "30%" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C#", "TypeScript", "JavaScript (ES6+)", "VB.NET", "SQL", "PL/SQL", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: [".NET Core", "ASP.NET MVC", "Web API", "Microservices", "RESTful APIs"],
  },
  {
    category: "Frontend",
    items: ["Angular", "AngularJS", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["SQL Server", "MySQL", "Oracle (PL/SQL)", "Stored Procedures", "Query Tuning"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Microsoft Azure", "App Service", "IIS", "CI/CD"],
  },
  {
    category: "AI / LLM",
    items: ["LLM Integration", "RAG", "Workflow Automation", "Intelligent Classification"],
  },
];

export const services = [
  {
    title: "LLM-Powered Automation",
    description:
      "Integrate large language models into your business workflows — ticket classification, document processing, intelligent routing, and decision support. Production-grade, secure, and measurable.",
    bullets: [
      "Ticket / email classification & routing",
      "RAG over internal knowledge bases",
      "Workflow automation & smart agents",
    ],
  },
  {
    title: ".NET + Angular Development",
    description:
      "End-to-end enterprise apps built on .NET Core microservices and Angular. Clean architecture, scalable, and production-ready from day one.",
    bullets: [
      "Microservices on .NET Core Web API",
      "Angular dashboards & SPAs",
      "SQL Server design & query optimization",
    ],
  },
  {
    title: "Cloud Migration & DevOps",
    description:
      "Containerize and deploy your .NET workloads on Azure, Docker, and Kubernetes. Zero-downtime releases, CI/CD pipelines, and infra-as-code.",
    bullets: [
      "Docker / Kubernetes orchestration",
      "Azure App Service & container deployments",
      "CI/CD with Azure DevOps / GitHub Actions",
    ],
  },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Simple Logic Pvt. Ltd.",
    period: "Nov 2024 – Present",
    bullets: [
      "Lead a team of 6 developers building microservices on .NET Core Web API and Angular; own task allocation, code reviews, and resolution of complex production blockers.",
      "Containerized services with Docker and orchestrated deployments on Kubernetes — managing rolling updates, scaling, and zero-downtime releases.",
      "Integrated LLM capabilities into the ticketing platform to automate ticket classification and routing — reducing manual email handling by 40%.",
      "Drove VAPT-compliant releases and reduced post-release defects by 30% through stronger release checklists and peer-review gates.",
    ],
  },
  {
    role: "Software Programmer",
    company: "V & V Comptech System Pvt. Ltd.",
    period: "Dec 2021 – Oct 2024",
    bullets: [
      "Designed and developed RESTful APIs and Web Services in .NET Core for maritime and rail-logistics platforms.",
      "Built dynamic Angular, AngularJS, and TypeScript UI modules — including role-based dashboards, scheduling boards, and transaction screens.",
      "Delivered on-site engagements in Abu Dhabi and Dubai — gathered requirements from international clients, deployed custom modules, and provided go-live production support.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Scan Infotech Pvt. Ltd.",
    period: "Sep 2021 – Dec 2021",
    bullets: [
      "Contributed to web applications built on Angular, .NET Core, ASP.NET MVC, and SQL Server under senior-developer mentorship.",
    ],
  },
];

export const offers: Array<{
  badge: string;
  title: string;
  pitch: string;
  duration: string;
  priceUsd: string;
  priceInr: string;
  deliverables: string[];
  bestFor: string;
  cta: string;
}> = [
  {
    badge: "Most popular",
    title: "LLM Integration Audit",
    pitch:
      "A 5-day deep-dive that tells you exactly where LLMs will (and won't) pay back inside your existing product — with a working prototype.",
    duration: "5 working days",
    priceUsd: "Starting at $1,500",
    priceInr: "≈ ₹1.25L",
    deliverables: [
      "Discovery call + access review (Day 1)",
      "Workflow + cost-benefit analysis across your top 3 candidate use cases",
      "Architecture diagram showing exactly where the LLM layer fits",
      "Working proof-of-concept on one selected workflow (real data, not toy)",
      "Cost model: per-call $, monthly token budget, infra & latency expectations",
      "Risk register — prompt injection, PII, vendor lock-in, fallback strategy",
      "Written report + 60-min walkthrough with your team",
    ],
    bestFor:
      "Teams who keep getting asked \"can we use AI for this?\" and need a defensible answer.",
    cta: "Book the audit",
  },
  {
    badge: "Quick win",
    title: "Dockerize My .NET App",
    pitch:
      "Take your .NET Core app from \"runs on the dev's laptop\" to a production-ready container deployed on Azure or any Kubernetes cluster — in 2 weeks.",
    duration: "2 weeks",
    priceUsd: "Starting at $2,200",
    priceInr: "≈ ₹1.85L",
    deliverables: [
      "Containerized application (multi-stage Dockerfile, optimized image size)",
      "docker-compose for local dev — DB, cache, API in one command",
      "Kubernetes manifests OR Azure App Service config (your choice)",
      "CI/CD pipeline (GitHub Actions or Azure DevOps) — build, test, deploy on push",
      "Secrets management via env vars / Azure Key Vault (no credentials in code)",
      "Health checks, readiness probes, structured logging",
      "Runbook + handover doc your team can run with",
      "1 production deploy together + 30 days of support",
    ],
    bestFor:
      "Teams stuck on IIS or running .NET apps with manual deploys who want zero-downtime releases.",
    cta: "Get a quote",
  },
  {
    badge: "End-to-end",
    title: "MVP / Greenfield Build",
    pitch:
      "Got a product idea or internal tool? I'll architect, design, and ship a production-ready MVP in 4–8 weeks — solo, with weekly demos.",
    duration: "4–8 weeks",
    priceUsd: "Starting at $4,500",
    priceInr: "≈ ₹3.75L",
    deliverables: [
      "Discovery + scope workshop — written PRD before any code is written",
      "Tech stack selection (.NET / Angular / Next.js / Postgres / your call)",
      "Auth, role-based access, admin panel, audit logging — built right from day one",
      "Cloud-deployed (Azure / Vercel) with CI/CD configured",
      "Weekly demo videos + one live review call per week",
      "Documentation: README, API docs, runbook",
      "Source-code handover + 30-day post-launch bug-fix support",
      "Optional ongoing retainer if you want me to keep shipping",
    ],
    bestFor:
      "Founders, product teams, or operations leads who need a working v1 fast — without the overhead of a full team.",
    cta: "Start a project",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "Free 20-minute call. We dig into your problem, current stack, and what success looks like. You get a candid take on whether I can actually help — or someone better.",
    duration: "20 min · free",
  },
  {
    step: "02",
    title: "Scope & estimate",
    description:
      "Within 48 hours: a written proposal with clear milestones, deliverables, and a fixed price (or hourly cap). No surprises later.",
    duration: "48 hours",
  },
  {
    step: "03",
    title: "Build with weekly demos",
    description:
      "I ship working software every week — not status reports. You see real progress, give feedback early, and steer the direction before it's expensive to change.",
    duration: "Weekly",
  },
  {
    step: "04",
    title: "Handover & 30-day support",
    description:
      "Clean code, documentation, and a recorded walkthrough. Plus 30 days of free bug-fix support after launch — no nickel-and-diming.",
    duration: "30 days included",
  },
];

/**
 * Add LinkedIn recommendations or client quotes here.
 * Section auto-hides while this list is empty.
 *
 * Example entry:
 * {
 *   quote: "Abhijeet shipped our LLM ticketing module on time and on spec...",
 *   name: "Jane Doe",
 *   role: "Engineering Manager",
 *   company: "Simple Logic Pvt. Ltd.",
 *   avatar: "/avatars/jane.jpg", // optional
 * }
 */
export const testimonials: Array<{
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}> = [];

export const projects = [
  {
    slug: "uniflow",
    title: "Uniflow — No-Code / Low-Code Application Builder",
    summary:
      "A no-code platform that lets business users generate dynamic apps with forms, workflows, approval matrices, and role-based menus by uploading a configurable Excel template.",
    impact:
      "Metadata-driven architecture stores all app structures and rules in the database — new apps launch and update without redeployment.",
    stack: ["Angular", ".NET Core", "C#", "SQL Server"],
    hasCaseStudy: true,
  },
  {
    slug: "ticketing",
    title: "Ticketing Tool — LLM-Powered Email Management",
    summary:
      "An email-driven ticket platform that ingests, classifies, and routes support tickets using LLM integration. Modular Angular UI with role-based features for operators, supervisors, and admins.",
    impact:
      "Reduced manual email handling by ~40% and significantly improved response turnaround for the support operations team.",
    stack: ["Angular", ".NET Core", "MySQL", "Docker", "LLM"],
    hasCaseStudy: true,
  },
  {
    slug: "hms",
    title: "HMS — Harbor Management System",
    summary:
      "Vessel-operations system managing tug assignment, mooring, and service scheduling for UAE port operators. Automated scheduling and invoice generation.",
    impact:
      "Reduced manual coordination and billing errors. Owned end-to-end delivery — on-site requirement sessions through UAT sign-off and production support.",
    stack: ["Angular", ".NET Core", "SQL Server", "IIS"],
    hasCaseStudy: true,
  },
  {
    slug: "rtos",
    title: "RTOS — Rail Terminal Operation System",
    summary:
      "Manages rail operations and container movement between yards, including truck-loading coordination and third-party system integrations with automated invoice generation.",
    impact:
      "Modernized legacy VB.NET modules by rewriting critical paths in .NET Core and Angular — improving maintainability and bug-fix turnaround.",
    stack: ["Angular", ".NET Core", "VB.NET", "SQL Server"],
    hasCaseStudy: true,
  },
];
