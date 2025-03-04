import React from 'react'

const NavBar = () => {
  return (
    <header>
    <nav className='container flex items-center justify-between'>
      <div>
      <img src="/images/logo2.png" alt="Logo"  className='w-[100px]'/>
      </div>

     <menu className='flex items-center justify-center gap-5 text-[#49557e] text-2xl font-Primary capitalize'>
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact Us</li>
     </menu>

     <div className='flex items-center gap-6'>
       <img src="/images/search_icon.png" alt="search_icon" />
       <img src="/images/basket_icon.png" alt="basket_icon" /> 
       <button className='bg-transparent text-xl text-[#49557e] border border-orange-500 py-1 px-4 rounded cursor-pointer'>
          Sign in
       </button>
     </div>
       
    </nav>
</header>
  )
}

export default NavBar
