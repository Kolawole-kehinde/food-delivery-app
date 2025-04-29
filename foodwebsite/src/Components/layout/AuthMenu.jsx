import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Uncomment if using React Router

const ProfileDropdown = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
      {user ? (
        <>
          {/* Replace href with Link to actual routes if needed */}
          <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
          <a href="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account Settings</a>
          <a href="/help" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help Center</a>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
        </>
      ) : (
        <>
          <a href="/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a>
          <a href="/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</a>
        </>
      )}
    </div>
  );
};

export default ProfileDropdown;
