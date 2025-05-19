import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = ({toggleMenu}) => {
  return (
    <>
        <NavLink to="/" onClick={toggleMenu}>
      <div className="flex items-center space-x-2 text-2xl font-bold text-black">
        <h2 className="text-2xl font-bold mb-3">FD<span className="text-primary">A</span></h2>
        </div>
      </NavLink>
    </>
  )
}

export default Logo
