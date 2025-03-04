import React from 'react'

const NavRight = () => {
  return (
    <>
       <div className='hidden lg:flex items-center gap-6'>
       <img src="/images/search_icon.png" alt="search_icon" />
       <img src="/images/basket_icon.png" alt="basket_icon" /> 
       <button className='bg-transparent text-xl text-[#49557e] border border-orange-500 py-1 px-4 rounded cursor-pointer'>
          Sign in
       </button>
     </div>
    </>
  )
}

export default NavRight
