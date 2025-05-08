import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";


const ChangePassword = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); 
  

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const { currentPassword, newPassword, confirmPassword } = form;

    if (!user?.email) {
      toast.error("User not authenticated.");
      return;
    }


    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    setLoading(true); 

    try {

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword,
      });

      if (signInError) {
        toast.error("Incorrect current password.");
        return;
      }


      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        toast.error("Failed to update password.");
        return;
      }

 
      toast.success("Password updated successfully.");
      navigate("/settings");
    } catch (error) {
 
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false); 
    }
  };


  const renderInput = (label, name, value) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="password"
        required
        className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <section className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>

        <form onSubmit={handleChangePassword} className="space-y-4">
       
          {renderInput("Current Password", "currentPassword", form.currentPassword)}
          {renderInput("New Password", "newPassword", form.newPassword)}
          {renderInput("Confirm New Password", "confirmPassword", form.confirmPassword)}

   
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ChangePassword;
