import React from "react";
import { Link } from "react-router-dom";
import { RegisterLists } from "../../constant/auth";
import CustomInput from "../../CustomInput";
import CustomButton from "../../CustomButton";
import toast, { Toaster } from "react-hot-toast";
import useFormValidate from "../../../hooks/useFormValidate";
import { RegisterSchema } from "../../utils/Shchema/Schema";

// Initial state moved outside the component to optimize performance
const initialState = {
  username: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useFormValidate(initialState, RegisterSchema);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      toast.success("Registration successful! 🎉");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Primary px-4 lg:px-0">
      <div className="bg-white py-6 px-8 rounded-lg shadow-md w-96 space-y-5">
        <h1 className="text-2xl font-semibold text-center">Create an Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {RegisterLists.map(({ type, name, placeholder, options }) => (
            <CustomInput
              key={name}
              name={name}
              type={type}
              placeholder={placeholder}
              register={register(name)}
              error={errors[name]}
              options={options}
            />
          ))}

          {/* Submit Button */}
          <CustomButton disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </CustomButton>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
