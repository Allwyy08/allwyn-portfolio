"use client";

import React from "react";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Eyebrow & Title */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              02 — ABOUT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              A little about me.
            </h2>
          </div>

          {/* Editorial Content */}
          <div className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 max-w-3xl">
            <p>
              I'm <strong className="text-slate-900 dark:text-white font-bold">Allwyn Noble</strong>, a pre-final year B.Tech Computer Science Engineering (Artificial Intelligence) student at Karunya Institute of Technology and Sciences.
            </p>
            <p>
              I enjoy building practical software systems that combine AI/ML, full-stack development, mobile applications and backend engineering.
            </p>
            <p>
              My work ranges from privacy-preserving federated learning and edge healthcare systems to production-style digital platforms designed for real businesses.
            </p>
          </div>

          {/* Three Clean Key Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div>
              <span className="block text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                EDUCATION
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                B.Tech CSE — Artificial Intelligence
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Karunya Inst. of Tech & Sciences (2027)
              </p>
            </div>

            <div>
              <span className="block text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                BASED IN
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Coimbatore, Tamil Nadu
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                India
              </p>
            </div>

            <div>
              <span className="block text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                OPEN TO
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                Internships & Freelance
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Available for selected projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
