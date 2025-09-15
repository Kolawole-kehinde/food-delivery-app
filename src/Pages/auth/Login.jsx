import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Shchema/Schema";
import useFormValidate from "../../hooks/useFormValidate";
import toast from "react-hot-toast";
import { LoginLists } from "../../constant/auth";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { signInApi } from "../../services/auth";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth(); 
 const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormValidate(initialState, LoginSchema);

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const res = await signInApi(data);
      console.log("User logged in:", res);

      toast.success("User logged in successfully!");
      setUser(res);
      reset(); 

      navigate("/dashboard"); 
    } catch (error) {
      console.error("Login error:", error.message);
      toast.error(error?.message || "Login failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-auto mb-10 bg-white font-Primary px-4 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-[500px] space-y-5">
        <h1 className="text-2xl font-semibold">Login Page</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {LoginLists.map(({ name, type, placeholder }) => (
            <div key={name} className="relative">
              <CustomInput
                name={name}
                type={type}
                placeholder={placeholder}
                register={register}
                error={errors[name]}
              />
            </div>
          ))}
             <p className="text-sm  text-right">
        <Link to="/auth/forget-password" className="text-primary text-base hover:underline">
          Forgot Password?
        </Link>
      </p>

          {/* Submit Button */}
          <CustomButton disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </CustomButton>
        </form>

        <p className="text-center mt-4 text-sm">
          Don&#39;t have an account?{" "}
          <Link to="/auth/register" className="text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
