export const profile = {
  name: "Abhijeet Sakpal",
  role: "Full Stack Developer",
  tagline:
    "I help enterprises ship AI-powered, cloud-native applications — from .NET microservices to Angular UIs and LLM-driven automation.",
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
    title: "Uniflow — No-Code / Low-Code Application Builder",
    summary:
      "A no-code platform that lets business users generate dynamic apps with forms, workflows, approval matrices, and role-based menus by uploading a configurable Excel template.",
    impact:
      "Metadata-driven architecture stores all app structures and rules in the database — new apps launch and update without redeployment.",
    stack: ["Angular", ".NET Core", "C#", "SQL Server"],
  },
  {
    title: "Ticketing Tool — LLM-Powered Email Management",
    summary:
      "An email-driven ticket platform that ingests, classifies, and routes support tickets using LLM integration. Modular Angular UI with role-based features for operators, supervisors, and admins.",
    impact:
      "Reduced manual email handling by 40% and significantly improved response turnaround for the support operations team.",
    stack: ["Angular", ".NET Core", "MySQL", "Docker", "LLM"],
  },
  {
    title: "HMS — Harbor Management System",
    summary:
      "Vessel-operations system managing tug assignment, mooring, and service scheduling for UAE port operators. Automated scheduling and invoice generation.",
    impact:
      "Reduced manual coordination and billing errors. Owned end-to-end delivery — on-site requirement sessions through UAT sign-off and production support.",
    stack: ["Angular", ".NET Core", "SQL Server", "IIS"],
  },
  {
    title: "RTOS — Rail Terminal Operation System",
    summary:
      "Manages rail operations and container movement between yards, including truck-loading coordination and third-party system integrations with automated invoice generation.",
    impact:
      "Modernized legacy VB.NET modules by rewriting critical paths in .NET Core and Angular — improving maintainability and bug-fix turnaround.",
    stack: ["Angular", ".NET Core", "VB.NET", "SQL Server"],
  },
];
