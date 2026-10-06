import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectSection from "@/components/ProjectSection";
import Capabilities from "@/components/Capabilities";
import Skills from "@/components/Skills";
import EducationCertifications from "@/components/EducationCertifications";
import LookingFor from "@/components/LookingFor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white dark:bg-[#080a0f] text-slate-900 dark:text-slate-100 transition-colors duration-250">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <ProjectSection />
        <Capabilities />
        <Skills />
        <EducationCertifications />
        <LookingFor />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
