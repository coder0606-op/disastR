import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdFlipCameraIos } from "react-icons/md";
import Webcam from "react-webcam";
import { UserContext } from "../context/UserContextProvider";

const Report = () => {
  const { globalReport, setGlobalReport } = useContext(UserContext);
  const [reportDetails, setReportDetails] = useState({
    report: "",
    image: [],
  });
  const [flip, setFlip] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const navigate = useNavigate();
  const cameraRef = useRef(null);

  const handleLogoClick = () => {
    navigate("/");
  };

  const captureImage = () => {
    const imageSrc = cameraRef.current.getScreenshot();
    setReportDetails((prevDetails) => ({
      ...prevDetails,
      image: [...prevDetails.image, imageSrc],
    }));
  };

  const deleteImage = () => {
    if (selectedImageIndex !== null) {
      setReportDetails((prevDetails) => ({
        ...prevDetails,
        image: prevDetails.image.filter(
          (_, index) => index !== selectedImageIndex
        ),
      }));
      setSelectedImageIndex(null);
    }
  };

  const handleDescriptionChange = (e) => {
    setReportDetails((prevDetails) => ({
      ...prevDetails,
      report: e.target.value,
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "delete") {
      deleteImage();
    }
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleSubmit = () => {
    if (reportDetails.image.length === 0 || reportDetails.report === "") {
      alert("Please fill in all fields");
    } else {
      setGlobalReport(reportDetails);
      alert("Report submitted successfully!"); // Feedback to the user
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <main className="h-full sm:h-[90svh] w-full">
      <header className="border-b-2 border-neutral-700 h-14">
        <nav className="w-full h-full p-3">
          <p onClick={handleLogoClick} className="cursor-pointer">
            logo
          </p>
        </nav>
      </header>

      <section className="h-full w-full flex justify-center items-center mt-10 sm:mt-0">
        <section className="border-2 border-neutral-700 sm:h-[60%] sm:w-[75%] grid sm:grid-cols-2 grid-cols-1">
          <div className="w-full p-2">
            <div className="flex flex-wrap sm:flex-nowrap gap-4">
              <Webcam
                ref={cameraRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{
                  facingMode: flip ? "user" : "environment",
                }}
                className="w-full sm:w-[60%] h-[200px] rounded-lg shadow-md"
              />

              <div className="w-full sm:w-28 h-[100px] sm:h-[300px] flex flex-row sm:flex-col overflow-y-auto sm:border-l-2 border-neutral-400 p-2">
                {reportDetails.image.map((imageSrc, index) => (
                  <img
                    key={index}
                    src={imageSrc}
                    alt="captured"
                    onClick={() => handleImageClick(index)}
                    className={`w-24 h-24 mb-1 sm:mb-2 mr-1 sm:mr-0 ${
                      selectedImageIndex === index
                        ? "border-4 border-blue-500"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="w-full flex justify-around">
              <MdFlipCameraIos
                size={40}
                className="sm:hidden block mt-2"
                onClick={() => setFlip(!flip)}
              />

              <button
                className="bg-orange-400 h-10 mt-3 rounded-lg w-[50%] sm:w-[40%]"
                onClick={captureImage}
              >
                Capture Photo
              </button>
            </div>
          </div>

          <div className="w-full p-2">
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              placeholder="Type Your Query Here"
              onChange={handleDescriptionChange}
              value={reportDetails.report}
              className="w-full bg-[#EEEE] text-black text-lg p-5"
              required
            />
            <div>
              <button
                className="bg-green-400 h-10 mt-3 rounded-lg w-[40%]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Report;
