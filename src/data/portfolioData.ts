export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: "Web & Cloud" | "Hardware & Embedded" | "Controls & Systems" | "Tools & Extensions";
  tags: string[];
  badge?: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  demoUrl?: string;
  accent: "cyan" | "purple" | "emerald" | "amber";
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  status: "Upcoming" | "Completed" | "Current";
  description?: string;
  responsibilities: string[];
  technologies: string[];
  badgeColor: "cyan" | "purple" | "emerald";
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
  accent: "cyan" | "purple" | "emerald";
}

export interface ResearchItem {
  id: string;
  title: string;
  venue: string;
  date: string;
  status: string;
  authors: string[];
  abstract: string;
  keywords: string[];
  simulationTools: string[];
  keyContributions: string[];
  paperUrl?: string;
  specs: { label: string; value: string }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Aakash Nair",
    headline: "Electronics & Communication Engineering Junior at VIT | Hardware-Software Co-Design | Full-Stack Developer",
    introText: "I build everything from edge-computed wearable devices to scalable web apps. Passionate about bridging embedded systems with modern software architecture.",
    bio: "3rd-year B.Tech ECE student at Vellore Institute of Technology. I specialize in both hardware prototyping and full-stack web development, constantly upskilling in AI/ML, Python, Java, and PCB design.",
    university: "Vellore Institute of Technology (VIT), Vellore",
    degree: "B.Tech in Electronics & Communication Engineering",
    graduationYear: "2027",
    email: "reachfortheskiez@gmail.com",
    phone: "+91 9591484191",
    location: "Bengaluru / Vellore, India",
    statusBadge: "Incoming Intern @ Philips • 3rd-Year ECE @ VIT",
    socials: {
      github: "https://github.com/Sky-Code06",
      linkedin: "http://www.linkedin.com/in/aakash-nair-6205b5325",
      email: "mailto:reachfortheskiez@gmail.com",
    },
    resumePath: "/resume.pdf",
  },

  skills: [
    {
      title: "Web & Software",
      description: "Modern, reactive, and scalable web applications from frontend interfaces to enterprise API orchestration.",
      iconName: "Globe",
      accent: "cyan" as const,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Tailwind CSS" },
        { name: "Vite" },
        { name: "Supabase" },
        { name: "Vercel" },
        { name: "MuleSoft API" },
      ],
    },
    {
      title: "Hardware & Core ECE",
      description: "Embedded microcontrollers, digital logic RTL design, simulation, and high-frequency electromagnetics.",
      iconName: "Cpu",
      accent: "purple" as const,
      skills: [
        { name: "ESP32" },
        { name: "Verilog" },
        { name: "KiCad" },
        { name: "MATLAB" },
        { name: "Simulink" },
        { name: "CST Studio Suite" },
        { name: "Control Systems" },
      ],
    },
    {
      title: "Languages",
      description: "Low-level systems programming, object-oriented software engineering, and scientific computing.",
      iconName: "Code2",
      accent: "emerald" as const,
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "C/C++" },
      ],
    },
  ],

  experiences: [
    {
      id: "philips-intern",
      role: "Incoming Intern",
      company: "Philips",
      location: "Bengaluru, India",
      period: "Upcoming",
      status: "Upcoming" as const,
      description: "Joining Philips to contribute to healthcare engineering, embedded devices, and software solutions.",
      responsibilities: [
        "Upcoming internship engagement focusing on next-generation medical technology and systems engineering.",
        "Bridging core hardware capabilities with reliable, robust enterprise healthcare software standards.",
      ],
      technologies: ["Embedded Systems", "Healthcare Tech", "C/C++", "System Architecture"],
      badgeColor: "cyan" as const,
    },
    {
      id: "vfs-global-intern",
      role: "IT Intern",
      company: "VFS Global",
      location: "Enterprise Systems",
      period: "June 2026",
      status: "Completed" as const,
      description: "Engineered critical MuleSoft API integrations bridging diverse enterprise platforms.",
      responsibilities: [
        "Engineered MuleSoft API integrations connecting enterprise systems including Salesforce, BOLT, and LIFT.",
        "Implemented high-throughput data transformation pipelines using DataWeave, JSON, and XML payloads.",
        "Ensured secure and resilient cross-platform communication between CRM and back-office operations.",
      ],
      technologies: ["MuleSoft API", "Salesforce", "BOLT", "LIFT", "DataWeave", "REST APIs", "Integration"],
      badgeColor: "purple" as const,
    },
    {
      id: "digital-electronics-intern",
      role: "Digital Electronics Intern",
      company: "Digital Electronics Internship",
      location: "Digital Design Lab",
      period: "Feb 2026",
      status: "Completed" as const,
      description: "Designed and validated advanced digital finite state machines (FSM) in Verilog HDL.",
      responsibilities: [
        "Designed and implemented a custom Verilog-based traffic light controller with pedestrian request and emergency override features.",
        "Synthesized and simulated RTL state machine behavior ensuring glitch-free transitions and fail-safe operation.",
        "Conducted thorough timing verification and testbench simulations for high-reliability edge conditions.",
      ],
      technologies: ["Verilog", "RTL Design", "Digital Logic", "FSM", "ModelSim / EDA", "FPGA"],
      badgeColor: "emerald" as const,
    },
  ],

  projects: [
    {
      id: "devforge-cloudcanvas",
      title: "DevForge / CloudCanvas",
      subtitle: "System Design IDE & Cloud Architecture Visualizer",
      description: "An AWS hackathon-winning system design IDE built for both system architects and student developers.",
      detailedDescription: "DevForge (CloudCanvas) empowers architects and developers to dynamically design, benchmark, and visualize multi-tier cloud architectures with real-time throughput estimation and automated cloud cost projections.",
      category: "Web & Cloud" as const,
      tags: ["Next.js", "React", "AWS", "TypeScript", "Tailwind CSS"],
      badge: "AWS Hackathon Winner",
      accent: "cyan" as const,
      featured: true,
      highlights: [
        "Won 1st place in AWS Hackathon for innovative interactive cloud system design",
        "Interactive node-based canvas for visualizing microservices and distributed topologies",
        "Real-time estimation of latency, throughput, and AWS infrastructure costs",
      ],
      metrics: [
        { label: "Award", value: "AWS Winner" },
        { label: "Architecture", value: "Event-Driven" },
        { label: "Engine", value: "Next.js / Canvas" },
      ],
      githubUrl: "https://github.com/Sky-Code06/HackerStreet-Rebels",
      demoUrl: "https://devforge-cloudcanvas.vercel.app",
    },
    {
      id: "pokernight-pwa",
      title: "PokerNight PWA",
      subtitle: "Real-Time Game Tracking & Chip Settlement App",
      description: "A Progressive Web App built with React, Vite, Tailwind, and Vercel to track poker games, buy-ins, player stats, chip calculations, and settlement payouts.",
      detailedDescription: "Eliminates post-game confusion with an algorithmic zero-sum debt settlement engine. Tracks continuous buy-ins, dynamic re-buys, blinds escalations, and computes the absolute minimum number of peer-to-peer money transfers.",
      category: "Web & Cloud" as const,
      tags: ["React", "Vite", "Tailwind CSS", "Vercel", "PWA"],
      badge: "PWA • Zero-Sum Settlement",
      accent: "purple" as const,
      featured: true,
      highlights: [
        "Built as a full offline-capable Progressive Web App installable on iOS and Android",
        "Algorithmic transaction minimization reducing debt transfers by up to 70%",
        "Live session telemetry with instant pot equity and player ROI analytics",
      ],
      metrics: [
        { label: "PWA Audit", value: "100/100" },
        { label: "Settlement", value: "Min-Transfer Algo" },
        { label: "Deploy", value: "Vercel Zero-Config" },
      ],
      githubUrl: "https://github.com/Sky-Code06/PokerNight-PWA",
      demoUrl: "https://pokernight-pwa.vercel.app",
    },
    {
      id: "edge-health-monitor",
      title: "Edge-Computed Health Monitor",
      subtitle: "Wearable Physiological Early-Warning System",
      description: "A wearable early-warning physiological monitor utilizing an ESP32, MPU6050, MAX30102, OLED display, and a temporal multi-modal sensor fusion algorithm. (Submitted for Invention Disclosure at VIT).",
      detailedDescription: "Engineered a low-power edge wearable that fuses photoplethysmography (PPG) and inertial motion tracking on-chip. Filters motion artifacts in real-time to compute accurate heart rate, SpO2, and fall detection before transmitting critical alerts.",
      category: "Hardware & Embedded" as const,
      tags: ["ESP32", "C/C++", "MPU6050", "MAX30102", "Sensor Fusion"],
      badge: "VIT Invention Disclosure",
      accent: "emerald" as const,
      featured: true,
      highlights: [
        "Submitted for Invention Disclosure at Vellore Institute of Technology (VIT)",
        "On-chip temporal multi-modal sensor fusion filtering aggressive motion artifacts",
        "Integrated ultra-low power sleep states extending battery longevity for 24/7 telemetry",
      ],
      metrics: [
        { label: "Hardware", value: "ESP32 + I2C Bus" },
        { label: "Sensors", value: "MAX30102 + MPU6050" },
        { label: "Status", value: "Invention Disclosure" },
      ],
      githubUrl: "https://github.com/Sky-Code06/esp32-edge-health-monitor",
    },
    {
      id: "smartcharge-adapt",
      title: "SmartCharge-Adapt",
      subtitle: "Parameter-Adaptive MPC for Li-Ion Battery Packs",
      description: "A Per-Cell Online Parameter-Adaptive Model Predictive Control framework for Li-ion battery packs using Python CVXPY and MATLAB Simulink.",
      detailedDescription: "Designed an advanced control strategy for electric vehicle and grid battery packs. Combines recursive least squares (RLS) for real-time internal resistance/capacity identification with convex optimization MPC to balance charging speed and thermal battery degradation.",
      category: "Controls & Systems" as const,
      tags: ["Python", "CVXPY", "MATLAB", "Simulink", "Control Systems"],
      badge: "Convex MPC Optimization",
      accent: "amber" as const,
      featured: true,
      highlights: [
        "Formulated convex quadratic programs in CVXPY solved at 50Hz control cycles",
        "Dynamic parameter adaptation for changing state-of-health (SoH) and ambient temperature",
        "Simulink validation against non-linear second-order equivalent circuit models (ECM)",
      ],
      metrics: [
        { label: "Framework", value: "CVXPY + Simulink" },
        { label: "Algorithm", value: "Adaptive MPC" },
        { label: "Optimization", value: "Convex QP" },
      ],
      githubUrl: "https://github.com/Sky-Code06/SmartCharge-Adapt",
    },
    {
      id: "vtop-vault",
      title: "VTOP Vault",
      subtitle: "Automated Academic Portal Resource Harvester",
      description: "A custom browser extension built to seamlessly extract course materials from the university portal.",
      detailedDescription: "Solves the friction of navigating multi-frame, legacy university web portals. VTOP Vault automatically parses deep course hierarchies, handles authentication session handshakes, and provides batch one-click downloads of lecture slides, assignments, and reference PDFs.",
      category: "Tools & Extensions" as const,
      tags: ["JavaScript", "Chrome Extension", "DOM Parsing", "Tailwind CSS"],
      badge: "Productivity Extension",
      accent: "cyan" as const,
      featured: true,
      highlights: [
        "Bypasses complex nested iframe structures through intelligent DOM mutation observers",
        "Asynchronous background worker handles zip bundling and sequential file downloading",
        "Adopted widely by engineering students across VIT Vellore campus",
      ],
      metrics: [
        { label: "Platform", value: "Chrome Extension" },
        { label: "Engine", value: "Vanilla JS / Manifest V3" },
        { label: "Impact", value: "Campus-Wide Adoption" },
      ],
      githubUrl: "https://github.com/Sky-Code06/VTOP-Vault",
    },
    {
      id: "store-inventory-command",
      title: "Store Inventory Command Center",
      subtitle: "Mobile-First Inventory & Automated WhatsApp Logistics",
      description: "A mobile-first Next.js/Supabase application with PIN security, dynamic price/quantity management, and automated WhatsApp inventory list generation.",
      detailedDescription: "Engineered specifically for fast-paced retail stockrooms. Field workers use a rapid numeric PIN login to instantly adjust stock levels, trigger low-inventory alerts, and generate formatted WhatsApp dispatch manifests with a single tap.",
      category: "Web & Cloud" as const,
      tags: ["Next.js", "Supabase", "Tailwind CSS", "PostgreSQL", "WhatsApp API"],
      badge: "Mobile-First PWA",
      accent: "purple" as const,
      featured: true,
      highlights: [
        "Instant zero-friction PIN-based authentication for warehouse staff",
        "Real-time reactive stock synchronization via Supabase PostgreSQL subscriptions",
        "One-click URL-encoded WhatsApp logistics payload generation for instant vendor dispatches",
      ],
      metrics: [
        { label: "Stack", value: "Next.js + Supabase" },
        { label: "Auth", value: "PIN & RLS Security" },
        { label: "Logistics", value: "Automated WhatsApp" },
      ],
      githubUrl: "https://github.com/Sky-Code06/Black-Market",
      demoUrl: "https://store-inventory-command.vercel.app",
    },
  ],

  research: {
    id: "ieee-mimo-patch-antenna",
    title: "Castle-Shaped Microstrip Patch Antenna in MIMO Configuration for High-Isolation Communications",
    venue: "IEEE Conference Paper",
    date: "Oct 2026",
    status: "Published / Presented",
    authors: ["Aakash Nair (Co-Author)", "Research Faculty & Collaborators"],
    abstract: "Co-authored a paper on a castle-shaped microstrip patch antenna converted into a MIMO configuration using CST Studio Suite simulations. The castle-slotted geometry introduces degenerate resonance modes and optimizes surface current paths, significantly enhancing inter-element isolation and reducing envelope correlation coefficient (ECC) for high-speed multi-band wireless communications.",
    keywords: ["MIMO Antenna", "Castle-Shaped Patch", "CST Studio Suite", "S-Parameters", "Mutual Coupling Reduction", "RF Design"],
    simulationTools: ["CST Studio Suite", "MATLAB", "Smith Chart Analysis"],
    keyContributions: [
      "Geometric castle-shape notch perturbation to achieve dual-band resonance and compact form factor",
      "Conversion from single-element patch to 2x2 and 4x4 MIMO configurations with decoupled near-field distributions",
      "Full electromagnetic wave solver verification yielding return loss S11 < -20 dB and mutual coupling S21 < -25 dB",
      "Envelope Correlation Coefficient (ECC) < 0.005 and diversity gain > 9.98 dB",
    ],
    paperUrl: "https://github.com/Sky-Code06/6G-MIMO-Castle-Patch-Antenna",
    specs: [
      { label: "Sim Tool", value: "CST Studio Suite" },
      { label: "Isolation (S21)", value: "< -25 dB" },
      { label: "Return Loss (S11)", value: "< -20 dB" },
      { label: "Correlation (ECC)", value: "< 0.005" },
      { label: "Diversity Gain", value: "> 9.98 dB" },
    ],
  },
};
