import React from 'react';

const foodItems = [
  { id: 1, name: 'Burger', description: 'Juicy grilled beef patty', price: 8.99 },
  { id: 2, name: 'Pizza', description: 'Delicious cheese and pepperoni', price: 12.99 },
  { id: 3, name: 'Sushi', description: 'Fresh tuna rolls', price: 14.99 },
];

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#FF3D00] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Order Your Food</h1>
          <div>
            <button className="bg-white text-[#FF3D00] px-4 py-2 rounded-md">Cart (0)</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={`https://via.placeholder.com/300x200?text=${item.name}`} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-lg font-bold text-[#FF3D00] mt-2">${item.price}</p>
                <button className="mt-4 w-full bg-[#FF3D00] text-white py-2 rounded-md">Add to Cart</button>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <div className="mt-4">
            <div className="flex justify-between">
              <span className="text-lg">Subtotal</span>
              <span className="text-lg font-semibold text-[#FF3D00]">$36.97</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg">Shipping</span>
              <span className="text-lg font-semibold text-[#FF3D00]">$5.00</span>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-lg">Total</span>
              <span className="text-xl font-semibold text-[#FF3D00]">$41.97</span>
            </div>
          </div>
          <button className="w-full bg-[#FF3D00] text-white py-3 mt-6 rounded-md">Proceed to Checkout</button>
        </section>
      </main>
    </div>
  );
};

export default OrderPage;
