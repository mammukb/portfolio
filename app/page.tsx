/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Navlayout from "./components/navlayout";
import Intro from "./components/intro";
import Skill from "./components/skill";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Script from "next/script";
import gsap from "gsap";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const skills = [
    "React",
    "Next.js",
    "Tailwind",
    "Javascript",
    "java",
    "Python",
    "MySQL",
    "PHP",
    "Node.js",
    "C++",
  ];
  const projects = [
    {
      name: "Seatme",
      image: "/seatme.png",
      link: "https://github.com/AnanthuTD/SeatMe-API",
      desc: " Built a web app that automates the seat allocation process for colleges and allows examinees to easily access their assigned seats.",
    },
    {
      name: "WIMS",
      image: "/wims.png",
      link: "https://github.com/mammukb/Wood-Industry-Management-Sysytem",
      desc: "The objective of this project is to automate and optimize various business procedures, leading to increased productivity and efficient resource utilization in the wood industry.",
    },
    {
      name: "Tasky",
      image: "/tasky.png",
      link: "https://github.com/mammukb/Tasky",
      desc: "My first Project. It is a todo list app built using HTML,CSS and Javascript.",
    },
  ];
  // useEffect(() => {
  //   // This code runs after the component mounts
  //   gsap.fromTo(".headline", { x: -60,  },{ x: 0, ease:"none" , duration:2 });
  // }, []);

  return (
    <Navlayout>
      {/* hero section */}
      <div className=" mt-14  " id="home">
        <Intro />
      </div>
      {/* skill section */}
      <div id="skills">
        <h1 className="text-5xl font-bold  text-green-900 text-center ">
          SKILLS
        </h1>
        <hr className="mx-auto w-1/2 md:w-1/4 border-green-900 my-4" />

        <p className="font-bold text-green-900 text-center px-8 lg:text-2xl">
          I am Familiar with the using these skills in my project development
          and <br />I am looking forward to learn more.{" "}
        </p>
        {/* skill cards */}
        <div className=" flex  flex-row flex-wrap border-0 border-green-900 m-8 p-3 rounded-2xl lg:w-1/2 lg:mx-auto ">
          {skills.map((skill) => (
            <Skill key={skill} props={skill} />
          ))}
        </div>
      </div>
      {/* Projects Section */}
      <div className="w-full" id="projects">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-green-900">
            PROJECTS
          </h1>
          <hr className="mx-auto w-1/2 md:w-1/4 border-green-900 my-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {projects.map((project) => (
            <Project
              key={project.name}
              head={project.name}
              img={project.image}
              link={project.link}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact">
        <h1 className="text-5xl font-bold  text-green-900 text-center mt-16">
          CONTACT
        </h1>
        <hr className="mx-auto w-1/2 md:w-1/4 border-green-900 my-4" />
        <Contact />
      </div>
      <div>
      <Script id="chatbase-script" strategy="lazyOnload">
        {`
          (function(){
            if(!window.chatbase || window.chatbase("getState") !== "initialized") {
              window.chatbase = (...arguments) => {
                if(!window.chatbase.q) { window.chatbase.q = [] }
                window.chatbase.q.push(arguments);
              };
              window.chatbase = new Proxy(window.chatbase, {
                get(target, prop) {
                  if(prop === "q") { return target.q }
                  return (...args) => target(prop, ...args);
                }
              });
            }
            const onLoad = function() {
              const script = document.createElement("script");
              script.src = "https://www.chatbase.co/embed.min.js";
              script.id = "5vdz4nmyfyg_4eImB74oJ"; // Replace with your chatbot ID
              script.domain = "www.chatbase.co";
              document.body.appendChild(script);
            };
            if(document.readyState === "complete") {
              onLoad();
            } else {
              window.addEventListener("load", onLoad);
            }
          })();
        `}
      </Script>
      </div>
      {/* footer */}
      <Footer />
    </Navlayout>
  );
}
