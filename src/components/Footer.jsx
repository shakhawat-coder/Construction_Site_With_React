import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      <footer className="max-w-[1200px] py-6 px-5  mx-auto">
        <div className="flex flex-col gap-y-3 sm:gap-0 sm:flex-row justify-between items-center ">
          <div className="mx-auto sm:m-0  w-12 h-8 overflow-hidden">
            <picture>
              <img className="w-full h-full" src={logo} alt="" />
            </picture>
          </div>
          <menu className=" mx-auto sm:m-0 flex flex-wrap items-center gap-x-4 sm:gap-0 sm:space-x-6 justify-content-between ">
            <li className="">
              <a href="#" className="text-xs hover:font-medium text-darkBlue">
                About Us
              </a>
            </li>
            <li className="">
              <a href="#" className="text-xs hover:font-medium text-darkBlue">
                Contact Us
              </a>
            </li>
            <li className="">
              <a href="#" className="text-xs hover:font-medium text-darkBlue">
                Services
              </a>
            </li>
            <li className="">
              <a href="#" className="text-xs hover:font-medium text-darkBlue">
                Get Quotes
              </a>
            </li>
            <li className="">
              <a href="#" className="text-xs hover:font-medium text-darkBlue">
                Terms & Conditions
              </a>
            </li>
          </menu>
        </div>
      </footer>
      <div className=" bg-darkBlue text-center py-4">
        <p className="text-white">Copyright 2024</p>
      </div>
    </>
  );
}

export default Footer;
