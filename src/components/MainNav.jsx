import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

// import { useNavigate } from "react-router-dom";

const Home = () => {
  const span1Ref = useRef();
  const span2Ref = useRef();
  const span3Ref = useRef();
  const asideRef = useRef();
  const [isToggled, setIsToggled] = useState(false);
  // const navigate = useNavigate();
  React.useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape" && isToggled) {
        handleHamburger();
      }
      if (isToggled) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isToggled]);

  const handleHamburger = () => {
    if (!isToggled) {
      gsap.to(span1Ref.current, {
        duration: 0.5,
        rotate: 130,
        y: 5,
      });
      gsap.to(span2Ref.current, {
        duration: 0.5,
        opacity: 0,
      });
      gsap.to(span3Ref.current, {
        duration: 0.5,
        rotate: 240,
        y: -5,
      });
      gsap.to(asideRef.current, {
        duration: 0.5,
        delay: 0.5,
        x: 0, // Slide in from the left
        ease: "power3.inOut",
      });
    } else {
      gsap.to(span1Ref.current, {
        duration: 0.5,
        rotate: 0,
        y: 0,
      });
      gsap.to(span2Ref.current, {
        duration: 0.5,
        opacity: 1,
      });
      gsap.to(span3Ref.current, {
        duration: 0.5,
        rotate: 0,
        y: 0,
      });
      gsap.to(asideRef.current, {
        duration: 0.5,
        delay: 0.5,
        x: "-100%", // Slide out to the left
        ease: "power3.out",
      });
    }

    setIsToggled(!isToggled);
  };

  const handleLinkClick = (id, path) => {
    // handleHamburger();
    // navigate(path)
    // setTimeout(() => {
    //   const section = document.getElementById(id);
    //   if (section) {
    //     section.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 1500);
  };

  return (
    <div className="sticky   top-0 py-3 px-2 h-16 z-50 backdrop-blur-lg border-b border-neutral-700">
      {/* Hamburger Menu */}
      <section className="container px-4 mx-auto relative text-sm z-40 flex justify-between">
        <button
          onClick={handleHamburger}
          className="flex flex-col space-y-1 cursor-pointer focus:outline-none mt-2"
        >
          <hr
            ref={span1Ref}
            className="w-7 h-1 bg-orange-200 transform transition-transform duration-500"
          />
          <hr
            ref={span2Ref}
            className="w-7 h-1 bg-orange-200 transition-opacity duration-500"
          />
          <hr
            ref={span3Ref}
            className="w-7 h-1 bg-orange-200 transform transition-transform duration-500"
          />
        </button>
      </section>

      {/* main content lies here */}
      {/* <main>
        <div id="home">
          <Gallery />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main> */}
      {/* Overlay Aside */}
      <aside
        ref={asideRef}
        className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-orange-400 to-zinc-900 transform -translate-x-full z-0"
      >
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 mt-10">Menu</h2>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => handleLinkClick("home", "/")}
                className="text-lg text-white"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("about", "/about")}
                className="text-lg text-white"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("services", "/services")}
                className="text-lg text-white"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("contact", "/contact")}
                className="text-lg text-white"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex items-center justify-between mt-10 ">
            <div className="flex space-x-12">
              <a className="border rounded-md  py-2 px-2 text-sm" href="#">
                Create A Report
              </a>
              <SignedOut>
                <SignInButton className="border rounded-md  py-2 px-2 text-sm bg-gradient-to-r from-orange-600 to-red-800">
                  Login/Register
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Home;
