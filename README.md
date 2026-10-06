# Allwyn Noble — Personal Portfolio Website

A personal portfolio website for **Allwyn Noble** — AI Engineer in the Making & Full-Stack Developer.

Built with an **Apple-inspired clean aesthetic** combined with **Vercel-like developer precision**: dark surfaces, subtle grids, cyan/blue accent highlights, Framer Motion micro-interactions, responsive touch navigation, theme switching, and interactive project case studies.

---

## ⚡ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **Deployment Ready**: Vercel

---

## 🌟 Key Features & Architecture

1. **Apple + Vercel Philosophy**:
   - Clean hierarchy, spacious padding, subtle noise/grid textures, glassmorphism, and smooth transitions.
2. **Interactive Featured Projects**:
   - **Federated Edge Learning for Healthcare in Low-Network Areas** (PyTorch, Flower, FastAPI, Kotlin, Jetpack Compose, Room).
   - **Full-Stack Dealership & Service Management Platform — KOVAI MOTOBIKES** (Next.js, Supabase, PostgreSQL, REST APIs, Vercel).
   - Interactive modal case studies detailing Overview, Problem, Solution, Architecture, Key Features, and Impact.
3. **Theme Engine**:
   - Dark Mode (near-black `#08090d`, charcoal, cyan/blue accents).
   - Light Mode (crisp off-white, dark charcoal text, subtle borders).
   - System preference default + persisted choice in `localStorage`.
4. **Desktop Custom Cursor & Scroll Progress Bar**:
   - Reactive dot-and-ring cursor physics for desktop.
   - Disables on mobile touch screens and when `prefers-reduced-motion` is enabled.
5. **Categorized Skills**:
   - Languages, AI/ML, Web/Backend, Mobile, Database, and Tools & Deployment (no fake progress percentages).
6. **Academic & Certifications Timeline**:
   - B.Tech CSE (Artificial Intelligence) at Karunya Institute of Technology and Sciences (2023–2027).
   - Suguna RIP V School (2021–2023).
   - Verified certifications from IIT Madras, Coursera, LinkedIn Learning, and Kaggle.
7. **Freelance & Contact Hub**:
   - "Let's Build Something" section highlighting key client services.
   - One-click email copying with visual feedback feedback pill.
   - Direct mailto link and social handles (GitHub & LinkedIn).

---

## 📁 Project Structure

```
.
├── public/
│   ├── profile.jpg                 # Hero portrait photograph
│   ├── Allwyn_Noble_Resume.pdf     # Downloadable resume document
│   └── robots.txt                  # Search engine crawler config
├── src/
│   ├── app/
│   │   ├── globals.css             # Design tokens & Tailwind theme definitions
│   │   ├── layout.tsx              # Root layout, theme provider & global SEO
│   │   ├── not-found.tsx           # Custom 404 error page
│   │   ├── page.tsx                # Main single-page portfolio layout
│   │   └── sitemap.ts              # Dynamic sitemap generator
│   ├── components/
│   │   ├── About.tsx               # Professional narrative & highlight cards
│   │   ├── AnimatedBackground.tsx  # Ambient grid and radial gradient blooms
│   │   ├── Certifications.tsx      # Verified workshops & credentials
│   │   ├── Contact.tsx             # Contact section & interactive email copy
│   │   ├── CustomCursor.tsx        # Spring physics desktop cursor
│   │   ├── Education.tsx           # Timeline of academic degrees & coursework
│   │   ├── Footer.tsx              # Minimal footer
│   │   ├── Hero.tsx                # Two-column hero & portrait display
│   │   ├── Navbar.tsx              # Sticky desktop header & mobile drawer
│   │   ├── ProjectCard.tsx         # Interactive project card with hover states
│   │   ├── ProjectDetailModal.tsx  # Case study overlay modal
│   │   ├── ProjectSection.tsx      # Grid of featured projects
│   │   ├── ScrollProgress.tsx      # Reading progress bar at top of page
│   │   ├── Services.tsx           # Freelance services & project CTA
│   │   ├── Skills.tsx              # Categorized tech chips
│   │   ├── ThemeContext.tsx        # Dark/light theme provider
│   │   └── ThemeToggle.tsx         # Animated theme switcher
│   └── lib/
│       └── data.ts                 # Type-safe portfolio data definitions
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration for Tailwind v4
└── tsconfig.json                   # TypeScript configuration
```

---

## 🚀 Local Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Allwyy08/allwyn-noble-portfolio.git
   cd allwyn-noble-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📷 Customizing Assets

- **Profile Image**: Replace `public/profile.jpg` with your uploaded photograph.
- **Resume PDF**: Replace `public/Allwyn_Noble_Resume.pdf` with your updated resume PDF.

---

## 🌐 Vercel Deployment

This repository is pre-configured for instant deployment on Vercel:

1. Push code to GitHub repository `allwyn-noble-portfolio`.
2. Import project into [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Click **Deploy**.

---

© 2026 Allwyn Noble. All Rights Reserved.
