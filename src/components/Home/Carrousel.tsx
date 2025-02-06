import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Carousel = () => {
  return (
    <div className="flex items-center p-8 bg-[#f5f5f5]">
      <div className="flex-1 p-8 max-w-md">
        <h2 className="text-3xl font-bold mb-4">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="mb-6 text-gray-700">
          Our designer already made a lot of beautiful prototype of rooms that
          inspire you
        </p>
        <button className="bg-[#d4a373] text-white px-6 py-3">
          Explore More
        </button>
      </div>
      <div className="w-3/5 gap-4">
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            pagination: false,
            arrows: true,
          }}
          className="h-[400px] pr-4"
        >
          <SplideSlide>
            <img
              src="https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car01.png"
              alt="Room 1"
              className="w-full max-w-[532px] h-full object-cover pr-4"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car02.png"
              alt="Room 2"
              className="w-full max-w-[532px] h-full object-cover pr-4"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car03.png"
              alt="Room 3"
              className="w-full max-w-[532px] h-full object-cover pr-4"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://bzr-furniro.s3.us-east-2.amazonaws.com/Carrousel/car04.png"
              alt="Room 3"
              className="w-full max-w-[532px] h-full object-cover pr-4"
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;