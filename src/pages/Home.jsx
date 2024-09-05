import React from "react";
import MainNav from "../components/MainNav";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
const Home = () => {
  return (
    <main>
      <MainNav />
      <div className="max-w-7xl mx-auto pt-20 px-4">
        <Herosection />
        <Feature></Feature>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
