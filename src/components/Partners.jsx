import React from "react";
import Amazon from "./icons/Amazon";
import Ebay from "./icons/Ebay";
import Shopify from "./icons/Shopify";
import Slider from "react-slick";

const settings = {
  dots: false, // Show dots navigation
  infinite: true, // No infinite scrolling
  speed: 800, // Speed of transition
  slidesToShow: 6, // Number of instructors to show at a time
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000, // Scroll 1 instructor at a time
};

const responsive = [
  {
    breakpoint: 1024,
    settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
  },
  {
    breakpoint: 600,
    settings: { slidesToShow: 2, slidesToScroll: 1 },
  },
  {
    breakpoint: 480,
    settings: { slidesToShow: 1, slidesToScroll: 1 },
  },
];
const Partners = () => {
  return (
    <>
      <div className="my-12 w-[80%] mx-auto">
        <h4
          className="text-3xl font-bold my-12 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Our Partners
        </h4>
        <div className="flex gap-12">
          {/* <Slider {...settings}> */}
            <div
              className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex justify-center items-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-5xl text-yellow-500">
                <Amazon />
              </div>
            </div>
            <div
              className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex justify-center items-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-5xl text-blue-500">
                <Ebay />
              </div>
            </div>
            <div
              className="w-[130px] h-[130px] rounded-full bg-white shadow-md flex justify-center items-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-5xl text-green-500">
                <Shopify />
              </div>
            </div>
          {/* </Slider> */}
        </div>
      </div>
    </>
  );
};

export default Partners;
