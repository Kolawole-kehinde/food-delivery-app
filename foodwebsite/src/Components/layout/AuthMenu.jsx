// AuthMenu.js
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';



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
      <Link onClick={toggleMenu} to="/profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
        <FaUser className='text-primary' /> Profile
      </Link>
      <Link onClick={toggleMenu} to="/settings" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
        <FaCog className='text-primary' /> Account Settings
      </Link>
      <Link onClick={toggleMenu} to="/help" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
        <FaQuestionCircle className='text-primary'/> Help Center
      </Link>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
      >
        <FaSignOutAlt className='text-primary'/>
        {loading ? 'Logging out...' : 'Logout'}
      </button>
    </>
  ) : (
    <>
      <Link onClick={toggleMenu} to="/auth/login" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
        <FaSignInAlt className='text-primary'/> Login
      </Link>
      <Link onClick={toggleMenu} to="/auth/register" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
        <FaUserPlus className='text-primary'/> Register
      </Link>
    </>
  )}
</div>
  );
};

export default AuthMenu;
