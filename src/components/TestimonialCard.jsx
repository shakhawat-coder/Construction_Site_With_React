import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialCard({ name, imgUrl, description }) {
  return (
    <>
      <div className="bg-whote rounded-md p-5 border mx-2">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={imgUrl}
            alt={name}
            className="w-14 rounded-full h-14 md:w-16 md:h-16"
          />
          <div className="">
            <p className="text-sm md:text-base mb-1">{name}</p>
            <div className="flex items-end gap-1">
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
              <FaStar className="text-yellow-400 text-base" />
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mb-1 text-start">{description}</p>
      </div>
    </>
  );
}

export default TestimonialCard;
