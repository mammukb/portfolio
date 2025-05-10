import React from "react";
import Hero from "./hero";

function Intro() {
  return (
    <div className="flex flex-col lg:flex-row m-12 lg:justify-evenly items-center">
      <div className="w-full lg:w-1/3 ">
        <h1 className="text-6xl font-bold text-green-950">Myself,</h1>
        <p className="text-4xl font-bold mt-2">Muhammed K B</p>
        <div className="w-full mt-4 mb-8">
          <p>
            I am currently pursuing my MCA at the College of Engineering
            Trivandrum, with a strong aspiration to build a career as a Software
            Engineer.
          </p>
          <a href="#contact">
            <button className="rounded-2xl p-2 mt-4 bg-green-950 text-white hover:cursor-pointer">
              Contact me
            </button>
          </a>
          <a href="/Resume-Muhammed.pdf" download="Muhammed-Resume">
            {" "}
            <button className="rounded-2xl p-2 bg-green-950 text-white ml-4 hover:cursor-pointer">
              Resume
            </button>
          </a>
        </div>
      </div>
      <Hero />
    </div>
  );
}

export default Intro;
