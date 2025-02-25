import React from "react";
import Image from "next/image";
import Logo from "../../../assets/logo2.png";

const Navbar = () => {
  return (
    <nav className="bg-pink-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <Image src={Logo} alt="Logo" width={45} height={45} />
          <h2 className="font-helvitiga text-fuchsia-300">Spardha ❤ Prameet</h2>
        </div>

        

        {/* Right: Navigation Links */}
        <div className="flex space-x-6">
          <nav className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
