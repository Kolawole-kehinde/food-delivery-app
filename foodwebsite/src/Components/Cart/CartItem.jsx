import React from 'react';

const CartItem = ({ id, name, seller, price, quantity, image_url, onRemove }) => {
  return (
    <section className="border-b">
      <div className="flex gap-4 py-4 px-6 border-b shadow-lg">
        {/* Use the image_url directly */}
        <img src={image_url} alt={name} className="w-40 h-48 object-cover rounded" />

        <div className="flex-1 shadow-md px-4 rounded-xl ">
          <div className="flex justify-between items-center ">
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">Sold by <span className="text-orange-600">{seller}</span></p>
            </div>
            <div className="text-right">
              <p className="font-bold text-lg">${price}</p>
              <p className="text-xs text-gray-500">${price} × {quantity} items</p>
            </div>
          </div>
           
         

          {/* Payment and Packaging Options */}

          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="mt-4 w-[200px]">
            <div className="">
              <label htmlFor={`payment-${id}`} className="block text-sm font-semibold text-gray-700"></label>
              <select id={`payment-${id}`} className="w-full border-2 p-2 rounded mt-2 text-base font-medium">
                <option value="Payment-Option">Payment Option</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor={`packaging-${id}`} className="block text-sm font-semibold text-gray-700"></label>
              <select id={`packaging-${id}`} className="w-full border-2 p-2 rounded mt-2 text-base font-medium">
                <option value="Packaging Option">Packaging Option</option>
                <option value="standard">Standard Packaging</option>
                <option value="gift">Gift Packaging</option>
                <option value="eco">Eco-friendly Packaging</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button onClick={onRemove} className="text-primary hover:underline">Remove</button>
            <div className="flex items-center rounded w-48 h-auto">
              <button className="border border-primary rounded px-4 py-2">-</button>
              <div className="border-b border-t py-2 flex-1">
                <span className="mx-2">{quantity}</span>
              </div>
              <button className="border border-primary rounded px-4 py-2">+</button>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default CartItem;
