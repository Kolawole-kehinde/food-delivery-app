import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavRoutes } from "../constant/NavRoutes";
import NavRight from "./NavRight";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
 
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
      return setOpenMenu((prev) => !prev);
    };

  
  return (
    <header>
      <nav className="container flex items-center justify-between">
        {/* lOGO */}
        <Logo />
        <button onClick={toggleMenu}>
          <IoMenu fontSize={35} />
        </button>

        <Menu menuStyle="hidden lg:flex items-center justify-center gap-5 text-[#49557e] text-2xl font-Primary capitalize"/>

        {/* NavRight Side */}
        <NavRight />

        {/* Mobile responsive */}
      </nav>

      {openMenu && (
        <nav className="fixed inset-0 z-40 bg-orange-500 w-full h-[300px] text-white rounded-b-2xl">
          <div className="flex justify-between items-center">
            <Logo/>
            <button onClick={toggleMenu}>
              <IoClose fontSize={35} />
            </button>
          </div>

         <Menu menuStyle="flex flex-col gap-4 text-2xl font-Primary capitalize px-6"/>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
