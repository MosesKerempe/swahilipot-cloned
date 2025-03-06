import React from 'react';
import { FaUniversalAccess } from 'react-icons/fa';

interface AccessibilityButtonProps {
  onClick: () => void;
}

export default function AccessibilityButton({ onClick }: AccessibilityButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label="Open accessibility menu"
    >
      <FaUniversalAccess className="w-6 h-6" />
    </button>
  );
}