"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, Project } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-slate-200 dark:border-slate-800/60 scroll-mt-20">
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
            03 — SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world projects demonstrating decentralized AI engineering and full-stack software development.
          </p>
        </motion.div>

        {/* Project List */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard
                project={project}
                onOpenDetail={(proj) => setSelectedProject(proj)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
