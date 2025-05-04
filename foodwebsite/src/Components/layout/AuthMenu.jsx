// AuthMenu.js
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaUtensils, FaHome } from 'react-icons/fa';
import { RiDashboard2Line } from "react-icons/ri";



const AuthMenu = () => {
  const { user, loading, handleLogout} = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 z-50">
  {user ? (
    <>
      <div className="px-4 py-2 text-gray-700 font-semibold">
        Hello, {user.name || 'User'}!
      </div>
      <Link onClick={toggleMenu} to="/profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
        <FaUser  /> Profile
      </Link>
      <Link onClick={toggleMenu} to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
      <FaHome/> Dashboard
      </Link>
      <Link onClick={toggleMenu} to="/settings" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
        <FaUtensils /> Orders
      </Link>
      <Link onClick={toggleMenu} to="/help" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
        <FaQuestionCircle/> Help Center
      </Link>
     
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:text-primary"
      >
        <FaSignOutAlt />
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </>
  ) : (
    <>
      <Link onClick={toggleMenu} to="/auth/login" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
        <FaSignInAlt/> Login
      </Link>
      <Link onClick={toggleMenu} to="/auth/register" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
        <FaUserPlus/> Register
      </Link>
    </>
  )}
</div>
  );
};

export default AuthMenu;
