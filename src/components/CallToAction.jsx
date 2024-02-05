import React from "react";
import Gal1 from "../assets/gallery1.jpg";
function CallToAction() {
  return (
    <>
      <section id="contact" className="bg-secondary">
        <div className=" max-w-[1200px] py-16 mx-auto md:flex">
          <div className="">
            <div className="md:h-80 md:w-96">
              <img src={Gal1} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="p-10">
            <h5 className="text-2xl font-semibold text-darkBlue mb-10">
              Find Out What It Cost
            </h5>
            <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ab
              dolores, ad exercitationem vero veritatis nemo nihil officia?
              Ullam, illo veniam dolor laudantium pariatur provident nobis
              consequuntur nostrum tenetur fugit amet magni totam expedita
              incidunt, hic, rerum molestias ex at cumque possimus blanditiis
              inventore? A, velit inventore. Soluta, nisi fugit!
            </p>
            <button className=" bg-primary text-white px-6 leading-9 rounded transition-all duration-200 hover:bg-blue-200 hover:text-primary">
              GET OPTIMIZATION
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
