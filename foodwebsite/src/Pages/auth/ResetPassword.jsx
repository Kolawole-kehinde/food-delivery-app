import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "../../libs/supabase";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";

// 1. Define Zod schema
const schema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const ResetPasswordPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 2. Setup react-hook-form with zod
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // 3. Handle form submit
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: data.password,
      });
      if (error) throw error;
      toast.success("Password updated successfully!");
      navigate("/auth/password-success");
    } catch (error) {
      toast.error(error.message || "Failed to update password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-center">Reset Password</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CustomInput
          type="password"
          name="password"
          placeholder="New Password"
          register={register}
          error={errors.password}
        />

        <CustomInput
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          register={register}
          error={errors.confirmPassword}
        />

        <CustomButton
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          {loading ? "Loading..." : "Reset Password"}
        </CustomButton>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
