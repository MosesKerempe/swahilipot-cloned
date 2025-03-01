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
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400"
        onClick={toggleMenu}
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
        <div className="dropdown-menu">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link href="/departments/engineering" className="dropdown-item" role="menuitem">
              Engineering
            </Link>
            <Link href="/departments/technology" className="dropdown-item" role="menuitem">
              Technology
            </Link>
            <Link href="/departments/communications" className="dropdown-item" role="menuitem">
              Communications
            </Link>
            <Link href="/departments/community" className="dropdown-item" role="menuitem">
              Community
            </Link>
            <Link href="/departments/creatives" className="dropdown-item" role="menuitem">
              Creatives
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}