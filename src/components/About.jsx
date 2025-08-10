import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BiSolidQuoteRight } from "react-icons/bi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    gsap.from(".about-text", {
      x: 800,
      opacity: 0,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 85%",
        end: "top 65%",
        scrub: 4,
      },
    });
  }, []);

  return (
    <div className="w-full py-[30px] pt-[8rem] px-[10px] relative ">
      <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[10%] right-[30%] opacity-30" />
      <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[20%] left-[20%] opacity-30" />
      <FaRegCircle className="text-[#0092ca] absolute text-2xl bottom-[23%] right-[10%] opacity-30" />
      <FaRegCircle className="text-[#0092ca] absolute text-2xl top-[45%] right-[20%] opacity-30" />
      <FaRegStar className="text-[#0092ca] absolute rotate-45 text-2xl top-[35%] left-[25%] opacity-30" />
      <FaRegStar className="text-[#0092ca] absolute rotate-12 text-2xl top-[59%] right-[10%] opacity-30" />
      <FaCode className="text-[#0092ca] absolute text-2xl bottom-[35%] left-[20%] opacity-30" />
      <FaCode className="text-[#0092ca] absolute text-2xl top-[29%] right-[15%] opacity-30" />

      <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl bottom-[26%] right-[15%] opacity-30" />
      <FaHtml5 className="text-[#0092ca] absolute rotate-6 text-3xl top-[58%] left-[10%] opacity-30" />
      <div
        id="about"
        className="about-content  w-[80%]  lg:w-full max-w-[1100px]  flex flex-col items-center mx-auto justify-center px-[10px]"
      >
        <h2 className="text-4xl  lg:text-5xl font-bold text-white mb-10">
          ABOUT ME
        </h2>
        <div className="about-left-right flex flex-wrap gap-10 justify-center lg:justify-center">
          <div className="about-left relative w-full sm:w-full md:w-full lg:w-[65%] grid items-center">
            <BiSolidQuoteLeft className="quote-left hover:text-[#0092ca]" />
            <p className="about-text text-[18px] text-center">
              Hi, I'm <span className="text-[#0092ca]">Atta Ur Rehman</span>, a
              frontend developer from Pakistan. I specialize in building
              responsive websites using HTML, CSS, JavaScript, and React.js. As
              a <span className="text-[#0092ca]">self-taught</span> developer,
              I’m constantly learning and pushing myself to take on new
              challenges to improve my skills.
              <br /> <br />I focus on writing clean, efficient{" "}
              <span className="text-[#0092ca]">code</span> and creating
              user-friendly, visually appealing web applications. My goal is to
              keep growing as a{" "}
              <span className="text-[#0092ca]">developer</span> and contribute
              to building innovative solutions that make a real impact in the
              world of <span className="text-[#0092ca]">web development.</span>
            </p>
            <BiSolidQuoteRight className="quote-right hover:text-[#0092ca]" />
          </div>
        </div>
      </div>
    </div>
  );
}
