import React, { useState } from 'react';
import { FaSearch, FaEnvelope, FaShoppingBag, FaShoppingCart, FaBell, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { LuMessageSquareText } from 'react-icons/lu';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
 <header>
        <nav className="bg-[#e5ebf1] py-6">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-green-700">
          EM<span className="text-blue-700">X</span>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-6 hidden md:flex">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="What would you love to buy today?"
              className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Desktop Right icons */}
        <div className="hidden md:flex items-center space-x-4 text-gray-700 text-sm">
          
          {/* Language */}
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>EN</span>
            <MdKeyboardArrowDown />
          </div>

          {/* Messages */}
          <div className="flex items-center text-center space-x-1 cursor-pointer">
          <LuMessageSquareText fontSize={20} />
            <span>My Messages</span>
          </div>

          {/* Orders */}
          <div className="flex items-center space-x-1 cursor-pointer">
          <HiOutlineShoppingBag fontSize={20} />
            <span>My Orders</span>
          </div>

          {/* Cart */}
          <div className="flex items-center space-x-1 cursor-pointer">
          <IoCartOutline fontSize={20} />
            <span>Cart</span>
          </div>

          {/* Notification */}
          <div className="cursor-pointer">
          <IoIosNotificationsOutline fontSize={20} />
          </div>

          {/* Profile */}
          <div className="cursor-pointer">
          <FiUser fontSize={20} />
          </div>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Search bar */}
      <div className="flex md:hidden mt-2 px-4 lg:px-0">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What would you love to buy today?"
            className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-4 text-gray-700 text-sm bg-[#e5ebf1] p-4 rounded-md shadow-md">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span>EN</span>
            <MdKeyboardArrowDown />
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <FaEnvelope className="text-xl" />
            <span>My Messages</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <FaShoppingBag className="text-xl" />
            <span>My Orders</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <FaBell className="text-xl" />
            <span>Notifications</span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <FaUserCircle className="text-xl" />
            <span>Profile</span>
          </div>
        </div>
      )}
    </nav>
 </header>
  );
};

export default Navbar;
