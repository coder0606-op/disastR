import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { initialReports } from "../constants/Reports";
import GeolocationMap from "../components/MapComponent";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Service = () => {
  const [reports, setReports] = useState(initialReports);
  const [selectedImage, setSelectedImage] = useState({}); // Image selection is now tracked by report id

  // Function to handle voting
  const increaseVote = (id) => {
    const updatedReports = reports.map((report) =>
      report.id === id ? { ...report, vote: report.vote + 1 } : report
    );
    setReports(updatedReports.sort((a, b) => b.vote - a.vote)); // Sort by votes in descending order
  };

  // Function to handle image selection
  const handleSelect = (id, image) => {
    setSelectedImage((prevSelected) => ({
      ...prevSelected,
      [id]: image, // Update selected image based on report id
    }));
  };

  const mainRef = useRef(null)
  useGSAP(()=>{
    gsap.fromTo(mainRef.current,{
      opacity: 0,
      
    },{
      opacity: 1,
      duration: 3,
      
    })
  })
  
  return (
    <main className="h-full w-full" ref={mainRef}>
      <header className="border-b-2 border-neutral-700 h-14">
        <nav className="w-full h-full p-3">
          <Link className="cursor-pointer" to={"/"}>
            logo
          </Link>
        </nav>
      </header>
      <section className="w-full px-4 sm:p-10">

        <GeolocationMap/>
      </section>
      <section className="mt-5">
        <section className="w-full grid sm:grid-cols-3 grid-cols-2 place-items-center gap-7">
          {reports.length > 0 ? (
            reports.map((reportDetails) => (
              <div
                className="h-96 w-[70%] flex flex-col p-3 border-2 border-neutral-700 rounded-md"
                key={reportDetails.id} // Use id as key
              >
                <div className="w-fit h-[60%] object-contain">
                  <img
                    src={
                      selectedImage[reportDetails.id]
                        ? selectedImage[reportDetails.id] // Use selected image tied to the report id
                        : reportDetails.image[0] // Default image if no selection
                    }
                    alt="disaster"
                    className="shadow-md"
                  />
                </div>
                <div className="flex justify-around">
                  <div className="flex w-56 overflow-x-auto">
                    {reportDetails.image.map((image, imgIndex) => (
                      <div className="h-16 w-16 ml-1" key={imgIndex}>
                        <img
                          src={image}
                          alt={`image-${imgIndex}`}
                          onClick={() => handleSelect(reportDetails.id, image)} // Use report id for image selection
                          className="cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                  <p
                    onClick={() => increaseVote(reportDetails.id)} // Use report id for voting
                    className="cursor-pointer h-5"
                  >
                    ⬆️ {reportDetails.vote}
                  </p>
                </div>
                <div className="overflow-y-scroll">
                  <p>{reportDetails.report}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No reports available.</p>
          )}
        </section>
      </section>
    </main>
  );
};

export default Service;
