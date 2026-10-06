"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import { personalData } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Eyebrow & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
            08 — CONTACT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's build something useful.
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl">
            I'm currently open to internships, selected freelance projects and interesting technical collaborations.
          </p>
        </motion.div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
          {/* Left Email Box */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] space-y-4">
            <span className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              DIRECT EMAIL
            </span>

            <div className="flex items-center justify-between gap-3">
              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white break-all">
                {personalData.email}
              </span>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <a
              href={`mailto:${personalData.email}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span>EMAIL ME</span>
            </a>
          </div>

          {/* Right Social Action Links */}
          <div className="space-y-3">
            <span className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              ONLINE PROFILES
            </span>

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] flex items-center justify-between hover:border-cyan-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">
                    GitHub
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    @{personalData.githubUsername}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] flex items-center justify-between hover:border-cyan-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                <div>
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">
                    LinkedIn
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {personalData.linkedinUsername}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
