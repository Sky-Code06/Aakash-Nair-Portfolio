"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Phone, 
  Sparkles, 
  ExternalLink,
  MessageSquare,
  ArrowUpRight
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#00f0ff", "#a855f7", "#10b981"],
      });
    } catch {
      // ignore if blocked
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#00f0ff", "#a855f7", "#10b981"],
      });
    } catch {
      // ignore
    }

    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to <span className="text-gradient-cyan">Build Something</span> Exceptional?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you have an upcoming engineering role, embedded hardware challenge, distributed software project, or research opportunity, my inbox is open!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Quick Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/30 backdrop-blur-xl space-y-4 shadow-xl shadow-cyan-950/20">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Primary Email Channel
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                  Rapid Response
                </span>
              </div>

              <div className="text-lg sm:text-xl font-bold text-white break-all">
                {PORTFOLIO_DATA.personal.email}
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 text-slate-950 text-xs font-semibold transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get In Touch (Mailto)</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-cyan-400/50 text-slate-200 text-xs font-medium transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-200 hover:scale-[1.02] flex flex-col justify-between h-32"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-cyan-400">
                  <GithubIcon className="w-6 h-6" />
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    @Sky-Code06
                  </div>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-200 hover:scale-[1.02] flex flex-col justify-between h-32"
              >
                <div className="flex items-center justify-between text-slate-400 group-hover:text-purple-400">
                  <LinkedinIcon className="w-6 h-6" />
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    in/aakash-nair
                  </div>
                </div>
              </a>
            </div>

            {/* Location & Academic Base */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Base: Vellore Institute of Technology (VIT), India</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Sparkles className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>Available for Summer 2027 Engineering Opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-xl relative">
              <div className="flex items-center gap-2 mb-6 text-sm font-semibold text-white">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Send a Direct Message</span>
              </div>

              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Prepared &amp; Ready!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you, {formData.name}! You can also send this directly via your email client to{" "}
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
                        formData.subject || "Collaboration Inquiry"
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="text-cyan-400 underline font-mono"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ada Lovelace"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="ada@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Internship / Engineering Project / Research"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Aakash, I came across your portfolio and would love to chat about..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
