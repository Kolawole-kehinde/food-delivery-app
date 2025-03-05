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
