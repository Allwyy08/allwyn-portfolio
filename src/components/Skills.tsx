"use client";

import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="tech-stack" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Eyebrow & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
            05 — TECH STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Technologies, frameworks, and tools used across AI engineering, web systems, and mobile applications.
          </p>
        </motion.div>

        {/* Categorized Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] space-y-3"
            >
              <h3 className="text-xs font-mono font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider pb-2 border-b border-slate-100 dark:border-slate-800">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
