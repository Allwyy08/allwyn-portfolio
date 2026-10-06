"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData, certificationsData } from "@/lib/data";

export default function EducationCertifications() {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
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
            06 — EDUCATION & CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
        </motion.div>

        {/* Education & Certifications Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Education Box */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              ACADEMIC DEGREE
            </h3>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                    {edu.period}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                    B.TECH CSE (AI)
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  {edu.institution}
                </h4>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {edu.degree}
                </p>

                {edu.note && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
                    {edu.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certifications List */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              VERIFIED CERTIFICATIONS
            </h3>

            <div className="space-y-3">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
