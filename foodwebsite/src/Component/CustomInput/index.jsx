import React from 'react'

const CustomInput = ({
    label,
    type,
    name,
    placeholder,
    className="w-full p-2 mb-3 border rounded"}) => {
  return (
    <div>
          {
            label && <label htmlFor={name}></label>
          }
            <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={className}
        />
    </div>
    </div>

  
  )
}

export default CustomInput
