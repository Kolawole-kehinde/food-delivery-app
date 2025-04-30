
import React from 'react'


const ForgotPasswordPage = () => {
     
      
  return (
    <form 

      className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg space-y-4"
    >
      <h2 className="text-xl font-semibold">Forgot Password</h2>
      <p className="text-gray-600">Enter your registered email address</p>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
  
      />
      

      <button
        type="submit"
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
      
       
      >
     Send Reset Link
       
      </button>
    </form>
  )
}

export default ForgotPasswordPage