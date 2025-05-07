// Navbar.js
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import SearchBar from "../SearchButton";
import NavMenu from "./NavMenu";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav className="bg-[#e5ebf1] py-6 mb-8 md:mb-16 px-4 lg:px-0">
        <div className="wrapper flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Search Bar */}
          <div className="flex-1 mx-6 hidden md:flex">
            <SearchBar />
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6 text-gray-700 text-sm">
            {/* Actions */}
            <NavMenu />

            {/* Profile Button */}
            <AuthButton /> 
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="flex md:hidden mt-2 px-4 lg:px-0">
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col mt-4 space-y-4 text-gray-700 text-sm bg-[#e5ebf1] p-4 rounded-md shadow-md">
            {/* Actions */}
            <NavMenu isMobile={true} />

            {/* Profile */}
            <div className="flex items-center space-x-2 cursor-pointer">
            <AuthButton toggleMenu={toggleMenu} />
              <span>Profile</span>
              
            </div>

           
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
