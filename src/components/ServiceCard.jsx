import React from "react";

function ServiceCard({ imageUrl, title, desc }) {
  return (
    <>
      <div className="bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row items-center">
        <div className="w-full md:w-1/2 h-96">
          <img src={imageUrl} alt={title} className=" w-full h-full" />
        </div>
        <div className="flex-1">
          <div className="p-10">
            <h3 className="text-md md:text-xl text-darkBlue font-medium mb-3">
              {title}
            </h3>
            <p className="text-sm leading-6 text-darkBlue font-normal whitespace-pre-line mt-4">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
