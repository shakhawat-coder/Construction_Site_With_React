import React from "react";
import logo from "../assets/logo.png";
function MobileMenu({ isOpen, setIsMenuOpen }) {
  const handleScroll = (sectionId) => {
    if (isOpen) setIsMenuOpen(false);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="w-screen fixed top-0 z-20 md:hidden">
        <div className="w w-1/2 h-screen flex-col bg-background p-5">
          <div
            onClick={() => handleScroll("hero")}
            className=" cursor-pointer w-12 h-8 object-contain mb-8"
          >
            <picture>
              <img className="w-full h-full" src={logo} alt="" />
            </picture>
          </div>
          <menu className="">
            <li className="mb-5">
              <a
                onClick={() => handleScroll("hero")}
                className="text-sm font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-primary  after:left-0 after:-bottom-2 after:rounded after:-translate-x-11 after:opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                Home
              </a>
            </li>
            <li className="mb-5">
              <a
                onClick={() => handleScroll("about")}
                className="text-sm font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-primary  after:left-0 after:-bottom-2 after:rounded after:-translate-x-11 after:opacity-0 after:transition-all after:hover:translate-x-0 after:hover:opacity-100"
              >
                About Us
              </a>
            </li>
            <li className="mb-5">
              <a
                onClick={() => handleScroll("services")}
                className="text-sm font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary after:-bottom-2 after:rounded after:left-0 after:transition-all after:duration-200 after:-translate-x-11 after:opacity-0 after:hover:opacity-100 after:hover:translate-x-0"
              >
                Services
              </a>
            </li>
            <li className="mb-5">
              <a
                onClick={() => handleScroll("work")}
                className="text-sm font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary after:-bottom-2 after:rounded after:left-0 after:transition-all after:duration-200 after:-translate-x-11 after:opacity-0 after:hover:opacity-100 after:hover:translate-x-0"
              >
                Our Work
              </a>
            </li>
            <li className="mb-5">
              <a
                onClick={() => handleScroll("testimonials")}
                className="text-sm font-medium text-primary relative after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary after:-bottom-2 after:rounded after:left-0 after:transition-all after:duration-200 after:-translate-x-11 after:opacity-0 after:hover:opacity-100 after:hover:translate-x-0"
              >
                Testimonials
              </a>
            </li>
          </menu>
          <a
            href="#"
            onClick={() => handleScroll("contact")}
            className=" bg-primary text-white px-3 sm:px-6 py-1 rounded transition-all duration-200 hover:bg-blue-200 hover:text-primary"
          >
            Contact Us
          </a>
          <div
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"
          ></div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
