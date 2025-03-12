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
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
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
            <AboutMenu isMobile={false} />
            <DepartmentMenu isMobile={false} />
            <ProgramMenu isMobile={false} />
            
            <Link
              href="/adverts"
              className="nav-link hover:text-primary dark:hover:text-blue-400 transition-colors"
            >
              Adverts
            </Link>
            <Link
              href="/spfm"
              className="nav-link hover:text-primary dark:hover:text-blue-400 transition-colors"
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <AboutMenu isMobile={true} onLinkClick={handleLinkClick} />
              <DepartmentMenu isMobile={true} onLinkClick={handleLinkClick} />
              <ProgramMenu isMobile={true} onLinkClick={handleLinkClick} />
              
              <Link
                href="/adverts"
                className="px-3 py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
                onClick={handleLinkClick}
              >
                Adverts
              </Link>
              <Link
                href="/spfm"
                className="px-3 py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
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