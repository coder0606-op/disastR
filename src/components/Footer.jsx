import React from "react";
import { platformLinks, resourcesLinks } from "../constants";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <>
      <footer className="mt-20 py-10 border-t border-neutral-700">
        <div>
          <div className="flex items-center space-x-3 mb-20">
            <img src={logo} alt="" className="h-20 w-20" />
            <h3>Title</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h3>Quick Links</h3>
              <ul className="mt-6 space-y-4 ">
                {resourcesLinks.map((link, index) => (
                  <li className="text-neutral-500 hover:text-white" key={index}>
                    {link.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Community</h3>
              <ul className="mt-6 space-y-4 ">
                {platformLinks.map((link, index) => (
                  <li className="text-neutral-500 hover:text-white" key={index}>
                    {link.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-sm mt-10">
            © {new Date().getFullYear()} Crowdsourced Reporting Tool. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
