"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { lookingForItems } from "@/lib/data";

export default function LookingFor() {
  return (
    <section id="looking-for" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
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
            07 — CURRENTLY LOOKING FOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Opportunities & Roles
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            I am actively seeking software roles and select technical engagements where I can deliver real value.
          </p>
        </motion.div>

        {/* Clean Confident List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lookingForItems.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] flex items-center gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
