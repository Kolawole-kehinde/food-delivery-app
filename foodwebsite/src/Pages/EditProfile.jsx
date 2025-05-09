import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const EditProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Prefill with user data
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    bio: "A passionate web developer...",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make Supabase update call here

      toast.success("Profile updated successfully!");
      navigate("/profile");
    } catch (error) {
      toast.error("Update failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-medium md:ml-8 mb-4"
      >
        <FaArrowAltCircleLeft fontSize={20} />
        Back
      </button>
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
          <input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            disabled
          />
          <input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Bio
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us something about you..."
            />
          </div>
          <CustomButton
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {loading ? "Saving..." : "Save Changes"}
          </CustomButton>
        </form>
      </div>
    </main>
  );
};

export default EditProfile;
