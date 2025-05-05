import React from "react";
import { FaHome, FaUtensils, FaHeart, FaCog, FaSignOutAlt, FaBell } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import Sidebar from "../../Components/features/dashboard/SideBar";

const Dashboard = () => {
  // Dashboard data
  const {user} = useAuth();
  const stats = [
    { label: "Total Orders", value: 120 },
    { label: "Pending", value: 5 },
    { label: "Delivered", value: 110 },
  ];

  const orders = [
    { id: "#1234", food: "Pepperoni Pizza", status: "Delivered", time: "10 mins ago" },
    { id: "#1235", food: "Spaghetti", status: "Pending", time: "5 mins ago" },
  ];

  const favorites = [
    { name: "Burger", img: "https://source.unsplash.com/80x80/?burger" },
    { name: "Sushi", img: "https://source.unsplash.com/80x80/?sushi" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-sm p-4 flex flex-col lg:justify-between lg:flex-row items-center gap-4 px-4 lg:px-0">
          <h2 className="text-xl font-semibold text-gray-700">Welcome back, {user.name || user} 👋</h2>
          <div className="flex items-center mt-4 gap-4">
            <input
              type="text"
              placeholder="Search meals..."
              className="px-4 py-1 rounded-md border border-gray-300 focus:outline-primary"
            />
            <FaBell className="text-xl text-gray-600 hover:text-primary cursor-pointer" />
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Dashboard Cards */}
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-gray-500">{stat.label}</h3>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Orders</h3>
            <ul className="divide-y">
              {orders.map((order, i) => (
                <li key={i} className="py-2 flex justify-between text-sm text-gray-600">
                  <span>{order.id} - {order.food}</span>
                  <span className={order.status === "Pending" ? "text-yellow-500" : "text-green-500"}>
                    {order.status}
                  </span>
                  <span>{order.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Favorites */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Favorites</h3>
            <div className="flex gap-4">
              {favorites.map((item, i) => (
                <div key={i} className="flex flex-col items-center text-sm text-gray-600">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
