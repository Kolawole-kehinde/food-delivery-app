import React from 'react'
import { Link } from 'react-router-dom'

const NavRight = () => {
  return (
    <>
       <div className='hidden lg:flex items-center gap-6'>
       <img src="/images/search_icon.png" alt="search_icon" />
       <img src="/images/basket_icon.png" alt="basket_icon" /> 
       <Link to="register">
       <button className='flex bg-transparent text-xl text-[#49557e] border border-orange-500 py-1 px-4 rounded cursor-pointer'>
          Sign in
       </button>
       </Link>
       
     </div>
    </>
  )
}

export default NavRight
