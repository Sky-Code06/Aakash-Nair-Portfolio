"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/portfolioData";
import { GithubIcon } from "./Icons";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Award,
  Cpu,
  Zap,
  SlidersHorizontal
} from "lucide-react";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-slate-950 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50 z-10 my-8 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-950/60 border border-purple-800/40 text-purple-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>{project.badge}</span>
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-400">
            {project.subtitle}
          </p>
        </div>

        {/* Description & Detailed Breakdown */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed mb-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
              Architecture Overview
            </h4>
            <p className="text-slate-200">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/60 border border-cyan-900/30 text-center"
                >
                  <span className="text-[11px] text-slate-400 block font-mono">
                    {m.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-cyan-300">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Highlights & Engineering Details */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>Key Technical Highlights</span>
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
              Technologies &amp; Protocols
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-cyan-950/40 border border-cyan-800/40 text-cyan-200"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Close Overview
          </button>

          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <a
              href={project.githubUrl || "https://github.com/Sky-Code06"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>View Source on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
