
import { Link } from 'react-router-dom';
import CustomInput from '../../CustomInput';
import { LoginLists } from '../../constant/auth';
import CustomButton from '../../CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';
import { LoginSchema } from '../../utils/Shchema/Schema';

const LoginPage = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, }, 
  // } = useForm({
  //   resolver: zodResolver(LoginSchema),
  //   mode: "onChange",
  // });

  // const onSubmit = (data) => {
  //   console.log(data);
  //   toast.success("Login successful! 🎉");
  //   reset();
  // };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-Primary px-4 lg:px-0">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 space-y-5">
        <h1 className="text-2xl font-semibold">Login Page</h1>


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {LoginLists.map(({ name, type, placeholder }) => (
            <div key={name} className='relative'>
              <CustomInput
                name={name}
                type={type}
                placeholder={placeholder}
                register={register(name)}
                error={errors[name]}
              />
              
            </div>
          ))}

          {/* Submit Button */}
          <CustomButton>
            Login
          </CustomButton>
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
