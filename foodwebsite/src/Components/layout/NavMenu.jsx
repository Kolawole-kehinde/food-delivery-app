import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuMessageSquareText } from 'react-icons/lu';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TbHelpSquare } from 'react-icons/tb';
import { useCartContext } from '../../context/CartContext';

const NavMenu = () => {
  const { cartItems } = useCartContext();
  const { pathname } = useLocation();

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const baseClass = 'flex items-center space-x-1 px-2 py-1 cursor-pointer hover:text-primary';
  const activeClass = 'w-[150px] md:w-auto text-primary border-b-2 border-primary rounded-b-md bg-[#e6f0fa]';
  const getMenuClass = (path) =>
    `${baseClass} ${pathname === path ? activeClass : ''}`;

  const menuItems = [
    { to: '/language', label: 'EN', icon: <MdKeyboardArrowDown fontSize={20} /> },
    { to: '/help', label: 'Help', icon: <TbHelpSquare fontSize={20} /> },
    { to: '/messages', label: 'Messages', icon: <LuMessageSquareText fontSize={20} /> },
    { to: '/cart', label: 'Cart',icon: (
        <div className="relative">
          <IoCartOutline fontSize={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      ),
    },
    { to: '/order', label: 'Orders', icon: <HiOutlineShoppingBag fontSize={20} /> },
    { to: '/notification', label: 'Notification', icon: <IoIosNotificationsOutline fontSize={20} /> },
  ];

  return (
    <>
      {menuItems.map(({ to, label, icon }) => (
        <Link to={to} className={getMenuClass(to)} key={to}>
          {icon}
          <span>{label}</span>
        </Link>
      ))}
   
    
    </>
  );
};

export default NavMenu;
