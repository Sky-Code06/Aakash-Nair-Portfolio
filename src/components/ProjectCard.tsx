"use client";

import React, { useRef, useState } from "react";
import { ProjectItem, PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon } from "./Icons";
import { 
  ExternalLink, 
  Sparkles, 
  Award, 
  ChevronRight, 
  Cpu, 
  Globe, 
  Activity, 
  SlidersHorizontal 
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7; // max 7 deg tilt
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const accentThemes = {
    cyan: {
      border: "border-cyan-500/30 group-hover:border-cyan-400/80",
      glow: "hover:shadow-cyan-500/15",
      badge: "bg-cyan-950/70 border-cyan-700/60 text-cyan-300",
      tag: "bg-cyan-950/40 border-cyan-800/40 text-cyan-200",
      btn: "bg-cyan-400 hover:bg-cyan-300 text-slate-950",
      btnGhost: "hover:border-cyan-400/50 text-cyan-300",
      sheen: "from-cyan-500/15 via-transparent to-transparent",
    },
    purple: {
      border: "border-purple-500/30 group-hover:border-purple-400/80",
      glow: "hover:shadow-purple-500/15",
      badge: "bg-purple-950/70 border-purple-700/60 text-purple-300",
      tag: "bg-purple-950/40 border-purple-800/40 text-purple-200",
      btn: "bg-purple-400 hover:bg-purple-300 text-slate-950",
      btnGhost: "hover:border-purple-400/50 text-purple-300",
      sheen: "from-purple-500/15 via-transparent to-transparent",
    },
    emerald: {
      border: "border-emerald-500/30 group-hover:border-emerald-400/80",
      glow: "hover:shadow-emerald-500/15",
      badge: "bg-emerald-950/70 border-emerald-700/60 text-emerald-300",
      tag: "bg-emerald-950/40 border-emerald-800/40 text-emerald-200",
      btn: "bg-emerald-400 hover:bg-emerald-300 text-slate-950",
      btnGhost: "hover:border-emerald-400/50 text-emerald-300",
      sheen: "from-emerald-500/15 via-transparent to-transparent",
    },
    amber: {
      border: "border-amber-500/30 group-hover:border-amber-400/80",
      glow: "hover:shadow-amber-500/15",
      badge: "bg-amber-950/70 border-amber-700/60 text-amber-300",
      tag: "bg-amber-950/40 border-amber-800/40 text-amber-200",
      btn: "bg-amber-400 hover:bg-amber-300 text-slate-950",
      btnGhost: "hover:border-amber-400/50 text-amber-300",
      sheen: "from-amber-500/15 via-transparent to-transparent",
    },
  };

  const theme = accentThemes[project.accent];

  return (
    <div
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
            isHovered ? "translateY(-6px)" : "translateY(0px)"
          }`,
          transition: isHovered
            ? "transform 0.1s ease-out, box-shadow 0.3s ease"
            : "transform 0.4s ease-out, box-shadow 0.3s ease",
        }}
        className={`group relative h-full rounded-2xl bg-slate-900/80 border ${theme.border} p-6 sm:p-7 backdrop-blur-xl shadow-xl ${theme.glow} flex flex-col justify-between overflow-hidden cursor-pointer`}
        onClick={() => onOpenModal(project)}
      >
        {/* Dynamic Sheen reflection */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${theme.sheen} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        />

        {/* Top bar with Category & Badge */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
              {project.category}
            </span>

            {project.badge && (
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${theme.badge}`}
              >
                {project.badge.includes("Winner") ? (
                  <Award className="w-3 h-3 text-amber-300" />
                ) : (
                  <Sparkles className="w-3 h-3" />
                )}
                <span>{project.badge}</span>
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between">
            <span>{project.title}</span>
            <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </h3>

          <p className="text-xs font-mono text-cyan-400/90 mb-3">
            {project.subtitle}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key highlights / bullets */}
          <ul className="space-y-1.5 mb-6">
            {project.highlights.slice(0, 2).map((item, idx) => (
              <li
                key={idx}
                className="text-xs text-slate-400 flex items-start gap-1.5"
              >
                <span className="text-cyan-400 font-bold mt-0.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips & Buttons */}
        <div className="space-y-4 pt-4 border-t border-white/5">
          {/* Tech stack chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${theme.tag}`}
              >
                [{tag}]
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div 
            className="flex items-center justify-between pt-1"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onOpenModal(project)}
              className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Explore Architecture</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {/* GitHub button - prominent hover lift */}
            <a
              href={project.githubUrl || PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border border-white/10 bg-white/5 hover:bg-white/10 ${theme.btnGhost} group-hover:border-cyan-400/50 shadow-sm`}
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
