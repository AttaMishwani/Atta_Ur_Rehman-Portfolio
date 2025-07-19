import React, { useRef, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50  p-[10px] pt-[20px]">
      <div className="navbar-content flex justify-between p-[10px] px-[40px] items-center max-w-[1100px] z-50 bg-[#0092ca]/10 backdrop-blur-md mx-auto rounded-full">
        <Logo />
        <NavLinks showMenu={showMenu} />
        <Hamburger handleButtonToggle={handleButtonToggle} />
      </div>
    </div>
  );
}
