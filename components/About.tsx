"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden min-h-[50vh] flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center w-full">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-8">
            About <span className="text-gold">Me</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg leading-relaxed">
            MCA student at College of Engineering Trivandrum with strong foundations in full-stack web development, database design, and problem-solving. Hands-on experience building scalable web applications using Next.js, Django, and SQL/NoSQL databases. Actively exploring AI-powered applications, REST APIs, and backend system design.
          </p>
        </motion.div>

        {/* RIGHT: Empty Space for the Hero Avatar to drop into */}
        <div className="flex-1 hidden lg:block w-full">
           {/* Space reserved for the falling Hero avatar */}
        </div>
      </div>
    </section>
  );
}
