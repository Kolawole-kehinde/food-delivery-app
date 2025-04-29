import React from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RegisterSchema } from "../../Shchema/Schema";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import useFormValidate from "../../hooks/useFormValidate";

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
    formState: { errors },
  } = useFormValidate(initialState, RegisterSchema);

  const onSubmit = async (data) => {
    console.log(data);
    toast.success("Registration successful! 🎉");
    reset();
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
              register={register}
              error={errors[name]}
              options={options}
            />
          ))}

          {/* Submit Button */}
          <CustomButton>Register</CustomButton>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
