import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks, navIcons } from "../constants";
import { logo, menu, close, githubhero} from "../assets";

const Navbar = ({link}) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-[#533DDD]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-20 object-contain #2563eb"
          /> &nbsp;
          <p className="text-[#9FCFCFC] text-[18px] font-bold cursor-pointer flex">
            Jing
           &nbsp; <span className="sm:block hidden">|&nbsp; Portfolio</span>
          </p>
          <div
              onClick={() => window.open(link, "_blank")}
              className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubhero}
                alt="githubhero"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? " text-white" : "text-[#FCFCFC]"
              } hover:text-[#E575EF] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {" "}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? " text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`
                 }
                 onClick={() => {
                  setToggle(!toggle)
                  setActive(Link.title)}}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
                  

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
