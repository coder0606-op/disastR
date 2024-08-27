import React from "react";
import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3>Resources</h3>
            <ul className="mt-6 space-y-4 ">
              {resourcesLinks.map((link, index) => (
                <li className="text-neutral-500 hover:text-white" key={index}>
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Platform</h3>
            <ul className="mt-6 space-y-4 ">
              {platformLinks.map((link, index) => (
                <li className="text-neutral-500 hover:text-white" key={index}>
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul className="mt-6 space-y-4 ">
              {communityLinks.map((link, index) => (
                <li className="text-neutral-500 hover:text-white" key={index}>
                  {link.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
