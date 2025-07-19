import gsap from "gsap";
import myImage from "../assets/images/myImages/picofme.png";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

export const HeroSection = () => {
  const imgRef = useRef();
  const introHeading = useRef();
  const introDesc = useRef();
  const btnRef = useRef();

  useGSAP(() => {
    gsap.from(imgRef.current, {
      x: 800,
      duration: 2,
      opacity: 0,
    });
  });

  useGSAP(() => {
    gsap.from(introHeading.current, {
      opacity: 0,
      delay: 2,
      duration: 1,
      y: 100,
    });
  });

  useGSAP(() => {
    gsap.from(introDesc.current, {
      opacity: 0,
      delay: 2.3,
      duration: 1,
      y: 100,
    });
  });

  useGSAP(() => {
    gsap.from(btnRef.current, {
      opacity: 0,
      delay: 2.5,
      duration: 1,
      y: 100,
    });
  });

  return (
    <div
      id="home"
      className="max-w-[1200px] mx-auto  pt-[7rem] px-[10px] pb-[30px]"
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

      <div className="flex items-center  justify-center text-center px-[10px]">
        <div className="flex flex-col items-center justify-center  mt-4">
          <div>
            <img
              ref={imgRef}
              className="w-[240px]"
              src={myImage}
              alt="Illustration"
            />
          </div>

          <h1
            ref={introHeading}
            className="lg:text-5xl mt-4 md:text-5xl sm:text-4xl font-semibold xs:text-[18px]"
          >
            <span className="linear-text lg:text-5xl md:text-5xl sm:text-4xl xs:text-[18px] text-[#0092ca]">
              I'm Atta Ur Rehman,
            </span>
            frontend <br />
            developer based in Pakistan
          </h1>

          <p
            ref={introDesc}
            className="lg:w-[60%] xs:w-full xs:text-[15px] mx-auto mt-4"
          >
            I’m a frontend developer from Pakistan, turning ideas into engaging
            digital experiences with passion and creativity
          </p>
          <div ref={btnRef} className="mt-4">
            <a
              href="#contact"
              className="p-btn text-white border-[#0092ca] border-2 hover:bg-[#0092ca] transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 mt-5"
            >
              CONTACT ME
            </a>
            <a
              href="https://drive.google.com/file/d/1_5D9SMcM4CKfnQ1vsiqIWGuT-rElCjbQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-btn text-white border-[#0092ca] border-2   hover:bg-[#0092ca] transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 mt-5"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
