import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
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
      <button onClick={toggleMenu} className="cursor-pointer hover:text-primary">
        <FiUser fontSize={20} />
      </button>

      {isMenuOpen && <AuthMenu closeMenu={closeMenu} />}
    </div>
  );
};

export default AuthButton;
