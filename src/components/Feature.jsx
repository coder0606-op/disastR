import React, { useRef } from "react";
import { features } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Feature = () => {
  const featureBoxRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      featureBoxRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        scrollTrigger: {
          trigger: featureBoxRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      }
    );
  });
  return (
    <>
      <div
        className="relative lg:mt-20 mt-10  border-neutral-800 min-h-[700px] "
        ref={featureBoxRef}
      >
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-2xl font-medium px-2 py-1 uppercase">
            Features
          </span>
          {/* <h1 className="text-3xl lg:text-5xl mt-10 lg:mt-15">
            Easily build{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent">
              {" "}
              your code
            </span>
          </h1> */}
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20 ">
          {features.map((item, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
              <div className="flex">
                <div className="flex justify-center items-center rounded-full mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700">
                  {item.icon}
                </div>
                <div className="">
                  <h5 className="mt-1 mb-6 text-lg">{item.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature;
