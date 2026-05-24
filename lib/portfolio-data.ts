export const site = {
  name: "Darshit",
  title: "AI/ML Engineer & Software Developer",
  email: "hello@example.com",
  location: "India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  headline: "Engineering intelligence at every layer of the stack.",
  paragraphs: [
    "I'm an AI/ML engineer and software developer based in India, focused on turning research-grade models into reliable products — APIs, dashboards, and full-stack experiences that teams can ship and maintain.",
    "My work spans computer vision, NLP, classical ML, and modern deep learning pipelines, paired with TypeScript/React frontends and Python backends. I care about observability, clean interfaces, and measurable impact in production.",
  ],
  stats: [
    { value: "3+", label: "Years building" },
    { value: "15+", label: "Projects delivered" },
    { value: "Full-stack", label: "ML + Software" },
  ],
  interests: ["Computer Vision", "LLMs & RAG", "MLOps", "Product Engineering"],
  highlights: [
    {
      label: "Focus",
      value: "ML systems & product engineering",
      icon: "target" as const,
    },
    {
      label: "Approach",
      value: "Research → prototype → production",
      icon: "route" as const,
    },
    {
      label: "Collaboration",
      value: "Cross-functional, documentation-first",
      icon: "users" as const,
    },
  ],
} as const;

export const projects = [
  {
    title: "Vision Analytics Platform",
    description:
      "Real-time object detection pipeline with model serving, batch inference jobs, and an operator dashboard for monitoring drift and latency.",
    tags: ["PyTorch", "FastAPI", "React", "Docker"],
    year: "2025",
    href: "#",
    featured: true,
  },
  {
    title: "RAG Knowledge Assistant",
    description:
      "Retrieval-augmented QA system over internal docs with hybrid search, reranking, and evaluation harnesses for answer quality.",
    tags: ["LangChain", "OpenAI", "PostgreSQL", "Next.js"],
    year: "2024",
    href: "#",
    featured: true,
  },
  {
    title: "MLOps Deployment Kit",
    description:
      "Reusable templates for training workflows, experiment tracking, and CI/CD promotion from staging to production inference.",
    tags: ["MLflow", "GitHub Actions", "Kubernetes"],
    year: "2024",
    href: "#",
    featured: false,
  },
  {
    title: "Predictive Maintenance API",
    description:
      "Time-series forecasting service for sensor fleets with alerting rules, REST endpoints, and Grafana dashboards.",
    tags: ["scikit-learn", "Python", "Grafana"],
    year: "2023",
    href: "#",
    featured: false,
  },
] as const;

export const techStack = [
  {
    id: "ml",
    title: "AI & Machine Learning",
    description:
      "Research, training, evaluation, and shipping models to production with monitoring and versioning.",
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
      "Hugging Face",
      "LangChain",
      "MLflow",
    ],
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Full-stack apps, APIs, and interfaces — from architecture to deployment and maintenance.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "ops",
    title: "DevOps & Cloud",
    description:
      "Containers, CI/CD, and cloud infrastructure to keep systems reliable at scale.",
    technologies: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "AWS",
      "Linux",
      "Grafana",
      "Git",
    ],
  },
] as const;

export const teakstack = [
  { icon: "/icons/python.svg" as const, tech: "Python" },
  { icon: "/icons/typescript.svg" as const, tech: "TypeScript" },
  { icon: "/icons/react.svg" as const, tech: "React" },
  { icon: "/icons/nextjs2.svg" as const, tech: "Next.js" },
  { icon: "/icons/nodejs.svg" as const, tech: "Node.js" },
  { icon: "/icons/postgresql.svg" as const, tech: "PostgreSQL" },
  { icon: "/icons/redis.svg" as const, tech: "Redis" },
  { icon: "/icons/docker.svg" as const, tech: "Docker" },
  { icon: "/icons/kubernetes.svg" as const, tech: "Kubernetes" },
  { icon: "/icons/aws.svg" as const, tech: "AWS" },
  { icon: "/icons/linux.svg" as const, tech: "Linux" },
  { icon: "/icons/grafana.svg" as const, tech: "Grafana" },
  { icon: "/icons/git.svg" as const, tech: "Git" },
  { icon: "/icons/mlflow.png" as const, tech: "MLflow" },
  { icon: "/icons/pytourch.jpeg" as const, tech: "PyTorch" },
  { icon: "/icons/tensorflow.svg" as const, tech: "TensorFlow" },
  { icon: "/icons/langchain.svg" as const, tech: "LangChain" }, 
  { icon: "/icons/openai.svg" as const, tech: "OpenAI" },
  { icon: "/icons/mlflow.png" as const, tech: "MLflow" },
  { icon: "/icons/docker.svg" as const, tech: "Docker" },
  { icon: "/icons/kubernetes.svg" as const, tech: "Kubernetes" },
  { icon: "/icons/aws.svg" as const, tech: "AWS" },
  { icon: "/icons/linux.svg" as const, tech: "Linux" },
  { icon: "/icons/grafana.svg" as const, tech: "Grafana" },
  { icon: "/icons/git.svg" as const, tech: "Git" },
    { icon: "/icons/mlflow.png" as const, tech: "MLflow" },
  { icon: "/icons/pytourch.jpeg" as const, tech: "PyTorch" },
  { icon: "/icons/tensorflow.svg" as const, tech: "TensorFlow" },
  { icon: "/icons/langchain.svg" as const, tech: "LangChain" }, 
  { icon: "/icons/openai.svg" as const, tech: "OpenAI" },
  { icon: "/icons/mlflow.png" as const, tech: "MLflow" },
  { icon: "/icons/docker.svg" as const, tech: "Docker" },
  { icon: "/icons/kubernetes.svg" as const, tech: "Kubernetes" },
  { icon: "/icons/aws.svg" as const, tech: "AWS" },
  { icon: "/icons/linux.svg" as const, tech: "Linux" },
  { icon: "/icons/grafana.svg" as const, tech: "Grafana" },
  { icon: "/icons/git.svg" as const, tech: "Git" },
];

export const experience = [
  {
    role: "Freelance Developer",
    company: "Self",
    period: "MAY 2024 — Present",
    description:
      "Developed custom software solutions for clients, including web applications, mobile apps, and enterprise systems.",
  },
  {
    role: "React Developer",
    company: "CODEFENCERS Pvt Ltd",
    period: "SEPT 2023 — MAY 2024",
    description:
      "Developed full-stack features in React and Python services, integrated third-party ML providers, and improved release velocity with automated testing.",
  },
  {
    role: "React Intern",
    company: "Maxgen Technologies Pvt Ltd",
    period: "JAN 2023 — MAY 2023",
    description:
      "Developed and maintained React-based web applications for the company, including feature development, bug fixes, and performance optimization.",
  },
] as const;

export const contact = {
  headline: "Let's build something intelligent together.",
  subtext:
    "Open to freelance projects, full-time roles, and research collaborations. Tell me about your problem — models, product, or both.",
} as const;
