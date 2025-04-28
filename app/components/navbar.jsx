"use client";

import React from "react";

function Navbar() {
  return (
    <>
      <div className="bg-green-900 text-white h-12 lg:flex lg:flex-row sm:items-center lg:justify-evenly lg:items-center lg:content-center w-full">
        {/* Center "Portfolio" text on small screens */}
        <h1 className="text-4xl font-bold sm:text-center md:text-center lg:text-left">Portfolio</h1>
        
        {/* Navbar for larger screens (hidden on small screens) */}
        <div className="flex-row gap-7 sm:hidden md:hidden">
          <button className="p-6 hover:underline hover:cursor-pointer">
            HOME
          </button>
          <button className="p-6 hover:underline hover:cursor-pointer">
            PROJECTS
          </button>
          <button className="p-6 hover:underline hover:cursor-pointer">
            CONTACT
          </button>
        </div>
      </div>

      {/* Navbar for small screens (hidden on larger screens) */}
      <div className=" mt-3  flex flex-row gap-7 lg:hidden md:hidden text-green-900 ml-8">
        <button className="p-2 h-10 hover:underline hover:cursor-pointer border-2 border-green-900 ">
          HOME
        </button>
        <button className="p-2 h-10 hover:underline hover:cursor-pointer border-2 border-green-900">
          PROJECTS
        </button>
        <button className="p-2 h-10 hover:underline hover:cursor-pointer border-2 border-green-900">
          CONTACT
        </button>
      </div>
    </>
  );
}

export default Navbar;