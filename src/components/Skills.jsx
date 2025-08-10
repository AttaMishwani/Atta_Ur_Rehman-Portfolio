import React, { useRef } from "react";
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
import firebase from "../assets/images/firebase (2).png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import CurvedLoop from "../reactBits/CurvedLoop";

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

  const backend = [{ name: "FIREBASE", image: firebase }];

  const languagesRef = useRef([]);
  const libsFramesRef = useRef([]);
  const toolsRef = useRef([]);
  const backendRef = useRef([]);

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

  useGSAP(() => {
    backendRef.current.forEach((item, index) => {
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
    <div className="w-full relative py-[10px] pt-[8rem] px-[10px] mb-36">
      <div
        id="skills"
        className="max-w-[300px] z-10 sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1200px] py-[10px] relative mx-auto text-center "
      >
        {/* Floating Icons (no changes here) */}
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

        <h2 className="text-5xl md:text-4xl lg:text-5xl font-bold text-white mb-10 ">
          SKILLS
        </h2>

        {/* LANGUAGES */}
        <h2 className="sm:text-1xl md:text-2xl lg:text-3xl font-bold text-white mb-6 mt-20 text-center">
          LANGUAGES
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {languages.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (languagesRef.current[index] = el)}
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca] transition-transform transform hover:scale-105 duration-300 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 md:w-20 lg:w-24 mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* LIBRARIES AND FRAMEWORKS */}
        <h2 className="sm:text-1xl md:text-2xl lg:text-3xl font-bold text-white mb-6 mt-20 text-center">
          LIBRARIES AND FRAMEWORKS
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {librarysFrameworks.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (libsFramesRef.current[index] = el)}
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca] transition-transform transform hover:scale-105 duration-300 rounded-2xl p-6 flex flex-col items-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 md:w-20 lg:w-24 mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-lg font-semibold text-white text-center whitespace-nowrap">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* TOOLS */}
        <h2 className="sm:text-1xl md:text-2xl lg:text-3xl font-bold text-white mb-6 mt-20 text-center">
          TOOLS
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (toolsRef.current[index] = el)}
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca] transition-transform transform hover:scale-105 duration-300 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 md:w-20 lg:w-24 mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* BACKEND SERVICES */}
        <h2 className="sm:text-1xl md:text-2xl lg:text-3xl font-bold text-white mb-6 mt-20 text-center">
          BACKEND SERVICES
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {backend.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (backendRef.current[index] = el)}
              className="skill-box bg-[#1a1f2b]/70 backdrop-blur-lg border border-[#0092ca]/20 hover:border-[#0092ca] transition-transform transform hover:scale-105 duration-300 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-1rem)] md:w-[calc(25%-1.125rem)] lg:w-[calc(20%-1.2rem)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 md:w-20 lg:w-24 mb-4"
              />
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
