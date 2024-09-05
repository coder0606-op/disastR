import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import GeolocationMap from "./components/MapComponent";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/know-your-surrounding" element={<GeolocationMap />} />
          {/* <Route path="/services" element={}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
