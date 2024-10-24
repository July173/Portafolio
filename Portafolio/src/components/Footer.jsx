import React from "react";
import logo from "../assets/imagen/logo-portafolio.png";

const Footer = () => {
  return (
    <footer className="  bg-gradient-to-b from-[#b5b0be] to-slate-300 shadow-inner mt-aut0 w-full border-t border-gray-500 ">
      <div className=" container mx-auto flex">
        <img src={logo} alt="logo" className="h-20 w-20  " />
        <p className="pt-8 font-semibold font-serif ">&copy; 2024 July Ramos.</p>

        <ul className="flex right-0 text-3xl p-5 absolute ">
          <li className="">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/July173"
              className="mr-5"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
