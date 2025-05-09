import React from "react";
import { FaUserEdit, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "A passionate web developer who loves clean code, coffee, and solving real-world problems with design.",
    location: "Lagos, Nigeria",
    joined: "March 2023",
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-primary text-white">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm">{user.location}</p>
            <p className="text-sm">Joined {user.joined}</p>
          </div>
          <div className="ml-auto mt-4 md:mt-0">
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-primary border border-white rounded-md hover:bg-opacity-90 text-sm font-medium">
              <FaUserEdit /> Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* About */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 text-sm">{user.bio}</p>
          </section>

          {/* Contact Info */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-md border">
                <FaEnvelope className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-md border">
                <FaPhoneAlt className="text-primary" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <p className="text-sm text-gray-600">{user.phone}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
