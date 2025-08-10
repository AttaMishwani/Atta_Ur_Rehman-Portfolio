import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import rehman from "../assets/images/rehman.jpg";
import rehmanportfolio from "../assets/images/rehman.jpg";
import rehman1 from "../assets/images/rehmanportfolio.webp";
import rehman2 from "../assets/images/rehmanportfolio3.png";
import rehman3 from "../assets/images/rehmanportoflio4.png";
import home from "../assets/images/home.webp";
import home2 from "../assets/images/smarthome (2).webp";
import home3 from "../assets/images/smarthome (1).webp";
import intelsoft from "../assets/images/intelsoft.webp";
import intelsoft1 from "../assets/images/intelsoft (2).webp";
import intelsoft2 from "../assets/images/intelsoft (1).webp";
import intelsoft3 from "../assets/images/intelsoft (3).webp";
import intelStore from "../assets/images/intelstore.webp";
import intelStore2 from "../assets/images/intelstore (2).webp";
import intelStore3 from "../assets/images/intelstore (3).webp";
import intelStore4 from "../assets/images/intelstore (4).webp";
import velox from "../assets/images/velox.jpg";
import velox2 from "../assets/images/velox (3).webp";
import velox3 from "../assets/images/velox (4).webp";
import velox4 from "../assets/images/velox (5).webp";
import revloft from "../assets/images/revloft (2).webp";
import revloft2 from "../assets/images/revloft (3).webp";
import revloft3 from "../assets/images/revloft (4).webp";
import revloft4 from "../assets/images/revloft (5).webp";

import { useGSAP } from "@gsap/react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import Carousel from "../reactBits/Carousel";
import StarBorder from "../reactBits/StarBorder";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const projects = [
    {
      img: revloft,
      images: [revloft, revloft2, revloft3, revloft4],
      title: "Revloft",
      desc: "Responsive landing page from Figma using HTML, CSS, JavaScript, and GSAP animations.",
      live: "https://attamishwani.github.io/Revloft/",
      link: "https://github.com/AttaMishwani/Figma-Project",
    },
    {
      img: home,
      images: [home, home2, home3],
      title: "Smart Home",
      desc: "Responsive landing page from Figma using HTML, CSS, JavaScript, and GSAP animations.",
      live: "https://attamishwani.github.io/Figma-Project/",
      link: "https://github.com/AttaMishwani/Figma-Project",
    },
    {
      img: velox,
      images: [velox, velox2, velox3, velox4],
      title: "Velox Agency",
      desc: "Modern responsive agency website with clean UI and smooth GSAP-powered animations.",
      live: "https://attamishwani.github.io/Velox---Digital-Agency/",
      link: "https://github.com/AttaMishwani/Velox---Digital-Agency",
    },
    {
      img: intelsoft,
      images: [intelsoft, intelsoft1, intelsoft2, intelsoft3],
      title: "IntelSoft",
      desc: "Clean and responsive software company website using HTML, CSS, and JavaScript.",
      live: "https://attamishwani.github.io/IntelSoft---Digital-Agency/",
      link: "https://github.com/AttaMishwani/IntelSoft---Digital-Agency",
    },
    {
      img: intelStore,
      images: [intelStore, intelStore2, intelStore3, intelStore4],
      title: "IntelStore",
      desc: "Multi-page ecommerce site with responsive layout using HTML, CSS, and JavaScript.",
      live: "https://attamishwani.github.io/IntelStore---Ecommerce-Website/",
      link: "https://github.com/AttaMishwani/IntelStore---Ecommerce-Website",
    },
    {
      img: rehman,
      images: [rehmanportfolio, rehman1, rehman2, rehman3],
      title: "Rehman Portfolio",
      desc: "Responsive designer portfolio with GSAP animations, clean sections, and smooth experience.",
      live: "https://attamishwani.github.io/Rehman-Portfolio/",
      link: "https://github.com/AttaMishwani/Rehman-Portfolio",
    },
  ];

  // const projects = [
  //   {
  //     img: home,
  //     title: "Smart Home",
  //     desc: "Responsive landing page from Figma using HTML, CSS, JavaScript, and GSAP animations.",
  //     live: "https://attamishwani.github.io/Figma-Project/",
  //     link: "https://github.com/AttaMishwani/Figma-Project",
  //   },
  //   {
  //     img: velox,
  //     title: "Velox Agency",
  //     desc: "Modern responsive agency website with clean UI and smooth GSAP-powered animations.",
  //     live: "https://attamishwani.github.io/Velox---Digital-Agency/",
  //     link: "https://github.com/AttaMishwani/Velox---Digital-Agency",
  //   },
  //   {
  //     img: intelsoft,
  //     title: "IntelSoft",
  //     desc: "Clean and responsive software company website using HTML, CSS, and /n JavaScript.",
  //     live: "https://attamishwani.github.io/IntelSoft---Digital-Agency/",
  //     link: "https://github.com/AttaMishwani/IntelSoft---Digital-Agency",
  //   },
  //   {
  //     img: intelStore,
  //     title: "IntelStore",
  //     desc: "Multi-page ecommerce site with responsive layout using HTML, CSS, and JavaScript.",
  //     live: "https://attamishwani.github.io/IntelStore---Ecommerce-Website/",
  //     link: "https://github.com/AttaMishwani/IntelStore---Ecommerce-Website",
  //   },
  //   {
  //     img: rehman,
  //     title: "Rehman Portfolio",
  //     desc: "Responsive designer portfolio with GSAP animations, clean sections, and smooth experience.",
  //     live: "https://attamishwani.github.io/Rehman-Portfolio/",
  //     link: "https://github.com/AttaMishwani/Rehman-Portfolio",
  //   },
  //   {
  //     img: techeduca,
  //     title: "Tech Educa",
  //     desc: "Course-selling website using HTML, CSS, JavaScript with a modern responsive layout.",
  //     live: "https://attamishwani.github.io/TechEduca-SchoolWeb/",
  //     link: "https://github.com/AttaMishwani/TechEduca-SchoolWeb",
  //   },
  // ];

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
        className=" max-w-[300px] lg:max-w-[1100px] flex flex-col relative items-center mx-auto justify-center px-[10px]"
      >
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[2%] right-[10%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[3%] left-[10%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl bottom-[-2%] right-[10%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[5%] right-[30%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-45 text-2xl top-[30%] left-[-5%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[50%] right-[-3%] opacity-30" />
        <FaCode className="text-[#0092ca] absolute text-2xl bottom-[-3%] left-[20%] opacity-30" />
        <FaCode className="text-[#0092ca] absolute text-2xl top-[20%] right-[-4%] opacity-30" />
        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl bottom-[-6%] right-[-6%] opacity-30" />
        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl top-[20%] left-[20%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[20%] right-[50%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[30%] left-[-3%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl bottom-[26%] right-[1%] opacity-30" />
        <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[68%] right-[45%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-45 text-2xl top-[48%] left-[35%] opacity-30" />
        <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[86%] right-[30%] opacity-30" />
        <FaCode className="text-[#0092ca] absolute text-2xl bottom-[47%] left-[20%] opacity-30" />
        <FaCode className="text-[#0092ca] absolute text-2xl top-[39%] right-[25 %] opacity-30" />
        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl bottom-[55%] right-[-4%] opacity-30" />
        <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl top-[89%] left-[-5%] opacity-30" />

        <h2 className="text-4xl  lg:text-5xl font-bold text-white mb-10">
          PORTFOLIO
        </h2>

        <div className="p-item-container mb-[1.25rem] flex justify-between items-center flex-wrap gap-5">
          {projects.map((project, index) => (
            // <div
            //   key={index}
            //   ref={(el) => (pRef.current[index] = el)}
            //   className="p-item relative rounded-2xl sm:p-2 md:p-2 lg:p-6 p-2 bg-[#1a1f2b]/80 backdrop-blur-lg border border-[#0092ca]/20 transition-transform transform hover:scale-105  duration-500 lg:w-[32%] md:w-[45%] sm:w-[100%]  text-white"
            // >
            //   <img
            //     src={project.img}
            //     alt={project.title}
            //     className="rounded-xl w-full h-[200px] object-cover mb-4"
            //   />

            //   <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            //   <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

            //   <div className="flex flex-wrap gap-3">
            //     <a
            //       href={project.live}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="text-sm px-4 py-2 rounded-lg border-2 border-[#0092ca] text-white hover:bg-[#0092ca] transition duration-300"
            //     >
            //       LIVE PREVIEW
            //     </a>
            //     <a
            //       href={project.link}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="text-sm px-4 py-2 rounded-lg border-2 border-[#0092ca] text-white hover:bg-[#0092ca] transition duration-300"
            //     >
            //       VIEW ON GITHUB
            //     </a>
            //   </div>
            // </div>

            <div
              key={index}
              ref={(el) => (pRef.current[index] = el)}
              className="p-item relative rounded-2xl sm:p-2 md:p-2 lg:p-6 p-2 bg-[#1a1f2b]/80 backdrop-blur-lg border border-[#0092ca]/20 transition-transform transform hover:scale-105 duration-500 min-h-[490px] lg:w-[32%] md:w-[45%] sm:w-[100%] text-white"
            >
              {/* Carousel section */}
              <Carousel
                items={project.images.map((img, i) => ({
                  id: i,
                  icon: (
                    <img
                      src={img}
                      alt={`Project ${index + 1} Screenshot ${i + 1}`}
                      className="rounded-lg w-full h-[100%] object-cover"
                    />
                  ),
                  title: "",
                  description: "",
                }))}
                baseWidth={300} // or adjust as needed
                autoplay={true}
                loop={true}
                pauseOnHover={true}
              />

              {/* Project details */}
              <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-300 mb-4">{project.desc}</p>

                <div className="flex flex-row gap-1 justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <StarBorder
                      as="button"
                      className="p-btn text-white border-[#0092ca] border-2    transition-all duration-300 font-medium rounded-lg text-sm px-1 py-1 text-center me-2 mb-2 mt-5"
                      color="cyan"
                      speed="5s"
                    >
                      LIVE PREVIEW
                    </StarBorder>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StarBorder
                      as="button"
                      className="p-btn text-white border-[#0092ca] border-2  transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 mt-5"
                      color="cyan"
                      speed="5s"
                    >
                      VIEW ON GITHUB
                    </StarBorder>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
