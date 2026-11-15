"use client";

import React from "react";
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
  CircuitBoard,
  Cpu as Microchip,
  Radio,
  Zap
} from "lucide-react";

export function AboutSkills() {
  const skillCategories = PORTFOLIO_DATA.skills;

  const categoryIcons = [
    <Cpu key="cpu" className="w-6 h-6" />,
    <CircuitBoard key="circuit" className="w-6 h-6" />,
    <Globe key="globe" className="w-6 h-6" />,
  ];

  const categoryStyles = [
    {
      border: "border-emerald-500/30 hover:border-emerald-400/60",
      glow: "hover:shadow-emerald-500/10",
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      badge: "text-emerald-400 bg-emerald-950/60 border-emerald-800/40",
      tag: "bg-emerald-950/30 border-emerald-800/40 text-emerald-200 hover:border-emerald-400/60",
      dot: "bg-emerald-400",
    },
    {
      border: "border-purple-500/30 hover:border-purple-400/60",
      glow: "hover:shadow-purple-500/10",
      iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
      badge: "text-purple-400 bg-purple-950/60 border-purple-800/40",
      tag: "bg-purple-950/30 border-purple-800/40 text-purple-200 hover:border-purple-400/60",
      dot: "bg-purple-400",
    },
    {
      border: "border-cyan-500/30 hover:border-cyan-400/60",
      glow: "hover:shadow-cyan-500/10",
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      badge: "text-cyan-400 bg-cyan-950/60 border-cyan-800/40",
      tag: "bg-cyan-950/30 border-cyan-800/40 text-cyan-200 hover:border-cyan-400/60",
      dot: "bg-cyan-400",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE SPECIALIZATION &bull; EMBEDDED SYSTEMS &bull; IOT &bull; AI/ML</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pioneering <span className="text-gradient-hardware">Embedded Systems &amp; IoT</span> with{" "}
            <span className="text-gradient-purple">Edge AI</span>
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
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC &amp; RESEARCH FOUNDATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {PORTFOLIO_DATA.personal.degree}
              </h3>
              <p className="text-slate-300 font-medium">
                {PORTFOLIO_DATA.personal.university}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed pt-1">
                Specialized coursework and advanced laboratory research across Embedded Systems, IoT Architectures, TinyML, 
                Digital Signal Processing, Microcontrollers (ESP32 / ARM), Control Systems, and Hardware-Software Co-Design.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="p-3.5 rounded-xl bg-black/40 border border-emerald-900/40 text-center">
                <span className="text-slate-400 text-xs block font-mono">PRIMARY DOMAIN</span>
                <span className="text-emerald-300 font-bold text-base">Embedded, IoT &amp; AI/ML</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-purple-900/40 text-center">
                <span className="text-slate-400 text-xs block font-mono">CORE EXPERTISE</span>
                <span className="text-purple-300 font-bold text-base">TinyML &amp; Real-Time DSP</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 Pillars Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const styling = categoryStyles[idx];
            const icon = categoryIcons[idx];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-2xl bg-slate-900/60 border ${styling.border} p-6 backdrop-blur-xl relative group hover:shadow-xl ${styling.glow} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-all ${styling.iconBg}`}>
                    {icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                    <span>{category.title}</span>
                    <span className={`text-xs font-mono px-2 py-0.5 rounded border ${styling.badge}`}>
                      {category.badge}
                    </span>
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {category.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors cursor-default ${styling.tag}`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  {category.footerNote}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
