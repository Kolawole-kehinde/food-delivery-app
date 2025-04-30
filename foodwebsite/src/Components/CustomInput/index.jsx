import React, { forwardRef, useState } from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const CustomInput = forwardRef(
  ({ label, type = "text", name, placeholder, register, error, options = [], className = "w-full p-2 border rounded", ...props }, ref) => {
    const [openPassword, setOpenPassword] = useState(false);

    const togglePassword = () => {
      setOpenPassword((prevState) => !prevState);
    };

    return (
      <div className="space-y-3">
        {label && <label htmlFor={name}>{label}</label>}

        <div className="relative">
          {type === "select" ? (
            <select id={name} className={className} ref={ref} {...props} {...register(name)}>
              <option value="">{placeholder || "Select"}</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <div className="relative">
              <input
                type={openPassword && type === "password" ? "text" : type}
                id={name}
                placeholder={placeholder}
                className={`${className} pr-10`}
                ref={ref}
                {...props}
                {...register(name)}
              />
              {type === "password" && (
                <div
                  className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={togglePassword}
                >
                  {openPassword ? <FaRegEye /> : <FaEyeSlash />}
                </div>
              )}
            </div>
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error.message}</p>}
      </div>
    );
  }
);

export default CustomInput;
