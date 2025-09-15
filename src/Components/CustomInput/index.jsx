import { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const CustomInput = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      placeholder,
      register,
      error,
      options = [],
      className = "w-full p-2 border rounded",
      ...props
    },
    ref
  ) => {
    const [openPassword, setOpenPassword] = useState(false);

    const togglePassword = () => {
      setOpenPassword((prevState) => !prevState);
    };

    const registerProps =
      register && typeof register === "function" ? register(name) : {};

    return (
      <div className="space-y-3">
        {label && <label htmlFor={name}>{label}</label>}

        <div className="relative">
          {type === "select" ? (
            <select
              id={name}
              className={className}
              ref={ref}
              {...props}
              {...registerProps}
            >
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
                {...registerProps}
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

CustomInput.displayName = "CustomInput";

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.shape({
    message: PropTypes.string
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string
};

export default CustomInput;
