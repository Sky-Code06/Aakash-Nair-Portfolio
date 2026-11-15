"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { Layers, Sparkles, Filter } from "lucide-react";

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Web & Cloud",
    "Hardware & Embedded",
    "Controls & Systems",
    "Tools & Extensions",
  ];

  const projects = PORTFOLIO_DATA.projects;

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects</span> &amp; Inventions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From AWS hackathon-winning developer platforms and patent-pending edge wearables, to MPC battery optimization and high-impact web apps.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = selectedFilter === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                    : "bg-slate-900/60 text-slate-400 border border-white/5 hover:text-white hover:bg-slate-800/60 hover:border-white/10"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                    isActive
                      ? "bg-cyan-500/30 text-cyan-200"
                      : "bg-black/40 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onOpenModal={(proj) => setActiveProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for In-Depth Architectural Exploration */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
}
