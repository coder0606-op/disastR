import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFlipCameraIos } from "react-icons/md";

import Webcam from "react-webcam";
const Report = () => {
  const [reportDetails, setReportDetails] = useState({
    report: "",
    image: "",
  });
  const [flip, setFlip] = useState(false)
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  const cameraRef = useRef(null);
  const captureImage = () => {
        const imageSrc = cameraRef.current.getScreenshot();
        setReportDetails((prevDetails)=>({
                ...prevDetails,
                image: imageSrc
        }))
  };

  return (
    <main className="h-[90svh] w-full">
      <header className="border-b-2 border-neutral-700 h-14 ">
        <nav className="w-full h-full p-3">
          <p onClick={handleLogoClick} className="">
            logo
          </p>
        </nav>
      </header>
      <section className="h-full w-full flex justify-center items-center">
        <section className="border-2 border-neutral-700 sm:h-[60%] sm:w-[75%] grid sm:grid-cols-2 grid-cols-1">
          <div className="w-full p-2">
            <div>
              {reportDetails.image === "" ? (
                <Webcam
                  ref={cameraRef}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{ facingMode: flip ? "user" : "environment" }}
                  className="w-full h-[60%] rounded-lg shadow-md"
                ></Webcam>
              ) : (
                <img
                  src={reportDetails.image}
                  alt="Captured"
                  className="w-full max-w-md h-auto rounded-lg shadow-md"
                />
              )}
            </div>
            <div className="w-full  flex justify-around">
              <MdFlipCameraIos size={40} className="sm:hidden block" onClick={()=>{setFlip(!flip)}} />

              <button
                className="bg-orange-400 h-10 mt-3 rounded-lg w-[40%]"
                onClick={captureImage}
              >
                Capture Photo
              </button>
            </div>
          </div>
          <div className="w-full p-2">
            <textarea
              name="description"
              id="descrption"
              cols="30"
              rows="10"
              placeholder="Type Your Query Here"
              className="w-full bg-[#EEEE] text-black text-lg p-5"
            />
            <div>
                <button className="bg-green-400 h-10 mt-3 rounded-lg w-[40%]">Submit</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Report;
