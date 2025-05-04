import React from 'react';

const OrderSummary = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md w-full md:w-80">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal:</span><span>$9,785.60</span>
        </div>
        <div className="flex justify-between">
          <span>Discount:</span><span>$180.00</span>
        </div>
        <div className="flex justify-between">
          <span>Tax:</span><span>$0.00</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span><span>$9,785.56</span>
        </div>
      </div>
      <button className="w-full mt-4 bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Place Order Now →
      </button>
    </div>
  );
};

export default OrderSummary;
