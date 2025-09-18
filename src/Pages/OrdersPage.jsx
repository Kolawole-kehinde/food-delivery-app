import { useAuth } from "../hooks/useAuth";
import { useOrders } from "../hooks/useOrders";
import { Link } from "react-router-dom";
import { useState } from "react";

const OrdersPage = () => {
  const { user } = useAuth();
  const { orders, loading, error } = useOrders(user?.id);
  const [activeTab, setActiveTab] = useState("pending");

  if (loading) return <p>Loading your orders...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!orders.length) return <p>No orders yet.</p>;

  // Status colors with Tailwind
  const statusColors = {
    pending: "bg-yellow-500 text-white",
    processing: "bg-blue-500 text-white",
    delivered: "bg-green-500 text-white",
    cancelled: "bg-red-500 text-white",
  };

  // Group orders
  const groupedOrders = {
    pending: orders.filter((o) => o.order_status === "pending"),
    processing: orders.filter((o) => o.order_status === "processing"),
    delivered: orders.filter((o) => o.order_status === "delivered"),
    cancelled: orders.filter((o) => o.order_status === "cancelled"),
  };

  // Render table
  const renderTable = (list) =>
    list.length ? (
      <div className="overflow-x-auto rounded-md border mt-4">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">Order ID</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Placed On</th>
              <th className="px-4 py-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {list.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 font-medium">{order.id}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${statusColors[order.order_status] || "bg-gray-500 text-white"}`}
                  >
                    {order.order_status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {new Date(order.created_at).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-right">
                  <Link
                    to={`/order/${order.id}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded text-sm transition"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="text-gray-500 mt-4">No orders in this category.</p>
    );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        {Object.keys(groupedOrders).map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              activeTab === status
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)} (
            {groupedOrders[status].length})
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {renderTable(groupedOrders[activeTab])}
    </div>
  );
};

export default OrdersPage;
