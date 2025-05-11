import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import SearchBar from "./SearchButton";
import NavMenu from "./NavMenu";
import AuthButton from "./AuthButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav className="bg-[#e5ebf1] py-6 mb-8 md:mb-16 px-4 lg:px-0">
        <div className="wrapper flex items-center justify-between">
          {/* Hamburger Icon (mobile only) */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Logo (only shown md and up) */}
          <div className="hidden lg:block">
            <Logo />
          </div>

          {/* Desktop Search Bar */}
          <div className="flex-1 mx-6 hidden md:flex">
            <SearchBar />
          </div>

          {/* Desktop NavMenu */}
          <div className="hidden lg:flex items-center space-x-2 text-gray-700 text-sm">
            <NavMenu />
          </div>

          {/* AuthButton (both mobile & desktop) */}
          <div className="relative hidden md:flex items-center">
            <AuthButton toggleMenu={toggleMenu} />
          </div>

          {/* Mobile AuthButton (right side) */}
          <div className="relative md:hidden">
            <AuthButton toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="flex md:hidden mt-2 px-4 lg:px-0">
          <SearchBar />
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "w-full h-[350px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
          onClick={toggleMenu}
        >
          <div className="flex flex-col space-y-4 text-gray-700 text-lg bg-[#e5ebf1]  p-4 rounded-md shadow-md">
            <NavMenu isMobile={true} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
