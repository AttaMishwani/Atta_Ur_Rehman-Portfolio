import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Logo() {
  const logoRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      logoRef.current,
      { y: -50, duration: 0.5, delay: 1 },
      { y: 0, duration: 0.5, delay: 1 }
    );
  });
  return (
    <div ref={logoRef} className="text-white font-semibold text-xl">
      Atta Ur Rehman.
    </div>
  );
}
