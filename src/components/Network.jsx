import React from "react";
import ecom from "../assets/network/ecom.jpg"
import gati from "../assets/network/gati.jpg"
import ex from "../assets/network/ex.jpg"
import shadow from "../assets/network/shadow.png"
const Network = () => {
  return (
    <div className="bg-purple-800 w-full h-[400px]  flex justify-between">
      <div className="p-32 w-[50%]">
        <h4 className="text-3xl text-white" data-aos="fade-up" data-aos-duration="1200">From Anywhere To Everywhere</h4>
        <p className="text-white mt-4 text-lg" data-aos="fade-up" data-aos-duration="1200">
          Our multi-courier network spread across 24000+ pin codes <br />
          lets you say yes to every order, even from remote areas.
        </p>
        <button className="mt-8 bg-white text-lg font-medium text-purple-800 px-8 py-4 rounded-full hover:bg-purple-300 hover:text-black transition-all"
        data-aos="fade-up" data-aos-duration="1200">
          Explore More
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4  m-auto">
         <div className="bg-white w-[150px] h-[150px] shadow-md  rounded-md" data-aos="fade-up" data-aos-duration="1200">
            <img src={ecom} alt="" className="w-full h-full object-cover rounded-md"/>
         </div>
         <div className="bg-white w-[150px] h-[150px] shadow-md  rounded-md flex justify-center items-center" data-aos="fade-up" data-aos-duration="1200">
            <img src={gati} alt="" className="w-[80%] h-[80%] object-cover rounded-md"/>
         </div>
         <div className="bg-white w-[150px] h-[150px] shadow-md  rounded-md" data-aos="fade-up" data-aos-duration="1200">
            <img src={ex} alt="" className="w-full h-full object-cover rounded-md"/>
         </div>
         <div className="bg-white w-[150px] h-[150px] shadow-md   rounded-md" data-aos="fade-up" data-aos-duration="1200">
            <img src={shadow} alt="" className="w-full h-full object-cover rounded-md"/>
         </div>
      </div>
    </div>
  );
};

export default Network;
