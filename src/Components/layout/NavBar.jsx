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
    <header className="bg-[#e5ebf1] py-6 mb-8 md:mb-16 px-4 lg:px-0">
      <nav className="wrapper w-full">
        <div className="flex items-center justify-between w-full lg:hidden gap-1">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          

          {/* Auth Button */}
          <div className="ml-2">
            <AuthButton toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* lg: Layout */}
        <div className="hidden lg:flex items-center justify-between w-full">
          <Logo />
          <div className="flex-1">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-2 text-gray-700 text-sm">
            <NavMenu />
          </div>
          <div className="relative flex items-center">
            <AuthButton toggleMenu={toggleMenu} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <nav className="lg:hidden">
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "w-full h-[350px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
          onClick={toggleMenu}
        >
          <div className="flex flex-col space-y-4 text-gray-700 text-lg bg-[#e5ebf1] p-4 rounded-md shadow-md">
            <NavMenu isMobile={true} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
