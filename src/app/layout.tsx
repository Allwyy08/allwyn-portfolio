import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Allwyn Noble — AI/ML & Full-Stack Developer",
  description:
    "Allwyn Noble is a Computer Science Engineering (Artificial Intelligence) student building AI-powered systems, full-stack applications and real-world digital products.",
  keywords: [
    "Allwyn Noble",
    "AI Engineer in the Making",
    "Full-Stack Developer",
    "Federated Learning",
    "Edge AI",
    "Android Developer",
    "Karunya Institute of Technology and Sciences",
    "Coimbatore",
  ],
  authors: [{ name: "Allwyn Noble" }],
  openGraph: {
    title: "Allwyn Noble — AI/ML & Full-Stack Developer",
    description:
      "Pre-final year B.Tech CSE (AI) student building intelligent systems, full-stack web applications, and mobile products.",
    url: "https://allwyn-noble-portfolio.vercel.app",
    siteName: "Allwyn Noble Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Allwyn Noble — AI/ML & Full-Stack Developer",
    description:
      "Pre-final year B.Tech CSE (AI) student building intelligent systems, full-stack web applications, and mobile products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className="min-h-screen bg-[#ffffff] dark:bg-[#080a0f] text-[#0f172a] dark:text-[#f8fafc] antialiased relative selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <AnimatedBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
