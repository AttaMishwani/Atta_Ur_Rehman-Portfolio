import React, { useEffect, useRef } from "react";
import reactImg from "../assets/images/reactJs.png";
import reduxToolkit from "../assets/images/redux.png";
import js from "../assets/images/js.png";
import tailwindCss from "../assets/images/tailwind.webp";
import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css-3.png";
import HTML from "../assets/images/HTML.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github (1).png";
import gsapicon from "../assets/images/gsap (2).webp";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skills = [
    { name: "REACT JS", image: reactImg },
    { name: "REDUX TOOLKIT", image: reduxToolkit },
    { name: "JAVASCRIPT", image: js },
    { name: "TAILWIND CSS", image: tailwindCss },
    { name: "BOOTSTRAP", image: bootstrap },
    { name: "CSS", image: css },
    { name: "HTML", image: HTML },
    { name: "GIT", image: git },
    { name: "GITHUB", image: github },
  ];

  const librarysFrameworks = [
    { name: "REDUX TOOLKIT", image: reduxToolkit },
    { name: "TAILWIND CSS", image: tailwindCss },
    { name: "BOOTSTRAP", image: bootstrap },
    { name: "GSAP", image: gsapicon },
  ];

  const tools = [
    { name: "GIT", image: git },
    { name: "GITHUB", image: github },
  ];

  const languages = [
    { name: "REACT JS", image: reactImg },
    { name: "JAVASCRIPT", image: js },
    { name: "CSS", image: css },
    { name: "HTML", image: HTML },
  ];

  const languagesRef = useRef([]);
  const libsFramesRef = useRef([]);
  const toolsRef = useRef([]);

  useGSAP(() => {
    libsFramesRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);
  useGSAP(() => {
    languagesRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);
  useGSAP(() => {
    toolsRef.current.forEach((item, index) => {
      if (item) {
        gsap.from(item, {
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  return (
    <div className="w-full py-[10px] pt-[8rem] px-[10px] ">
      <div
        id="skills"
        className="max-w-[1200px] py-[10px] relative mx-auto text-center"
      >
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[10%] right-[60%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[20%] left-[10%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl bottom-[20%] right-[10%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[20%] right-[40%] opacity-30" />

        <FaRegStar className="text-[#0092ca] absolute rotate-45 text-2xl top-[30%] left-[35%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[50%] right-[35%] opacity-30" />

        <FaCode className="text-[#0092ca] absolute text-2xl bottom-[20%] left-[20%] opacity-30" />
        <FaCode className="text-[#0092ca] absolute text-2xl top-[20%] right-[20%] opacity-30" />

        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl bottom-[20%] right-[20%] opacity-30" />
        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl top-[20%] left-[20%] opacity-30" />

        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[20%] right-[50%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[30%] left-[20%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl bottom-[26%] right-[10%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[68%] right-[45%] opacity-30" />

        <FaRegStar className="text-[#0092ca] absolute rotate-45 text-2xl top-[48%] left-[35%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[86%] right-[30%] opacity-30" />

        <FaCode className="text-[#0092ca] absolute text-2xl bottom-[47%] left-[20%] opacity-30" />
        <FaCode className="text-[#0092ca] absolute text-2xl top-[39%] right-[25 %] opacity-30" />

        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl bottom-[45%] right-[20%] opacity-30" />
        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl top-[89%] left-[20%] opacity-30" />

        <h2 className="text-5xl font-bold text-white mb-10">SKILLS</h2>
        <h2 className="text-3xl text-left font-bold text-white mb-6">
          LANGUAGES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {languages.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (languagesRef.current[index] = el)} // Assign ref to the array
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca]  transition-transform transform md:hover:scale-105 duration-300 rounded-2xl p-10 flex flex-col items-center"
            >
              <img src={skill.image} alt={skill.name} className="w-24  mb-4" />
              <h3 className="text-2xl font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        <h2 className="text-3xl text-left font-bold text-white mb-6 mt-10">
          LIBRARIES AND FRAMEWORKS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {librarysFrameworks.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (libsFramesRef.current[index] = el)} // Assign ref to the array
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca] transition-transform transform md:hover:scale-105 duration-300 rounded-2xl p-10 flex flex-col items-center"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-24 h-full  mb-4"
              />
              <h3 className="text-2xl font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        <h2 className="text-3xl text-left font-bold text-white mb-6 mt-10">
          TOOLS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (toolsRef.current[index] = el)} // Assign ref to the array
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca] transition-transform transform md:hover:scale-105 duration-300 rounded-2xl p-10 flex flex-col items-center"
            >
              <img src={skill.image} alt={skill.name} className="w-24  mb-4" />
              <h3 className="text-2xl font-semibold text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
