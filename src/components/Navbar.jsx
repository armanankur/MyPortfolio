import React from "react";

import { FaGithub, FaLinkedin , FaCircle} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        {/* <a href="/" aria-label="Home">
          <img src={logo} alt="Logo" className="mx-2 width={50} height={33}" />
        </a> */}
        <a href="/" aria-label="Home">
         <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#ffffff] to-[#F8F8F8] flex items-center gap-1 animate-rotate-vert-center-normal">
          <FaCircle className="size-3 mr-0.5 bg-gradient-to-r from-lime-400 to-lime-500 rounded-full text-transparent"/>
          <p className="text-center text-[#222222] text-md font-light">Portfolio</p>
         </div>
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href="https://www.linkedin.com/in/ankur-anand-100254264/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="animate-rotate-hor-center-normal"/>
        </a>

        <a
          href="https://github.com/armanankur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="animate-rotate-vert-center-normal"/>
        </a>

        <a
          href="https://www.instagram.com/ankur____anand/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="animate-rotate-hor-center-normal"/>
        </a>

        <a
          href="https://x.com/armanankur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <FaTwitter className="animate-rotate-vert-center-normal"/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
