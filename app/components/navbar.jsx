"use client";

import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-green-900 text-white h-16 flex flex-col lg:flex-row lg:justify-evenly lg:items-center w-full relative">
      <div className="flex flex-row items-center justify-between h-16 px-4 lg:px-0">
        <h1 className="text-4xl font-bold lg:ml-0">Portfolio</h1>
        
        {/* Hamburger button - visible on mobile */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile menu - shown when isOpen is true */}
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col bg-green-800 lg:hidden absolute h-48 top-16 left-0 right-0 z-10`}>
        <a href="#home" className="hover:underline hover:cursor-pointer text-center  p-4">HOME</a>
        <a href="#projects" className="hover:underline hover:cursor-pointer text-center  p-4">PROJECTS</a>
        <a href="#contact" className="hover:underline hover:cursor-pointer text-center p-4">CONTACT</a>
      </div>

      {/* Desktop menu - always visible on lg screens */}
      <div className="hidden lg:flex lg:flex-row lg:gap-8">
        <a href="#home" className="hover:underline hover:cursor-pointer text-2xl">HOME</a>
        <a href="#projects" className="hover:underline hover:cursor-pointer text-2xl">PROJECTS</a>
        <a href="#contact" className="hover:underline hover:cursor-pointer text-2xl">CONTACT</a>
      </div>
    </div>
  );
}

export default Navbar;