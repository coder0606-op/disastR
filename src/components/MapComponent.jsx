import React, { useState, useEffect } from "react";
import { initialReports } from "../constants/Reports";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon not appearing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Helper function to calculate proximity
const isNearby = (lat1, lon1, lat2, lon2) => {
  return Math.abs(lat1 - lat2) <= 0.1 && Math.abs(lon1 - lon2) <= 0.1;
};

// Helper function to group reports by proximity
const groupReportsByProximity = (reports) => {
  let groups = [];

  reports.forEach((report) => {
    let foundGroup = false;
    for (let group of groups) {
      if (
        group.some((r) =>
          isNearby(r.latitude, r.longitude, report.latitude, report.longitude)
        )
      ) {
        group.push(report);
        foundGroup = true;
        break;
      }
    }

    if (!foundGroup) {
      groups.push([report]);
    }
  });

  return groups;
};

// Function to determine marker color based on group size
const getMarkerColor = (groupSize) => {
  if (groupSize > 3) return "red";
  if (groupSize > 2) return "yellow";
  return "green";
};

const GeolocationMap = () => {
  const [latitude, setLatitude] = useState(null); // default to null
  const [longitude, setLongitude] = useState(null); // default to null
  const [loading, setLoading] = useState(true);
  const [groupedReports, setGroupedReports] = useState([]);

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation not supported");
      setLoading(false);
    }

    // Group the reports by proximity
    const groups = groupReportsByProximity(initialReports);
    setGroupedReports(groups);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (latitude === null || longitude === null) {
    return <div>Location not available</div>;
  }

  return (
    <>
      <div className="grid sm:grid-cols-4 grid-cols-2 place-items-center p-2  mb-3">
        <p className="text-gray-300 text-sm sm:text-md">🔴: Most Severe</p>
        <p className="text-gray-300 text-sm sm:text-md">🟡: Partially Severe</p>
        <p className="text-gray-300 text-sm sm:text-md">🟢: Least Severe</p>
        <p className="text-gray-300 text-sm sm:text-md">🔵: Your Location</p>
      </div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={3}
        className="sm:h-96 h-56 z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* User's location marker */}
        <Marker position={[latitude, longitude]}>
          <Popup>You are here</Popup>
        </Marker>

        {/* Report markers grouped by proximity */}
        {groupedReports.map((group, index) =>
          group.map((report) => (
            <Marker
              key={report.id}
              position={[report.latitude, report.longitude]}
              icon={
                new L.Icon({
                  iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-${getMarkerColor(
                    group.length
                  )}.png`,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowSize: [41, 41],
                })
              }
            >
              <Popup>
                Report {report.id}: {report.vote} votes.
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </>
  );
};

export default GeolocationMap;
