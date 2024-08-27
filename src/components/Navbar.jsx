import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mbd, setmbd] = useState(false);
  const toggle = () => {
    setmbd(!mbd);
  };
  return (
    <>
      <nav className="sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative text-sm ">
          <div className="flex items-center justify-between ">
            <div className="flex items-center flex-shrink-0">
              <img className="w-10 h-10 mr-2" src={logo} alt="" />
              <span className="text-xl tracking-tight ">VirtualR</span>
            </div>
            <div>
              <ul className="hidden lg:flex ml-14 space-x-12">
                {navItems.map((items, index) => (
                  <li key={index}>
                    <a href={items.href}>{items.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex space-x-12">
              <a className="border rounded-md py-2 px-2" href="#">
                Sign in
              </a>
              <a
                className="border rounded-md py-2 px-2 bg-gradient-to-r from-orange-500 to to-orange-800"
                href="#"
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden md:flex  flex-col justify-end">
              <button onClick={toggle}>{mbd ? <X /> : <Menu />}</button>
            </div>
          </div>
          {mbd ? (
            <div className="flex flex-col z-20  rounded-sm justify-center items-center">
              <ul>
                {navItems.map((items, index) => (
                  <li key={index} className="py-4">
                    <a href={items.href}>{items.label}</a>
                  </li>
                ))}
              </ul>
              <div className="lg:text-xl md:text-sm py-4 px-4 space-x-8">
                <a className="border rounded-md py-2 px-2" href="#">
                  Sign in
                </a>
                <a
                  className="border rounded-md py-2 px-2 bg-gradient-to-r from-orange-500 to to-orange-800"
                  href="#"
                >
                  Create an account
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
