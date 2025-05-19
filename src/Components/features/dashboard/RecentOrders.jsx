
import React from "react";

const RecentOrders = ({ orders }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Orders</h3>
    <ul className="divide-y">
      {orders.map(({ id, order_status, created_at }, i) => (
        <li key={i} className="py-3 flex justify-between items-center text-sm text-gray-700">
          <span>{id}</span>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${order_status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-100 text-green-700"}`}>
            {order_status}
          </span>
          <span className="text-gray-500">
            {new Date(created_at).toLocaleDateString() || 'Invalid Date'}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default RecentOrders;
