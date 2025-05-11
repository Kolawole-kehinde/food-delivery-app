import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import CustomInput from "../Components/CustomInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { changePasswordSchema } from "../Shchema/Schema";
import { changePasswordFields } from "../constant/auth";
import CustomButton from "../Components/CustomButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const ChangePassword = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
  });

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
    <main className="h-auto bg-gray-100 p-6 md:p-10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm font-medium md:ml-8 mb-4">
        <FaArrowAltCircleLeft fontSize={20} />Back
        </button>
      <section className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {changePasswordFields.map(({ type, name, label, placeholder }) => (
            <CustomInput
              key={name}
              type={type}
              name={name}
              label={label}
              placeholder={placeholder}
              register={register}
              error={errors[name]}
            />
          ))}

          <CustomButton
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-opacity-90 transition"
          >
            {loading ? "Updating..." : "Update Password"}
          </CustomButton>
        </form>
      </section>
    </main>
  );
};

export default ChangePassword;
