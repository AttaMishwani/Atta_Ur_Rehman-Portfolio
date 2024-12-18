import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="w-full  px-[10px] border-t-2 border-[#1d1c19] ">
      <div className="max-w-[1200px] mx-auto text-center flex items-center justify-center py-3 ">
        <p className="hover:text-[#0092ca] duration-200">
          {" "}
          © {currentYear} Atta Ur Rehman. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
