import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import AuthMenu from './AuthMenu'; // Import the AuthMenu
import { useAuth } from '../../hooks/useAuth';

const AuthButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth(); 

 
  useEffect(() => {
    if (user) {
      setIsMenuOpen(false);  // Close the menu if the user logs in
    } else {
      setIsMenuOpen(false);  // Also ensure it's closed if logged out
    }
  }, [user]); // This will trigger every time the user changes (log in or out)

  // Toggle menu visibility when the button is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* User Icon */}
      <button onClick={toggleMenu} className="cursor-pointer">
        <FiUser fontSize={20} />
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && <AuthMenu  />}
    </div>
  );
};

export default AuthButton;
