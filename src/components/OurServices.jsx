import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../../data";

function OurServices() {
  return (
    <>
      <section id="services" className="max-w-[1200px] py-16 mx-auto">
        <h5 className="text-2xl font-semibold text-darkBlue text-center mb-10">
          Our Services
        </h5>
        <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50 ">
          {SERVICES.map((item) => (
            <ServiceCard
              key={item.title}
              imageUrl={item.imageUrl}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default OurServices;
