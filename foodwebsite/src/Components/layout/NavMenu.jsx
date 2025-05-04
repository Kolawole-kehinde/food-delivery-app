// src/components/NavActions.jsx
import React from 'react';
import { LuMessageSquareText } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NavMenu = ({ isMobile = false }) => {
  const wrapperClass = isMobile
    ? 'flex items-center space-x-2 cursor-pointer hover:text-primary'
    : 'flex items-center space-x-1 cursor-pointer hover:text-primary';

  return (
    <>
    <div className={wrapperClass}>
        <span>EN</span>
        <MdKeyboardArrowDown fontSize={20} className="bg-[#E6E8E6] rounded-md" />
      </div>
    
      <Link to="/messages" className={wrapperClass}>
      <LuMessageSquareText fontSize={20} />
        <span>My Messages</span>
      </Link>

      <div className={wrapperClass}>
        <HiOutlineShoppingBag fontSize={20} />
        <span>My Orders</span>
      </div>

      <Link to="/cart" className={wrapperClass}>
        <IoCartOutline fontSize={20} />
        <span>Cart</span>
      </Link>

      <div className={wrapperClass}>
        <IoIosNotificationsOutline fontSize={20} />
        {isMobile && <span>Notifications</span>}
      </div>
    </>
  );
};

export default NavMenu;
