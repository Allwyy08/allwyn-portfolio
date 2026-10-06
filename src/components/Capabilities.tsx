"use client";

import React from "react";
import { motion } from "framer-motion";
import { capabilitiesData } from "@/lib/data";

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
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
            04 — CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What I Build
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilitiesData.map((item) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
