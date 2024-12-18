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
    <div className="w-full overflow-x-hidden bg-[#161513] p-[10px]   ">
      <div className="navbar-content overflow-x-hidden flex justify-between p-[10px] items-center max-w-[1200px] mx-auto">
        <Logo />
        <NavLinks showMenu={showMenu} />
        <Hamburger handleButtonToggle={handleButtonToggle} />
      </div>
    </div>
  );
}
