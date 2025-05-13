import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { useAuth } from '../../hooks/useAuth';
import SuccessModal from './SuccessModal';
import { usePlaceOrder } from '../../hooks/usePlaceOrder';

// Summary row component
const SummaryRow = ({ label, value, isTotal = false }) => (
  <div
    className={`flex justify-between p-6 border-b-2 border-gray-200 ${isTotal ? 'font-semibold text-lg' : ''}`}
  >
    <span className="text-gray-600">{label}:</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

// Format value as currency
const formatCurrency = (value) => {
  try {
    return (value ?? 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  } catch {
    return '$0.00';
  }
};

const OrderSummary = ({
  showModal = true,
  buttonText = 'Proceed to Checkout',
  onProceed,
}) => {
  const { pathname } = useLocation();
  const isCheckoutPage = pathname.includes('/checkout');

  const { cartItems, clearCart } = useCartContext();
  const { user } = useAuth();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const discount = 0;
  const total = subtotal - discount;

  const { placeOrder, isLoading, isSuccess, orderId } = usePlaceOrder({
    user,
    subtotal,
    cartItems,
    clearCart,
  });

  const handleClick = () => {
    if (onProceed) {
      onProceed();
    } else {
      placeOrder();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md w-full  md:w-80 text-roboto">
        <h2 className="text-lg font-semibold p-6 mb-4 border-b-2 border-gray-200">Order Summary</h2>

        <div className="text-base font-medium">
          <SummaryRow label="Quantity" value={totalQuantity} />
          <SummaryRow label="Subtotal" value={formatCurrency(subtotal)} />
          <SummaryRow label="Discount" value={formatCurrency(discount)} />
          <SummaryRow label="Total" value={formatCurrency(total)} isTotal />
        </div>

        {!isCheckoutPage && (
          <div className="p-6">
            <button
              onClick={handleClick}
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-semibold disabled:opacity-70"
            >
              {isLoading ? 'Placing Order...' : buttonText}
            </button>
          </div>
        )}
      </div>

      {showModal && isSuccess && (
        <SuccessModal isOpen={true} onClose={() => {}} orderId={orderId} />
      )}
    </>
  );
};

export default OrderSummary;
