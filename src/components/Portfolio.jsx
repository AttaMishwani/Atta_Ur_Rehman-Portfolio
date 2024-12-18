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
      desc: "Responsive Website",
      link: "https://github.com/AttaMishwani/Figma-Project",
    },
    {
      img: velox,
      title: "Software Agency",
      desc: "Responsive Website",
      link: "https://github.com/AttaMishwani/Velox---Digital-Agency",
    },
    {
      img: intelsoft,
      title: "IntelSoft",
      desc: "Responsive Website",
      link: "https://github.com/AttaMishwani/IntelSoft---Digital-Agency",
    },
    {
      img: intelStore,
      title: "IntelStore",
      desc: "Responsive Website",
      link: "https://github.com/AttaMishwani/IntelStore---Ecommerce-Website",
    },
    {
      img: rehman,
      title: "Rehman Portfolio",
      desc: "Responsive Website",
      link: "https://github.com/AttaMishwani/Rehman-Portfolio",
    },
    {
      img: techeduca,
      title: "Tech Educa",
      desc: "Responsive Website",
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
              className="p-item rounded-lg relative lg:w-[32%] overflow-hidden md:w-[45%] sm:w-[100%] transition-transform transform hover:scale-105 duration-500 hover:border-[#0092ca] hover:shadow-lg border-2 border-transparent"
            >
              <img src={project.img} className="" alt="" />

              <div className="p-overlay flex-col text-center flex items-center px-4 justify-center">
                <h2 className="text-2xl pb-2">{project.title}</h2>
                <p className="text-sm">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="p-btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-[#0092ca] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 mt-5"
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
