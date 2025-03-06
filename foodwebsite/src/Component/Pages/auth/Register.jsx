import React from "react";
import { Link } from "react-router-dom";
import { RegisterLists } from "../../constant/auth";
import CustomInput from "../../CustomInput";
import CustomButton from "../../CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { RegisterSchema } from "../../utils/Shchema/Schema";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Registration successful! 🎉");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Primary px-4 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 space-y-5">
        <h1 className="text-2xl font-semibold">Registration Page</h1>
        
      
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {RegisterLists.map(({ type, name, placeholder, options }) => (
            
            
              <CustomInput
              key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                register={register(name)}
                error={errors[name]}
                options={ type === "select" && options}
              />
              
            
            
          ))}

          <CustomButton>Register</CustomButton>
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
