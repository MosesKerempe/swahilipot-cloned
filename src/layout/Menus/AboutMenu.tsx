import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  const menuItems = [
    { title: "About Us", path: "/about", description: "Learn about our mission, vision, and impact" },
    { title: "Our Origin", path: "/about/origin", description: "Discover how SwahiliPot Hub began" },
    { title: "Board Members", path: "/about/board-members", description: "Meet our board of directors" },
    { title: "Management Team", path: "/about/management-team", description: "Our leadership team" },
    { title: "Media", path: "/about/media", description: "Press releases and media resources" },
    { title: "Sponsors", path: "/about/sponsors", description: "Our partners and supporters" },
    { title: "Work With Us", path: "/about/work-with-us", description: "Career opportunities and collaboration" }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus(); // Return focus to button when closed
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      setTimeout(() => firstItemRef.current?.focus(), 50); // Focus first item when opening
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={buttonRef}
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="About menu"
      >
        <span>About</span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-80 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
            role="menu"
            aria-labelledby="about-menu"
          >
            <div className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="group flex flex-col px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
                  role="menuitem"
                  ref={index === 0 ? firstItemRef : null} // Focus first item on open
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
