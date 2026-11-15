# Aakash Nair — Personal Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSky-Code06%2Fportfolio)

> **Hardware-Software Co-Design & Full-Stack Engineering Portfolio**  
> Electronics & Communication Engineering Junior at Vellore Institute of Technology (VIT).

A modern, highly interactive, and responsive portfolio bridging the worlds of embedded hardware engineering (ESP32, Verilog, RF simulations) and modern web architectures (Next.js, React, Tailwind CSS, Framer Motion).

---

## ⚡ Tech Stack

* **Framework:** Next.js (App Router, Turbopack, React 19)
* **Styling:** Tailwind CSS (Dark obsidian theme, PCB circuit grid, glowing neon accents)
* **Animation & Motion:** Framer Motion (3D Card Tilt, spring physics, smooth scroll anchors)
* **Components & Icons:** Lucide React & Custom SVG brand glyphs
* **Delight:** Canvas Confetti for form submissions and email copy actions
* **Deployment Target:** Vercel (Zero-config deployment ready)

---

## 🚀 Key Sections & Architecture

1. **Navigation Bar:** Sticky glassmorphic navbar with active section detection, resume download link, and mobile drawer.
2. **Hero Section:**
   * Live status indicator: `3rd-Year ECE @ VIT • Hardware-Software Co-Design`
   * Interactive multi-tab simulation terminal (`Verilog_FSM.v`, `Cloud.tsx`, `MIMO_RF.sim`) displaying live telemetry data.
   * Magnetic call-to-actions: "View My Work" & "Contact Me".
3. **About Me & Skills Matrix:**
   * **Web & Software:** React, Next.js, Tailwind CSS, Vite, Supabase, Vercel, MuleSoft API.
   * **Hardware & Core ECE:** ESP32, Verilog, KiCad, MATLAB, Simulink, CST Studio Suite, Control Systems.
   * **Languages:** Python, Java, C/C++.
4. **Experience Timeline:**
   * **VFS Global** | IT Intern (June 2026) — MuleSoft API integrations connecting Salesforce, BOLT, and LIFT.
   * **Digital Electronics Internship** | (Feb 2026) — Custom Verilog-based traffic light controller with pedestrian request and emergency override.
5. **Featured Projects (3D Interactive Tilt Grid):**
   * **VibroShield (Edge-SHM):** Autonomous edge structural health monitoring & TinyML anomaly detection on ESP32.
   * **SmartCharge-Adapt:** Parameter-adaptive constrained MPC framework for Li-ion battery packs in Python CVXPY & Simulink.
   * **Active 3-Band Audio Equalizer:** Op-amp active filter signal processing & MATLAB Simulink Audio Toolbox simulation.
   * **Zero-PII Mental Health Check-In:** Privacy-preserving serverless PWA on AWS architecture (Lambda, DynamoDB, Tone.js).
   * **DevForge IDE:** Agentic cloud system design & cost governance IDE (AWS Hackathon Semi-Finalist Qualifier).
6. **Research Projects:**
   * **Castle-Shaped MIMO Microstrip Patch Antenna (To Be Published):** CST Studio Suite 3D electromagnetic simulation achieving high isolation ($S_{11} < -20\text{ dB}$, $S_{21} < -25\text{ dB}$, $\text{ECC} < 0.005$) and compact multi-band resonance. Prepared for IEEE publication.
7. **Contact & Footer:**
   * One-click "Copy Email" with celebratory particle confetti.
   * Interactive messaging form with validation.
   * Direct GitHub, LinkedIn, and Mailto links.

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/Sky-Code06/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deploying to Vercel (Zero-Config)

This repository is pre-configured for direct, zero-config deployment to Vercel:

1. Push your code to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: complete modern portfolio website"
   git push origin main
   ```
2. Log into [vercel.com](https://vercel.com).
3. Click **"Add New" &rarr; "Project"**.
4. Import your GitHub repository.
5. Leave all build settings as default (`next build` is pre-configured).
6. Click **Deploy**. Vercel will automatically build and assign a global edge CDN URL.
