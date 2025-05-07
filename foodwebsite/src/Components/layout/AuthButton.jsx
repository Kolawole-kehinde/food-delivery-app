import React, { useState, useEffect } from 'react';
import { FiUser } from 'react-icons/fi';
import AuthMenu from './AuthMenu'; 
import { useAuth } from '../../hooks/useAuth';

const AuthButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth(); 

 
  useEffect(() => {
    if (user) {
      setIsMenuOpen(false); 
    } else {
      setIsMenuOpen(false); 
    }
  }, [user]); 

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
 
      <button onClick={toggleMenu} className="cursor-pointer">
        <FiUser fontSize={20} />
      </button>

    
      {isMenuOpen && <AuthMenu  />}
    </div>
  );
};

export default AuthButton;
