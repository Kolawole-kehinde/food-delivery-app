import React from 'react'
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <>
        <NavLink to="/" >
      <img src="/images/logo2.png" alt="Logo"  className='w-[75px] lg:w-[100px]'/>
      </NavLink>
    </>
  )
}

export default Logo
