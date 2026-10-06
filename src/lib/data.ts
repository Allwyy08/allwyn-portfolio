export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  problem: string;
  solution: string;
  architecture: string[];
  outcome: string;
  imageBgGrad: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; tag?: string }[];
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
}

export interface EducationItem {
  period: string;
  institution: string;
  degree: string;
  note?: string;
  isPrimary?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export const personalData = {
  name: "Allwyn Noble",
  headline: "AI Engineer in the Making • Full-Stack Developer",
  tagline: "Turning ideas into intelligent, usable products.",
  location: "Coimbatore, Tamil Nadu, India",
  education: "B.Tech Computer Science Engineering — Artificial Intelligence",
  college: "Karunya Institute of Technology and Sciences",
  graduationYear: "2027",
  email: "allwynnoble7@gmail.com",
  github: "https://github.com/Allwyy08",
  githubUsername: "Allwyy08",
  linkedin: "https://www.linkedin.com/in/allwynnoble",
  linkedinUsername: "allwynnoble",
  availability: "Open to Internships & Freelance Projects",
  resumePath: "/Allwyn_Noble_Resume.pdf",
  profileImagePath: "/profile.jpg",
  heroSubtitle:
    "I build AI-powered systems, full-stack applications and mobile experiences that solve practical problems.",
  aboutText:
    "I'm Allwyn Noble, a pre-final year B.Tech Computer Science Engineering (Artificial Intelligence) student at Karunya Institute of Technology and Sciences.\n\nI enjoy building practical software systems that combine AI/ML, full-stack development, mobile applications and backend engineering.\n\nMy work ranges from privacy-preserving federated learning and edge healthcare systems to production-style digital platforms designed for real businesses.",
  heroPills: ["AI / ML", "FULL-STACK", "FEDERATED LEARNING", "ANDROID", "BACKEND"],
};

export const projectsData: Project[] = [
  {
    id: "federated-healthcare",
    number: "01",
    category: "AI / EDGE COMPUTING",
    title: "FEDERATED EDGE LEARNING FOR HEALTHCARE IN LOW-NETWORK AREAS",
    subtitle: "Privacy-Preserving Edge Healthcare System",
    shortDescription:
      "A privacy-preserving healthcare screening framework designed for low-connectivity environments using Federated Learning, Edge Computing, Android edge devices and energy-aware intelligent scheduling.",
    fullDescription:
      "This project presents an offline-first, decentralized medical screening framework engineered specifically for rural and low-bandwidth environments. By combining Federated Learning (FedAvg / FedAsync) with lightweight mobile edge nodes, sensitive diagnostic data never leaves local devices while still contributing to global diagnostic model improvements.",
    technologies: [
      "Python",
      "PyTorch",
      "Flower",
      "FastAPI",
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "WorkManager",
      "SQLite",
    ],
    highlights: [
      "Federated Learning (FedAvg / FedAsync aggregations)",
      "Offline-first healthcare screening workflow",
      "Android edge client with local Room DB & background WorkManager sync",
      "Energy-aware Deep Q-Network (DQN) scheduler for client selection",
      "Real-time device telemetry & network connectivity adaptation",
      "Offline-to-online encrypted model weight synchronization",
      "Healthcare Edge Control Center dashboard",
      "Patient risk classification and critical emergency alert handling",
    ],
    githubUrl: "https://github.com/Allwyy08/Energy-aware-federated-edge-healthcare",
    problem:
      "Rural clinical environments frequently operate under intermittent internet connectivity, preventing traditional cloud-based AI diagnostic tools from functioning, while centralizing patient health records creates severe privacy and regulatory compliance risks.",
    solution:
      "Designed a hybrid Federated Edge architecture. Patient screening data is processed locally on Android devices running optimized PyTorch Lite inference models. When network bandwidth becomes available, local weight gradients (not raw patient records) are securely transmitted to the central aggregator using an energy-aware DQN scheduler.",
    architecture: [
      "Android Edge Client (Kotlin + Jetpack Compose + PyTorch Lite + Room)",
      "Aggregator Backend (FastAPI + Flower FL Framework + PyTorch Server)",
      "Energy-Aware DQN Scheduler (Selects training clients based on battery, thermal & network state)",
      "Sync Engine (SQLite & WorkManager for resilient offline queueing)",
    ],
    outcome:
      "Achieved robust local risk classification accuracy with zero raw patient data transmission. Demonstrated reliable model aggregation over unstable 2G/3G connections while preserving mobile battery lifetime through intelligent DQN scheduling.",
    imageBgGrad: "from-slate-900 via-slate-800 to-slate-950",
    iconName: "Activity",
  },
  {
    id: "kovai-motobikes",
    number: "02",
    category: "FULL-STACK / BUSINESS PLATFORM",
    title: "FULL-STACK DEALERSHIP & SERVICE MANAGEMENT PLATFORM",
    subtitle: "KOVAI MOTOBIKES",
    shortDescription:
      "A production-style dealership and service management platform combining a premium customer-facing website with database-backed bookings, test rides, enquiries and an authenticated admin dashboard.",
    fullDescription:
      "KOVAI MOTOBIKES is a comprehensive digital solution designed to modernize operations for a real motorcycle dealership. It bridges customer discovery with operational efficiency through dynamic inventory browsing, online test ride and service bookings, direct WhatsApp integration, and a secured administrator dashboard.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "Vercel",
    ],
    highlights: [
      "Interactive motorcycle catalogue with real-time specs",
      "Dynamic filtering by engine capacity, price sorting, and search",
      "Online service booking and test ride scheduling",
      "Customer enquiry management & instant WhatsApp sales integration",
      "Authenticated Admin Dashboard for inventory & booking management",
      "PostgreSQL database with relational schema design",
      "Supabase Authentication & role-based access control",
      "Google Maps integration for showroom location & directions",
      "Mobile-first responsive UX and production Vercel deployment",
    ],
    githubUrl: "https://github.com/Allwyy08/kovai-motobikes",
    liveUrl: "https://kovai-motobikes.vercel.app/",
    problem:
      "Traditional vehicle showrooms often rely on manual phone calls and paper logs for customer enquiries, test rides, and service appointments, leading to lost leads, double-booked service slots, and poor digital customer engagement.",
    solution:
      "Built an end-to-end full-stack web application featuring a high-converting customer portal with interactive vehicle filtering, test ride booking, and direct WhatsApp sales routing, paired with an authenticated admin management portal backed by PostgreSQL.",
    architecture: [
      "Frontend: Next.js App Router, React, Tailwind CSS, TypeScript",
      "Database & Auth: Supabase PostgreSQL, RLS policies, Row-level security",
      "API Layer: Next.js Server Actions & Supabase REST API",
      "Integrations: Google Maps API & WhatsApp Business API",
    ],
    outcome:
      "Streamlined dealership operations with 100% digital booking visibility, automated lead capturing, and an elevated brand presence for the showroom.",
    imageBgGrad: "from-slate-900 via-slate-800 to-slate-950",
    iconName: "Bike",
  },
];

export const capabilitiesData: CapabilityItem[] = [
  {
    number: "01",
    title: "AI / MACHINE LEARNING",
    description:
      "Machine learning applications, intelligent systems, model integration and AI-powered workflows.",
  },
  {
    number: "02",
    title: "FULL-STACK APPLICATIONS",
    description:
      "Modern web applications using React / Next.js with backend APIs and database integration.",
  },
  {
    number: "03",
    title: "EDGE & MOBILE SYSTEMS",
    description:
      "Android applications and edge systems designed for offline-first and low-connectivity environments.",
  },
  {
    number: "04",
    title: "BACKEND & DATABASES",
    description:
      "REST APIs, backend services, authentication and database-driven applications.",
  },
  {
    number: "05",
    title: "BUSINESS DIGITAL PLATFORMS",
    description:
      "Websites and internal systems designed around real business workflows.",
  },
  {
    number: "06",
    title: "PROTOTYPING TO PRODUCTION",
    description:
      "Turning an idea into a functional, deployable software product.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "Kotlin" },
      { name: "JavaScript" },
      { name: "SQL" },
      { name: "PHP" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Machine Learning" },
      { name: "Federated Learning" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "NLP" },
      { name: "SMOTE" },
    ],
  },
  {
    title: "Web",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "FastAPI" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Android" },
      { name: "Jetpack Compose" },
      { name: "Room" },
      { name: "WorkManager" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "MySQL" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Android Studio" },
      { name: "Streamlit" },
      { name: "Vercel" },
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    period: "2023 — Present (Expected 2027)",
    institution: "Karunya Institute of Technology and Sciences",
    degree: "B.Tech Computer Science Engineering — Artificial Intelligence",
    note: "Focus on AI/ML, Federated Learning, Mobile Systems, and Database Architectures.",
    isPrimary: true,
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Machine Learning Workshop",
    issuer: "IIT Madras",
  },
  {
    title: "Cyber Threat",
    issuer: "Coursera",
  },
  {
    title: "Generative AI",
    issuer: "LinkedIn Learning",
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
  },
];

export const lookingForItems: string[] = [
  "Software Engineering Internships",
  "AI / ML Internships",
  "Full-Stack Development Opportunities",
  "Selected Freelance Projects",
  "Interesting Technical Collaborations",
];
