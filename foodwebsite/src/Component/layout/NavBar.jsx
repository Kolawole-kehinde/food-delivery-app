import React, { useState } from "react";
import NavRight from "./NavRight";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "./Logo";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
 
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      return setOpenMenu((prev) => !prev);
    };

  
  return (
    <header className="font-Primary">
      <nav className="container flex items-center justify-between">
        {/* lOGO */}
        <Logo />
        <button onClick={toggleMenu} className="flex lg:hidden">
          <IoMenu fontSize={35} />
        </button>

        <Menu menuStyle="hidden lg:flex items-center justify-center gap-5 text-[#49557e] text-2xl font-Primary capitalize"/>

        {/* NavRight Side */}
        <NavRight />

        {/* Mobile responsive */}
      </nav>

      {openMenu && (
        <nav className="fixed inset-0 z-40 bg-white w-full h-[350px] text-black rounded-b-2xl">
          <div className="flex justify-between items-center">
            <Logo toggleMenu={toggleMenu}/>
            <button onClick={toggleMenu}>
              <IoClose fontSize={35} />
            </button>
          </div>

         <Menu menuStyle="flex flex-col gap-4 text-2xl font-Primary capitalize px-6" toggleMenu={toggleMenu}
         
         />
         <div className="px-6 pt-4">
        <Link to="register" onClick={toggleMenu}>
        <button className='w-full text-xl  text-white bg-orange-500 border border-[#49557e] py-1 px-4 rounded cursor-pointer'>
          Sign in
       </button> 
        </Link>
         </div>
          
        </nav>
      )}
    </header>
  );
};

export default NavBar;
