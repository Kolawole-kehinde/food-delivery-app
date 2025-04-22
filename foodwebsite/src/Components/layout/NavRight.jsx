import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch} from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


const NavRight = () => {
  return (
    <>
       <div className='hidden lg:flex items-center gap-6'>
       <CiSearch fontSize={30} />
       <IoCartOutline fontSize={30} />
       <Link to="login">
       <button className='flex bg-transparent text-xl text-[#49557e] border-2 border-orange-500 py-1 px-4 rounded cursor-pointer'>
          Sign in
       </button>
       </Link>
       
     </div>
    </>
  )
}

export default NavRight
