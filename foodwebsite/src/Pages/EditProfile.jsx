import React, { useEffect, useState } from "react";
import { supabase } from "../libs/supabase";
import CustomButton from "../Components/CustomButton";
import { toast } from "react-hot-toast";
import { FaSave } from "react-icons/fa";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  // Fetch current user data
  useEffect(() => {
    const fetchData = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) return;

      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      if (error) {
        console.error("Error fetching user data:", error.message);
        return;
      }

      setFormData({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        bio: data.bio || "",
        location: data.location || "",
      });
    };
    fetchData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle updating the profile
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (!authUser) throw new Error("Authentication error");

      const { error } = await supabase
        .from("users")
        .update(formData)
        .eq("user_id", authUser.id);

      if (error) {
        throw error;
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
      toast.error("Update failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Username"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled
              className="w-full border rounded-md p-2 bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us something about you..."
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

     
          <CustomButton
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {loading ? "Saving..." : "Update Profile"}
          </CustomButton>
        </form>
      </div>
    </main>
  );
};

export default EditProfile;
