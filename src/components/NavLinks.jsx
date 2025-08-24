import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function NavLinks({ showMenu, setShowMenu }) {
  const navRef = useRef();

  useGSAP(() => {
    gsap.from(navRef.current, { x: -100, duration: 2, delay: 0.5 });
  });

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav ref={navRef} className={showMenu ? "menu-mobile" : "menu-web"}>
      <ul className={`${showMenu && "bg-[#161513]"} flex gap-10`}>
        <FaXmark
          className={`${
            showMenu ? "block" : "hidden"
          } absolute text-2xl top-4 right-4 cursor-pointer`}
          onClick={closeMenu}
        />
        <li onClick={closeMenu} className="px-2 py-2">
          <Link
            to="/home"
            className="text-white hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent"
          >
            Home
          </Link>
        </li>
        <li onClick={closeMenu} className="px-2 py-2">
          <Link className="text-white hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent">
            About
          </Link>
        </li>
        <li onClick={closeMenu} className="px-2 py-2">
          <Link className="text-white hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent">
            Skills
          </Link>
        </li>
        <li onClick={closeMenu} className="px-2 py-2">
          <Link className="text-white hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent">
            Portfolio
          </Link>
        </li>
        <li onClick={closeMenu} className="px-2 py-2">
          <Link className="text-white hover:text-[#0092ca] hover:border-[#0092ca] border-b-2 border-transparent">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
