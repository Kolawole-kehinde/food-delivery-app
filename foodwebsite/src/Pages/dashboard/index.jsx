import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import Sidebar from "../../Components/features/dashboard/SideBar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { label: "Total Orders", value: 120 },
    { label: "Pending", value: 5 },
    { label: "Delivered", value: 110 },
  ];

  const orders = [
    { id: "#1234", food: "Pepperoni Pizza", status: "Delivered", time: "10 mins ago" },
    { id: "#1235", food: "Spaghetti", status: "Pending", time: "5 mins ago" },
  ];

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  return (
    <div className="flex h-auto bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white shadow-sm p-4 flex flex-col lg:justify-between lg:flex-row items-center gap-4 px-4 lg:px-0">
          <h2 className="text-xl font-semibold text-gray-700">
            Welcome back, {user.name || user} 👋
          </h2>
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
            {stats?.map(({ label, value }, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-gray-500">{label}</h3>
                <p className="text-2xl font-bold text-primary">{value}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Recent Orders</h3>
            <ul className="divide-y">
              {orders?.map(({ id, food, status, time }, i) => (
                <li key={i} className="py-2 flex justify-between text-sm text-gray-600">
                  <span>{id} - {food}</span>
                  <span className={status === "Pending" ? "text-yellow-500" : "text-green-500"}>
                    {status}
                  </span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Favorites */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Your Favorites</h3>
            <div className="flex gap-4 overflow-x-auto">
              {favorites?.length > 0 ? (
                favorites?.map(({ id, name, image_url }, i) => (
                  <div
                    key={i}
                    onClick={() => navigate(`/product-details/${id}`)}
                    className="flex flex-col items-center text-sm text-gray-600 cursor-pointer hover:text-primary"
                  >
                    <img
                      src={image_url}
                      alt={name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <span>{name}</span>
                  </div>
                ))
              ) : (
                <p>No favorite items yet</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
