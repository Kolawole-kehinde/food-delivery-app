import React from "react";

const CustomInput = ({
  label,
  type = "text",
  name,
  placeholder,
  register,
  error,
  options = [],
  className = "w-full p-2 border rounded",
  ...props
}) => {
  return (
    <div className="space-y-3">
        
      {label && <label htmlFor={name}>{label}</label>}
      
<div className="space-y-2">
{type === "select" ? (
        <select id={name}
        {...register}
        className={className}>
          <option value=""> {placeholder || "Select"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register}
          {...props}
          className={className}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
</div>

      

      
    </div>
  );
};

export default CustomInput;
