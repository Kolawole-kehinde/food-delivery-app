import React, { useContext } from 'react';
import { LuMessageSquareText } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/ContextApi';


const NavMenu = ({ isMobile = false }) => {
  const { cartItems } = useContext(AppContext);

  // Calculate total quantity in cart
  const cartCount = Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  const wrapperClass = isMobile
    ? 'flex items-center space-x-2 cursor-pointer hover:text-primary'
    : 'flex items-center space-x-1 cursor-pointer hover:text-primary';

  return (
    <>
      {/* Language selector */}
      <div className={wrapperClass}>
        <span>EN</span>
        <MdKeyboardArrowDown fontSize={20} className="bg-[#E6E8E6] rounded-md" />
      </div>

      {/* Messages */}
      <Link to="/messages" className={wrapperClass}>
        <LuMessageSquareText fontSize={20} />
        <span>My Messages</span>
      </Link>

      {/* Orders (static) */}
      <div className={wrapperClass}>
        <HiOutlineShoppingBag fontSize={20} />
        <span>My Orders</span>
      </div>

      {/* Cart with badge */}
      <Link to="/cart" className={wrapperClass}>
        <div className="relative">
          <IoCartOutline fontSize={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
        <span>Cart</span>
      </Link>

      {/* Notifications */}
      <div className={wrapperClass}>
        <IoIosNotificationsOutline fontSize={20} />
        {isMobile && <span>Notifications</span>}
      </div>
    </>
  );
};

export default NavMenu;