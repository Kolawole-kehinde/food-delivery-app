import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ category, index, faq, openIndex, toggle }) => {
  const isOpen = openIndex.category === category && openIndex.index === index;

  return (
    <div className="border-b px-4">
      <button
        onClick={() => toggle(category, index)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-base font-medium text-gray-800">{faq.question}</span>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </button>
      {isOpen && faq.answer && (
        <div className="text-sm text-gray-600 pb-4">{faq.answer}</div>
      )}
    </div>
  );
};

export default FAQItem;
