"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Smartphone, Server, Database, Activity, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  onOpenDetail: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenDetail }: ProjectCardProps) {
  const isFederated = project.id === "federated-healthcare";

  return (
    <article className="surface-card rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
      {/* Top Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
            {project.number}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {project.subtitle && (
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {project.subtitle}
          </span>
        )}
      </div>

      {/* Main Title & Description */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      {/* Technical Architecture Visualization */}
      <div className="p-5 rounded-xl bg-slate-50 dark:bg-[#080a0f] border border-slate-200 dark:border-slate-800">
        <span className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
          SYSTEM ARCHITECTURE OVERVIEW
        </span>

        {isFederated ? (
          /* Technical Diagram for Federated Edge Healthcare */
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-[11px] font-mono">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="font-bold text-slate-800 dark:text-slate-200">Android Edge</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold text-slate-800 dark:text-slate-200">Offline Screening</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="font-bold text-slate-800 dark:text-slate-200">Federated Sync</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <Server className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-slate-800 dark:text-slate-200">FastAPI Server</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="font-bold text-slate-800 dark:text-slate-200">Control Center</span>
            </div>
          </div>
        ) : (
          /* Technical Diagram for KOVAI MOTOBIKES Platform */
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-mono">
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200">Next.js Portal</span>
              <span className="text-[9px] text-slate-500">Customer Website</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200">PostgreSQL DB</span>
              <span className="text-[9px] text-slate-500">Supabase Auth</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200">Admin Dashboard</span>
              <span className="text-[9px] text-slate-500">Bookings & Inventory</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-1">
              <span className="font-bold text-slate-800 dark:text-slate-200">WhatsApp & Maps</span>
              <span className="text-[9px] text-slate-500">Lead Integration</span>
            </div>
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <span className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          TECHNOLOGY STACK
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetail(project)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
        >
          <span>VIEW CASE STUDY</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
            >
              <span>LIVE WEBSITE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>VIEW CODE</span>
          </a>
        </div>
      </div>
    </article>
  );
}
