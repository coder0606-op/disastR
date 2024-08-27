import React from "react";
import code from "../assets/code.jpg";
import { CheckCircle2, CheckCircle2Icon } from "lucide-react";
import { checklistItems } from "../constants";

const Workoverflow = () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide">
          Accelerate your{" "}
          <span
            className="bg-gradient-to-r from-orange-500
          to-red-800 text-transparent bg-clip-text"
          >
            {" "}
            coding workflow
          </span>
        </h1>
        <div className="flex flex-wrap justify-center">
          <div className="p-2 w-full lg:w-1/2">
            {" "}
            <img src={code} alt="" />
          </div>
          <div className="w-full lg:w-1/2 pt-12">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex mb-12">
                <div className="  mx-6 text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Workoverflow;
