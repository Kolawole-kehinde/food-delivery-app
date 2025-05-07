import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = {
  General: [
    {
      question: 'Can I return damaged food items?',
      answer:
        'Yes, if you receive a damaged or incorrect item, please contact our support team within 24 hours of delivery. We will investigate and arrange for a replacement or refund as needed.',
    },
    {
      question: 'How do I return food items?',
      answer:
        'To return a food item, please take a photo of the item, keep the packaging intact, and contact our support team via live chat or email within 24 hours.',
    },
    {
      question: 'What is your pricing model?',
      answer:
        'Our pricing is based on menu items set by restaurants, along with applicable taxes and a delivery fee which varies depending on distance and time.',
    },
    {
      question: 'How do you ensure data confidentiality?',
      answer:
        'We use industry-standard encryption and security practices to protect your personal and payment data. Your privacy is our top priority.',
    },
    {
      question: 'How do you support your customers?',
      answer:
        'Our customer support is available 24/7 via live chat, email, or phone to assist with orders, complaints, or inquiries.',
    },
  ],
  Delivery: [
    {
      question: 'What do I need to get started with your food delivery service?',
      answer:
        'Just download our app or visit our website, create an account, and start browsing your favorite meals. Place your order and we’ll handle the rest!',
    },
    {
      question: 'How are delivery charges calculated?',
      answer:
        'Delivery charges are based on your distance from the restaurant and the delivery time. You will see the exact fee at checkout.',
    },
    {
      question: 'How do you ensure timely deliveries?',
      answer:
        'We work with local delivery partners and use real-time tracking to ensure your food is delivered hot and on time.',
    },
    {
      question: 'What if I miss my delivery?',
      answer:
        'If you miss your delivery, the rider will attempt to contact you. If unreachable, the order may be canceled and a partial refund processed depending on the case.',
    },
    {
      question: 'Do you offer contactless delivery?',
      answer:
        'Yes, you can opt for contactless delivery at checkout. Our riders will leave the food at your doorstep and notify you.',
    },
  ]
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState({ category: null, index: null });

  const toggle = (category, index) => {
    setOpenIndex(
      openIndex.category === category && openIndex.index === index
        ? { category: null, index: null }
        : { category, index }
    );
  };

  return (
    <div className="wrapper px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {Object.entries(faqs).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">{category}</h3>
          <div className="bg-white rounded-md shadow border">
            {items.map((faq, index) => (
              <div key={index} className="border-b px-4">
                <button
                  onClick={() => toggle(category, index)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-base font-medium text-gray-800">{faq.question}</span>
                  {openIndex.category === category && openIndex.index === index ? (
                    <FaMinus   />
                  ) : (
                    <FaPlus />
                  )}
                </button>
                {openIndex.category === category && openIndex.index === index && faq.answer && (
                  <div className="text-sm text-gray-600 pb-4">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center mt-10">
        <span className="text-sm text-gray-600">Need more help?</span>
        <button className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-orange-600">
          Start a live chat
        </button>
      </div>
    </div>
  );
};

export default FAQPage;
