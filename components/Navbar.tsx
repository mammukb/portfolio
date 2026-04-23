"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    // { name: "Experience", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`pointer-events-auto transition-all duration-300 rounded-full border ${
          scrolled 
            ? "bg-dark/80 backdrop-blur-md shadow-[0_0_20px_rgba(201,168,76,0.15)] border-white/10 py-3 px-8" 
            : "bg-transparent border-transparent py-4 px-6"
        }`}
      >
        <div className="flex justify-between items-center gap-8 md:gap-16">
          <Link href="#home" className="text-2xl font-syne font-bold text-gold cursor-pointer">
            PORTFOLIO
          </Link>
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group font-inter text-sm font-medium tracking-wide"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
