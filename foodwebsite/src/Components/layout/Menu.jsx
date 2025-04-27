import { NavLink } from "react-router-dom";
import { NavRoutes } from "../../constant/NavRoutes";

const Menu = ({ menuStyle, toggleMenu }) => {
  const active = (isActive) => {
    return isActive ? "text-orange-500" : "text-[#49557e]";
  };

  return (
    <ul className={menuStyle}>
      {NavRoutes.map(({ id, name, path, icon }) => (
        <li key={id} className="cursor-pointer hover:text-primary transition">
          <NavLink
            to={path}
            className={({ isActive }) => `${active(isActive)} flex items-center gap-2`}
            onClick={toggleMenu}
          >
            {icon}
            {/* Hide text for Profile and Notifications on md screens */}
            <span className={
              name === "Profile" || name === "Notifications" 
                ? "md:hidden" 
                : ""
            }>
              {name}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;