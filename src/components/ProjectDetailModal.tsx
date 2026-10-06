"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Layers, Cpu, Code, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar / Header */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/60">
                {project.number}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Title & Subtitle */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-sm font-mono text-cyan-400 mt-1">{project.subtitle}</p>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <span>LIVE WEBSITE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700"
              >
                <Github className="w-4 h-4" />
                <span>VIEW CODE</span>
              </a>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview / Description */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
                OVERVIEW
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  THE PROBLEM
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-950/40 border border-slate-800">
                <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" />
                  THE SOLUTION
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Highlights / Key Features */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                KEY HIGHLIGHTS & CAPABILITIES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-800/40 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture breakdown */}
            <div>
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3 flex items-center gap-1.5">
                <Code className="w-4 h-4 text-indigo-400" />
                SYSTEM ARCHITECTURE
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((arch, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono text-cyan-200"
                  >
                    • {arch}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/30 border border-cyan-800/40">
              <h4 className="text-xs font-mono uppercase text-cyan-300 tracking-wider mb-1">
                OUTCOME & IMPACT
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Allwyn Noble Portfolio</span>
            <button
              onClick={onClose}
              className="text-cyan-400 hover:text-cyan-300 font-medium font-mono"
            >
              Close [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
