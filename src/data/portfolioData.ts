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
    introText: "I build everything from edge-computed IoT systems and control frameworks to scalable web apps. Passionate about bridging embedded systems with modern software architecture.",
    bio: "3rd-year B.Tech ECE student at Vellore Institute of Technology. I specialize in both hardware prototyping and full-stack web development, constantly upskilling in AI/ML, Python, Java, and PCB design.",
    university: "Vellore Institute of Technology (VIT), Vellore",
    degree: "B.Tech in Electronics & Communication Engineering",
    graduationYear: "2027",
    email: "reachfortheskiez@gmail.com",
    phone: "+91 9591484191",
    location: "Bengaluru / Vellore, India",
    statusBadge: "3rd-Year ECE @ VIT • Hardware-Software Co-Design",
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
      badgeColor: "cyan" as const,
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
      badgeColor: "purple" as const,
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "vibroshield-edge-shm",
      title: "VibroShield (Edge-SHM)",
      subtitle: "Autonomous Edge Structural Health Monitoring & TinyML Anomaly Detection",
      description: "An autonomous edge computing system using an ESP32, MPU6050, 200 Hz digital signal processing, unsupervised TinyML autoencoders, and neuro-symbolic decision boundaries to monitor civil infrastructure in real time without cloud latency.",
      detailedDescription: "Runs a complete embedded pipeline directly on an ESP32: 200 Hz hardware-timer acquisition, 40 Hz IIR low-pass filtering, 128-point local FFT, and TinyML autoencoder reconstruction error calculation to isolate structural anomalies and trigger physical relay/alarm mitigation and Streamlit telemetry.",
      category: "Hardware & Embedded" as const,
      tags: ["ESP32", "TinyML", "MPU6050", "IIR Filter", "FFT", "Streamlit", "Python"],
      badge: "TinyML Edge Computing",
      accent: "emerald" as const,
      featured: true,
      highlights: [
        "200 Hz hardware timer acquisition with 40 Hz IIR filtering and 128-point local FFT on ESP32",
        "Unsupervised TinyML autoencoder reconstruction error scoring for anomaly isolation",
        "Neuro-symbolic decision fusion combining physical acceleration thresholds with SVM hyperplanes",
      ],
      metrics: [
        { label: "Acquisition", value: "200 Hz Timer" },
        { label: "Model", value: "TinyML Autoencoder" },
        { label: "Hardware", value: "ESP32 + MPU6050" },
      ],
      githubUrl: "https://github.com/Sky-Code06/VibroShield-Edge-SHM",
    },
    {
      id: "smartcharge-adapt",
      title: "SmartCharge-Adapt",
      subtitle: "Parameter-Adaptive Constrained MPC for Li-Ion Battery Packs",
      description: "A Per-Cell Online Parameter-Adaptive Model Predictive Control framework for series Li-ion battery packs using Python CVXPY and MATLAB Simulink.",
      detailedDescription: "Designed an advanced control strategy for series Li-ion battery packs. Combines parallel recursive least squares (RLS) for real-time internal resistance and state-of-health estimation with constrained convex quadratic program (QP) MPC to balance ultra-fast charging speed against thermal degradation.",
      category: "Controls & Systems" as const,
      tags: ["Python", "CVXPY", "MATLAB", "Simulink", "Control Systems", "Battery Management"],
      badge: "Convex MPC Optimization",
      accent: "amber" as const,
      featured: true,
      highlights: [
        "Formulated convex quadratic programs in CVXPY solved at 50Hz control cycles",
        "Parallel online RLS for real-time per-cell parameter adaptation under aging and temperature shifts",
        "MATLAB Simulink co-simulation with 2nd-order Equivalent Circuit Models (ECM)",
      ],
      metrics: [
        { label: "Framework", value: "CVXPY + Simulink" },
        { label: "Algorithm", value: "Adaptive MPC + RLS" },
        { label: "Optimization", value: "Convex QP" },
      ],
      githubUrl: "https://github.com/Sky-Code06/SmartCharge-Adapt",
    },
    {
      id: "active-audio-equalizer",
      title: "Active 3-Band Audio Equalizer",
      subtitle: "Op-Amp Active Filter Network & MATLAB Audio Toolbox Simulation",
      description: "An active 3-band analog audio equalizer (Bass, Mid, Treble) engineered with op-amp active filter topologies in NI Multisim and simulated in MATLAB Simulink Audio Toolbox.",
      detailedDescription: "Designed an analog audio signal processing chain utilizing active second-order Sallen-Key and bandpass operational amplifier filters. Provides independent boost/cut controls (+/-12 dB) for low-frequency bass (<250 Hz), midrange bandpass (250 Hz - 4 kHz), and high-frequency treble (>4 kHz) with complete Bode plot frequency and phase verification.",
      category: "Hardware & Embedded" as const,
      tags: ["Analog Circuits", "Op-Amps", "Active Filters", "NI Multisim", "MATLAB", "Simulink"],
      badge: "Analog Signal Processing",
      accent: "purple" as const,
      featured: true,
      highlights: [
        "3-band active topology: second-order low-pass, resonant bandpass, and high-pass active filters",
        "Verified frequency response, THD (Total Harmonic Distortion), and phase margin in NI Multisim",
        "Simulated real-time dynamic audio filtering in MATLAB Simulink Audio Toolbox",
      ],
      metrics: [
        { label: "Filter Topology", value: "2nd-Order Active" },
        { label: "Range", value: "20 Hz – 20 kHz" },
        { label: "Simulation", value: "Multisim + Simulink" },
      ],
      githubUrl: "https://github.com/Sky-Code06/Active-3-Band-Audio-Equalizer",
    },
    {
      id: "serverless-mental-health",
      title: "Zero-PII Mental Health Check-In",
      subtitle: "Privacy-Preserving Serverless PWA on AWS Architecture",
      description: "A zero-PII mental health self-assessment PWA engineered on AWS serverless architecture (Lambda, API Gateway, DynamoDB, Tone.js, and AWS Amplify).",
      detailedDescription: "Designed for strict privacy preservation without collecting personal identifiable information. Implements client-side encrypted session tokens, interactive multi-scale psychological check-ins, procedural audio therapy with Tone.js, and automated Terraform / AWS SAM infrastructure deployment.",
      category: "Web & Cloud" as const,
      tags: ["AWS Lambda", "API Gateway", "DynamoDB", "Tone.js", "PWA", "Terraform", "Serverless"],
      badge: "Zero-PII AWS Serverless",
      accent: "cyan" as const,
      featured: true,
      highlights: [
        "Zero-PII architectural paradigm with ephemeral tokenization and HIPAA/GDPR alignment",
        "Event-driven AWS backend deployed with AWS SAM & Terraform Infrastructure-as-Code",
        "Procedural calming audio engine synthesized client-side using Web Audio API / Tone.js",
      ],
      metrics: [
        { label: "Cloud Stack", value: "AWS Serverless" },
        { label: "Privacy", value: "100% Zero-PII" },
        { label: "Audio Engine", value: "Tone.js Web Audio" },
      ],
      githubUrl: "https://github.com/Sky-Code06/Serverless-ZeroPII-Mental-Health-CheckIn",
    },
    {
      id: "devforge-cloudcanvas",
      title: "DevForge IDE",
      subtitle: "Agentic Cloud-Based System Design & Architecture IDE",
      description: "An AWS hackathon-qualifying system design IDE built for system architects and developers to dynamically design, benchmark, and govern distributed cloud systems.",
      detailedDescription: "DevForge empowers architects to visualize multi-tier cloud architectures, perform real-time AST constraint enforcement, and estimate infrastructure spend. Built with Next.js, Amazon Bedrock, AWS Lambda, DynamoDB, RDS PostgreSQL, and AWS Price List API.",
      category: "Web & Cloud" as const,
      tags: ["Next.js", "React", "AWS Bedrock", "AWS Lambda", "DynamoDB", "System Design"],
      badge: "AWS Hackathon Qualifier",
      accent: "cyan" as const,
      featured: true,
      highlights: [
        "Qualified Semi-Finalists in AWS Hackathon (AI for Bharat)",
        "Interactive node-based canvas for visualizing microservices and distributed topologies",
        "Real-time estimation of latency, throughput, and AWS infrastructure costs via AWS Price List API",
      ],
      metrics: [
        { label: "Recognition", value: "AWS Qualifier" },
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
      featured: false,
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
      id: "vtop-vault",
      title: "VTOP Vault",
      subtitle: "Automated Academic Portal Resource Harvester",
      description: "A custom browser extension built to seamlessly extract course materials from the university portal.",
      detailedDescription: "Solves the friction of navigating multi-frame, legacy university web portals. VTOP Vault automatically parses deep course hierarchies, handles authentication session handshakes, and provides batch one-click downloads of lecture slides, assignments, and reference PDFs.",
      category: "Tools & Extensions" as const,
      tags: ["JavaScript", "Chrome Extension", "DOM Parsing", "Tailwind CSS"],
      badge: "Productivity Extension",
      accent: "cyan" as const,
      featured: false,
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
  ],

  research: {
    id: "mimo-patch-antenna",
    title: "Castle-Shaped Microstrip Patch Antenna in MIMO Configuration for High-Isolation Communications",
    venue: "Research Project • Target: IEEE Publication",
    date: "Research Project",
    status: "To Be Published",
    authors: ["Aakash Nair (Lead Contributor)", "Collaborators & Faculty Guide"],
    abstract: "A research project investigating a castle-shaped microstrip patch antenna converted into a MIMO configuration using CST Studio Suite simulations, prepared for IEEE publication. The slotted castle geometry introduces degenerate resonance modes and optimizes surface current distribution, significantly enhancing inter-element isolation and reducing envelope correlation coefficient (ECC) for high-speed multi-band wireless communications.",
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
      { label: "Status", value: "To Be Published" },
    ],
  },
};
