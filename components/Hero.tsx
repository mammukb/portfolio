"use client";

import { motion, useTransform, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const typewriterWords = ["Full Stack Developer", "MCA Graduate", "AI Explorer", "Web Developer", "Software Engineer"];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    
    // Sparkle mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovering) setIsHovering(true);
    };
    // Hide trail if cursor leaves window
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovering]);
  
  // Animations have been stopped as per request.

  // Spring physics for sparkles
  const springX = useSpring(mousePosition.x, { stiffness: 150, damping: 25, mass: 0.5 });
  const springY = useSpring(mousePosition.y, { stiffness: 150, damping: 25, mass: 0.5 });

  useEffect(() => {
    springX.set(mousePosition.x);
    springY.set(mousePosition.y);
  }, [mousePosition, springX, springY]);

  // Typewriter effect state
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullWord = typewriterWords[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentWord === currentFullWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      } else {
        const nextContent = isDeleting
          ? currentFullWord.substring(0, currentWord.length - 1)
          : currentFullWord.substring(0, currentWord.length + 1);
        setCurrentWord(nextContent);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <>
      {/* Background Sparkles Effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/40 blur-[10px] pointer-events-none z-0"
        style={{ x: springX, y: springY, opacity: isHovering ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white blur-[2px] pointer-events-none z-0"
        style={{ 
          x: useTransform(springX, (val) => val + 10), 
          y: useTransform(springY, (val) => val + 10), 
          opacity: isHovering ? 1 : 0 
        }}
        transition={{ delay: 0.05 }}
      />
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 overflow-hidden relative"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Avatar */}
          <motion.div
            style={{ zIndex: 10 }}
            className="flex justify-center lg:justify-start order-2 lg:order-1 relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full border-[8px] border-gold shadow-[0_0_60px_rgba(201,168,76,0.6)] flex items-center justify-center bg-[#0a0a0a] overflow-hidden group">
              {/* Profile Image - The user is instructed to put the bg-removed image as public/profile.png */}
              <Image 
                src="/heroimagemkb.jpg" 
                alt="Muhammed K B" 
                fill
                className="object-cover z-10 scale-105 group-hover:scale-110 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 rounded-full border border-gold/50 scale-105 animate-pulse z-20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block px-4 py-1.5 rounded-full border border-gold bg-gold/10 text-gold font-inter text-sm mb-6 shadow-[0_0_15px_rgba(201,168,76,0.2)]"
            >
              Software Engineer
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-syne font-bold text-white mb-4 leading-tight">
              Muhammed <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">K B</span>
            </h1>
            <div className="flex gap-4">  
              <a href="/MUHAMMEDKBAPRIL2026.pdf" download> 
            <button className="hover:bg-gold hover:text-black hover:cursor-pointer  px-4 py-2 rounded-full border border-gold bg-gold/10 text-gold font-inter text-sm mb-6 shadow-[0_0_15px_rgba(201,168,76,0.2)]">
              Download CV
            </button></a>
            <a href="#contact"> 
            <button className="hover:bg-gold hover:text-black hover:cursor-pointer  px-4 py-2 rounded-full border border-gold bg-gold/10 text-gold font-inter text-sm mb-6 shadow-[0_0_15px_rgba(201,168,76,0.2)]">
              contact me
            </button></a>
            </div>
           
            <div className="h-8 md:h-10 text-xl md:text-2xl font-inter text-gray-400 mt-2">
              I am a <span className="text-white font-medium border-r-2 border-gold pr-1 animate-pulse">{currentWord}</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
