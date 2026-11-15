"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  CircuitBoard
} from "lucide-react";

export function ExperienceTimeline() {
  const experiences = PORTFOLIO_DATA.experiences;

  const accentStyles = {
    cyan: {
      border: "border-cyan-500/30 group-hover:border-cyan-400/60",
      glow: "group-hover:shadow-cyan-500/10",
      badge: "bg-cyan-950/60 border-cyan-800/50 text-cyan-300",
      dot: "bg-cyan-400 shadow-cyan-400/50",
      tag: "bg-cyan-950/30 border-cyan-800/40 text-cyan-300",
    },
    purple: {
      border: "border-purple-500/30 group-hover:border-purple-400/60",
      glow: "group-hover:shadow-purple-500/10",
      badge: "bg-purple-950/60 border-purple-800/50 text-purple-300",
      dot: "bg-purple-400 shadow-purple-400/50",
      tag: "bg-purple-950/30 border-purple-800/40 text-purple-300",
    },
    emerald: {
      border: "border-emerald-500/30 group-hover:border-emerald-400/60",
      glow: "group-hover:shadow-emerald-500/10",
      badge: "bg-emerald-950/60 border-emerald-800/50 text-emerald-300",
      dot: "bg-emerald-400 shadow-emerald-400/50",
      tag: "bg-emerald-950/30 border-emerald-800/40 text-emerald-300",
    },
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER &amp; INTERNSHIP MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-gradient-purple">Experience</span> &amp; Hands-On Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proven track record spanning enterprise systems integration, RTL digital logic design, and upcoming medical technology engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central/side line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500/20 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const styling = accentStyles[exp.badgeColor];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Timeline Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="relative">
                      <div className={`w-4 h-4 rounded-full ${styling.dot} shadow-lg`} />
                      {exp.status === "Upcoming" && (
                        <div className="absolute -inset-1 rounded-full bg-cyan-400 animate-ping opacity-60" />
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`ml-10 sm:ml-0 w-full sm:w-[calc(50%-2.5rem)] group ${
                      isEven ? "sm:mr-auto" : "sm:ml-auto"
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-slate-900/70 border ${styling.border} backdrop-blur-xl shadow-xl ${styling.glow} transition-all duration-300 relative overflow-hidden`}
                    >
                      {/* Ambient corner glow */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                      {/* Top Bar: Company & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <h3 className="text-lg font-bold text-white tracking-tight">
                            {exp.company}
                          </h3>
                        </div>

                        <div className="flex items-center gap-1.5 font-mono text-xs">
                          <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${styling.badge}`}>
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Role Title */}
                      <div className="text-base font-semibold text-cyan-300 mb-2 flex items-center gap-1.5">
                        <span>{exp.role}</span>
                        {exp.status === "Upcoming" && (
                          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                            Upcoming
                          </span>
                        )}
                      </div>

                      {/* Description / Summary */}
                      {exp.description && (
                        <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      {/* Responsibilities list */}
                      <ul className="space-y-2 mb-5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed"
                          >
                            <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Chips */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${styling.tag}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
