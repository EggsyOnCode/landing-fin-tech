import React from "react";
import { useState } from "react";

import { close, logo, menu } from "../assets";
import { github_link, navLinks } from "../constants";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="handbank" className="w-[124px] h-[32px]" />
      <ul className="list-none  sm:flex hidden items-center justify-end flex-1">
        {/* what sm:flex means is that for devices larger than sm breakpoint and equal to it; make it flex ; otherwise make it hidden; since the desktop view is larger, hence it appears as flex */}
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-purple-400"
            } mr-10`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <a
        href={github_link}
        className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
          active === "Github Code" ? "text-white" : "text-purple-400"
        }`}
      >
        Github Code
      </a>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none items-center justify-end flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins text-white font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-purple-300"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
