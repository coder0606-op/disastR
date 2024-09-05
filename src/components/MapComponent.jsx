import React, { useState, useEffect } from "react";
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

const GeolocationMap = () => {
  const [latitude, setLatitude] = useState(null); // default to null
  const [longitude, setLongitude] = useState(null); // default to null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setLoading(false); // stop loading even if there's an error
        }
      );
    } else {
      console.error("Geolocation not supported");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (latitude === null || longitude === null) {
    return <div>Location not available</div>;
  }

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: "500px", width: "100%" }}
      className="sm:h-80 z-0"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latitude, longitude]}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default GeolocationMap;
