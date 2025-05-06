import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { useAuth } from '../../hooks/useAuth';
import SuccessModal from './SuccessModal';
import { usePlaceOrder } from '../../hooks/usePlaceOrder';


// Inline SummaryRow component
const SummaryRow = ({ label, value, isTotal = false }) => (
  <div
    className={`flex justify-between p-6 border-b-2 border-gray-200 ${
      isTotal ? 'font-semibold text-lg' : ''
    }`}
  >
    <span className="text-gray-600">{label}:</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

const OrderSummary = ({ subtotal, showModal = true, buttonText = 'Proceed to Checkout' }) => {
  const { cartItems, clearCart } = useCartContext();
  const { user } = useAuth();

  const { placeOrder, isLoading, isSuccess } = usePlaceOrder({
    user,
    subtotal,
    cartItems,
    clearCart,
  });

  const discount = 0;
  const tax = 0;
  const total = subtotal - discount + tax;

  const formatCurrency = (value) =>
    value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

  return (
    <>
      <div className="bg-white rounded-xl shadow-md w-full h-[500px] md:w-80 text-roboto">
        <h2 className="text-lg font-semibold p-6 mb-4 border-b-2 border-gray-200">Order Summary</h2>

        <div className="text-base font-medium">
          <SummaryRow label="Subtotal" value={formatCurrency(subtotal)} />
          <SummaryRow label="Discount" value={formatCurrency(discount)} />
          <SummaryRow label="Tax" value={formatCurrency(tax)} />
          <SummaryRow label="Total" value={formatCurrency(total)} isTotal />
        </div>

        <div className="p-6">
          <button
            onClick={placeOrder}
            disabled={isLoading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-semibold disabled:opacity-70"
          >
            {isLoading ? 'Placing Order...' : buttonText}
          </button>
        </div>
      </div>

      {showModal && isSuccess && <SuccessModal isOpen={true} onClose={() => {}} />}
    </>
  );
};

export default OrderSummary;
