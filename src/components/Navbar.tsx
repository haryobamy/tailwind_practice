import React from "react";
import logo from "../assests/img/tailwind_logo.svg";

function Navbar() {
  return (
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* Menu items */}
        <div className="hidden md:flex space-x-6">
          <a href="http://www.google.com" className="hover:text-yellow-700">
            Pricing
          </a>
          <a href="http://www.google.com" className="hover:text-yellow-700">
            Product
          </a>
          <a href="http://www.google.com" className="hover:text-yellow-700">
            About Us
          </a>
          <a href="http://www.google.com" className="hover:text-yellow-700">
            Careers
          </a>
          <a href="http://www.google.com" className="hover:text-yellow-700">
            Community
          </a>
        </div>
        {/* button */}
        <a
          href="http://www.google.com"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-slate-600 rounded-full hover:bg-slate-400"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
