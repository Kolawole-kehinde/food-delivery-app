
import { NavRoutes } from '../constant/NavRoutes'
import { NavLink } from 'react-router-dom'

const Menu = ({menuStyle, toggleMenu}) => {
    const active = (isActive) => {
        return isActive ? "text-orange-500" : "text-[#49557e]";
      };
  return (
    <>
        <menu className={menuStyle}>
            {NavRoutes.map(({ id, name, path }) => (
              <li key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) => active(isActive)}
                  onClick={toggleMenu}
                >
                  {name}
                </NavLink>
                
              </li>
              
            ))}
          </menu>
    </>
  )
}

export default Menu
