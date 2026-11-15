"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon } from "./Icons";
import { 
  Radio, 
  Award, 
  FileText, 
  CheckCircle2, 
  Sliders, 
  Sparkles, 
  ExternalLink,
  Cpu,
  Layers,
  Activity
} from "lucide-react";

export function ResearchSection() {
  const [activeFrequency, setActiveFrequency] = useState<"2.4" | "5.8">("5.8");
  const paper = PORTFOLIO_DATA.research;

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5" />
            <span>RESEARCH PROJECT &bull; TO BE PUBLISHED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MIMO Antenna Design &amp; <span className="text-gradient-hardware">RF Engineering</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-frequency CST Studio simulation and microstrip design pushing the boundaries of wireless isolation and MIMO diversity (Simulation verified, prepared for publication).
          </p>
        </div>

        {/* Featured Research Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-slate-900/80 border border-emerald-500/30 p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-emerald-950/30 relative overflow-hidden"
        >
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Paper Info */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{paper.venue}</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/60 text-purple-300">
                  {paper.date}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-slate-300">
                  {paper.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {paper.title}
              </h3>

              {/* Authors */}
              <p className="text-xs font-mono text-emerald-400">
                {paper.authors.join(" • ")}
              </p>

              {/* Abstract */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paper.abstract}
              </p>

              {/* Key Contributions */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Key Research Contributions:
                </h4>
                {paper.keyContributions.map((contrib, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </div>
                ))}
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5 pt-3">
                {paper.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-emerald-950/40 border border-emerald-800/40 text-emerald-200"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              {/* View Simulation Repo Button */}
              {paper.paperUrl && (
                <div className="pt-2">
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/40 text-emerald-300 transition-colors shadow-sm shadow-emerald-950/50"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View CST Simulation &amp; Antenna Repo</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Col: Interactive CST Studio Simulation Telemetry Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-950 border border-emerald-500/30 p-5 space-y-5">
                {/* Visualizer header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white">
                      CST STUDIO SUITE &bull; 3D EM SOLVER
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                    S-PARAM VERIFIED
                  </span>
                </div>

                {/* Simulated Antenna Geometry & Field Visualization */}
                <div className="relative h-44 rounded-xl bg-black/60 border border-emerald-900/40 p-3 flex flex-col justify-between overflow-hidden font-mono">
                  {/* Subtle electromagnetic grid line effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />

                  <div className="flex justify-between items-center text-[10px] text-slate-400 z-10">
                    <span>MIMO Substrate: FR4 (&epsilon;r = 4.4, h = 1.6mm)</span>
                    <span className="text-emerald-400">Castle Notch Active</span>
                  </div>

                  {/* Geometric Castle Patch ASCII / Vector Representation */}
                  <div className="z-10 flex items-center justify-center gap-6 my-auto">
                    <div className="w-16 h-16 rounded-md border-2 border-dashed border-emerald-400/80 bg-emerald-500/10 flex flex-col items-center justify-center p-1 text-[9px] text-center text-emerald-300 shadow-lg shadow-emerald-500/10">
                      <div className="flex gap-1 mb-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-xs" />
                        <div className="w-2 h-2 bg-emerald-400 rounded-xs" />
                      </div>
                      <span>Port 1</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-[10px] text-slate-400 font-mono">
                      <span className="text-cyan-300 font-bold">S21 &lt; -25 dB</span>
                      <span className="text-[9px] text-slate-500">&larr; Decoupled &rarr;</span>
                    </div>

                    <div className="w-16 h-16 rounded-md border-2 border-dashed border-emerald-400/80 bg-emerald-500/10 flex flex-col items-center justify-center p-1 text-[9px] text-center text-emerald-300 shadow-lg shadow-emerald-500/10">
                      <div className="flex gap-1 mb-1">
                        <div className="w-2 h-2 bg-emerald-400 rounded-xs" />
                        <div className="w-2 h-2 bg-emerald-400 rounded-xs" />
                      </div>
                      <span>Port 2</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-slate-400 z-10 border-t border-white/5 pt-1">
                    <span>Hexahedral Mesh: 1.2M Cells</span>
                    <span className="text-emerald-300">Transient Solver</span>
                  </div>
                </div>

                {/* S-Parameter Metrics Breakdown Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {paper.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/60 border border-emerald-900/30 text-center"
                    >
                      <span className="text-[11px] text-slate-400 block font-mono">
                        {spec.label}
                      </span>
                      <span className="text-sm font-bold text-emerald-300 font-mono">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Verification Note */}
                <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-800/30 text-[11px] text-slate-300 font-mono flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Simulated in CST Studio Suite; complete simulation verified and prepared for IEEE publication.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
