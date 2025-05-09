import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaQuestionCircle,
  FaSignOutAlt,
  FaSignInAlt,
  FaUserPlus,
  FaUtensils,
  FaHome
} from 'react-icons/fa';

const AuthMenu = ({ closeMenu }) => {
  const { user, loading, handleLogout } = useAuth();

  return (
    <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 z-50">
      {user ? (
        <>
          <div className="px-4 py-2 text-gray-700 font-semibold">
            Hello, {user.name || 'User'}!
          </div>
          <Link to="/profile" onClick={closeMenu} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
            <FaUser /> Profile
          </Link>
          <Link to="/dashboard" onClick={closeMenu} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
            <FaHome /> Dashboard
          </Link>
          <Link to="/settings" onClick={closeMenu} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
            <FaUtensils /> Orders
          </Link>
          <Link to="/help" onClick={closeMenu} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
            <FaQuestionCircle /> Help Center
          </Link>
          <button
            onClick={() => {
              closeMenu();
              handleLogout();
            }}
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-gray-700 hover:text-primary"
          >
            <FaSignOutAlt />
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        </>
      ) : (
        <>
          <Link to="/auth/login" onClick={closeMenu} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
            <FaSignInAlt /> Login
          </Link>
          <Link to="/auth/register" onClick={closeMenu} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary">
            <FaUserPlus /> Register
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthMenu;
