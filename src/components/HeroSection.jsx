import gsap from "gsap";
import myImage from "../assets/images/myImages/newpics(2).webp";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import StarBorder from "../reactBits/StarBorder";
import DotGrid from "../reactBits/DotGrid";

export const HeroSection = () => {
  const imgRef = useRef();
  const introHeading = useRef();
  const introHeading2 = useRef();
  const introDesc = useRef();
  const btnRef = useRef();

  useGSAP(() => {
    gsap.from(imgRef.current, { x: 800, duration: 2, opacity: 0 });
    gsap.from(introHeading.current, {
      opacity: 0,
      delay: 2,
      duration: 1,
      y: 100,
    });
    gsap.from(introHeading2.current, {
      opacity: 0,
      delay: 2.3,
      duration: 1,
      y: 100,
    });
    gsap.from(introDesc.current, {
      opacity: 0,
      delay: 2.3,
      duration: 1,
      y: 100,
    });
    gsap.from(btnRef.current, { opacity: 0, delay: 2.5, duration: 1, y: 100 });
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background DotGrid */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#042633"
          activeColor="#0092ca"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Hero Content */}
      <div
        id="home"
        className="relative z-10 max-w-[1200px] mx-auto pt-[7rem] px-[10px] pb-[30px]"
      >
        {/* Main Content */}
        <div className="flex items-center justify-center text-center px-[10px]">
          <div className="flex flex-col items-center justify-center mt-4">
            <img
              ref={imgRef}
              className="w-[240px]"
              src={myImage}
              alt="Illustration"
            />

            <h1
              ref={introHeading}
              className="lg:text-5xl mt-4 md:text-5xl sm:text-4xl font-semibold xs:text-[18px]"
            >
              I'm Atta Ur Rehman,
            </h1>
            <h2
              ref={introHeading2}
              className="lg:text-3xl mt-4 md:text-2xl text-[#0092ca] sm:text-2xl font-semibold xs:text-[18px]"
            >
              FRONT END DEVELOPER
            </h2>

            <p
              ref={introDesc}
              className="lg:w-[80%] xs:w-full xs:text-[15px] mx-auto mt-4"
            >
              Turning ideas into engaging digital experiences with passion and
              creativity
            </p>

            <div
              ref={btnRef}
              className="mt-4 flex flex-wrap gap-2 justify-center"
            >
              <a
                href="https://drive.google.com/file/d/1gpLgsTfDYUbWzjViaZncrez5VaMYnJrC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StarBorder
                  as="button"
                  className="p-btn text-white border-[#0092ca] border-2 transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2"
                  color="cyan"
                  speed="5s"
                >
                  DOWNLOAD RESUME
                </StarBorder>
              </a>

              <a href="#contact">
                <StarBorder
                  as="button"
                  className="p-btn text-white border-[#0092ca] border-2 transition-all duration-300 font-medium rounded-lg text-sm px-4 py-2"
                  color="cyan"
                  speed="5s"
                >
                  CONTACT ME
                </StarBorder>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
