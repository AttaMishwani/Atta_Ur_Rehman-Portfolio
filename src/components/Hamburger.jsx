import React from "react";
import { CgMenuRight } from "react-icons/cg";

export default function Hamburger({ handleButtonToggle }) {
  return (
    <CgMenuRight
      onClick={handleButtonToggle}
      className="ham-menu text-3xl text-white"
    />
  );
}
