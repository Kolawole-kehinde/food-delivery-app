import React from 'react';

const orderData = {
  orderId: '#0002345',
  orderDate: '05 April 2024',
  items: [
    {
      name: 'Malaninno Pepper',
      price: 89600.2,
      quantity: 500,
      paymentOption: 'COD',
      packaging: 'Cheap Pallet',
      date: '06 April 2024',
      image: 'https://via.placeholder.com/80', // Replace with actual image URL
    },
    {
      name: 'Apples Australian Fuji Size',
      price: 50600.4,
      quantity: 500,
      paymentOption: 'COP',
      packaging: 'Plain Pallet',
      date: '06 April 2024',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Apples Australian Fuji Size',
      price: 90890.6,
      quantity: 500,
      paymentOption: 'Account',
      packaging: 'Looseram Pallet',
      date: '06 April 2024',
      image: 'https://via.placeholder.com/80',
    },
  ],
  shipping: {
    name: 'Sam Victor',
    address: '150-2345 Tokyo-To, Shibuya-Ku, Hommachi 2 Choume, 4-7, Sunny Mansion 203.',
    phone: '09567728927655',
  },
  summary: {
    subtotal: 23.4,
    discount: 0,
    tax: 23,
    total: 46.4,
  },
};

const OrderDetails = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Order Details</h1>
          <p className="text-sm text-gray-500">
            {orderData.orderId} &middot; {orderData.orderDate} &middot; {orderData.items.length} items
          </p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Reorder All Items
        </button>
      </div>

      {/* Order Items */}
      <div className="space-y-4 mb-8">
        {orderData.items.map((item, index) => (
          <div key={index} className="flex border rounded-lg p-4 bg-white shadow-sm">
            <img src={item.image} alt={item.name} className="w-24 h-24 rounded object-cover mr-4" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium">{item.name}</h2>
                <p className="text-green-600 font-semibold">${item.price.toLocaleString()}</p>
              </div>
              <div className="text-sm text-gray-600 mt-2 space-x-2">
                <span>Quantity: {item.quantity}</span>
                <span>Payment Option: {item.paymentOption}</span>
                <span>Packaging: {item.packaging}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-sm text-green-600">Delivered • {item.date}</p>
                <button className="text-green-700 hover:underline text-sm">Reorder Item</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery & Summary */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Delivery Info */}
        <div className="border p-4 rounded-md bg-white">
          <h3 className="font-semibold text-gray-800 mb-2">Delivery Information</h3>
          <p className="text-sm text-gray-700">{orderData.shipping.name}</p>
          <p className="text-sm text-gray-700">{orderData.shipping.address}</p>
          <p className="text-sm text-gray-700">{orderData.shipping.phone}</p>
        </div>

        {/* Order Summary */}
        <div className="border p-4 rounded-md bg-white">
          <h3 className="font-semibold text-gray-800 mb-2">Order Summary</h3>
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span>Sub total</span>
            <span>${orderData.summary.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span>Discount</span>
            <span>${orderData.summary.discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700 mb-1">
            <span>Tax</span>
            <span>${orderData.summary.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-2">
            <span>Total</span>
            <span>${orderData.summary.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;