import React from 'react';

const ProfileDropdown = () => {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50">
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account Settings</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help Center</a>
      <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
    </div>
  );
};

export default ProfileDropdown;
