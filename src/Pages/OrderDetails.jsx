import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import { useOrders } from '../hooks/useOrders';
import ConfirmModal from '../Components/modal/OrderConfirmModal';


const OrderDetails = () => {
  const { user } = useAuth();
  const { orders, loading, error, cancelOrder } = useOrders(user?.id);
  const [showCancelled, setShowCancelled] = useState(false);
  const [cancelModal, setCancelModal] = useState({ visible: false, orderId: null });

  const handleCancel = async () => {
    const success = await cancelOrder(cancelModal.orderId);
    if (success) {
      setCancelModal({ visible: false, orderId: null });
    }
  };

  const filteredOrders = showCancelled
    ? orders
    : orders.filter((order) => order.order_status !== 'cancelled');

  if (loading) return <div className="text-center py-10">Loading your orders...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!orders.length) return <div className="text-center py-10">No orders yet.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <Toaster position="top-center" />
      <h1 className="text-3xl font-bold text-start mb-6">Your Orders</h1>

      <div className="text-right mb-6">
        <button
          onClick={() => setShowCancelled(!showCancelled)}
          className="text-sm text-primary"
        >
          {showCancelled ? 'Hide cancelled orders' : 'View cancelled orders'}
        </button>
      </div>

      <div className="space-y-8">
        {filteredOrders.map((order) => (
          <div key={order.id} className="bg-white shadow rounded-xl p-6 border">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  Order ID: <span className="text-gray-900">{order.id}</span>
                </h2>
                {['pending', 'processing'].includes(order.order_status) && (
                  <button
                    onClick={() => setCancelModal({ visible: true, orderId: order.id })}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500">Status: {order.order_status}</p>
              <p className="text-sm text-gray-500">
                Placed on: {new Date(order.created_at).toLocaleDateString()}
              </p>
            </div>

            <div className="">
              {order.order_items.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-t pt-4">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                  <div>
                    <h3 className="text-md font-medium text-gray-800">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.product.price.toFixed(2)}
                    </p>
                    <p className="text-sm font-semibold text-gray-700">
                      Total: ${(item.quantity * item.product.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ConfirmModal
        isOpen={cancelModal.visible}
        title="Cancel Order"
        message="Are you sure you want to cancel this order?"
        onConfirm={handleCancel}
        onCancel={() => setCancelModal({ visible: false, orderId: null })}
      />
    </div>
  );
};

export default OrderDetails;
