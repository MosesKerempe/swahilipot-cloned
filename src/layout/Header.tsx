import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from './Menus/Logo';
import AboutMenu from './Menus/AboutMenu';
import DepartmentMenu from './Menus/DepartmentMenu';
import ProgramMenu from './Menus/ProgramMenu';
import BlogLink from './Menus/BlogLink';
import DonateBtn from './Menus/DonateBtn';
import YouthDatabase from './Menus/YouthDatabase';
import MenuCTA from './Menus/MenuCTA';
import ThemeToggle from '@/components/shared/ThemeToggle';

interface MenuProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false); // To detect mobile
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile detection
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    checkScreenSize(); // Check initial screen size

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);  // Close the mobile menu
    setActiveDropdown(null); // Reset active dropdown when a link is clicked
  };

  const handleMouseEnter = (menu: string) => {
    if (!isMobile) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-orange-100 dark:bg-gray-900 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container-custom mx-auto">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* About Dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <AboutMenu
                isOpen={activeDropdown === 'about'}
                onLinkClick={handleLinkClick}
              />
            </div>

            {/* Department Dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter('department')}
              onMouseLeave={handleMouseLeave}
            >
              <DepartmentMenu
                isOpen={activeDropdown === 'department'}
                onLinkClick={handleLinkClick}
              />
            </div>

            {/* Program Dropdown */}
            <div
              onMouseEnter={() => handleMouseEnter('program')}
              onMouseLeave={handleMouseLeave}
            >
              <ProgramMenu
                isOpen={activeDropdown === 'program'}
                onLinkClick={handleLinkClick}
              />
            </div>

            {/* Other Links */}
            <Link
              href="/adverts"
              className="nav-link hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              Adverts
            </Link>
            <Link
              href="/spfm"
              className="nav-link hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              SwahiliPotFM
            </Link>
            <BlogLink onLinkClick={handleLinkClick} />
            <YouthDatabase onLinkClick={handleLinkClick} />
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <DonateBtn onLinkClick={handleLinkClick} />
              <MenuCTA onLinkClick={handleLinkClick} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <nav className="flex flex-col space-y-4">
              <div onClick={handleLinkClick}>
                <AboutMenu isOpen={true} onLinkClick={handleLinkClick} />
              </div>
              <div onClick={handleLinkClick}>
                <DepartmentMenu isOpen={true} onLinkClick={handleLinkClick} />
              </div>
              <div onClick={handleLinkClick}>
                <ProgramMenu isOpen={true} onLinkClick={handleLinkClick} />
              </div>
              <Link
                href="/adverts"
                className="nav-link hover:text-primary dark:hover:text-blue-400 transition-colors"
                onClick={handleLinkClick}
              >
                Adverts
              </Link>
              <Link
                href="/spfm"
                className="nav-link hover:text-primary dark:hover:text-blue-400 transition-colors"
                onClick={handleLinkClick}
              >
                SwahiliPotFM
              </Link>
              <BlogLink onLinkClick={handleLinkClick} />
              <YouthDatabase onLinkClick={handleLinkClick} />
              <DonateBtn onLinkClick={handleLinkClick} />
              <MenuCTA onLinkClick={handleLinkClick} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
