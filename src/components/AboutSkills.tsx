"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Globe, 
  Cpu, 
  Code2, 
  GraduationCap, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Sparkles,
  CircuitBoard
} from "lucide-react";

export function AboutSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const skillCategories = PORTFOLIO_DATA.skills;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <CircuitBoard className="w-3.5 h-3.5" />
            <span>ABOUT ME &amp; TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging <span className="text-gradient-cyan">Silicon Hardware</span> &amp;{" "}
            <span className="text-gradient-purple">Modern Software</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {PORTFOLIO_DATA.personal.bio}
          </p>
        </div>

        {/* Education & Academic Foundation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {PORTFOLIO_DATA.personal.degree}
              </h3>
              <p className="text-slate-300 font-medium">
                {PORTFOLIO_DATA.personal.university}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed pt-1">
                Coursework and lab specializations in Microprocessors &amp; Microcontrollers, Digital System Design (Verilog), 
                Antenna &amp; Microwave Engineering, Signals &amp; Systems, Control Engineering, and Object-Oriented Software Design.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="p-3.5 rounded-xl bg-black/40 border border-cyan-900/40 text-center">
                <span className="text-slate-400 text-xs block font-mono">DEGREE LEVEL</span>
                <span className="text-cyan-300 font-bold text-base">3rd-Year B.Tech</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-purple-900/40 text-center">
                <span className="text-slate-400 text-xs block font-mono">CORE FOCUS</span>
                <span className="text-purple-300 font-bold text-base">HW-SW Co-Design</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Web & Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-slate-900/60 border border-cyan-500/30 p-6 backdrop-blur-xl relative group hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                <span>Web &amp; Software</span>
                <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  Full-Stack
                </span>
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Responsive architectures, serverless computing, and enterprise API orchestration.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skillCategories[0].skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-950/30 border border-cyan-800/40 text-cyan-200 hover:border-cyan-400/60 hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-400">
              ⚡ Reactive SPAs &bull; Next.js 16 &bull; RESTful APIs
            </div>
          </motion.div>

          {/* Hardware & Core ECE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-slate-900/60 border border-purple-500/30 p-6 backdrop-blur-xl relative group hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                <span>Hardware &amp; Core ECE</span>
                <span className="text-xs font-mono text-purple-400 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-800/40">
                  Embedded &amp; RF
                </span>
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Microcontroller firmware, digital logic synthesis, PCB schematics, and EM simulations.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skillCategories[1].skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-950/30 border border-purple-800/40 text-purple-200 hover:border-purple-400/60 hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-400">
              🔬 CST 3D EM &bull; Verilog HDL &bull; KiCad PCB
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-slate-900/60 border border-emerald-500/30 p-6 backdrop-blur-xl relative group hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                <span>Languages</span>
                <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                  Systems &amp; OOP
                </span>
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Core programming languages for algorithmic problem solving, simulations, and production software.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skillCategories[2].skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-950/30 border border-emerald-800/40 text-emerald-200 hover:border-emerald-400/60 hover:text-white transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-400">
              💻 Low-level pointers &bull; Data structures &bull; Python CVXPY
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
