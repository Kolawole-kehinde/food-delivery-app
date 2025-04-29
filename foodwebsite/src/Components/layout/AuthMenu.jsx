import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom'; // Uncomment if using React Router

const ProfileDropdown = () => {
  const { user, handleLogout } = useAuth();

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
  
        <>
          <Link to="/auth/login" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</Link>
          <Link to="/auth/register" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Register</Link>

        </>
      
    </div>
  );
};

export default ProfileDropdown;
