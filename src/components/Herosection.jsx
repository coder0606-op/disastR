import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
  return (
    <>
      <div className=" flex flex-col items-center mt-2 lg:mt-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center tracking-wide">
          VirtualR build tools{" "}
          <span
            className="bg-gradient-to-r from-orange-500
          to-red-800 text-transparent bg-clip-text"
          >
            {" "}
            for developers
          </span>
        </h1>
        <p className="text-center mt-10 max-w-4xl text-lg sm:text-sm text-neutral-500">
          Enpower your creativity and bring your VR app ideas to life with our
          intutive developement tools.Get started today and your imagination
          into immersive reality
        </p>
        <div className="flex justify-center my-10 space-x-6">
          <a
            className="border  rounded-md py-2 px-2 bg-gradient-to-r from-orange-500 to to-orange-800"
            href="#"
          >
            Start for free
          </a>
          <a className="border rounded-md py-2 px-2" href="#">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            src={video1}
            className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          ></video>
          <video
            autoPlay
            loop
            muted
            src={video2}
            className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Herosection;
