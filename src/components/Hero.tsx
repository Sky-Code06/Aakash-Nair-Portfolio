"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  ArrowRight, 
  Mail, 
  Cpu, 
  Radio, 
  Layers, 
  Terminal, 
  Activity, 
  Sparkles,
  Zap
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"verilog" | "cloud" | "rf">("verilog");

  const verilogTelemetry = {
    fsmState: "S_NORTH_GREEN -> S_YELLOW",
    pedestrianLatch: "Active (SR Latch Q=1)",
    overrideState: "Emergency Preempt Ready",
    clockDivision: "50MHz to 1Hz Verified",
  };

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PORTFOLIO_DATA.personal.statusBadge}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="text-gradient-cyan">
                  {PORTFOLIO_DATA.personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
                {PORTFOLIO_DATA.personal.headline}
              </p>
            </div>

            {/* Intro Text */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {PORTFOLIO_DATA.personal.introText}
            </p>

            {/* Quick stats / tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> Verilog HDL &amp; RTL Design
              </span>
              <span className="px-3 py-1 rounded-md bg-purple-950/40 border border-purple-800/40 text-purple-300 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> Full-Stack Next.js
              </span>
              <span className="px-3 py-1 rounded-md bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5" /> RF &amp; Electromagnetics
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-300 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-white/10 hover:border-cyan-500/40 text-slate-200 font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </Link>

              <div className="flex items-center gap-3 pl-2 sm:border-l sm:border-slate-800">
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Hardware-Software Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-xl p-1 shadow-2xl shadow-cyan-950/40 group">
              {/* Top Bar / Tab selector */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-slate-900/70 rounded-t-xl">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 pl-2">
                    aakash@vit-ece-lab:~$
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("verilog")}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                      activeTab === "verilog"
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Verilog_FSM.v
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                      activeTab === "cloud"
                        ? "bg-purple-500/20 text-purple-300 border border-purple-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Cloud.tsx
                  </button>
                  <button
                    onClick={() => setActiveTab("rf")}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                      activeTab === "rf"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    MIMO_RF.sim
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-4 sm:p-5 font-mono text-xs space-y-3 min-h-[310px] flex flex-col justify-between">
                {activeTab === "verilog" && (
                  <div className="space-y-2.5 text-slate-300">
                    <div className="text-cyan-400 flex items-center justify-between text-[11px]">
                      <span>// Synthesizable RTL Traffic Controller (FSM)</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Activity className="w-3 h-3 animate-pulse" /> RTL Synthesized
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      FPGA Synthesis • Glitch-Free Moore FSM • Timing Verified
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/50 border border-cyan-900/40 space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Current State:</span>
                        <span className="text-cyan-300 font-bold">{verilogTelemetry.fsmState}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Pedestrian Latch:</span>
                        <span className="text-cyan-300 font-bold">{verilogTelemetry.pedestrianLatch}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Emergency Override:</span>
                        <span className="text-emerald-400">{verilogTelemetry.overrideState}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Clock Generator:</span>
                        <span className="text-purple-300">{verilogTelemetry.clockDivision}</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-[10px]">
                      always @(posedge clk or negedge rst_n) begin state &lt;= next_state; end
                    </p>
                  </div>
                )}

                {activeTab === "cloud" && (
                  <div className="space-y-2.5 text-slate-300">
                    <div className="text-purple-400 flex items-center justify-between text-[11px]">
                      <span>// DevForge / CloudCanvas IDE (AWS Winner)</span>
                      <span className="text-cyan-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> Event Driven
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      Next.js 16 • React 19 • TypeScript • Tailwind
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/50 border border-purple-900/40 space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Topology Canvas:</span>
                        <span className="text-purple-300">Infinite Grid Node-Graph</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Benchmarking:</span>
                        <span className="text-purple-300">Latency &amp; TCO Simulator</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Target Deploy:</span>
                        <span className="text-cyan-300">Vercel Edge Network</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Hackathon:</span>
                        <span className="text-amber-300 font-semibold">1st Place Award</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-[10px]">
                      export default function SystemDesigner() &#123; return &lt;IDE /&gt;; &#125;
                    </p>
                  </div>
                )}

                {activeTab === "rf" && (
                  <div className="space-y-2.5 text-slate-300">
                    <div className="text-emerald-400 flex items-center justify-between text-[11px]">
                      <span>// IEEE Castle-Shaped MIMO Antenna Paper</span>
                      <span className="text-emerald-300 flex items-center gap-1">
                        <Radio className="w-3 h-3" /> CST Studio
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">
                      3D Electromagnetic Field Solver Simulation
                    </p>
                    <div className="p-2.5 rounded-lg bg-black/50 border border-emerald-900/40 space-y-1 text-[11px]">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Return Loss (S11):</span>
                        <span className="text-emerald-300 font-bold">&lt; -20 dB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Mutual Coupling (S21):</span>
                        <span className="text-emerald-300 font-bold">&lt; -25 dB Isolation</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Correlation (ECC):</span>
                        <span className="text-cyan-300">&lt; 0.005</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Conference:</span>
                        <span className="text-purple-300">IEEE (Oct 2026)</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-[10px]">
                      Mesh: Hexahedral transient solver • Dual-band high diversity
                    </p>
                  </div>
                )}

                {/* Bottom interactive action */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    HW &amp; SW Integration Ready
                  </span>
                  <Link
                    href="#projects"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
