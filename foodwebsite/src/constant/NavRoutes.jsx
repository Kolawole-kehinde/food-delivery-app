import { HiOutlineShoppingBag } from 'react-icons/hi';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';
import { LuMessageSquareText } from 'react-icons/lu';

export const NavRoutes = [
  {
    id: 1,
    name: "My Messages",
    path: "/messages",
    icon: <LuMessageSquareText fontSize={20} />
  },
  {
    id: 2,
    name: "My Orders",
    path: "/orders",
    icon: <HiOutlineShoppingBag fontSize={20} />,
  },
  {
    id: 3,
    name: "Cart",
    path: "/cart",
    icon: <IoCartOutline fontSize={20} />,
  },
  {
    id: 4,
    name: "Notifications",
    path: "/notifications",
    icon: <IoIosNotificationsOutline fontSize={20} />,
    hideNameOnMd: true 
  },
  {
    id: 5,
    name: "Profile",
    path: "/profile",
    icon: <FiUser fontSize={20} />,
    hideNameOnMd: true 
  },
];