"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { personalData } from "@/lib/data";

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-36 md:pb-16 flex flex-col justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (58%): Role, Headline, Description & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-4 sm:space-y-5"
          >
            {/* Role Eyebrow (No duplicate name) */}
            <motion.div variants={itemVariants}>
              <span className="block text-xs sm:text-sm font-mono font-bold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                AI ENGINEER IN THE MAKING • FULL-STACK DEVELOPER
              </span>
            </motion.div>

            {/* Main Headline (20-25% smaller, fits in 2-3 lines) */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
            >
              Building intelligent systems <br className="hidden sm:inline" />
              <span className="text-gradient">& digital products.</span>
            </motion.h1>

            {/* Tagline & Subtitle */}
            <motion.div variants={itemVariants} className="space-y-1.5 max-w-xl">
              <p className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200">
                {personalData.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {personalData.heroSubtitle}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto"
            >
              <a
                href="#work"
                onClick={scrollToSection("work")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={scrollToSection("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-[#111827] text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>LET'S WORK TOGETHER</span>
              </a>
            </motion.div>

            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="pt-0.5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{personalData.availability}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (42%): Real Photograph Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
              {/* Restrained cyan/blue ambient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-cyan-500/10 dark:bg-cyan-400/10 blur-lg pointer-events-none" />

              {/* Authentic Photo Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f131a] shadow-lg">
                {!imageError ? (
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={personalData.profileImagePath}
                      alt={personalData.name}
                      fill
                      priority
                      className="object-cover object-top rounded-3xl"
                      onError={() => setImageError(true)}
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] bg-slate-100 dark:bg-[#0f131a] flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {personalData.name}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {personalData.headline}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase"
        >
          {personalData.heroPills.map((pill, idx) => (
            <React.Fragment key={pill}>
              <span>{pill}</span>
              {idx < personalData.heroPills.length - 1 && (
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
