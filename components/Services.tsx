"use client";

import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Website Building",
    description: "Creating modern, responsive, and performant web applications customized to elevate your brand identity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
  },
  {
    title: "AI Automation",
    description: "Integrating intelligent agents safely into workflows to optimize speed, accuracy, and scaling for businesses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
    ),
  },
  {
    title: "E-commerce",
    description: "Building scalable and secure online storefronts with streamlined checkout experiences and inventory management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    ),
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
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold text-white mb-4">
            My <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-400 font-inter max-w-2xl mx-auto">
            Providing tailored digital solutions across modern web development, artificial intelligence, and online commerce to meet your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-dark p-8 rounded-2xl border border-white/5 hover:border-gold/30 flex flex-col items-center text-center group transition-all duration-300 hover:shadow-[0_15px_30px_rgba(201,168,76,0.1)] relative overflow-hidden"
            >
              {/* Creative Hover Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold/20 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-300 relative z-10">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-syne font-bold text-white mb-4 relative z-10 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-inter text-sm md:text-base leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
