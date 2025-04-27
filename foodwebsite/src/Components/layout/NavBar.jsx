import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { FaBars } from 'react-icons/fa'; // Added hamburger icon
import Logo from './Logo';
import Menu from './Menu';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-[#e5ebf1] py-6 mb-8 md:mb-16">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo - visible on all screens */}
        <div className="flex md:hidden">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 text-gray-700 text-sm items-center w-full">
          <Logo />

          {/* Search bar */}
          <div className="flex-1 mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="What would you love to buy today?"
                className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="flex items-center space-x-4">
            {/* Language */}
            <div className="flex items-center space-x-1 cursor-pointer">
              <span>EN</span>
              <MdKeyboardArrowDown fontSize={20} className="bg-[#E6E8E6] rounded-md" />
            </div>

            <Menu menuStyle="hidden md:flex space-x-4" toggleMenu={toggleMenu} />
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? (
              <IoClose fontSize={24} />
            ) : (
              <FaBars fontSize={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Search bar - always visible */}
      <div className="md:hidden mt-2 px-4 lg:px-0">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What would you love to buy today?"
            className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none "
          />
          <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 text-gray-700 text-sm bg-[#e5ebf1] p-4 rounded-md shadow-md">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>EN</span>
            <MdKeyboardArrowDown fontSize={20} className="bg-[#E6E8E6] rounded-md" />
          </div>

          <Menu menuStyle="flex flex-col space-y-4" toggleMenu={toggleMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;