import React from "react";

const CustomInput = ({
  label,
  type = "text",
  name,
  placeholder,
  register,
  error,
  options = [],  // ✅ Added options for select inputs
  className = "w-full p-2 mb-3 border rounded",
}) => {
  return (
    <div>
      {label && <label htmlFor={name} className="block mb-1">{label}</label>}
{/*       
      {type === "select" ? (
        <select id={name}
        {...register} 
        className={className}>
        <option value="">Select {label}</option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : ( */}
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register}
          className={className}
        />
      

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default CustomInput;
