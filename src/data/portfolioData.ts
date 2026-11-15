export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  category: "Embedded Systems & IoT" | "AI/ML & Controls" | "Web & Cloud" | "Tools & Extensions";
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
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string }[];
  accent: "cyan" | "purple" | "emerald";
  footerNote: string;
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
    headline: "Electronics & Communication Engineering Junior at VIT | Embedded Systems • IoT • AI/ML & Edge Intelligence",
    introText: "Engineering autonomous edge intelligence, IoT sensor architectures, and embedded machine learning. Passionate about deploying real-time TinyML models onto low-power silicon and bridging physical hardware with intelligent systems.",
    bio: "3rd-year B.Tech ECE student at Vellore Institute of Technology. My primary engineering focus centers on Embedded Systems, IoT architecture, and applied AI/ML—specializing in on-device TinyML inference, deterministic sensor fusion, microcontrollers (ESP32 / ARM), signal processing, and low-latency hardware-software telemetry.",
    university: "Vellore Institute of Technology (VIT), Vellore",
    degree: "B.Tech in Electronics & Communication Engineering",
    graduationYear: "2027",
    email: "reachfortheskiez@gmail.com",
    phone: "+91 9591484191",
    location: "Bengaluru / Vellore, India",
    statusBadge: "3rd-Year ECE @ VIT • Embedded Systems, IoT & AI/ML",
    socials: {
      github: "https://github.com/Sky-Code06",
      linkedin: "http://www.linkedin.com/in/aakash-nair-6205b5325",
      email: "mailto:reachfortheskiez@gmail.com",
    },
    resumePath: "/resume.pdf",
  },

  skills: [
    {
      title: "Embedded Systems & IoT",
      badge: "Core Domain",
      description: "Microcontroller firmware, real-time sensor fusion, communication protocols, and low-power hardware interfacing.",
      iconName: "Cpu",
      accent: "emerald" as const,
      skills: [
        { name: "ESP32" },
        { name: "Embedded C / C++" },
        { name: "I2C / SPI / UART" },
        { name: "Sensor Fusion (MPU6050)" },
        { name: "Verilog HDL" },
        { name: "KiCad PCB Design" },
        { name: "FreeRTOS" },
        { name: "IoT Protocols (MQTT/HTTP)" },
      ],
      footerNote: "⚡ Deterministic Timers • Hardware Interrupts • Bus Protocols",
    },
    {
      title: "AI/ML & Edge Intelligence",
      badge: "Core Domain",
      description: "On-device TinyML, deep learning architectures, digital signal processing, and adaptive optimization.",
      iconName: "BrainCircuit",
      accent: "purple" as const,
      skills: [
        { name: "TinyML / Edge AI" },
        { name: "Python (NumPy / SciPy)" },
        { name: "TensorFlow / Keras" },
        { name: "Autoencoders & SVMs" },
        { name: "DSP (FFT & IIR Filters)" },
        { name: "CVXPY Optimization" },
        { name: "MATLAB & Simulink" },
        { name: "Adaptive MPC" },
      ],
      footerNote: "🧠 On-Chip Inference • Spectral DSP • Quadratic Optimization",
    },
    {
      title: "Software & Cloud Telemetry",
      badge: "Supporting Systems",
      description: "Systems programming, real-time IoT monitoring dashboards, serverless backends, and enterprise APIs.",
      iconName: "Globe",
      accent: "cyan" as const,
      skills: [
        { name: "Python" },
        { name: "C/C++" },
        { name: "Java" },
        { name: "Streamlit Dashboards" },
        { name: "Next.js & React" },
        { name: "Tailwind CSS" },
        { name: "AWS Serverless (Lambda)" },
        { name: "MuleSoft API" },
      ],
      footerNote: "🌐 Real-Time Telemetry • Serverless APIs • Microservices",
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
      githubUrl: "https://github.com/Sky-Code06/Traffic-Light-Controller",
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "vibroshield-edge-shm",
      title: "VibroShield (Edge-SHM)",
      subtitle: "Autonomous Edge Structural Health Monitoring & TinyML Anomaly Detection",
      description: "An autonomous edge IoT computing system using an ESP32, MPU6050, 200 Hz digital signal processing, unsupervised TinyML autoencoders, and neuro-symbolic decision boundaries to monitor civil infrastructure in real time without cloud latency.",
      detailedDescription: "Runs a complete embedded pipeline directly on an ESP32: 200 Hz hardware-timer acquisition, 40 Hz IIR low-pass filtering, 128-point local FFT, and TinyML autoencoder reconstruction error calculation to isolate structural anomalies and trigger physical relay/alarm mitigation and Streamlit telemetry.",
      category: "Embedded Systems & IoT" as const,
      tags: ["ESP32", "TinyML", "IoT Telemetry", "MPU6050", "IIR Filter", "FFT", "Streamlit", "Python"],
      badge: "TinyML & IoT System",
      accent: "emerald" as const,
      featured: true,
      highlights: [
        "200 Hz hardware timer acquisition with 40 Hz IIR filtering and 128-point local FFT on ESP32",
        "Unsupervised TinyML autoencoder reconstruction error scoring for real-time anomaly isolation",
        "Neuro-symbolic decision fusion combining physical acceleration thresholds with SVM hyperplanes",
        "Multi-modal mitigation driving 5V fail-safe relays, acoustic alarms, and live Streamlit IoT dashboard",
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
      subtitle: "Parameter-Adaptive Constrained MPC for Series Li-Ion Battery Packs",
      description: "A Per-Cell Online Parameter-Adaptive Model Predictive Control framework for series Li-ion battery packs using Python CVXPY and MATLAB Simulink.",
      detailedDescription: "Designed an advanced intelligent control strategy for series Li-ion battery packs. Combines parallel recursive least squares (RLS) for real-time internal resistance and state-of-health estimation with constrained convex quadratic program (QP) MPC to balance ultra-fast charging speed against thermal degradation.",
      category: "AI/ML & Controls" as const,
      tags: ["Python", "CVXPY", "MATLAB", "Simulink", "Adaptive MPC", "System Identification", "Battery Management"],
      badge: "AI/ML & Adaptive Control",
      accent: "amber" as const,
      featured: true,
      highlights: [
        "Formulated convex quadratic programs in CVXPY solved at 50Hz real-time control cycles",
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
      category: "Embedded Systems & IoT" as const,
      tags: ["Analog Circuits", "Active Filters", "Op-Amps", "NI Multisim", "MATLAB", "Simulink", "Audio DSP"],
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
      githubUrl: "https://github.com/Sky-Code06/DevForge",
      demoUrl: "https://devforge-cloudcanvas.vercel.app",
    },
    {
      id: "flower-recognition",
      title: "Deep CNN vs. MobileNetV2 Vision Benchmark",
      subtitle: "Comparative Computer Vision Study & Transfer Learning in TensorFlow/Keras",
      description: "A comparative deep learning study benchmarking custom deep Convolutional Neural Networks (CNN) against MobileNetV2 transfer learning for computer vision classification in TensorFlow/Keras.",
      detailedDescription: "Engineered an end-to-end computer vision pipeline exploring image augmentation, batch normalization, and dropout regularization. Demonstrated the performance-efficiency tradeoffs of lightweight mobile-oriented architectures vs. standard deep networks for resource-constrained edge vision.",
      category: "AI/ML & Controls" as const,
      tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "CNN", "MobileNetV2", "Computer Vision"],
      badge: "Deep Learning & Vision",
      accent: "purple" as const,
      featured: false,
      highlights: [
        "Benchmarked custom deep CNNs against MobileNetV2 pretrained feature extractors",
        "Designed data augmentation pipelines with spatial transforms to prevent overfitting",
        "Analyzed loss convergence, Top-1 accuracy, and parameter footprint for edge deployment",
      ],
      metrics: [
        { label: "Framework", value: "TensorFlow / Keras" },
        { label: "Architecture", value: "MobileNetV2 vs CNN" },
        { label: "Domain", value: "Computer Vision" },
      ],
      githubUrl: "https://github.com/Sky-Code06/Flower-Recognition-Model",
    },
    {
      id: "digital-image-transmission",
      title: "Digital Image Transmission Analysis",
      subtitle: "Monte Carlo Bit Error Rate Simulation of BPSK & 16-QAM over AWGN in MATLAB",
      description: "Performance analysis and Monte Carlo simulation benchmarking BPSK and 16-QAM modulation schemes for digital image transmission across Additive White Gaussian Noise (AWGN) channels.",
      detailedDescription: "Evaluates digital communication system performance under variable Signal-to-Noise Ratio (SNR) regimes in MATLAB. Transmits 2D image bitstreams, simulates AWGN noise corruption, computes exact Bit Error Rates (BER), and reconstructs received images with visual constellation diagrams and theoretical vs. empirical BER curves.",
      category: "AI/ML & Controls" as const,
      tags: ["MATLAB", "Digital Communications", "BPSK", "16-QAM", "AWGN Channel", "Monte Carlo", "Signal Processing"],
      badge: "Digital Comms & DSP",
      accent: "purple" as const,
      featured: false,
      highlights: [
        "Monte Carlo simulation evaluating Bit Error Rate (BER) curves against theoretical bounds",
        "Transmits image matrix bitstreams through BPSK and 16-QAM constellation mappers",
        "Visualizes constellation clustering, noise degradation, and recovered image fidelity across SNRs",
      ],
      metrics: [
        { label: "Modulation", value: "BPSK vs 16-QAM" },
        { label: "Channel", value: "AWGN (Variable SNR)" },
        { label: "Simulation", value: "MATLAB Monte Carlo" },
      ],
      githubUrl: "https://github.com/Sky-Code06/Performance-Analysis-of-BPSK-and-QAM-for-Digital-Image-Transmission",
    },
    {
      id: "ar1-random-process",
      title: "AR(1) Random Process Characterization",
      subtitle: "Temporal & Spectral Analysis of WSS Gaussian Random Processes",
      description: "Comprehensive characterization of a discrete-time Wide Sense Stationary (WSS) Gaussian Auto-Regressive AR(1) random process simulated in MATLAB and Python.",
      detailedDescription: "Explores stochastic signal behavior through mathematical modeling and computational experiments. Derives and verifies theoretical autocorrelation, auto-covariance, power spectral density (PSD), and ergodicity properties using Yule-Walker equations and Monte Carlo realization trajectories.",
      category: "AI/ML & Controls" as const,
      tags: ["Python", "MATLAB", "Stochastic Processes", "PSD & Autocorrelation", "Time-Series", "DSP"],
      badge: "Statistical Signal Processing",
      accent: "emerald" as const,
      featured: false,
      highlights: [
        "Theoretical derivation and computational verification of AR(1) autocorrelation and power spectral density",
        "Statistical testing of Wide Sense Stationarity (WSS) and Mean/Autocorrelation Ergodicity",
        "Comparative simulation of multi-trajectory realization ensembles in both MATLAB and Python",
      ],
      metrics: [
        { label: "Model", value: "AR(1) Discrete-Time" },
        { label: "Properties", value: "WSS & Ergodic" },
        { label: "Environment", value: "MATLAB & Python" },
      ],
      githubUrl: "https://github.com/Sky-Code06/AR1-Random-Process-Characterization",
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
    id: "6g-mimo-castle-patch-antenna",
    title: "Design and Analysis of a Castle-Shaped MIMO Microstrip Patch Antenna for 6G Cellular Communication",
    venue: "Research Project • Target: 6G Sub-THz Cellular Communication",
    date: "Research Project",
    status: "To Be Published",
    authors: ["Shilpi Ruchi Kerketta", "Viraj Thappa", "Aakash Nair", "Pranjal Saxena", "Pranjal Raj"],
    abstract: "Design, electromagnetic modeling, and high-frequency characterization of a compact 4-port 2×2 MIMO microstrip patch antenna operating at 600 GHz (Sub-THz regime), prepared for publication. Key innovations include periodic rectangular castle crenellations providing distributed capacitive compensation to expand bandwidth to 80 GHz (13.33% fractional bandwidth), and a cross-shaped metallic via fence achieving > 15 dB adjacent isolation and 9.04 dBi peak directivity with 88.1% efficiency.",
    keywords: ["6G Sub-THz", "2x2 MIMO Array", "Castle-Shaped Patch", "CST Studio Suite", "Via Fence Decoupling", "Electromagnetics"],
    simulationTools: ["CST Studio Suite", "MATLAB", "Time-Domain Transient Solver"],
    keyContributions: [
      "Periodic castle-shaped crenellations expanding impedance bandwidth to 80 GHz (13.33% fractional BW) at 600 GHz",
      "Cross-shaped metallic via fence achieving > 15 dB adjacent and > 20 dB diagonal mutual coupling isolation",
      "High radiation performance verified in CST Studio Suite: 9.04 dBi peak directivity and 88.1% total efficiency",
      "Rigorous MIMO diversity metrics: ECC < 0.005, Diversity Gain > 9.98 dB, and Channel Capacity Loss (CCL) < 0.4 bps/Hz",
    ],
    paperUrl: "https://github.com/Sky-Code06/6G-MIMO-Castle-Patch-Antenna",
    specs: [
      { label: "Center Freq", value: "600 GHz Sub-THz" },
      { label: "Bandwidth", value: "80 GHz (13.3%)" },
      { label: "Directivity", value: "9.04 dBi" },
      { label: "Efficiency", value: "88.1%" },
      { label: "Isolation", value: "> 15 dB / > 20 dB" },
      { label: "Correlation (ECC)", value: "< 0.005" },
    ],
  },
};
