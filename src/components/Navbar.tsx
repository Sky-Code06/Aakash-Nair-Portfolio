"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Menu, 
  X, 
  Terminal, 
  FileDown, 
  ExternalLink, 
  Sparkles,
  Cpu
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "experience", "projects", "research", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About & Skills", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Research", href: "#research", id: "research" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#05070e]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="group flex items-center gap-2.5 text-white focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-sm shadow-cyan-500/20">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                EMBEDDED // IOT // AI/ML
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Resume Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download="Aakash_Nair_Resume.pdf"
              className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 transition-all duration-200"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
            <Link
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-200 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.resumePath}
              download="Aakash_Nair_Resume.pdf"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400"
              title="Download Resume"
            >
              <FileDown className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-4 rounded-xl bg-slate-950/95 border border-white/10 backdrop-blur-xl shadow-2xl space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 px-3 rounded-lg text-xs font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
