import React from "react";
import Gal1 from "../assets/gallery1.jpg";
import Gal2 from "../assets/gallery2.jpg";
import Gal3 from "../assets/gallery3.jpg";
import Gal4 from "../assets/gallery4.jpg";
import Gal5 from "../assets/gallery5.jpg";
import Gal6 from "../assets/gallery6.jpg";
function OurWork() {
  return (
    <>
      <section id="works" className="max max-w-[1200px] py-16 mx-auto">
        <h5 className="text-2xl font-semibold text-darkBlue text-center mb-10">
          Our Work
        </h5>
        <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
          <div className="md:col-span-2">
            <img
              src={Gal1}
              alt="gallery"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="">
            <img
              src={Gal2}
              alt="gallery"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="">
            <img
              src={Gal3}
              alt="gallery"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="">
            <img
              src={Gal4}
              alt="gallery"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="">
            <img
              src={Gal5}
              alt="gallery"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <img
              src={Gal6}
              alt="gallery"
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
