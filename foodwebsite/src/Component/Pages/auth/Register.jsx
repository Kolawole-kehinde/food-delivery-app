import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Primary px-4 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 space-y-5">
        <h1 className="text-2xl font-semibold">Registration Page</h1>
        <form>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded"
          />
          <select name="gender" className="w-full p-2 mb-3 border rounded">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-2 mb-3 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
