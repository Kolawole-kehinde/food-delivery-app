import React from "react";

const ResetPasswordPage = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-center">Reset Password</h2>

      <input
        type="password"
        placeholder="New Password"
        className="w-full p-2 border rounded"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
      ></button>
    </div>
  );
};

export default ResetPasswordPage;
