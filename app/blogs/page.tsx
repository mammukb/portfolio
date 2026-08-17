"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sampleBlogs = [
  {
    id: 1,
    title: "The Ultimate Git & GitHub Cheat Sheet for Beginners",
    excerpt: "Master the essential commands and concepts of Git and GitHub to streamline your coding workflow.",
    date: "Aug 08, 2026",
    category: "Git",
    slug: "git-github-cheat-sheet",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Coding Patterns: Cracking Competitive Programming in Java",
    excerpt: "A comprehensive, deep-dive cheat sheet into the most important coding patterns for competitive programming and technical interviews. Complete with Java templates.",
    date: "Aug 09, 2026",
    category: "Algorithms",
    slug: "coding-patterns-java",
  },
  {
    id: 3,
    title: "The Ultimate Java Masterclass: From Zero to Hero Cheat Sheet",
    excerpt: "A complete, sequential cheat sheet for Java. Covering everything from variables and loops to OOP principles and the Collections Framework.",
    date: "Aug 09, 2026",
    category: "Java",
    slug: "java-masterclass",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-dark py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-gold transition-colors font-inter text-sm font-medium mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-syne font-bold text-white mb-4">
              My <span className="text-gold">Blogs</span>
            </h1>
            <p className="text-gray-400 font-inter max-w-2xl text-lg">
              Thoughts, tutorials, and insights on web development, AI, and software engineering.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sampleBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              className="bg-[#0f0f0f] rounded-2xl p-8 border border-white/5 hover:border-gold/50 transition-all duration-500 flex flex-col group relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-inter border border-gold/20">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-xs font-inter">{blog.date}</span>
                </div>
                
                <h3 className="text-xl font-syne font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8 flex-1">
                  {blog.excerpt}
                </p>
                
                <Link
                  href={blog.slug ? `/blogs/${blog.slug}` : `#`}
                  className="mt-auto inline-flex items-center text-white/70 hover:text-white font-inter text-sm font-medium transition-colors group-hover:text-gold"
                >
                  Read Article
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
