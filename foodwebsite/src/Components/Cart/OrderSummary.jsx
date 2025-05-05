import React from 'react';
import { Link } from 'react-router-dom';

const OrderSummary = ({ subtotal }) => {
  const discount = 0;
  const tax = 0;
  const total = subtotal - discount + tax;

  const formatCurrency = (value) =>
    value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

  return (
    <div className="bg-white rounded-xl shadow-md w-full h-[500px] md:w-80 text-roboto">
      <h2 className="text-lg font-semibold p-6 mb-4 border-b-2 border-gray-200">Order Summary</h2>

      <div className="text-base font-medium">
        <div className="flex justify-between p-6 border-b-2 border-gray-200">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-gray-800">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between p-6 border-b-2 border-gray-200">
          <span className="text-gray-600">Discount:</span>
          <span className="text-gray-800">{formatCurrency(discount)}</span>
        </div>
        <div className="flex justify-between p-6 border-b-2 border-gray-200">
          <span className="text-gray-600">Tax:</span>
          <span className="text-gray-800">{formatCurrency(tax)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg p-6 border-b-2 border-gray-200">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>
      </div>

      <div className="p-6">
        <Link to="/order">
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-semibold">
          Place Order Now →
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;