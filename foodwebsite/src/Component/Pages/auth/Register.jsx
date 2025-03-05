import React from "react";
import { Link } from "react-router-dom";
import { RegisterLists } from "../../constant/auth";
import CustomInput from "../../CustomInput";
import CustomButton from "../../CustomButton";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Primary px-4 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 space-y-5">
        <h1 className="text-2xl font-semibold">Registration Page</h1>
        <form>
            {
                RegisterLists.map(({type, name, placeholder, options}) => (
                <div key={name}>
                 <CustomInput
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    options={options}
                 />
            </div>
                
                ))}
         
          <CustomButton>
            Register
          </CustomButton>
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
