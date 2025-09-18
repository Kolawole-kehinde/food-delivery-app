import { useAuth } from "../hooks/useAuth";
import { useOrders } from "../hooks/useOrders";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const { user } = useAuth();
  const { orders, loading, error } = useOrders(user?.id);

  if (loading) return <p>Loading your orders...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!orders.length) return <p>No orders yet.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order.id} className="bg-white shadow rounded-xl p-4 border">
            <div className="flex justify-between items-center">
              <span>Order ID: {order.id}</span>
              <Link
                to={`/order/${order.id}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            </div>
            <p>Status: {order.order_status}</p>
            <p>Placed on: {new Date(order.created_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
