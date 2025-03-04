import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function DepartmentMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex items-center space-x-2 hover:text-primary dark:hover:text-blue-400 transition-all duration-300"
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
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

      {isOpen && (
        <div
          id="department-menu"
          className="absolute left-0 mt-2 w-48 bg-white dark:bg-dark-color shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 transition-all duration-300"
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              href="/departments/engineering"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
            >
              Engineering
            </Link>
            <Link
              href="/departments/technology"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
            >
              Technology
            </Link>
            <Link
              href="/departments/communications"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
            >
              Communications
            </Link>
            <Link
              href="/departments/community"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
            >
              Community
            </Link>
            <Link
              href="/departments/creatives"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
            >
              Creatives
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
