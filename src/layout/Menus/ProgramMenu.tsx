import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function ProgramMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    /**
     * Handle click outside of menu.
     *
     * @param {MouseEvent} event The mouse event.
     */
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
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400"
        onClick={toggleMenu}
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
        <div className="dropdown-menu w-64">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              href="/programs/swahili-tech-women"
              className="dropdown-item hover:text-primary dark:hover:text-blue-400"
              role="menuitem"
            >
              Swahili Tech Women
            </Link>
            <Link
              href="/programs/case-management"
              className="dropdown-item hover:text-primary dark:hover:text-blue-400"
              role="menuitem"
            >
              Case Management
            </Link>
            <Link
              href="/programs/events"
              className="dropdown-item hover:text-primary dark:hover:text-blue-400"
              role="menuitem"
            >
              Events
            </Link>
            <Link
              href="/programs/campus_ambassador"
              className="dropdown-item hover:text-primary dark:hover:text-blue-400"
              role="menuitem"
            >
              Campus Ambassador
            </Link>
            <Link
              href="/programs/mombasa-tourism-innovation-lab"
              className="dropdown-item hover:text-primary dark:hover:text-blue-400"
              role="menuitem"
            >
              Mombasa Tourism Innovation Lab
            </Link>
            <Link
              href="/programs/young-business-executive-fellowship"
              className="dropdown-item hover:text-primary dark:hover:text-blue-400"
              role="menuitem"
            >
              Young Business Executive Fellowship
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
