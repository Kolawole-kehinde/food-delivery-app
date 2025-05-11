import React, { useContext, useEffect, useState } from "react";
import { supabase } from "../libs/supabase";
import CustomButton from "../Components/CustomButton";
import { toast } from "react-hot-toast";
import { editProfileInputs } from "../constant/editProfileInputs";
import CustomInput from "../Components/CustomInput";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/ContextApi";


const EditProfile = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);

  // Initialize formData from user context
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        bio: user.bio || "",
        location: user.location || "",
      });
    }
  }, [user]);

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
      const { error } = await supabase
        .from("users")
        .update(formData)
        .eq("user_id", user.user_id);

      if (error) {
        throw error;
      }

      // Update context
      setUser({ ...user, ...formData });

      toast.success("Profile updated successfully!");
      navigate("/profile");
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
          {editProfileInputs.map(
            ({ label, name, type, placeholder, disabled }) =>
              type === "textarea" ? (
                <div key={name}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                  </label>
                  <textarea
                    name={name}
                    value={formData[name] || ""}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={placeholder}
                  />
                </div>
              ) : (
                <CustomInput
                  key={name}
                  label={label}
                  name={name}
                  type={type}
                  value={formData[name] || ""}
                  onChange={handleChange}
                  placeholder={placeholder}
                  disabled={disabled}
                />
              )
          )}

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
