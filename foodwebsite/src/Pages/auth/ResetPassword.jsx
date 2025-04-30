import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../libs/supabase";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePasswordReset = async () => {
    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    if (password.length < 5) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        throw error;
      }
      toast.success("Password updated successfully!");
      navigate("/auth/password-success");
    } catch (error) {
      toast.error(error.message || "Failed to update password");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-center">Reset Password</h2>

      <CustomInput
        type="password"
        placeholder="New Password"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <CustomInput
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 border rounded"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <CustomButton
        onClick={handlePasswordReset}
        disabled={loading}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        {loading ? "Loading..." : "Reset Password"}
      </CustomButton>
    </div>
  );
};

export default ResetPasswordPage;
