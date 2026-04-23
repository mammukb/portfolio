"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "AI Companion",
    description: "Privacy-first AI diary with local LLM, RAG pipeline, face recognition for memory assistance.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "ChromaDB", "Ollama"],
    link: "#",
  },
  {
    name: "eSignDesk",
    description: "Digital form management system for document submission and staff approval workflow.",
    tech: ["Django", "MongoDB", "Next.js", "jsPDF"],
    link: "#",
  },
  {
    name: "Seatme",
    description: "Exam seating arrangement web app deployed and operational in college system.",
    tech: ["Web App", "Automated Seating", "Deployed"],
    link: "#",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cardVariants: any = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">
            Featured <span className="text-gold">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group bg-[#0f0f0f] rounded-2xl p-8 border border-white/5 hover:border-gold/50 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -inset-[1px] bg-gradient-to-b from-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none blur-sm" />
              
              <div className="relative z-10 flex flex-col h-full text-left">
                <div className="mb-6 flex justify-between items-start">
                  <h3 className="text-2xl font-syne font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {project.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-dark transition-all duration-300 transform group-hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>

                <p className="text-gray-400 font-inter text-sm md:text-base leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 auto-rows-max">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1a1a1a] rounded-md text-xs font-inter text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="mt-auto inline-block text-center w-full px-6 py-3 rounded-xl border border-white/10 text-white font-inter font-medium text-sm transition-all duration-300 hover:bg-gold hover:text-dark hover:border-gold"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
