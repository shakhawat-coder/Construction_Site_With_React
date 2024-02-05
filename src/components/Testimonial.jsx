import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../../data";
import Slider from "react-slick";

function Testimonial() {
  const sliderRef = useRef();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    speed: 800,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="testimonials" className="max max-w-[1200px] py-16 mx-auto">
        <h5 className="text-2xl font-semibold text-darkBlue text-center mb-10">
          <div className="relative">
            <Slider ref={sliderRef} {...settings}>
              {TESTIMONIALS.map((item) => (
                <TestimonialCard
                  key={item.id}
                  name={item.name}
                  imgUrl={item.imgUrl}
                  review={item.review}
                  description={item.description}
                />
              ))}
            </Slider>
          </div>
        </h5>
        <div className=""></div>
      </section>
    </>
  );
}

export default Testimonial;
