import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../libs/supabase';

const OrderDetails = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
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

        if (error) throw error;
        setOrders(data);
      } catch (err) {
        setError('Error fetching orders');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (loading) return <div className="text-center text-gray-500 py-10">Loading your orders...</div>;
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>;
  if (!orders || orders.length === 0) return <div className="text-center text-gray-600 py-10">You haven't placed any orders yet.</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Your Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order.id} className="bg-white shadow-md rounded-xl p-6 border border-gray-100">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Order ID: <span className="text-gray-900">{order.id}</span></h2>
              <p className="text-sm text-gray-500">Status: {order.order_status}</p>
              <p className="text-sm text-gray-500">Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
            </div>

            <div className="space-y-4">
              {order.order_items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-t pt-4">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
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
