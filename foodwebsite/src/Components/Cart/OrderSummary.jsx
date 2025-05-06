import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './SuccessModal';
import { supabase } from '../../libs/supabase';
import { useAuth } from '../../hooks/useAuth';
import { useCartContext } from '../../context/CartContext';

const discount = 0;
const tax = 0;

const formatCurrency = (value) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

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

const OrderSummary = ({
  subtotal = 0,
  showModal = false,
  buttonText = 'Proceed to Checkout',
  onProceed, 
}) => {
  const { cartItems, clearCart } = useCartContext(); 
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const total = subtotal - discount + tax;

  const placeOrder = async () => {
    setIsModalOpen(true);
    try {
    
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([
          {
            user_id: user?.id,
            total_price: subtotal,
            order_status: 'pending',
          },
        ])
        .select()
        .single();

      if (orderError) throw orderError;

     
      const orderItems = cartItems.map((item) => ({
        order_id: order.id,
        product_id: item.id,
        quantity: item.quantity,
        price: item.price,
      }));

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems);

      if (itemsError) throw itemsError;

      toast.success('Order placed successfully!');

   
      clearCart(); 

      
      navigate('/orders');
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
      console.error(error.message);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleClick = () => {
    if (onProceed) {
      onProceed();
    } else {
      placeOrder(); 
    }
  };

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
            onClick={handleClick}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-sm font-semibold"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {showModal && (
        <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default OrderSummary;
