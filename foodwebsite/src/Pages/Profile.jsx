import React, { useEffect, useState } from "react";
import { FaUserEdit, FaEnvelope, FaPhoneAlt, FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);

      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !authUser) {
        console.error("Auth error:", authError);
        setLoading(false);
        return;
      }

      console.log("Authenticated user:", authUser); 

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id) 
        .single();

      if (error) {
        console.error("Error fetching user profile:", error.message);
      } else {
        setUser(data);
      }

      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!user) {
    return <div className="p-10 text-center text-red-500">User not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-medium md:ml-8 mb-4"
      >
        <FaArrowAltCircleLeft fontSize={20} />
        Back
      </button>
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 bg-primary text-white">
          <img
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}`}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm">{user.location || "No location added"}</p>
            <p className="text-sm">
  Joined {user.created_at ? new Date(user.created_at).toLocaleDateString() : "Date unavailable"}
</p>


          </div>
          <div className="md:ml-auto mt-2 md:mt-0">
            <button
              onClick={() => navigate("/edit-profile")}
              className="flex items-center gap-2 px-4 py-2 bg-white text-primary border border-white rounded-md hover:bg-opacity-90 text-sm font-medium"
            >
              <FaUserEdit /> Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8 space-y-8">
          {/* About */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600 text-sm">{user.bio || "No bio yet."}</p>
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
                  <p className="text-sm text-gray-600">{user.phone || "Not provided"}</p>
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
