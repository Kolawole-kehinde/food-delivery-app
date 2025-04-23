import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-black text-white text-sm px-16 mt-10">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex items-start justify-between py-8 flex-col sm:flex-row gap-8">
        {/* Left Section */}
        <div className='w-full max-w-[507px]'>
          <h2 className="text-2xl font-bold mb-3">FD<span className="text-primary">A</span></h2>
          <p className="mb-4 text-lg leading-[30px] text-gray-300 font-normal font-poppins w-full max-w-[450px]"> 
            Food Delivery App (FDP) Online Ordering Platform is your premier destination for wholesale foods.
            We’re committed to your wholesale trading success and also giving you the best online shopping experience. Cheers!
          </p>
        </div>

        {/* Company */}
        <div className=''>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-6">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/partnership" className="hover:underline">Partnership</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-6">
            <li><Link to="/faqs" className="hover:underline">FAQs</Link></li>
            <li><Link to="/support" className="hover:underline">Talk to Support</Link></li>
            <li><Link to="/live-chat" className="hover:underline">Live Chat</Link></li>
            <li><Link to="/language" className="hover:underline">Language</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-4">Account</h3>
          <ul className="space-y-6">
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
            <li><Link to="/orders" className="hover:underline">Orders</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
            <li><Link to="/logout" className="hover:underline">LogOut</Link></li>
          </ul>
        </div>
      </div>

      {/* Suggestion Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Social Links */}
          
          <div className="flex flex-col items-start gap-3 w-full lg:w-auto">
  <h2 className="font-semibold">Follow us on social media</h2>
  <div className="flex items-center gap-4">
    <Link to="#" className="flex items-center gap-2 hover:text-blue-400">
      <FaFacebookSquare /> Facebook
    </Link>
    <Link to="#" className="flex items-center gap-2 hover:text-pink-400">
      <FaInstagram /> Instagram
    </Link>
    <Link to="#" className="flex items-center gap-2 hover:text-blue-300">
      <FaLinkedin /> LinkedIn
    </Link>
  </div>
</div>


          {/* Suggestion Input */}
          <div className="flex flex-col items-start  gap-3 w-full lg:w-auto">
            <p className="font-semibold">What feature would you love to have?</p>
            <div className="flex w-full sm:w-auto">
              <input
                type="text"
                placeholder="Kindly drop your suggestions"
                className="px-4 py-2 rounded-l-full w-full sm:w-96 text-black"
              />
              <button className="bg-primary text-white px-4 rounded-r-full hover:bg-green-600 flex items-center justify-center">
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 border-t border-white/10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
          <p className="text-gray-400 text-center sm:text-left">
            © 2024 Fresh Market Exchange (FMX) Inc. Copyright and rights reserved
          </p>
          <div className="flex justify-center gap-4 text-gray-400">
            <Link to="/terms" className="hover:underline">Terms and Conditions</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
