import React from "react";
import videooo from "../assets/videooo.mp4";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <>
      <div className=" flex flex-col items-center mt-2 lg:mt-10">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl text-center tracking-normal  font-medium">
          Harness the Power of{" "}
          <span
            className="bg-gradient-to-r from-orange-500
          to-red-800 text-transparent bg-clip-text"
          >
            {" "}
            Crowdsourced Disaster Reporting
          </span>
        </h1>
        <p className="text-center mt-10 max-w-4xl text-xl sm:text-sm text-neutral-500">
          Empower Your Community: Real-Time Disaster Reporting with Crowdsourced
          Insights
        </p>
        <div className="flex justify-center my-10 space-x-6">
          <Link
            className="border  rounded-md py-2 px-2 bg-gradient-to-r from-orange-500 to to-orange-800"
            to="/create-a-report"
          >
            Create A Report
          </Link>
          <Link
            className="border text-sm lg:text-base  rounded-md py-2 px-2"
            to="/know-your-surrounding"
          >
            Know Your Surrounding
          </Link>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            loop
            muted
            src={videooo}
            className="rounded-lg w-full border border-orange-700 shadow-orange-400 mx-2 my-4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Herosection;
