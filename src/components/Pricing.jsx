import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center">
          Pricing
        </h2>
        <div className="flex flex-wrap mt-5">
          {pricingOptions.map((item, index) => (
            <div key={index} className=" w-full md:w-1/2 lg:w-1/3 p-2 ">
              <div className="p-10 border border-neutral-800 rounded-xl">
                <h3 className="text-2xl">
                  {item.title}
                  {item.title === "Pro" && (
                    <span className="text-lg text-orange-800">
                      (Most Popular)
                    </span>
                  )}
                </h3>
                <p className="mt-10 text-3xl">
                  {item.price}
                  <span className="text-sm ">/month</span>
                </p>
                <ul>
                  {item.features.map((feat, index) => (
                    <li className="flex mt-9">
                      <CheckCircle2 />
                      <span className="ml-2">{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center border border-orange-800 p-3 w-full mt-20 rounded-lg hover:bg-orange-800 transtion duration-200 "
                >
                  Subscribe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
