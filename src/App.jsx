import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimony from "./components/Testimony";
import Workoverflow from "./components/Workoverflow";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-4">
        <Herosection />
        <Feature />
        <Workoverflow />
        <Pricing />
        <Testimony />
        <Footer />
      </div>
    </>
  );
}

export default App;
