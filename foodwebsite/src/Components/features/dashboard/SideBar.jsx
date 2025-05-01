// src/components/Sidebar.jsx
import React from "react";
import { FaHome, FaUtensils, FaHeart, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 font-bold text-lg text-primary">🍽️ FoodieApp</div>
      <nav className="flex flex-col gap-4 p-4 text-gray-700">
        <a href="#" className="flex items-center gap-2 hover:text-primary">
          <FaHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-primary">
          <FaUtensils /> Orders
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-primary">
          <FaHeart /> Favorites
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-primary">
          <FaCog /> Settings
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-primary mt-auto text-red-500">
          <FaSignOutAlt /> Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
