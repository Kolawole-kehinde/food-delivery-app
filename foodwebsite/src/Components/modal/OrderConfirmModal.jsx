import React from 'react';

const ConfirmModal = ({
  isOpen,
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
  confirmText = 'Yes',
  cancelText = 'Cancel',
  onClose,
  onConfirm,
  icon,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 text-red-600 p-3 rounded-full">
            {icon || (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="text-sm font-medium border border-gray-300 rounded px-4 py-2 hover:bg-gray-100"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="text-sm font-medium bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
