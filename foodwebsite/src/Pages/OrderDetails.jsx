import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../libs/supabase';

const OrderDetails = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancelingOrderId, setCancelingOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('orders')
        .select(`
          id,
          created_at,
          order_status,
          order_items (
            id,
            quantity,
            product_id,
            product:fk_order_items_product (
              name,
              price,
              image_url
            )
          )
        `)
        .eq('user_id', user.id);

      if (error) setError('Error fetching orders');
      else setOrders(data);

      setLoading(false);
    };

    if (user) fetchOrders();
  }, [user]);

  const handleCancelOrder = async (orderId) => {
    setCancelingOrderId(orderId);
    const { error } = await supabase
      .from('orders')
      .update({ order_status: 'cancelled' })
      .eq('id', orderId);

    if (error) {
      alert('Failed to cancel order');
      console.error(error);
    } else {
      setOrders((prev) =>
        prev.map((order) =>
          order.id === orderId ? { ...order, order_status: 'cancelled' } : order
        )
      );
    }
    setCancelingOrderId(null);
  };

  if (loading) return <div className="text-center py-10">Loading your orders...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!orders.length) return <div className="text-center py-10">No orders yet.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Your Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow rounded-xl p-6 border">
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  Order ID: <span className="text-gray-900">{order.id}</span>
                </h2>
                {['pending', 'processing'].includes(order.order_status) && (
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    disabled={cancelingOrderId === order.id}
                    className="text-sm bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition"
                  >
                    {cancelingOrderId === order.id ? 'Cancelling...' : 'Cancel Order'}
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500">Status: {order.order_status}</p>
              <p className="text-sm text-gray-500">Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
            </div>

            <div className="space-y-4">
              {order.order_items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-t pt-4">
                  <img src={item.product.image_url} alt={item.product.name} className="w-20 h-20 object-cover rounded-md border" />
                  <div>
                    <h3 className="text-md font-medium text-gray-800">{item.product.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Price: ${item.product.price.toFixed(2)}</p>
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
    </div>
  );
};

export default OrderDetails;
