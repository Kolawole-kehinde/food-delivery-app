import { useState } from 'react';

const ProductTabs = ({ description }) => {
  const tabs = ['Description', 'Delivery and Payment Terms', 'Packaging option'];
  const [activeTab, setActiveTab] = useState('Description');

  return (
    <div className="mt-10">
      {/* Tab headers */}
      <div className="flex border-b border-gray-300 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium transition-all duration-150 ${
              activeTab === tab
                ? 'border-b-2 border-[#FF3D00] text-[#FF3D00]'
                : 'text-gray-500 hover:text-[#FF3D00]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 text-sm text-gray-700 border border-t-0 rounded-b">
        {activeTab === 'Description' && (
          <p>{description}</p>
        )}
        {activeTab === 'Delivery and Payment Terms' && (
          <p>Items are delivered within 3-5 business days. Payment is made on delivery or via card transfer.</p>
        )}
        {activeTab === 'Packaging option' && (
          <p>Products are packaged in sealed, eco-friendly containers to preserve freshness.</p>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
