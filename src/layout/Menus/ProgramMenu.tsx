import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Define the props type
interface ProgramMenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const ProgramMenu: React.FC<ProgramMenuProps> = ({ isOpen, onLinkClick }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onLinkClick(); // Close the menu if clicked outside
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onLinkClick(); // Close the menu when 'Escape' key is pressed
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
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls="program-menu"
      >
        <span>Programs</span>
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
            id="program-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10"
            role="menu"
            aria-orientation="vertical"
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          >
            <div className="py-1">
              {[
                { href: '/programs/swahili-tech-women', label: 'Swahili Tech Women' },
                { href: '/programs/case-management', label: 'Case Management' },
                { href: '/programs/events', label: 'Events' },
                { href: '/programs/campus_ambassador', label: 'Campus Ambassador' },
                { href: '/programs/mombasa-tourism-innovation-lab', label: 'Mombasa Tourism Innovation Lab' },
                { href: '/programs/young-business-executive-fellowship', label: 'Young Business Executive Fellowship' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 
                             rounded transition-all duration-300"
                  role="menuitem"
                  onClick={(e) => e.stopPropagation()} // Prevent close on clicking the menu item
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProgramMenu;
