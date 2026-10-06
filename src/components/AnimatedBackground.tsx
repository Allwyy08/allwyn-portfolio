"use client";

import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-30" />

      {/* Extremely Restrained Radial Light Bloom */}
      <div className="absolute -top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px]" />
      <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[140px]" />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.015] dark:opacity-[0.02]" />
    </div>
  );
}
