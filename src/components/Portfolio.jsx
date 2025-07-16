import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import rehmanportfolio from "../assets/images/rehman.jpg";
import home from "../assets/images/home.webp";
import intelsoft from "../assets/images/intelsoft.webp";
import intelStore from "../assets/images/intelstore.webp";
import rehman from "../assets/images/rehman.jpg";
import techeduca from "../assets/images/techeduca.webp";
import velox from "../assets/images/velox.jpg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const projects = [
    {
      img: home,
      title: "Smart Home",
      desc: "Responsive landing page built from Figma using HTML, CSS, JavaScript, and GSAP.",
      live: "https://attamishwani.github.io/Figma-Project/",
      link: "https://github.com/AttaMishwani/Figma-Project",
    },
    {
      img: velox,
      title: "Velox Agency",
      desc: "Modern and responsive agency website with clean design and GSAP animations.",
      live: "https://attamishwani.github.io/Velox---Digital-Agency/",
      link: "https://github.com/AttaMishwani/Velox---Digital-Agency",
    },
    {
      img: intelsoft,
      title: "IntelSoft",
      desc: "Clean, responsive website for a software company using HTML, CSS, and JavaScript.",
      live: "https://attamishwani.github.io/IntelSoft---Digital-Agency/",
      link: "https://github.com/AttaMishwani/IntelSoft---Digital-Agency",
    },
    {
      img: intelStore,
      title: "IntelStore",
      desc: "Multi-page ecommerce website with responsive design built using HTML, CSS, JS.",
      live: "https://attamishwani.github.io/IntelStore---Ecommerce-Website/",
      link: "https://github.com/AttaMishwani/IntelStore---Ecommerce-Website",
    },
    {
      img: rehman,
      title: "Rehman Portfolio",
      desc: "Responsive portfolio website for a designer with GSAP animations and a clean layout.",
      live: "https://attamishwani.github.io/Rehman-Portfolio/",
      link: "https://github.com/AttaMishwani/Rehman-Portfolio",
    },
    {
      img: techeduca,
      title: "Tech Educa",
      desc: "Responsive course-selling website built with HTML, CSS, and JavaScript.",
      live: "https://attamishwani.github.io/TechEduca-SchoolWeb/",
      link: "https://github.com/AttaMishwani/TechEduca-SchoolWeb",
    },
  ];

  const pRef = useRef([]);
  useGSAP(() => {
    pRef.current.forEach((item, index) => {
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
    });
  });

  return (
    <div className="w-full py-[30px] pt-[8rem] px-[10px]">
      <div
        id="portfolio"
        className="max-w-[1200px] flex flex-col items-center mx-auto justify-center px-[10px]"
      >
        <h2 className="text-5xl font-bold mb-10">PORTFOLIO</h2>

        <div className="p-item-container mb-[1.25rem] flex justify-between items-center flex-wrap gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (pRef.current[index] = el)}
              className="p-item relative rounded-2xl p-6 bg-[#1a1f2b]/80 backdrop-blur-lg border border-[#0092ca]/20 transition-transform transform hover:scale-105  duration-500 lg:w-[32%] md:w-[45%] sm:w-[100%]  text-white"
            >
              <img
                src={project.img}
                alt={project.title}
                className="rounded-xl w-full h-[200px] object-cover mb-4"
              />

              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border-2 border-[#0092ca] text-white hover:bg-[#0092ca] transition duration-300"
                >
                  LIVE PREVIEW
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-lg border-2 border-[#0092ca] text-white hover:bg-[#0092ca] transition duration-300"
                >
                  VIEW ON GITHUB
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
