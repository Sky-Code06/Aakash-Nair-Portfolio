# Aakash Nair — Personal Portfolio

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
   * Live status indicator: `Incoming Intern @ Philips • 3rd-Year ECE @ VIT`
   * Interactive multi-tab simulation terminal (`ESP32.c`, `Cloud.tsx`, `MIMO_RF.sim`) displaying live telemetry data.
   * Magnetic call-to-actions: "View My Work" & "Contact Me".
3. **About Me & Skills Matrix:**
   * **Web & Software:** React, Next.js, Tailwind CSS, Vite, Supabase, Vercel, MuleSoft API.
   * **Hardware & Core ECE:** ESP32, Verilog, KiCad, MATLAB, Simulink, CST Studio Suite, Control Systems.
   * **Languages:** Python, Java, C/C++.
4. **Experience Timeline:**
   * **Philips** | Incoming Intern (Upcoming)
   * **VFS Global** | IT Intern (June 2026) — MuleSoft API integrations connecting Salesforce, BOLT, and LIFT.
   * **Digital Electronics Internship** | (Feb 2026) — Custom Verilog-based traffic light controller with pedestrian request and emergency override.
5. **Featured Projects (3D Interactive Tilt Grid):**
   * **DevForge / CloudCanvas:** AWS hackathon-winning system design IDE.
   * **PokerNight PWA:** Offline-first PWA for game tracking & zero-sum debt settlement.
   * **Edge-Computed Health Monitor:** Wearable sensor fusion device (Submitted for Invention Disclosure at VIT).
   * **SmartCharge-Adapt:** Parameter-adaptive MPC framework for Li-ion battery packs in CVXPY & Simulink.
   * **VTOP Vault:** Automated course material harvester browser extension.
   * **Store Inventory Command Center:** Mobile-first Next.js/Supabase inventory management with automated WhatsApp dispatch.
6. **Publications & Research:**
   * **IEEE Conference Paper (Oct 2026):** Castle-shaped microstrip patch antenna converted into a MIMO configuration with CST Studio Suite simulation analysis ($S_{11} < -20\text{ dB}$, $S_{21} < -25\text{ dB}$, $\text{ECC} < 0.005$).
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
