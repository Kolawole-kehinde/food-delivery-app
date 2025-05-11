import React from "react";
import { FaHome, FaUtensils, FaHeart, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ orderId }) => {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <Link to="/" className="px-3 font-bold text-lg text-primary">🍽️ FoodieApp</Link>
      <nav className="flex flex-col gap-4 p-4 text-gray-700">
        <Link to="/" className="flex items-center gap-2 hover:text-primary">
          <FaHome /> Dashboard
        </Link>
       
          <Link to={`/order/${orderId}`} className="flex items-center gap-2 hover:text-primary">
            <FaUtensils /> My Order
          </Link>
    
        <Link to="/favorites" className="flex items-center gap-2 hover:text-primary">
          <FaHeart /> Favorites
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:text-primary">
          <FaCog /> Settings
        </Link>
        <Link to="/logout" className="flex items-center gap-2 hover:text-red-500 mt-auto">
          <FaSignOutAlt /> Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
