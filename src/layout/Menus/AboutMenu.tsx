import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Define props interface for the AboutMenu component.
interface AboutMenuProps {
  // Optional controlled state to indicate if the menu is open.
  isOpen?: boolean;
  // Optional callback to notify parent when a link is clicked (or menu should close).
  onLinkClick?: () => void;
}

export default function AboutMenu({ isOpen, onLinkClick }: AboutMenuProps) {
  // Determine if the component is controlled externally.
  const isControlled = typeof isOpen !== 'undefined';

  // If not controlled, manage the open state internally.
  const [internalOpen, setInternalOpen] = useState(false);

  // Use the controlled prop if available; otherwise, use the internal state.
  const open = isControlled ? isOpen : internalOpen;

  // Refs for the menu container, toggle button, and first menu item for accessibility.
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  // Define the menu items for the dropdown.
  const menuItems = [
    { title: "About Us", path: "/about", description: "Learn about our mission, vision, and impact" },
    { title: "Our Origin", path: "/about/origin", description: "Discover how SwahiliPot Hub began" },
    { title: "Board Members", path: "/about/board-members", description: "Meet our board of directors" },
    { title: "Management Team", path: "/about/management-team", description: "Our leadership team" },
    { title: "Media", path: "/about/media", description: "Press releases and media resources" },
    { title: "Sponsors", path: "/about/sponsors", description: "Our partners and supporters" },
    { title: "Work With Us", path: "/about/work-with-us", description: "Career opportunities and collaboration" }
  ];

  // Helper function to close the menu.
  const closeMenu = () => {
    if (!isControlled) {
      setInternalOpen(false);
    } else if (onLinkClick) {
      // For a controlled component, call the parent's onLinkClick callback.
      onLinkClick();
    }
  };

  // Toggle function for the menu. It only updates internal state if not controlled.
  const toggleMenu = () => {
    if (!isControlled) {
      setInternalOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    // Handler to close the menu when clicking outside.
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    // Handler to close the menu when pressing the Escape key.
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        buttonRef.current?.focus(); // Return focus to the toggle button.
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      // After opening the menu, focus the first item for accessibility.
      setTimeout(() => firstItemRef.current?.focus(), 50);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listeners when the component unmounts or when 'open' changes.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      {/* Button to toggle the About dropdown */}
      <button
        ref={buttonRef}
        className="flex items-center space-x-1 hover:text-primary dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        onClick={toggleMenu}
        aria-expanded={open}
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
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      {/* AnimatePresence handles the smooth mounting and unmounting animations */}
      <AnimatePresence>
        {open && (
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
                  // Set the first menu item reference for initial focus.
                  ref={index === 0 ? firstItemRef : null}
                  // On link click, close the menu.
                  onClick={closeMenu}
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
