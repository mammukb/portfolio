import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Basic Footer */}
      <footer className="py-6 border-t border-white/5 text-center text-gray-500 font-inter text-sm">
        <p>&copy; {new Date().getFullYear()} Muhammed K B. All rights reserved.</p>
      </footer>
    </main>
  );
}
