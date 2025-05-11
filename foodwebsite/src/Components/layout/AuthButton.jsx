import React, { useState, useEffect } from 'react';
import { FiUser, FiChevronDown } from 'react-icons/fi';
import AuthMenu from './AuthMenu';
import { useAuth } from '../../hooks/useAuth';

const AuthButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="flex items-center  cursor-pointer hover:text-primary">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border border-gray-300"
          />
        ) : (
          <FiUser fontSize={20} />
        )}
        <FiChevronDown fontSize={20} />
      </button>

      {isMenuOpen && <AuthMenu closeMenu={closeMenu} />}
    </div>
  );
};

export default AuthButton;
