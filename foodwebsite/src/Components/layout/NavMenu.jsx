import React, { useContext } from 'react';
import { LuMessageSquareText } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { TbHelpSquare } from "react-icons/tb";


const NavMenu = ({ isMobile = false }) => {
  const { cartItems } = useCartContext();  // Access cartItems from context

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);  // Calculate the cart total quantity

  const wrapperClass = isMobile
    ? 'flex items-center space-x-2 cursor-pointer hover:text-primary'
    : 'flex items-center space-x-1 cursor-pointer hover:text-primary';

  return (
    <>
      <div className={wrapperClass}>
        <span>EN</span>
        <MdKeyboardArrowDown fontSize={20} className="bg-[#E6E8E6] rounded-md" />
      </div>

      <Link to="/help" className={wrapperClass}>
      <TbHelpSquare fontSize={20}/>
        <span>Help</span>
      </Link>
      <Link to="/messages" className={wrapperClass}>
        <LuMessageSquareText fontSize={20} />
        <span>Messages</span>
      </Link>

      <div className={wrapperClass}>
        <HiOutlineShoppingBag fontSize={20} />
        <span>My Orders</span>
      </div>

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

      <div className={wrapperClass}>
        <IoIosNotificationsOutline fontSize={20} />
        {isMobile && <span>Notifications</span>}
      </div>
    </>
  );
};

export default NavMenu;
