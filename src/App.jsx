import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GeolocationMap from "./components/MapComponent";
import Home from "./pages/Home";
import Report from "./components/Report";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-a-report" element={<Report />} />
          <Route path="/services" element={<Service />} />
          <Route path="/know-your-surrounding" element={<GeolocationMap />} />
          {/* <Route path="/services" element={}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
