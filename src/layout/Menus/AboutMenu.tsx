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
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400"
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
        <div className="dropdown-menu">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link href="/about" className="dropdown-item" role="menuitem">
              About Us
            </Link>
            <Link href="/about/origin" className="dropdown-item" role="menuitem">
              Our Origin
            </Link>
            <Link href="/about/board-members" className="dropdown-item" role="menuitem">
              Board Members
            </Link>
            <Link href="/about/management-team" className="dropdown-item" role="menuitem">
              Management Team
            </Link>
            <Link href="/about/media" className="dropdown-item" role="menuitem">
              Media
            </Link>
            <Link href="/about/sponsors" className="dropdown-item" role="menuitem">
              Sponsors
            </Link>
            <Link href="/about/work-with-us" className="dropdown-item" role="menuitem">
              Work With Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}