import gsap from "gsap";
import myImage from "../assets/images/image.webp";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

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
    <div id="home" className="max-w-[1200px] mx-auto px-[10px] pb-[30px]">
      <div className="flex items-center justify-center text-center px-[10px]">
        <div className="flex flex-col items-center justify-center mt-4">
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
            <span className="linear-text lg:text-5xl md:text-5xl sm:text-4xl xs:text-[18px] bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent">
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
              className="p-btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-[#0092ca] hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 mt-5"
            >
              CONTACT ME
            </a>
            <a
              href="https://drive.google.com/file/d/1_5D9SMcM4CKfnQ1vsiqIWGuT-rElCjbQ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-btn text-white bg-gradient-to-r from-blue-500 via-blue-600 to-[#0092ca] hover:bg-gradient-to-br   font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 mt-5"
            >
              DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
