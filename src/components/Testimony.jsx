import React from "react";
import { testimonials } from "../constants";

const Testimony = () => {
  return (
    <>
      <div className="mt-5 border-b pb-16 border-neutral-800 border-t pt-16">
        <h2 className="text-center text-3xl md:4xl lg:text-5xl">
          What people are saying{" "}
        </h2>
        <div className="flex flex-wrap mt-14">
          {testimonials.map((test, index) => (
            <div className="w-full md:w-1/2 lg:w-1/3 p-2">
              <div className="border border-neutral-700 rounded-lg p-4">
                {" "}
                <p className="font-light">{test.text}</p>
                <div className="flex mt-6 items-start">
                  <img
                    src={test.image}
                    alt=""
                    className="h-12 w-12  rounded-full"
                  />
                  <div>
                    <h2 className="  ml-7 font-normal">{test.user}</h2>
                    <p className="text-neutral-600 text-sm ml-5 font-light block">
                      {test.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimony;
