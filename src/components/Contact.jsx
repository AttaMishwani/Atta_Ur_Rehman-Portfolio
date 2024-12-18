import React, { useEffect, useRef } from "react";
import insta from "../assets/images/social (2).png";
import linkedin from "../assets/images/linkedin (1).png";
import github from "../assets/images/github (2).png";
import gmail from "../assets/images/gmail (3).png";
import whatsapp from "../assets/images/social (3).png";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Contact() {
  const socials = [
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/atta-ur-rehman-964a58317/",
    },
    { icon: github, link: "https://github.com/AttaMishwani" },
    {
      icon: gmail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=atta.rehmanmishwani@gmail.com&su=Subject&body=Your message here",
    },
    { icon: whatsapp, link: "https://wa.me/03182619981" },
  ];

  const socialItemsRef = useRef([]);

  useEffect(() => {
    socialItemsRef.current.forEach((item) => {
      Draggable.create(item, {
        bounds: ".contact-main",
        throwProps: {
          velocity: 3,
          minDuration: 0.1,
        },
      });
    });
  }, []);

  return (
    <div className="w-full py-[30px] pt-[8rem] px-[10px] contact-main">
      <div
        id="contact"
        className="max-w-[1200px] flex flex-col items-center mx-auto justify-center px-[10px]"
      >
        <h2 className="text-5xl font-bold mb-10">CONTACT</h2>

        <div className="social-container w-full flex justify-center gap-5 flex-wrap pb-10 items-center">
          {socials.map((item, index) => {
            return (
              <a
                href={item.link}
                target="_blank"
                key={item.link}
                ref={(el) => (socialItemsRef.current[index] = el)} // Assigning the reference
                className="
                  social-item
                  w-[7%] min-w-[80px]
                  p-3
                  rounded-full
                  bg-[#242320]
                  border-2
                  border-transparent
                  hover:scale-110
                  hover:border-[#0092ca]
                  duration-300
                  ease-in-out
                  flex
                  justify-center
                  items-center
                "
              >
                <img src={item.icon} alt="Social Icon" className="w-[100%]" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
