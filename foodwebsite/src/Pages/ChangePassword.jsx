import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import CustomInput from "../Components/CustomInput";
import { useForm } from "react-hook-form";

const ChangePassword = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false); 

 
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm();


  const onSubmit = async (data) => {
    const { currentPassword, newPassword, confirmPassword } = data;

    //Check if user is authenticated
    if (!user?.email) {
      toast.error("User not authenticated.");
      return;
    }

    // Ensure new password and confirmation match
    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      //  Re-authenticate user
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword,
      });

      if (signInError) {
        toast.error("Incorrect current password.");
        return;
      }

      // Update password
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

 
  return (
    <main className="min-h-screen bg-gray-100 p-6 md:p-10">
      <section className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <CustomInput
            label="Current Password"
            name="currentPassword"
            type="password"
            placeholder="Enter current password"
            register={register}
            error={errors.currentPassword}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <CustomInput
            label="New Password"
            name="newPassword"
            type="password"
            placeholder="Enter new password"
            register={register}
            error={errors.newPassword}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <CustomInput
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter new password"
            register={register}
            error={errors.confirmPassword}
            className="w-full p-2 border border-gray-300 rounded"
          />

          {/* Step 6.2: Submit Button */}
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
