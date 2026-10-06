"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-800/50 animate-pulse border border-slate-300 dark:border-slate-700" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative p-2 rounded-full border border-slate-300/80 dark:border-slate-700/80 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm backdrop-blur-md group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Moon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform" />
        )}
      </motion.div>
    </button>
  );
}
