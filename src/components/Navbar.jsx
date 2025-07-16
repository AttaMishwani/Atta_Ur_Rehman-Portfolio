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
    <div className="w-full fixed top-0 left-0 z-50 bg-[#161513]/60 backdrop-blur-md p-[10px]">
      <div className="navbar-content flex justify-between p-[10px] items-center max-w-[1200px] mx-auto">
        <Logo />
        <NavLinks showMenu={showMenu} />
        <Hamburger handleButtonToggle={handleButtonToggle} />
      </div>
    </div>
  );
}
