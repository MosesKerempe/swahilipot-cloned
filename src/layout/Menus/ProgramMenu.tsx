import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ProgramMenu() {
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
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400 transition-all duration-300"
        onClick={toggleMenu}
        aria-expanded={isOpen ? 'true' : 'false'}
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

      {isOpen && (
        <div
          id="program-menu"
          className="absolute left-0 mt-2 w-64 bg-white dark:bg-dark-color shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-10 transition-all duration-300"
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              href="/programs/swahili-tech-women"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Swahili Tech Women
            </Link>
            <Link
              href="/programs/case-management"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Case Management
            </Link>
            <Link
              href="/programs/events"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Events
            </Link>
            <Link
              href="/programs/campus_ambassador"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Campus Ambassador
            </Link>
            <Link
              href="/programs/mombasa-tourism-innovation-lab"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Mombasa Tourism Innovation Lab
            </Link>
            <Link
              href="/programs/young-business-executive-fellowship"
              className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800 rounded transition-all duration-300"
              role="menuitem"
              onClick={() => setIsOpen(false)} // Close the menu on link click (mobile)
            >
              Young Business Executive Fellowship
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
