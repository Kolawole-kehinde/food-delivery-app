import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { LoginSchema } from "../../utils/Shchema/Schema";
import CustomInput from "../../Components/CustomInput";
import useFormValidate from "../../hooks/useFormValidate";

const initialState = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormValidate(initialState, LoginSchema);

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Login successful! 🎉");
    reset();
  };
  console.log(errors)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Primary px-4 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 space-y-5">
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

          {/* Submit Button */}
          <CustomButton>Login</CustomButton>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
