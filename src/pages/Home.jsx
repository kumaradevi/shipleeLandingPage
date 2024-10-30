import React from "react";
import Hero from "../components/Hero";

import Accordion from "../components/Accordion";
import Table from "../components/Table";
import Network from "../components/Network";
import Partners from "../components/Partners";

const data = [
  {
    title: "AI-Driven Logistics Solutions",
    description:
      " Shiplee offers AI-based features that enhance the logistics experience, such as automated Non-Delivery Report (NDR) management and open-box delivery options. These tools help streamline operations and reduce delivery issues, allowing businesses to maintain better customer satisfaction",
  },
  {
    title: "Enhanced Customer Transparency",
    description:
      "With options like open-box delivery, Shiplee provides greater transparency, which can lead to increased customer trust and satisfaction as customers can inspect packages upon delivery, minimizing post-delivery disputes",
  },
  {
    title: "Cost-Effective Shipping",
    description:
      "As a logistics aggregator, Shiplee collaborates with various shipping partners, allowing businesses to access cost-effective rates and flexible delivery options suited to their needs",
  },
  {
    title: "End-to-End Support",
    description:
      " Shiplee’s platform offers comprehensive support, including real-time tracking and customer service, which can improve the overall delivery experience for both the business and its customers",
  },
];

const Home = () => {
  return (
    <>
      <div className="bg-[#F8F9FA] "  >
        <Hero />
        <div className="w-[80%] mx-auto">
          <section className="mt-[80px]">
            <h3 className="text-3xl font-bold" data-aos="fade-up" data-aos-duration="1200" >Why Choose Shiplee?</h3>
            {data &&
              data.map((item, i) => (
                <div className="mt-12" key={i} data-aos="fade-up" data-aos-duration="1200">
                  <Accordion item={item} />
                </div>
              ))}
          </section>
          <section className="mt-[80px]">
            <h4 className="text-3xl font-bold" data-aos="fade-up" data-aos-duration="1200">Franchise Benefits Table</h4>
            <div className="mt-12">
              <Table />
            </div>
          </section>
          
        </div>
        <section className="mt-[80px] ">
            <Network/>
          </section>
          <section className="mt-[80px]">
           
            <Partners/>
          </section>
      </div>
    </>
  );
};

export default Home;
