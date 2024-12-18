import gsap from "gsap";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BiSolidQuoteRight } from "react-icons/bi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { useGSAP } from "@gsap/react";

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
    <div className="w-full py-[30px] pt-[8rem] px-[10px]">
      <div
        id="about"
        className="about-content max-w-[1200px] flex flex-col items-center mx-auto justify-center px-[10px]"
      >
        <h2 className="text-5xl font-bold mb-10">ABOUT ME</h2>
        <div className="about-left-right flex flex-wrap gap-10 justify-center lg:justify-center">
          <div className="about-left relative w-full sm:w-full md:w-full lg:w-[65%] grid items-center">
            <BiSolidQuoteLeft className="quote-left" />
            <p className="about-text text-[18px] text-center">
              Hi, I'm Atta Ur Rehman, a frontend developer from Pakistan. I
              specialize in building responsive websites using HTML, CSS,
              JavaScript, and React.js. As a self-taught developer, I’m
              constantly learning and pushing myself to take on new challenges
              to improve my skills.
              <br /> <br />I focus on writing clean, efficient code and creating
              user-friendly, visually appealing web applications. My goal is to
              keep growing as a developer and contribute to building innovative
              solutions that make a real impact in the world of web development.
            </p>
            <BiSolidQuoteRight className="quote-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
