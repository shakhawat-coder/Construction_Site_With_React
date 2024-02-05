import React, { useState } from "react";
import logo from "../assets/logo.png";
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import MobileMenu from "./MobileMenu";
import { Link } from "react-scroll";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <MobileMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
      <nav className="py-5 bg-background sticky top-0 ">
        <div className=" max-w-screen-xl px-6  mx-auto">
          <div className="flex justify-between items-center ">
            <Link
              to="hero"
              smooth
              spy
              offset={-80}
              className=" cursor-pointer w-12 h-8 overflow-hidden"
            >
              <picture>
                <img className="w-full h-full" src={logo} alt="" />
              </picture>
            </Link>
            <menu className="hidden md:flex items-center space-x-6 justify-content-between ">
              <li className="">
                <Link
                  to="hero"
                  smooth
                  spy
                  offset={-80}
                  className="text-sm cursor-pointer font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-primary  after:left-0 after:-bottom-2 after:rounded after:-translate-x-11 after:opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  to="about"
                  smooth
                  spy
                  offset={-80}
                  className="text-sm cursor-pointer font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-primary  after:left-0 after:-bottom-2 after:rounded after:-translate-x-11 after:opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
                >
                  About Us
                </Link>
              </li>
              <li className="">
                <Link
                  to="services"
                  smooth
                  spy
                  offset={-80}
                  href="#"
                  className="text-sm cursor-pointer font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary after:-bottom-2 after:rounded after:left-0 after:transition-all after:duration-200 after:-translate-x-11 after:opacity-0 after:hover:opacity-100 after:hover:translate-x-0"
                >
                  Services
                </Link>
              </li>
              <li className="">
                <Link
                  to="works"
                  smooth
                  spy
                  offset={-80}
                  href="#"
                  className="text-sm cursor-pointer font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary after:-bottom-2 after:rounded after:left-0 after:transition-all after:duration-200 after:-translate-x-11 after:opacity-0 after:hover:opacity-100 after:hover:translate-x-0"
                >
                  Our Work
                </Link>
              </li>
              <li className="">
                <Link
                  to="testimonials"
                  smooth
                  spy
                  offset={-80}
                  className="text-sm cursor-pointer font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary after:-bottom-2 after:rounded after:left-0 after:transition-all after:duration-200 after:-translate-x-11 after:opacity-0 after:hover:opacity-100 after:hover:translate-x-0"
                >
                  Testimonials
                </Link>
              </li>
            </menu>
            <Link
              to="contact"
              smooth
              spy
              offset={-80}
              className="hidden cursor-pointer md:block bg-primary text-white px-6 leading-9 rounded transition-all duration-200 hover:bg-blue-200 hover:text-primary"
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(true);
              }}
              className="md:hidden w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded"
            >
              {isMenuOpen ? <RiCloseFill /> : <RiMenu4Line />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
