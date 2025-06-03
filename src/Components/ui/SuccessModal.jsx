import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose, orderId }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const handleCheckOrder = () => {
    navigate(`/order/${orderId}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 text-green-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Order Successfully Placed</h2>
        <p className="text-gray-600 mb-6">Thank you for choosing FDA</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="text-primary text-sm font-medium"
          >
            Continue shopping
          </button>
          <button
            onClick={handleCheckOrder}
            className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm hover:bg-orange-600"
          >
            Check Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
