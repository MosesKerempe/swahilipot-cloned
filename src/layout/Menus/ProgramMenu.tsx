import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ProgramMenuProps {
  isOpen?: boolean;
  onLinkClick?: () => void;
  isMobile?: boolean;
}

export default function ProgramMenu({ isOpen, onLinkClick, isMobile }: ProgramMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const menuItems = [
    { title: "Swahili Tech Women", path: "/programs/swahili-tech-women", description: "Empowering women in technology" },
    { title: "Case Management", path: "/programs/case-management", description: "Project and case tracking system" },
    { title: "Events", path: "/programs/events", description: "Upcoming events and activities" },
    { title: "Campus Ambassador", path: "/programs/campus_ambassador", description: "University outreach program" },
    { title: "Tourism Innovation Lab", path: "/programs/mombasa-tourism-innovation-lab", description: "Innovation in tourism sector" }
  ];

  const menuState = isOpen ?? isMenuOpen;

  const toggleMenu = () => {
    if (typeof isOpen === 'undefined') {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const handleLinkClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        if (onLinkClick) onLinkClick();
      }
    };

    if (menuState) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuState, onLinkClick]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={() => isMobile && toggleMenu()}
        className="flex items-center gap-1 px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary rounded-md transition-colors"
        aria-expanded={menuState}
        aria-haspopup="true"
      >
        <span>Programs</span>
        <motion.div
          animate={{ rotate: menuState ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 mt-2 w-80 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${
              isMobile ? 'position-static w-full' : ''
            }`}
          >
            <div className="py-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="block font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </span>
                  <span className="block mt-1 text-sm text-gray-500 dark:text-gray-400">
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