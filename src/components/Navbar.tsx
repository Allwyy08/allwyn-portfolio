"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Download, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/lib/data";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Selected Work", href: "#work" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#080a0f]/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2 font-bold tracking-tight text-slate-900 dark:text-slate-100 hover:opacity-80 transition-opacity"
        >
          <span className="text-sm font-semibold tracking-wider uppercase">
            {personalData.name}
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-slate-200 dark:border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-white dark:bg-slate-800 rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={personalData.resumePath}
            download="Allwyn_Noble_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white transition-all shadow-sm group"
          >
            <span>Resume</span>
            <Download className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[60px] p-4 bg-white dark:bg-[#080a0f] border-b border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="flex flex-col gap-1 p-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-slate-100 dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href={personalData.resumePath}
                  download="Allwyn_Noble_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center flex items-center justify-center gap-2"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
