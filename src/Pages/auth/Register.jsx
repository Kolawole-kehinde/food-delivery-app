import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterSchema } from "../../Shchema/Schema";
import useFormValidate from "../../hooks/useFormValidate";
import { signUp } from "../../services/auth";
import toast from "react-hot-toast";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { RegisterLists } from "../../constant/auth";
import { useAuth } from "../../hooks/useAuth";

const initialState = {
  username: "",
  email: "",
  gender: "",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const {setUser} = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormValidate(initialState, RegisterSchema);

  const onSubmit = async (data) => {
    const payload = {
      name: data.username,
      email: data.email,
      gender: data.gender,
      password: data.password,
    };
    setLoading(true);
    try {
      const res = await signUp(payload);
      toast.success("User registered successfully!");
      setUser(res);
      reset();
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-auto mb-10 bg-white font-Primary px-4 lg:px-0">
      <div className=" py-6 px-8 rounded-lg shadow-md w-[500px] space-y-5">
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
          <CustomButton>
            {loading ? "Loading..." : "Register"}
          </CustomButton>
        </form>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-orange-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
