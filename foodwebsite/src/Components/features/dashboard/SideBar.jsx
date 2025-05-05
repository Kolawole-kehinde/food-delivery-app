import React from "react";
import { FaHome, FaUtensils, FaHeart, FaCog, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // Sample orderId, you should get this dynamically based on your app's state or context
  const orderId = 123; // Replace with the dynamic orderId

  return (
    <aside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-6 font-bold text-lg text-primary">🍽️ FoodieApp</div>
      <nav className="flex flex-col gap-4 p-4 text-gray-700">
        <a href="#" className="flex items-center gap-2 hover:text-primary">
          <FaHome /> Dashboard
        </a>
        
        {/* Link to OrderDetails page with dynamic orderId */}
        <Link to={`/orders/${orderId}`} className="flex items-center gap-2 hover:text-primary">
          <FaUtensils /> Orders
        </Link>

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
