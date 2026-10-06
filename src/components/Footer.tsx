"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { personalData } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-slate-50 dark:bg-[#080a0f] border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
        <div>
          <span className="font-bold text-slate-900 dark:text-white uppercase">{personalData.name}</span>
          <span className="mx-2">•</span>
          <span>{personalData.headline}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            GitHub <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={scrollToTop}
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
