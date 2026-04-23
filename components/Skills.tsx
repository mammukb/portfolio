"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++", "PHP"],
  },
  {
    category: "Web/Frameworks",
    items: ["Next.js", "Django", "React", "Tailwind CSS"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    category: "Other",
    items: ["REST APIs", "Git", "AI/LLM", "RAG", "ChromaDB"],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const pillVariants: any = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white">
            Technical <span className="text-gold">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillsData.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-colors"
            >
              <h3 className="text-xl font-syne font-semibold text-white mb-6 border-b border-white/10 pb-4">
                {categoryGroup.category}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mt-4"
              >
                {categoryGroup.items.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={pillVariants}
                    className="px-4 py-2 bg-dark rounded-full border border-white/10 text-gray-300 font-inter text-sm cursor-default transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_15px_rgba(201,168,76,0.4)] hover:-translate-y-1"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
