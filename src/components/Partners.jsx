import React from "react";
import Amazon from "./icons/Amazon";
import Ebay from "./icons/Ebay";
import Shopify from "./icons/Shopify";



const Partners = () => {
  return (
    <>
      <div className="w-[90%] my-12 md:w-[80%] mx-auto ">
        <h4
          className="text-3xl font-bold my-12 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Our Partners
        </h4>
        <div className="flex gap-12 flex-col md:flex-row items-center">
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
