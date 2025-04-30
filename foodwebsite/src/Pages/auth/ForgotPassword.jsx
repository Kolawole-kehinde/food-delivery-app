
import React from 'react'
import { z } from 'zod'

const ForgotPasswordShema = z.object({
    email: z.string().email({message: "Kindly enter a valid email"}).trim()
})
const ForgotPasswordPage = () => {
    const [loading, setLoading] = useState(false)

    const {
      register,
      handleSubmit,
      formState: {errors}
    } =useForm({
      resolver: zodResolver(ForgotPasswordShema)
    });

    const onSubmit = async ({ email }) => {
        console.log(error)
    }

      
  return (
    <form 
        onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-xl font-semibold">Forgot Password</h2>
      <p className="text-gray-600">Enter your registered email address</p>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        {...register('email')}
      />
      

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
        disabled={loading}
       
      >
        {loading ? 'Loading...' : 'Send Reset Link'}
       
      </button>
    </form>
  )
}

export default ForgotPasswordPage