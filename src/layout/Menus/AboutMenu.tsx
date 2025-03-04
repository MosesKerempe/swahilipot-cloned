import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function AboutMenu() {
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
        className="flex items-center space-x-1 text-gray-800 hover:text-primary dark:text-white dark:hover:text-blue-400"
        onClick={toggleMenu}
      >
        <span>About</span>
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
        <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-dark-color shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10">
          <div className="py-2" role="menu" aria-orientation="vertical">
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              About Us
            </Link>
            <Link
              href="/about/origin"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Our Origin
            </Link>
            <Link
              href="/about/board-members"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Board Members
            </Link>
            <Link
              href="/about/management-team"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Management Team
            </Link>
            <Link
              href="/about/media"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Media
            </Link>
            <Link
              href="/about/sponsors"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Sponsors
            </Link>
            <Link
              href="/about/work-with-us"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Work With Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
