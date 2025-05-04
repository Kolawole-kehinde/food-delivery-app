import React from 'react';

const CartItem = ({ image, name, seller, price, quantity, onRemove }) => {
  return (
    <div className="flex gap-4 p-4 border-b">
      <img src={image} alt={name} className="w-32 h-32 object-cover rounded" />

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Sold by <span className="text-green-600">{seller}</span></p>
        
        <div className="mt-2 flex flex-col md:flex-row gap-2">
          <select className="border p-1 rounded text-sm">
            <option>Payment Option</option>
          </select>
          <select className="border p-1 rounded text-sm">
            <option>Select Packaging</option>
          </select>
        </div>

        <div className="flex items-center mt-3 gap-2">
          <button onClick={onRemove} className="text-red-500 hover:underline">Remove</button>

          <div className="flex items-center border rounded px-2 py-1">
            <button className="px-2">-</button>
            <span className="mx-2">{quantity}</span>
            <button className="px-2">+</button>
          </div>
        </div>
      </div>

      <div className="text-right">
        <p className="text-xs text-blue-500 mb-1">- $60 discount</p>
        <p className="font-bold text-lg">${price}</p>
        <p className="text-xs text-gray-500">$23.40 × {quantity} items</p>
      </div>
    </div>
  );
};

export default CartItem;
