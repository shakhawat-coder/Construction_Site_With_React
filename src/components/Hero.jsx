import React from "react";
import Hero1 from "../assets/hero1.jpg";
import Hero2 from "../assets/hero2.jpg";
import Hero3 from "../assets/hero3.jpg";
function Hero() {
  return (
    <>
      <section id="hero" className=" ">
        <div className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gradient mb-3 md:-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
              Building Dreams, Crafting Homes
            </h2>
            <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reiciendis, quod. Lorem ipsum dolor
            </p>
            <button className="bg-primary text-white px-3 sm:px-6 py-1 rounded transition-all duration-200 hover:bg-blue-200 hover:text-primary">
              Exprore Our Project
            </button>
          </div>
          <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
            <div className="w-1/4 h-40 sm:h-60 rounded md:w-28 md:h-60 lg:w-44 lg-h-80 overflow-hidden">
              <picture>
                <img
                  className="object-cover w-full h-full"
                  src={Hero1}
                  alt="hero1"
                />
              </picture>
            </div>
            <div className="w-1/4 h-40 sm:h-60 rounded md:w-28 md:h-60 lg:w-44 lg-h-80 overflow-hidden mt-[5%]">
              <picture>
                <img
                  className="object-cover w-full h-full"
                  src={Hero2}
                  alt="hero2"
                />
              </picture>
            </div>
            <div className="w-1/4 h-40 sm:h-60 rounded md:w-28 md:h-60 lg:w-44 lg-h-80 overflow-hidden">
              <picture>
                <img
                  className="object-cover w-full h-full"
                  src={Hero3}
                  alt="hero3"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
