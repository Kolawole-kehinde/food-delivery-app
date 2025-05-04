import React from 'react';

const CartItem = ({ image, name, seller, price, quantity, onRemove }) => {
  return (
    <section className="border-b">
    <div className="flex gap-4 py-4 px-6 border-b shadow-lg" >
      <img src={image} alt={name} className="w-40 h-48 object-cover rounded" />

      <div className="flex-1 shadow-md px-4 rounded-xl ">
        <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-5">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">Sold by <span className="text-orange-600">{seller}</span></p>
        </div>
        <div className="text-right">
        <p className="font-bold text-lg">${price}</p>
        <p className="text-xs text-gray-500">$23.40 × {quantity} items</p>
      </div>
        </div>
       
         <div className="flex justify-between items-center mt-4">
        <div className="mt-2 flex flex-col w-[200px] gap-2">
          <select className="border-2 p-2 rounded text-base font-medium">
            <option className="px-10">Payment Option</option>
          </select>
          <select className="border-2 p-2 rounded text-base font-medium">
            <option>Select Packaging</option>
          </select>
        </div>

        <div className="flex items-center mt-3 gap-2">
          <button onClick={onRemove} className="text-primary hover:underline">Remove</button>

          <div className="flex items-center rounded w-48 h-auto">
            <div className="border border-primary rounded px-4 py-2">
            <button className="px-">-</button>
            </div>
             <div className="border-b border-t py-2 flex-1">
             <span className="mx-2">{quantity}</span>
             </div>
            <div>
            <button className="border border-primary rounded px-4 py-2">+</button>
            </div>
          </div>
          </div> 
        </div>
      </div>

     
    </div>
    </section>
  );
};

export default CartItem;
