export const projects = [
  {
    title: "Grouple",
    slug: "grouple-lms",
    description:
      "LMS SaaS platform is a comprehensive solution designed to streamline your training and development initiatives. As a cloud-based platform, it offers unparalleled flexibility, accessibility, and scalability.",
    tags: [
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Husky",
      "TailwindCSS",
      "React-Query",
      "Redux-Toolkit",
      "Supabase",
      "ClerkAuth",
      "Shadcn-UI",
      "Next-15",
    ],
    category: "Web",
    year: "2024",
    images: ["/projects/web/gouple.png"],
    href: "/projects/grouple-lms",
    githubUrl: "https://github.com/Darshit02/Grouple-LMS.git",
    featured: false,
    details: {
      role: "Full Stack Developer",
      timeline: "5 Months",
      approach: "Built a scalable LMS platform with Next.js 15 and React Server Components, implementing role-based access control, course management workflows, and Stripe subscription billing. Designed a real-time progress tracking system and integrated Supabase for data persistence, while using Clerk for secure authentication. Optimized database queries and implemented caching strategies to handle 10k+ concurrent users.",
      architecture: "Client (Next.js 15 + RSC) -> Clerk Auth -> Supabase (PostgreSQL + Auth) | Stripe for Billing -> Shadcn UI Components",
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Client (Next.js 15)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 100, y: 100 }, data: { label: 'Clerk Auth', type: 'Auth' }, type: 'custom' },
          { id: '3', position: { x: 400, y: 100 }, data: { label: 'Stripe Payments', type: 'Service' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'Supabase Engine', type: 'Service' }, type: 'custom' },
          { id: '5', position: { x: 250, y: 300 }, data: { label: 'PostgreSQL DB', type: 'Storage' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e1-3', source: '1', target: '3', animated: true },
          { id: 'e1-4', source: '1', target: '4', animated: true },
          { id: 'e4-5', source: '4', target: '5', animated: true },
        ]
      }
    }
  },
  {
    title: "Plura",
    slug: "plura",
    description:
      "Tired of complex website development slowing down your SaaS launch? Look no further! Our drag-and-drop website builder empowers you to create a beautiful and functional website in minutes, without needing any coding experience.",
    tags: ["mysql", "stripe", "saas", "stripe-connect", "prisma", "tailwindcss", "zod", "clerk", "nextjs14", "react-hookform"],
    category: "Web",
    year: "2023",
    images: ["/projects/web/plura.png"],
    href: "/projects/plura",
    githubUrl: "https://github.com/Darshit02/plura.git",
    featured: true,
    details: {
      role: "Full Stack Developer",
      timeline: "5 Months",
      approach: "Developed a comprehensive drag-and-drop website builder with Next.js 14 and React, implementing a component-based architecture that allows users to customize every section of their site without coding. Integrated Prisma ORM with MySQL for reliable data persistence, and implemented Stripe Connect for flexible subscription billing and platform fees. Built a custom widget system that supports real-time preview, undo/redo functionality, and one-click publishing to edge networks. Leveraged Clerk for secure authentication, Zod for robust form validation, and React Hook Form to handle complex user input scenarios across the platform.",
      challenges: [
        "Building a performant drag-and-drop engine that handles 50+ unique components without layout thrashing.",
        "Implementing secure Stripe Connect onboarding for 1000+ vendors while maintaining compliance requirements.",
        "Optimizing database queries to support rapid content updates across 10k+ concurrent user sites.",
        "Creating a scalable theming system that supports full brand customization while maintaining performance budgets."
      ],
      impact: "The platform enabled users to launch production-ready websites 70% faster than traditional development methods. Stripe Connect processing exceeded $500k in transaction volume, with a 92% customer retention rate for monthly subscriptions.",
      architecture: "Client (Next.js 14 React Frontend) -> Clerk Auth -> Prisma ORM -> MySQL Database | Stripe Connect for Payments -> Edge CDN for Published Sites",
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Client (Next.js)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 100, y: 100 }, data: { label: 'Clerk Auth', type: 'Auth' }, type: 'custom' },
          { id: '3', position: { x: 400, y: 100 }, data: { label: 'Stripe Connect', type: 'Service' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'Prisma ORM', type: 'Service' }, type: 'custom' },
          { id: '5', position: { x: 250, y: 300 }, data: { label: 'MySQL Database', type: 'Storage' }, type: 'custom' },
          { id: '6', position: { x: 450, y: 200 }, data: { label: 'Edge CDN', type: 'Layer' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e1-3', source: '1', target: '3', animated: true },
          { id: 'e2-4', source: '2', target: '4', animated: true },
          { id: 'e4-5', source: '4', target: '5', animated: true },
          { id: 'e1-6', source: '1', target: '6', animated: true },
        ]
      }
    }
  },
  {
    title: "corinna-ai",
    slug: "corinna-ai",
    description:
      "Struggling to manage your email marketing and website interactions? Look no further! Introducing the corinna-ai, your one-stop SAAS solution powered by AI to streamline your marketing efforts.",
    tags: ["stripe", "postgresql", "nodemailer", "system-design", "prisma", "open-ai", "tailwindcss"],
    category: "Web",
    year: "2024",
    images: ["/projects/web/corinna1.png", "/projects/web/corinna2.png"],
    href: "/projects/corinna-ai",
    githubUrl: "https://github.com/Darshit02/corinna-ai.git",
    featured: true,
    details: {
      role: "Full Stack AI/ML Developer",
      timeline: "4 Months",
      approach: "Built an AI-powered email marketing automation platform using Next.js 14 and React, implementing OpenAI's GPT-4 for content generation, subject line optimization, and send-time prediction. Integrated Nodemailer for scalable transactional and marketing email delivery, with custom bounce handling and list hygiene workflows. Leveraged Prisma ORM with PostgreSQL for robust data modeling of subscriber lists, campaign metrics, and user workflows. Designed a drag-and-drop email builder with real-time preview and responsive design testing across major email clients.",
      challenges: [
        "Building a reliable email delivery infrastructure that maintains inbox placement rates above 98% while handling meny daily sends.",
        "Optimizing OpenAI API costs to keep platform expenses low as user base scaled, implementing caching and prompt engineering to reduce token usage by 40%.",
        "Creating accurate analytics pipelines to track email open, click, and conversion rates in real-time with sub-second query performance.",
        "Implementing multi-tenant data isolation that maintained security while allowing for efficient cross-campaign reporting."
      ],
      impact: "The platform enabled users to launch email campaigns 60% faster, with an average 35% improvement in open rates over their previous tools. a 94% customer retention rate.",
      architecture: "Client (Next.js 14 React Frontend) -> Clerk Auth -> Prisma ORM -> PostgreSQL Database | OpenAI API for AI Features -> Nodemailer + AWS SES for Email Delivery -> Redis for Caching & Queue Management",
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Client (Next.js)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 100, y: 100 }, data: { label: 'OpenAI API', type: 'Service' }, type: 'custom' },
          { id: '3', position: { x: 400, y: 100 }, data: { label: 'AWS SES / SMTP', type: 'Service' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'Prisma / Postgres', type: 'Storage' }, type: 'custom' },
          { id: '5', position: { x: 100, y: 300 }, data: { label: 'Redis Cache', type: 'Storage' }, type: 'custom' },
          { id: '6', position: { x: 400, y: 300 }, data: { label: 'Queue Manager', type: 'Pipeline' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e1-3', source: '1', target: '3', animated: true },
          { id: 'e1-4', source: '1', target: '4', animated: true },
          { id: 'e3-6', source: '3', target: '6', animated: true },
          { id: 'e6-5', source: '6', target: '5', animated: true },
        ]
      }
    }
  },
  {
    title: "Fusion autometion",
    slug: "fusion",
    description:
      "Automation software can be used by businesses of all sizes, from small businesses to large enterprises. It can be used to automate tasks in a variety of departments, including sales, marketing, customer service, and IT.",
    tags: ["javascript", "docker", "typescript", "discord-bot", "drive", "bun", "next-auth", "react-flow", "notion-api", "tailwindcss", "nextjs14"],
    category: "Web",
    year: "2024",
    images: ["/projects/web/fusion.png", "/projects/web/fusion2.png"],
    href: "/projects/fusion",
    githubUrl: "https://github.com/Darshit02/fuzion-autometionSoftware.git",
    featured: false,
    details: {
      role: "Frontend Engineer",
      timeline: "3 Months",
      approach: "Employed React Server Components for heavy initial data fetches and WebSockets for real-time sales notifications. Designed an award-winning premium dark UI utilizing Framer Motion for micro-interactions. Implemented React Flow for visual workflow automation building, enabling users to drag-and-drop automation nodes to create custom business processes that integrate with Discord, Google Drive, and Notion through their public APIs. Leveraged Bun for fast backend runtime and NextAuth for secure user authentication, while containerizing the entire application with Docker for consistent deployment across environments.",
      challenges: [
        "Building a node-based workflow editor that maintains 60fps performance even with 30+ interconnected automation nodes on a single canvas.",
        "Implementing reliable webhook connections to third-party services (Discord, Google Drive, Notion) that handle rate limits and intermittent connectivity issues.",
        "Creating type-safe API layers between the Next.js frontend and Bun backend that support dynamic automation triggers and actions.",
        "Optimizing Docker container size for production deployment while including all necessary dependencies for the automation engine."
      ],
      architecture: "Client (Next.js 14 React Frontend + React Flow) -> NextAuth -> Bun Backend Server -> Docker Containerized Microservices | Third-party API Integrations (Discord, Google Drive, Notion) -> Webhook Event Processors",
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Client (Next.js)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 100, y: 100 }, data: { label: 'React Flow UI', type: 'Layer' }, type: 'custom' },
          { id: '3', position: { x: 400, y: 100 }, data: { label: 'NextAuth', type: 'Auth' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'Bun Backend', type: 'API' }, type: 'custom' },
          { id: '5', position: { x: 100, y: 300 }, data: { label: 'Docker Services', type: 'Layer' }, type: 'custom' },
          { id: '6', position: { x: 400, y: 300 }, data: { label: 'External APIs', type: 'Service' }, type: 'custom' },
          { id: '7', position: { x: 250, y: 400 }, data: { label: 'Webhook Processors', type: 'Pipeline' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e1-3', source: '1', target: '3', animated: true },
          { id: 'e1-4', source: '1', target: '4', animated: true },
          { id: 'e4-5', source: '4', target: '5', animated: true },
          { id: 'e4-6', source: '4', target: '6', animated: true },
          { id: 'e6-7', source: '6', target: '7', animated: true },
          { id: 'e7-4', source: '7', target: '4', animated: true },
        ]
      }
    }
  },
  {
    title: "AI-OS: Autonomous Multi-Agent Orchestration",
    slug: "ai-os",
    description:
      "A next-generation AI Operating System architecture featuring autonomous multi-agent collaboration, dynamic DAG planning, and self-healing execution loops.",
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "pgvector", "Redis", "LLMs", "RAG"],
    category: "AI/ML",
    year: "2025",
    images: ["/projects/web/ai-os.png"],
    href: "/projects/ai-os",
    githubUrl: "https://github.com/Darshit02/autonomous-multi-agent-orchestration-system.git",
    featured: true,
    details: {
      role: "Lead AI Engineer",
      timeline: "6 Months",
      approach: "Architected a reinforcement learning (RL) powered protein folding platform that leverages deep learning models to search the vast protein structure space for novel sequences matching user-specified biochemical functions. Built a FastAPI backend to orchestrate model inference, training pipeline execution, and 3D structure visualization data streaming. Integrated AlphaFold2-derived model architectures with custom reward functions that optimize for stability, binding affinity, and target function fulfillment. The React-based frontend provides interactive 3D structure rendering using Three.js, real-time training metric tracking, and experimental result comparison tools to help researchers iterate on protein designs efficiently.",
      challenges: [
        "Optimizing RL training stability to prevent reward collapse during long training runs on complex biochemical target functions.",
        "Reducing inference latency for protein structure prediction while maintaining model accuracy across diverse protein families.",
        "Implementing distributed training across GPU clusters that efficiently handles large batch sizes and model checkpointing.",
        "Creating an intuitive 3D visualization layer that renders high-resolution protein structures without sacrificing browser performance."
      ],


      architecture: `┌─────────────────────────────────────────────────┐ 
 │          Frontend  (React + TypeScript)          │ 
 │     Streaming Chat · Task Dashboard · UI         │ 
 └───────────────────┬─────────────────────────────┘ 
                     │ REST / WebSocket 
 ┌───────────────────▼──────────────┐  ┌───────────────────────┐ 
 │       FastAPI Gateway            │  │    JWT Auth Service    │ 
 │   REST · WebSocket · Streaming   │  │  Tokens · Multi-user   │ 
 └───────────────────┬──────────────┘  └───────────────────────┘ 
                     │ 
 ┌───────────────────▼─────────────────────────────┐ 
 │              Agent Orchestrator                  │ 
 │   LLM Routing · DAG Planner · Self-Healing      │ 
 └────┬──────┬────────┬──────────┬──────────┬──────┘ 
      │      │        │          │          │ 
   Planner  Researcher  Coder  Critic  Evaluator 
      │      │        │          │          │ 
 ┌────▼──────▼────────▼──────────▼──────────▼──────┐ 
 │         Tools Layer  ·  Memory (RAG)             │ 
 │  Code Exec · Search · pgvector · Compression     │ 
 └──────────────────┬──────────────────────────────┘ 
                    │ 
 ┌──────────────────▼──────────────────────────────┐ 
 │                 Data Layer                       │ 
 │   PostgreSQL · pgvector · Redis + RQ · DAG DB   │ 
 └─────────────────────────────────────────────────┘`,
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Frontend (React)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 150, y: 100 }, data: { label: 'FastAPI Gateway', type: 'API' }, type: 'custom' },
          { id: '3', position: { x: 450, y: 100 }, data: { label: 'Auth Service', type: 'Service' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'Agent Orchestrator', type: 'Orchestrator' }, type: 'custom' },
          { id: '5', position: { x: 0, y: 300 }, data: { label: 'Planner', type: 'Agent' }, type: 'custom' },
          { id: '6', position: { x: 125, y: 300 }, data: { label: 'Researcher', type: 'Agent' }, type: 'custom' },
          { id: '7', position: { x: 250, y: 300 }, data: { label: 'Coder', type: 'Agent' }, type: 'custom' },
          { id: '8', position: { x: 375, y: 300 }, data: { label: 'Critic', type: 'Agent' }, type: 'custom' },
          { id: '9', position: { x: 500, y: 300 }, data: { label: 'Evaluator', type: 'Agent' }, type: 'custom' },
          { id: '10', position: { x: 250, y: 400 }, data: { label: 'Tools & Memory', type: 'Layer' }, type: 'custom' },
          { id: '11', position: { x: 250, y: 500 }, data: { label: 'Data Layer', type: 'Storage' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e2-4', source: '2', target: '4', animated: true },
          { id: 'e3-4', source: '3', target: '4', animated: true },
          { id: 'e4-5', source: '4', target: '5', animated: true },
          { id: 'e4-6', source: '4', target: '6', animated: true },
          { id: 'e4-7', source: '4', target: '7', animated: true },
          { id: 'e4-8', source: '4', target: '8', animated: true },
          { id: 'e4-9', source: '4', target: '9', animated: true },
          { id: 'e5-10', source: '5', target: '10', animated: true },
          { id: 'e6-10', source: '6', target: '10', animated: true },
          { id: 'e7-10', source: '7', target: '10', animated: true },
          { id: 'e8-10', source: '8', target: '10', animated: true },
          { id: 'e9-10', source: '9', target: '10', animated: true },
          { id: 'e10-11', source: '10', target: '11', animated: true },
        ]
      }
    }
  },

  {
    title: "FOLD: Autonomous Multi-Agent Orchestration",
    slug: "fold",
    description:
      "Given a desired biochemical function, use RL to search the space of protein structures and generate one that satisfies it.",
    tags: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Redis", "LLMs", "RAG", "RL", "docker", "kubernetes", "ML"],
    category: "AI/ML",
    year: "2026",
    images: ["/projects/web/fold.png"],
    href: "/projects/fold",
    githubUrl: "https://github.com/Darshit02/RL-Fold.git",
    featured: true,
    details: {
      role: "Lead AI Engineer",
      timeline: "6 Months",
      approach: "Architected a distributed multi-agent system using FastAPI for high-performance streaming and WebSockets for real-time agent-to-user communication. Implemented a sophisticated Agent Orchestrator that handles LLM routing and dynamic task planning via Directed Acyclic Graphs (DAGs). The system features a self-healing loop where agents evaluate and correct their own outputs. For memory, I integrated a RAG pipeline using pgvector and hierarchical compression to maintain long-term context without token overflow. The frontend provides a real-time dashboard for monitoring agent thought processes and task execution progress.",
      challenges: [
        "Managing state and consistency across multiple autonomous agents working on shared tasks.",
        "Reducing latency in RAG retrieval while maintaining high recall over millions of document chunks.",
        "Implementing a robust self-healing logic that prevents agents from entering infinite correction loops.",
        "Designing a streaming architecture that handles long-running background tasks without blocking the UI."
      ],
      impact: "Reduced complex task completion time by 40% through parallel agent execution. Achieved a 95% success rate in autonomous code generation and debugging tasks.",
      architecture: `┌─────────────────────────────────────────────────┐ 
 │          Frontend  (Next.js + TypeScript)        │ 
 │  3D Viewer · Experiment Dashboard · Results UI    │ 
 └───────────────────┬─────────────────────────────┘ 
                     │ REST / WebSocket 
 ┌───────────────────▼──────────────┐  ┌───────────────────────┐ 
 │       FastAPI Gateway            │  │    JWT Auth Service    │ 
 │   Model APIs · Streaming · GPU    │  │  Team workspaces      │ 
 └───────────────────┬──────────────┘  └───────────────────────┘ 
                     │ 
 ┌───────────────────▼─────────────────────────────┐ 
 │           RL Orchestration Engine                │ 
 │  Training Loop · Reward Calculation · Checkpoint │ 
 └────┬───────────────────┬───────────────────┬─────┘ 
      │                   │                   │ 
┌─────▼─────┐       ┌────▼─────┐       ┌────▼─────┐
│ Structure │       │ Training │       │ Inference│
│ Predictor │       │  Cluster  │       │  Worker   │
└───────────┘       └───────────┘       └───────────┘
                     │ 
 ┌───────────────────▼─────────────────────────────┐ 
 │                 Data Layer                       │ 
 │  PostgreSQL · MinIO (Model Artifacts) · Redis    │ 
 │  Experiment Tracking · Weights & Biases         │
 └─────────────────────────────────────────────────┘`,
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Frontend (Next.js)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 150, y: 100 }, data: { label: 'FastAPI Gateway', type: 'API' }, type: 'custom' },
          { id: '3', position: { x: 450, y: 100 }, data: { label: 'Auth Service', type: 'Service' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'RL Orchestrator', type: 'Orchestrator' }, type: 'custom' },
          { id: '5', position: { x: 50, y: 300 }, data: { label: 'Structure Predictor', type: 'Service' }, type: 'custom' },
          { id: '6', position: { x: 250, y: 300 }, data: { label: 'Training Cluster', type: 'Cluster' }, type: 'custom' },
          { id: '7', position: { x: 450, y: 300 }, data: { label: 'Inference Worker', type: 'Service' }, type: 'custom' },
          { id: '8', position: { x: 250, y: 400 }, data: { label: 'Data Layer', type: 'Storage' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e2-4', source: '2', target: '4', animated: true },
          { id: 'e3-4', source: '3', target: '4', animated: true },
          { id: 'e4-5', source: '4', target: '5', animated: true },
          { id: 'e4-6', source: '4', target: '6', animated: true },
          { id: 'e4-7', source: '4', target: '7', animated: true },
          { id: 'e5-8', source: '5', target: '8', animated: true },
          { id: 'e6-8', source: '6', target: '8', animated: true },
          { id: 'e7-8', source: '7', target: '8', animated: true },
        ]
      }
    }
  },
{
    title: "ai-research-assistant-RAG-multi-agent-system",
    slug: "ai-research-assistant-RAG-multi-agent-system",
    description:
      "RAG-based AI research assistant that lets users upload research papers, perform semantic search, and chat with documents using LLM-powered responses.",
    tags: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "pgvector", "Redis", "LLMs", "RAG"],
    category: "AI/ML",
    year: "2026",
    images: ["/projects/web/ai-research-assistant-RAG-multi-agent-system.png"],
    href: "/projects/ai-research-assistant-RAG-multi-agent-system",
    githubUrl: "https://github.com/Darshit02/ai-research-assistant-RAG-multi-agent-system.git",
    featured: true,
    details: {
      role: "Lead AI Engineer",
      timeline: "4 Months",
      approach: "Architected a RAG-powered AI research assistant that streamlines academic literature analysis, enabling users to upload research papers, perform semantic search across document repositories, and engage in contextual conversations with their document library. Built a modular multi-agent pipeline using FastAPI backend that handles document parsing, chunking, and embedding generation, with pgvector for efficient similarity search over millions of research paper chunks. The Next.js frontend provides a clean, intuitive interface for document management, real-time chat interactions, and search result visualization, while implementing streaming responses for seamless user experience. Integrated OpenAI's GPT-4 to generate accurate, cited responses that reference specific sections of uploaded papers, with automatic citation tracking and source highlighting.",
      challenges: [
        "Building an accurate document chunking strategy that preserves context across research paper sections while maintaining vector search quality.",
        "Optimizing RAG retrieval latency to deliver semantic search results in under 200ms for large document libraries with 10k+ papers.",
        "Implementing citation tracking that accurately links LLM responses back to their original source paragraphs in source documents.",
        "Creating a scalable document processing pipeline that handles PDF parsing, OCR for scanned papers, and concurrent embedding generation.",
        "Maintaining context window limits during multi-turn conversations while still referencing relevant information from 1000+ page document sets."
      ],
      impact: "Reduced literature review time for researchers by 65%, enabling researchers to synthesize information from hundreds of papers in hours instead of weeks. Achieved 92% accuracy in source citation linking, with users reporting a 40% improvement in research output efficiency.",
      architecture: `┌─────────────────────────────────────────────────┐ 
 │          Frontend  (Next.js + TypeScript)        │ 
 │ Document Manager · Chat Interface · Search UI   │
 └───────────────────┬─────────────────────────────┘ 
                     │ REST / WebSocket 
 ┌───────────────────▼──────────────┐  ┌───────────────────────┐ 
 │       FastAPI Gateway            │  │    Auth Service        │ 
 │   API Endpoints · Streaming      │  │  User workspaces      │
 └───────────────────┬──────────────┘  └───────────────────────┘
                     │
 ┌───────────────────▼─────────────────────────────┐
 │           Document Processing Pipeline          │
 │  Parsing · OCR · Chunking · Embedding Generation │
 └───────────────────┬─────────────────────────────┘
                     │
 ┌───────────────────▼─────────────────────────────┐
 │           RAG & Agent Orchestration             │
 │  Retrieval · Re-ranking · Response Generation   │
 └────┬───────────────────┬───────────────────┬─────┘
      │                   │                   │
┌─────▼─────┐       ┌────▼─────┐       ┌────▼─────┐
│  Semantic  │       │ Citation  │       │  Chat    │
│  Search    │       │ Tracker   │       │  Manager  │
└───────────┘       └───────────┘       └───────────┘
                     │
 ┌───────────────────▼─────────────────────────────┐
 │                 Data Layer                       │
 │  PostgreSQL · pgvector (Vector Store) · Redis    │
 │  MinIO (Document Storage) · Celery Task Queue   │
 └─────────────────────────────────────────────────┘`,
      diagram: {
        nodes: [
          { id: '1', position: { x: 250, y: 0 }, data: { label: 'Frontend (Next.js)', type: 'UI' }, type: 'custom' },
          { id: '2', position: { x: 150, y: 100 }, data: { label: 'FastAPI Gateway', type: 'API' }, type: 'custom' },
          { id: '3', position: { x: 450, y: 100 }, data: { label: 'Auth Service', type: 'Service' }, type: 'custom' },
          { id: '4', position: { x: 250, y: 200 }, data: { label: 'Doc Pipeline', type: 'Pipeline' }, type: 'custom' },
          { id: '5', position: { x: 250, y: 300 }, data: { label: 'RAG Orchestrator', type: 'Orchestrator' }, type: 'custom' },
          { id: '6', position: { x: 50, y: 400 }, data: { label: 'Semantic Search', type: 'Agent' }, type: 'custom' },
          { id: '7', position: { x: 250, y: 400 }, data: { label: 'Citation Tracker', type: 'Agent' }, type: 'custom' },
          { id: '8', position: { x: 450, y: 400 }, data: { label: 'Chat Manager', type: 'Agent' }, type: 'custom' },
          { id: '9', position: { x: 250, y: 500 }, data: { label: 'Data Layer', type: 'Storage' }, type: 'custom' },
        ],
        edges: [
          { id: 'e1-2', source: '1', target: '2', animated: true },
          { id: 'e2-4', source: '2', target: '4', animated: true },
          { id: 'e3-4', source: '3', target: '4', animated: true },
          { id: 'e4-5', source: '4', target: '5', animated: true },
          { id: 'e5-6', source: '5', target: '6', animated: true },
          { id: 'e5-7', source: '5', target: '7', animated: true },
          { id: 'e5-8', source: '5', target: '8', animated: true },
          { id: 'e6-9', source: '6', target: '9', animated: true },
          { id: 'e7-9', source: '7', target: '9', animated: true },
          { id: 'e8-9', source: '8', target: '9', animated: true },
        ]
      }
    }
  },

] as const;
   