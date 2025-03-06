import React from "react";

const CustomButton = ({ children, type, ...rest }) => {
  return (
    <button
      type={type || "submit"}
      {...rest}
      className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600"
    >
      {children}
    </button>
  );
};

export default CustomButton;


// disabled={disabled}
// className={`w-full text-white py-2 px-4 mt-5 rounded-md 
//   ${disabled ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"} 
//   ${className}`} 
