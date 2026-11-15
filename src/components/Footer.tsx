"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Mail, 
  ArrowUp, 
  Cpu, 
  Heart,
  FileDown
} from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState("2026");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060b] py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 text-white font-bold text-base tracking-tight font-sans">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Cpu className="w-4 h-4" />
              </div>
              <span>{PORTFOLIO_DATA.personal.name}</span>
            </div>
            <p className="text-slate-400 text-xs text-center md:text-left max-w-sm">
              Hardware-Software Co-Design &bull; Electronics &amp; Communication Engineering Junior at VIT
            </p>
          </div>

          {/* Nav quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-300">
            <Link href="#hero" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link href="#research" className="hover:text-cyan-400 transition-colors">
              Research
            </Link>
            <Link href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Socials & Resume */}
          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors"
              aria-label="Mailto"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-colors ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            &copy; {currentYear} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>
          <div>
            Designed &amp; engineered for seamless Vercel deployment.
          </div>
        </div>
      </div>
    </footer>
  );
}
