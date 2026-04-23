"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    type: "Education",
    title: "MCA — College of Engineering Trivandrum",
    grade: "CGPA: 8.6",
    date: "Graduated: 2026",
    direction: "left",
  },
  {
    type: "Education",
    title: "BCA — MES College Marampilly",
    grade: "CGPA: 8.1",
    date: "Graduated: 2024",
    direction: "right",
  },
  {
    type: "Certification",
    title: "UGC-NET — Computer Science & Applications",
    grade: "Qualified",
    date: "June 2025",
    direction: "left",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants = (direction: string): any => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-[#090909]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-gold">
            Education Path
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants(item.direction)}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${
                item.direction === "left" ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-gold rounded-full transform -translate-x-[7px] md:-translate-x-1/2 shadow-[0_0_10px_#c9a84c]" />

              {/* Space for the other side */}
              <div className="hidden md:block w-5/12" />

              {/* Content */}
              <div className="w-full md:w-5/12 pl-12 md:pl-0">
                <div
                  className={`bg-dark border border-white/5 p-6 rounded-xl shadow-lg hover:border-gold/30 transition-colors ${
                    item.direction === "left" ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="text-gold font-inter text-sm mb-2 block uppercase tracking-wider">{item.type}</span>
                  <h3 className="text-white font-syne text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex flex-col gap-1 text-gray-400 font-inter text-sm">
                    <span>{item.grade}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
