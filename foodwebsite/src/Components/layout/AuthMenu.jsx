// AuthMenu.js
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

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
          <Link onClick={toggleMenu} to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
          <Link onClick={toggleMenu} to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account Settings</Link>
          <Link onClick={toggleMenu} to="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help Center</Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
           {loading ? 'Logging out...' : 'Logout'}
          </button>
        </>
      ) : (
        <>
          <Link onClick={toggleMenu} to="/auth/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
          <Link onClick={toggleMenu} to="/auth/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</Link>
        </>
      )}
    </div>
  );
};

export default AuthMenu;
