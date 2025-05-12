
import React from 'react';

const FormInput = ({ label, placeholder, register, error, type = 'text' }) => (
  <div>
    {label && <label className="block font-medium mb-1">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className={`border p-3 rounded-lg w-full ${error ? 'border-red-500' : ''}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default FormInput;
