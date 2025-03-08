import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Define props interface for DepartmentMenu
interface DepartmentMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export default function DepartmentMenu({ isOpen, onLinkClick }: DepartmentMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        // Manually trigger the closing via onLinkClick
        onLinkClick();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onLinkClick(); // Close the menu
        buttonRef.current?.focus(); // Refocus button after closing
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onLinkClick]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Toggle Button */}
      <button
        ref={buttonRef}
        className="flex items-center space-x-2 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 focus:outline-none"
        onClick={() => {}}
        aria-expanded={isOpen}
        aria-controls="department-menu"
      >
        <span>Departments</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="department-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg border 
                       border-gray-200 dark:border-gray-700 z-10 max-h-80 overflow-y-auto"
            style={{
              maxHeight: '300px', // Limits height, enabling scrolling
            }}
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              {[
                { name: 'Engineering', href: '/departments/engineering' },
                { name: 'Technology', href: '/departments/technology' },
                { name: 'Communications', href: '/departments/communications' },
                { name: 'Community', href: '/departments/community' },
                { name: 'Creatives', href: '/departments/creatives' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
                  role="menuitem"
                  onClick={onLinkClick} // Close menu when clicked
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
