// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit this file to update the site — components read everything from here.
// ---------------------------------------------------------------------------

export const profile = {
  firstName: "Pavan",
  lastName: "Joshi",
  roles: [
    "AI Backend Engineer",
    "Generative AI Developer",
    "LLM Systems Builder",
  ],
  tagline:
    "Building production-grade AI systems with LLMs, LangGraph, and FastAPI. Specialising in scalable multi-tenant SaaS architectures and intelligent data pipelines.",
  email: "pavanjoshi2311@gmail.com",
  phone: "+91 98455 54827",
  phoneHref: "+919845554827",
  location: "Kalaburgi, India",
  languages: ["English", "Hindi", "Kannada"],
  available: true,
} as const;

export const stats = [
  { value: 2, prefix: "~", suffix: "yr", label: "Experience" },
  { value: 75, prefix: "", suffix: "%", label: "API Cost Cut" },
  { value: 90, prefix: "", suffix: "%+", label: "LLM Accuracy" },
  { value: 6, prefix: "", suffix: "", label: "AI Agents Built" },
] as const;

export const about = {
  heading: ["Building the", "AI Future", "One Pipeline at a Time"],
  paragraphs: [
    "I'm an AI Backend Engineer with nearly 2 years of experience crafting production-grade LLM systems. I specialise in turning complex AI research into reliable, scalable backend solutions.",
    "From architecting multi-tenant SaaS platforms with strict row-level data isolation to engineering LLM inference pipelines that jumped from 35% to 90%+ accuracy, I work at the intersection of cutting-edge AI and rock-solid engineering.",
  ],
  highlights: [
    { icon: "brain", title: "LLM Engineering", text: "Prompt engineering, RAG systems, agent workflows" },
    { icon: "server", title: "SaaS Architecture", text: "Multi-tenant, row-level isolation, scalable design" },
    { icon: "bolt", title: "API Performance", text: "Batching, async pipelines, 50% faster throughput" },
    { icon: "shield", title: "SOC2 Security", text: "Vanta platform, monitoring, audit readiness" },
  ],
  tags: ["Python", "LangGraph", "FastAPI", "Azure OpenAI", "PostgreSQL", "Qdrant"],
} as const;

export const skillGroups = [
  {
    icon: "brain",
    title: "AI / LLM",
    accent: "accent" as const,
    skills: ["LangChain", "LangGraph", "Azure OpenAI", "RAG Systems", "Prompt Engineering", "HITL Frameworks"],
  },
  {
    icon: "server",
    title: "Backend",
    accent: "iris" as const,
    skills: ["Python", "FastAPI", "WebSockets", "Celery", "Redis", "REST APIs"],
  },
  {
    icon: "database",
    title: "Databases",
    accent: "accent" as const,
    skills: ["PostgreSQL", "Qdrant", "MongoDB", "Vector DBs"],
  },
  {
    icon: "search",
    title: "Retrieval Systems",
    accent: "iris" as const,
    skills: ["BM25", "Dense Embeddings", "Sparse Embeddings", "Inverted Index", "A2A Retrieval"],
  },
  {
    icon: "blocks",
    title: "Architecture",
    accent: "accent" as const,
    skills: ["Multi-Tenant SaaS", "Event-Driven", "Row-Level Security", "SOC2 Compliance"],
  },
  {
    icon: "cloud",
    title: "Cloud & Tools",
    accent: "iris" as const,
    skills: ["Azure OpenAI", "Azure Embeddings", "Vanta"],
  },
] as const;

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Infokalash Private Limited",
    period: "Nov 2024 - Present",
    current: true,
    points: [
      "Architected and deployed **6 AI-powered agent workflows** (market research, conviction scoring, lean canvas, market sizing, financial projections, GTM strategy) using ::LangGraph & Azure OpenAI::. Implemented async WebSocket execution with Celery and Redis, improving system reliability by **30%**.",
      "Engineered a robust **LLM-driven metadata inference pipeline** using LangChain; boosted inference accuracy from __35%__ to ::90%+:: through iterative prompt engineering.",
      "Built scalable **multi-tenant FastAPI backend** with TenantContext middleware enforcing strict row-level data isolation across **6 user personas** within a shared PostgreSQL environment.",
      "Designed **Change Inference Capture (CIC)**, an event-driven incremental processing framework, reducing redundant computation and enabling real-time updates.",
      "Researched and implemented advanced retrieval techniques: **BM25, inverted indexing, dense/sparse embeddings, MCP, A2A retrieval, and HITL frameworks**.",
    ],
    tags: ["LangGraph", "LangChain", "FastAPI", "Celery", "Redis", "Azure OpenAI", "PostgreSQL"],
  },
] as const;

export const projects = [
  {
    title: "Metadata Intelligence",
    subtitle: "Morpheo Omega AI Data Coworker",
    duration: "9 months",
    accent: "accent" as const,
    icon: "database",
    description:
      "A 3-stage AI pipeline (metadata inference → relationship inference → edge metadata generation) that transforms raw enterprise schemas into enriched datasets with automatic PK/FK detection and inter-table relationship graphs.",
    achievements: [
      "75% API cost reduction via LLM request batching (4 tables/call)",
      "50% faster processing via event-driven Change Inference Capture (CIC)",
      "Inference accuracy improved from 35% → 90%+ via prompt engineering",
    ],
    tags: ["LangChain", "Azure OpenAI", "FastAPI", "PostgreSQL"],
  },
  {
    title: "Digi Incubator",
    subtitle: "AI-Powered Startup Platform",
    duration: "4 months",
    accent: "iris" as const,
    icon: "rocket",
    description:
      'A full SaaS platform orchestrating AI agent workflows for startup analysis. Multi-tenant architecture, freemium access controls, and "Observatory", a secure cross-tenant founder discovery layer.',
    achievements: [
      "6 LangGraph AI agent workflows with async Celery + Redis pipelines",
      "Multi-tenant schema with soft deletes, immutable history & freemium controls",
      "Observatory: secure cross-tenant discovery with strict whitelisting",
    ],
    tags: ["LangGraph", "Celery", "Redis", "PostgreSQL"],
  },
] as const;

export const education = {
  degree: "B.Tech, Electronics & Telecommunication Engineering",
  school: "KLE Dr. M S Sheshgiri College of Engineering and Technology",
  place: "Belgaum, Karnataka",
  year: "Graduated 2024",
  grade: "CGPA 7.65 / 10",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
