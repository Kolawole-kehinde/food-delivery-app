import React from "react";

const AccountSettings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-10">
        <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>

        {/* SECTION 1: Security */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Security</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">Change Password</p>
                <p className="text-sm text-gray-500">Update your login password</p>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 text-sm">
                Change
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">Two-Factor Authentication</p>
                <p className="text-sm text-gray-500">Add extra security to your account</p>
              </div>
              <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 text-sm">
                Enable
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 2: Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Notifications</h3>
          <div className="space-y-4">
            {[
              { label: "Order Updates", type: "email" },
              { label: "Promotional Offers", type: "sms" },
              { label: "Monthly Newsletter", type: "email" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-gray-700">{item.label} ({item.type.toUpperCase()})</span>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary"
                  defaultChecked={item.label !== "Monthly Newsletter"}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 3: Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Dark Mode</span>
              <button className="bg-gray-200 px-4 py-1 rounded-full text-sm">Coming Soon</button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700">Language</span>
              <select className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 4: Danger Zone */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-sm text-gray-700 mb-2">
              Deleting your account is permanent and cannot be undone. All your data will be lost.
            </p>
            <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-opacity-90 text-sm">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
